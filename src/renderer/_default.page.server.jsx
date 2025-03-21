
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import App from '../App';
import { StaticRouter } from 'react-router-dom/server';

export { render };

async function render(pageContext) {
  const { url } = pageContext;
  
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MGC Studio - A micro software house and marketing agency specializing in websites, e-commerce, custom web-apps and AI workflows." />
        <title>MGC Studio</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add any relevant page context here
    }
  };
}
