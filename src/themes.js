import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFFFFF',
    cardBackground: '#F0F2FA',
    cardBackgroundHover: '#E0E6FA',
    primaryTextColor: '#1E202A',
    secondaryTextColor: '#63687E'
};

export const darkTheme = {
    body: '#1E202A',
    darkModeSwitcher: 'translateX(1.4rem)',
    cardBackground: '#252A41',
    cardBackgroundHover: '#333a56',
    primaryTextColor: '#FFFFFF',
    secondaryTextColor: '#8B97C6'
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        transition: 0.5s;
    }

    .dark-mode {
        border-top-color: ${props => props.theme.secondaryTextColor};
    }

    .dark-mode-switcher {
        transform: ${props => props.theme.darkModeSwitcher};
        background-color: ${props => props.theme.body};
    }
    
    .card-container, .card-overview {
        background-color: ${props => props.theme.cardBackground};
    }

    .card-container:hover, .card-overview:hover {
        background-color: ${props => props.theme.cardBackgroundHover};
    }

    .header, .followersSection, .overview-section {
        color: ${props => props.theme.primaryTextColor};
    }

    .description p, .dark-mode-tittle, .id, .folloewers-tipe, .content-overview {
        color: ${props => props.theme.secondaryTextColor};
    }
`;

