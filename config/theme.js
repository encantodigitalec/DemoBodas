(function () {
  const themes = {
    olivo: {
      name: 'Verde bosque y salvia',
      colors: {
        fondo: '#ece9df',
        fondoRgb: '236, 233, 223',
        fondo2: '#d9d6cb',
        fondo2Rgb: '217, 214, 203',
        surface: '#f7f5ee',
        surfaceRgb: '247, 245, 238',
        surfaceSoft: 'rgba(247, 245, 238, 0.9)',
        textSecondary: 'rgba(45, 45, 42, 0.72)',
        border: 'rgba(75, 79, 62, 0.22)',
        borderRgb: '75, 79, 62',
        principal: '#185c28',
        principalRgb: '24, 92, 40',
        secundario: '#7f9b7f',
        secundarioRgb: '127, 155, 127',
        acento: '#9a8e7f',
        acentoRgb: '154, 142, 127',
        texto: '#2d2d2a',
        textoRgb: '45, 45, 42',
        blanco: '#ffffff',
        sobreCarta: '#fbfaf5',
        sobreCuerpo: '#f2efe6',
        sobreCuerpoOscuro: '#d7d1c4',
        sobreSolapa: '#d8d1c1',
        sobreSolapaOscura: '#a99b8c'
      }
    },
    azul: {
      name: 'Azul acero',
      colors: {
        fondo: '#eef0f0',
        fondoRgb: '238, 240, 240',
        fondo2: '#d9dfe2',
        fondo2Rgb: '217, 223, 226',
        surface: '#f8f8f5',
        surfaceRgb: '248, 248, 245',
        surfaceSoft: 'rgba(248, 248, 245, 0.9)',
        textSecondary: 'rgba(48, 52, 58, 0.72)',
        border: 'rgba(79, 100, 120, 0.22)',
        borderRgb: '79, 100, 120',
        principal: '#4f6478',
        principalRgb: '79, 100, 120',
        secundario: '#8295a4',
        secundarioRgb: '130, 149, 164',
        acento: '#a89372',
        acentoRgb: '168, 147, 114',
        texto: '#30343a',
        textoRgb: '48, 52, 58',
        blanco: '#ffffff',
        sobreCarta: '#fbfaf7',
        sobreCuerpo: '#e9edf0',
        sobreCuerpoOscuro: '#cbd4dc',
        sobreSolapa: '#c5d0d9',
        sobreSolapaOscura: '#8598a9'
      }
    },
    vino: {
      name: 'Vino y piedra',
      colors: {
        fondo: '#f0ece8',
        fondoRgb: '240, 236, 232',
        fondo2: '#ded6d0',
        fondo2Rgb: '222, 214, 208',
        surface: '#faf7f2',
        surfaceRgb: '250, 247, 242',
        surfaceSoft: 'rgba(250, 247, 242, 0.9)',
        textSecondary: 'rgba(53, 47, 44, 0.72)',
        border: 'rgba(105, 60, 67, 0.2)',
        borderRgb: '105, 60, 67',
        principal: '#693c43',
        principalRgb: '105, 60, 67',
        secundario: '#82776f',
        secundarioRgb: '130, 119, 111',
        acento: '#aa936d',
        acentoRgb: '170, 147, 109',
        texto: '#352f2c',
        textoRgb: '53, 47, 44',
        blanco: '#ffffff',
        sobreCarta: '#fcf9f4',
        sobreCuerpo: '#eee6e1',
        sobreCuerpoOscuro: '#d9ccc5',
        sobreSolapa: '#d4c4ba',
        sobreSolapaOscura: '#9b8478'
      }
    }
  };

  const requestedTheme = (new URLSearchParams(window.location.search).get('tema') || '').trim().toLowerCase();
  const themeName = Object.prototype.hasOwnProperty.call(themes, requestedTheme) ? requestedTheme : 'olivo';
  const theme = themes[themeName];
  const root = document.documentElement;
  const colors = theme.colors;
  const cssVariables = {
    '--font-heading': '"Cormorant Garamond"',
    '--font-body': '"Montserrat"',
    '--font-script': '"Parisienne"',
    '--color-fondo': colors.fondo,
    '--color-fondo-rgb': colors.fondoRgb,
    '--color-fondo-2': colors.fondo2,
    '--color-fondo-2-rgb': colors.fondo2Rgb,
    '--color-tarjeta-solida': colors.surface,
    '--color-tarjeta-solida-rgb': colors.surfaceRgb,
    '--color-tarjeta': colors.surfaceSoft,
    '--color-texto-suave': colors.textSecondary,
    '--color-borde': colors.border,
    '--color-borde-rgb': colors.borderRgb,
    '--color-principal': colors.principal,
    '--color-principal-rgb': colors.principalRgb,
    '--color-secundario': colors.secundario,
    '--color-secundario-rgb': colors.secundarioRgb,
    '--color-acento': colors.acento,
    '--color-acento-rgb': colors.acentoRgb,
    '--color-texto': colors.texto,
    '--color-texto-rgb': colors.textoRgb,
    '--color-blanco': colors.blanco,
    '--boton-sobre-fondo': colors.principal,
    '--boton-sobre-fondo-2': colors.secundario,
    '--boton-sobre-sombra': `0 14px 26px rgba(${colors.principalRgb}, 0.28)`,
    '--boton-general-fondo': colors.principal,
    '--boton-general-fondo-2': colors.secundario,
    '--boton-general-hover': `color-mix(in srgb, ${colors.principal} 82%, black)`,
    '--boton-general-sombra': `0 14px 28px rgba(${colors.principalRgb}, 0.26)`,
    '--boton-secundario-fondo': 'rgba(255, 255, 255, 0.72)',
    '--boton-secundario-texto': colors.principal,
    '--boton-secundario-borde': `rgba(${colors.principalRgb}, 0.24)`,
    '--sobre-carta': colors.sobreCarta,
    '--sobre-cuerpo': colors.sobreCuerpo,
    '--sobre-cuerpo-oscuro': colors.sobreCuerpoOscuro,
    '--sobre-solapa': colors.sobreSolapa,
    '--sobre-solapa-oscura': colors.sobreSolapaOscura,
    '--sobre-sello': colors.principal
  };

  root.dataset.theme = themeName;
  Object.entries(cssVariables).forEach(([name, value]) => root.style.setProperty(name, value));

  window.WEDDING_THEMES = themes;
  window.WEDDING_THEME_NAME = themeName;
  window.WEDDING_THEME = {
    colors,
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Montserrat',
      script: 'Parisienne'
    }
  };
})();
