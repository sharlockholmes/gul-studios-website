import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './AppContent';
import HifzProductPage from './components/HifzProductPage';
import { getPageSeo } from './config/seo';

export const render = (pathname: string) => ({
  html: renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <AppContent HifzPage={HifzProductPage} />
      </StaticRouter>
    </StrictMode>,
  ),
  seo: getPageSeo(pathname),
});
