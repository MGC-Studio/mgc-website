
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

export { render };

async function render(pageContext) {
  const { isHydration } = pageContext;
  
  const root = document.getElementById('root');
  
  if (isHydration) {
    hydrateRoot(
      root,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
    
    hydrateRoot(
      rootElement,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
