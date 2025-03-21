
const express = require('express');
const compression = require('compression');
const { createPageRenderer } = require('vite-plugin-ssr');
const sirv = require('sirv');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const root = path.join(__dirname);

async function startServer() {
  const app = express();

  app.use(compression());

  // Serve pre-rendered static assets
  if (isProduction) {
    app.use(sirv(`${root}/dist/client`, { extensions: [] }));
  } else {
    // In development, Vite will create a dev server
    const vite = await import('vite');
    const viteDevMiddleware = (await vite.createServer({
      root,
      server: { middlewareMode: true }
    })).middlewares;
    app.use(viteDevMiddleware);
  }

  // Handle SSR or pre-rendered routes
  const renderPage = createPageRenderer({ viteDevServer: !isProduction, root, outDir: path.join(root, 'dist') });
  
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    const pageContextInit = {
      url
    };
    
    const pageContext = await renderPage(pageContextInit);
    
    if (pageContext.httpResponse === null) {
      return next(); // Let Express handle 404
    }
    
    const { body, statusCode, contentType } = pageContext.httpResponse;
    
    res.status(statusCode).type(contentType).send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

startServer();
