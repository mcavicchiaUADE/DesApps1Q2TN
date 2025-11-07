
import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import { Screen } from '../types';
import { XIcon } from '../components/Icons';

const BarcodeScannerScreen: React.FC = () => {
  const context = useContext(AppContext);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<number | null>(null);

  const [detectedData, setDetectedData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const startScan = useCallback(async () => {
    cleanup();
    setDetectedData(null);
    setError(null);
    setIsInitializing(true);

    // @ts-ignore
    if (!('BarcodeDetector' in window) || typeof window.BarcodeDetector.getSupportedFormats !== 'function') {
      setError('El lector de código de barras no es compatible con este navegador.');
      setIsInitializing(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setIsInitializing(false);
        };
      }
    } catch (err) {
      console.error(err);
      setError('No se pudo acceder a la cámara. Por favor, revisa los permisos.');
      setIsInitializing(false);
      return;
    }
    
    // @ts-ignore
    const barcodeDetector = new window.BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'qr_code'] });
    
    intervalRef.current = window.setInterval(async () => {
      if (videoRef.current && videoRef.current.readyState >= 2) { // HAVE_CURRENT_DATA
        try {
          const barcodes = await barcodeDetector.detect(videoRef.current);
          if (barcodes.length > 0 && intervalRef.current) {
            setDetectedData(barcodes[0].rawValue);
            cleanup();
          }
        } catch (e) {
          console.error('Error detecting barcode:', e);
        }
      }
    }, 500);

  }, [cleanup]);

  useEffect(() => {
    startScan();
    return cleanup;
  }, [startScan, cleanup]);
  
  const handleClose = () => {
    context?.navigate(Screen.Home);
  };

  const isScanning = !detectedData && !error;

  return (
    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center relative">
      <button onClick={handleClose} className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full" aria-label="Cerrar escaner">
        <XIcon className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full">
        <video ref={videoRef} playsInline muted className={`w-full h-full object-cover transition-opacity duration-300 ${isInitializing ? 'opacity-0' : 'opacity-100'}`} />
        
        {isScanning && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3/4 max-w-sm h-1/3 border-4 border-dashed border-white/50 rounded-lg" />
          </div>
        )}

        {isInitializing && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
            <p>Iniciando cámara...</p>
          </div>
        )}
      </div>

      {(!isScanning || error) && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 rounded-t-2xl text-center backdrop-blur-sm">
          {error && (
            <>
              <h2 className="text-xl font-bold text-red-400 mb-2">Error</h2>
              <p className="mb-4">{error}</p>
              <button onClick={handleClose} className="bg-violet-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-violet-800 transition-colors">
                  Volver
              </button>
            </>
          )}
          {detectedData && (
            <>
              <h2 className="text-xl font-bold text-violet-400 mb-2">Código de Barras Detectado</h2>
              <p className="font-mono text-lg bg-gray-800 p-3 rounded-md mb-4 break-all">{detectedData}</p>
              <div className="flex justify-center space-x-4">
                <button onClick={startScan} className="bg-violet-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-violet-800 transition-colors">
                  Escanear de nuevo
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BarcodeScannerScreen;
