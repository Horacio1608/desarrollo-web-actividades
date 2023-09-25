// tailwind-example.js

// 1. Instala Tailwind CSS y sus dependencias:
// Ejecuta estos comandos en tu terminal:
// npm install tailwindcss
// npx tailwindcss init

// 2. Importa los estilos de Tailwind CSS en tu archivo CSS/SCSS:
// Crea un archivo CSS (por ejemplo, styles.css) en tu proyecto y agrégale lo siguiente:
// @import 'tailwindcss/base';
// @import 'tailwindcss/components';
// @import 'tailwindcss/utilities';

// 3. Configura tu proyecto Next.js para que use los estilos CSS:
// En tu archivo next.config.js, agrega lo siguiente:
/*
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  /* Configuraciones adicionales de Next.js */
// });
*/

// 4. Crea un componente Next.js que utilice las clases de Tailwind CSS:

import React from 'react';

function MyApp() {
  return (
    <div className="bg-blue-500 text-white p-4">
      {/* Esto es un div estilizado con Tailwind CSS. */}
      Hola, mundo.
    </div>
  );
}

export default MyApp;

// 5. Ejecuta tu aplicación Next.js:
// Ejecuta 'npm run dev' en tu terminal para iniciar tu servidor de desarrollo en http://localhost:3000.

// 6. Personaliza Tailwind CSS:
// Edita el archivo tailwind.config.js para personalizar los estilos según tus necesidades.
