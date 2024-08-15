interface AppSizes {
  xsm: string;
  phone: string;
  tablet: string;
  reg: string;
  lg: string;
  xlg: string;
  hd: string;
  uhd: string;
  fourk: string;
}

interface AppColors {
  dark: string;
  mid: string;
  light: string;
  white: string;
  blue: string;
}

export interface KingdomworksTheme {
  sizes: AppSizes;
  colors: AppColors;
}

export const appTheme: KingdomworksTheme = {
  sizes: {
    xsm: '480px',
    phone: '720px',
    tablet: '940px',
    reg: '1080px',
    lg: '1440px',
    xlg: '1600px',
    hd: '1920px',
    uhd: '2560px',
    fourk: '3840px',
  },
  colors: {
    dark: '#333',
    mid: '#666',
    light: '#eee',
    white: '#fafafa',
    blue: '#4a90e2',
  },
};

export const rootStyle = `
  <style>
    :root {
      --screen-xsm: ${appTheme.sizes.xsm};
      --screen-phone: ${appTheme.sizes.phone};
      --screen-tablet: ${appTheme.sizes.tablet};
      --screen-reg: ${appTheme.sizes.reg};
      --screen-lg: ${appTheme.sizes.lg};
      --screen-xlg: ${appTheme.sizes.xlg};
      --screen-hd: ${appTheme.sizes.hd};
      --screen-uhd: ${appTheme.sizes.uhd};
      --screen-4k: ${appTheme.sizes.fourk};
      --dark: ${appTheme.colors.dark};
      --mid: ${appTheme.colors.mid};
      --light: ${appTheme.colors.light};
      --white: ${appTheme.colors.white};
      --blue: ${appTheme.colors.blue};
    }

    div, main, header, aside, section {
      box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: var(--mid);
    }

    h1 {
      color: var(--dark);
      font-size: 3rem;
    }

    h2 {
      font-size: 2.25rem;
    }

    h3, h4, h5, h6 {
      font-size: 1.75rem;
      font-weight: normal;
    }

    body, html {
      min-height: 100vh;
      height: 100%;
    }

    a {
      color: var(--blue);
    }

    body {
      background: var(--light);
    }

    @keyframes to_top {
      from {
        bottom: -100vh;
      }
      to {
        bottom: 0;
      }
    }

    @keyframes left_clouds {
      from {
        left: 0;
      }
      to {
        left: -4800%;
      }
    }

    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-wrapper {
      min-width: var(--screen-xsm);
      padding-bottom: 10vh;
    }

    section .inner {
      height: 100%;
    }

    .text-section {
      min-height: 50vh;
      padding: 2.5rem;
    }

    .text-section,
    .inner &.center {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .section-title,
    .sub-title {
      text-align: center;
      margin-top: 1rem;
    }

    section .inner {
      max-width: var(--screen-lg);
      margin: 0 auto;
    }

  </style>
`;
