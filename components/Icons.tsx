
import React from 'react';

export const MainLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99 43.3013C99 40.6491 96.9479 38.597 94.2957 38.597L91.4142 38.597C90.359 34.0206 88.2435 29.7499 85.2753 26.0827L83.2127 23.7042C81.253 21.4646 78.0772 20.9333 75.8375 22.893L73.459 24.9556C69.7918 21.9874 65.5211 19.8719 60.9446 18.8167L60.9446 15.9352C60.9446 13.283 58.8925 11.2308 56.2403 11.2308V8.34932C56.2403 4.88019 53.3599 2 49.8907 2C46.4216 2 43.5412 4.88019 43.5412 8.34932V11.2308C40.889 11.2308 38.8369 13.283 38.8369 15.9352L38.8369 18.8167C34.2604 19.8719 30.0082 21.9874 26.3225 24.9556L23.944 22.893C21.7043 20.9333 18.5285 21.4646 16.5688 23.7042L14.5062 26.0827C11.538 29.7499 9.42253 34.0206 8.36729 38.597L5.48581 38.597C2.83362 38.597 0.781494 40.6491 0.781494 43.3013V46.1828C0.781494 47.238 1.16851 48.2562 1.86729 49.0436C2.01423 49.2275 2.17043 49.3929 2.33589 49.5491C2.43589 49.6318 2.52662 49.7225 2.62662 49.8133C6.20984 53.0094 8.92215 57.077 10.3546 61.6905L10.3546 64.572C10.3546 67.2242 12.4068 69.2763 15.0589 69.2763H17.9404C18.9956 73.8528 21.1111 78.1235 24.0793 81.7907L26.1419 84.1692C28.1016 86.4088 31.2774 86.9401 33.517 84.9804L35.8955 82.9178C39.5627 85.886 43.8334 87.983 48.41 89.0566L48.41 91.9381C48.41 94.5903 50.4621 96.6424 53.1143 96.6424V99.5239C53.1143 103.012 55.9947 105.873 59.4638 105.873C62.933 105.873 65.8134 103.012 65.8134 99.5239V96.6424C68.4656 96.6424 70.5177 94.5903 70.5177 91.9381L70.5177 89.0566C75.0942 87.983 79.3464 85.886 83.0321 82.9178L85.4106 84.9804C87.6503 86.9401 90.8261 86.4088 92.7858 84.1692L94.8484 81.7907C97.8166 78.1235 99.932 73.8528 100.987 69.2763H103.869C106.521 69.2763 108.573 67.2242 108.573 64.572L108.573 61.6905C109.987 57.077 112.718 53.0094 116.283 49.8133C116.383 49.7225 116.473 49.6318 116.573 49.5491C116.739 49.3929 116.895 49.2275 117.042 49.0436C117.741 48.2562 118.128 47.238 118.128 46.1828V43.3013C108.961 43.3013 103.869 40.6491 99 43.3013Z" transform="scale(0.85) translate(0, -4)" stroke="white" strokeWidth="4" />
        <circle cx="35" cy="40" r="7" fill="white" />
        <circle cx="65" cy="60" r="7" fill="white" />
        <path d="M72 32 L28 68" stroke="white" strokeWidth="8" strokeLinecap="round" />
    </svg>
);

export const NotificationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const FlyersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

export const SmileyLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99 43.3013C99 40.6491 96.9479 38.597 94.2957 38.597L91.4142 38.597C90.359 34.0206 88.2435 29.7499 85.2753 26.0827L83.2127 23.7042C81.253 21.4646 78.0772 20.9333 75.8375 22.893L73.459 24.9556C69.7918 21.9874 65.5211 19.8719 60.9446 18.8167L60.9446 15.9352C60.9446 13.283 58.8925 11.2308 56.2403 11.2308V8.34932C56.2403 4.88019 53.3599 2 49.8907 2C46.4216 2 43.5412 4.88019 43.5412 8.34932V11.2308C40.889 11.2308 38.8369 13.283 38.8369 15.9352L38.8369 18.8167C34.2604 19.8719 30.0082 21.9874 26.3225 24.9556L23.944 22.893C21.7043 20.9333 18.5285 21.4646 16.5688 23.7042L14.5062 26.0827C11.538 29.7499 9.42253 34.0206 8.36729 38.597L5.48581 38.597C2.83362 38.597 0.781494 40.6491 0.781494 43.3013V46.1828C0.781494 47.238 1.16851 48.2562 1.86729 49.0436C2.01423 49.2275 2.17043 49.3929 2.33589 49.5491C2.43589 49.6318 2.52662 49.7225 2.62662 49.8133C6.20984 53.0094 8.92215 57.077 10.3546 61.6905L10.3546 64.572C10.3546 67.2242 12.4068 69.2763 15.0589 69.2763H17.9404C18.9956 73.8528 21.1111 78.1235 24.0793 81.7907L26.1419 84.1692C28.1016 86.4088 31.2774 86.9401 33.517 84.9804L35.8955 82.9178C39.5627 85.886 43.8334 87.983 48.41 89.0566L48.41 91.9381C48.41 94.5903 50.4621 96.6424 53.1143 96.6424V99.5239C53.1143 103.012 55.9947 105.873 59.4638 105.873C62.933 105.873 65.8134 103.012 65.8134 99.5239V96.6424C68.4656 96.6424 70.5177 94.5903 70.5177 91.9381L70.5177 89.0566C75.0942 87.983 79.3464 85.886 83.0321 82.9178L85.4106 84.9804C87.6503 86.9401 90.8261 86.4088 92.7858 84.1692L94.8484 81.7907C97.8166 78.1235 99.932 73.8528 100.987 69.2763H103.869C106.521 69.2763 108.573 67.2242 108.573 64.572L108.573 61.6905C109.987 57.077 112.718 53.0094 116.283 49.8133C116.383 49.7225 116.473 49.6318 116.573 49.5491C116.739 49.3929 116.895 49.2275 117.042 49.0436C117.741 48.2562 118.128 47.238 118.128 46.1828V43.3013C108.961 43.3013 103.869 40.6491 99 43.3013Z" transform="scale(0.85) translate(0, -4)" stroke="currentColor" strokeWidth="4" />
        <circle cx="38" cy="42" r="5" fill="currentColor"/>
        <circle cx="62" cy="42" r="5" fill="currentColor"/>
        <path d="M35 65 Q 50 75, 65 65" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
    </svg>
);

export const GearIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22m5.6-16.5L12 12m0 0l-5.6-5.5M12 12l5.6 5.5m-5.6-5.5L6.4 17.5m5.6-5.5l-5.6 5.5M12 12l5.6-5.5M6.4 6.5L12 12m0 0l-5.6 5.5" transform="rotate(45 12 12)" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export const BarcodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5v14M8 5v14M12 5v14M17 5v14M21 5v14" strokeWidth="1"/>
        <path d="M5 5v14" strokeWidth="2"/>
        <path d="M10 5v14" strokeWidth="1.5"/>
        <path d="M14 5v14" strokeWidth="2.5"/>
        <path d="M19 5v14" strokeWidth="1"/>
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);