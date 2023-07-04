import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    :root {
        --background: '#f0f2f5';
        --text-title: '#363f5f';
        --text-body: '#969cb3';
        --white: '#fff';

        --red-header: '#811628';
        --blue-dark: '#412a9c';
        --blue-medium: '#1b66ff';
        --blue-light: '#00cef5';

        --red-primary: '#e52e4d';
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, p, header {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;