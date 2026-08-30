import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContent } from './AppContent';

const LazyHifzProductPage = lazy(() => import('./components/HifzProductPage'));

export default function App() {
  return <BrowserRouter><AppContent HifzPage={LazyHifzProductPage} /></BrowserRouter>;
}
