import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from './not-found';
import { MainPage } from './main';
import { AboutPage } from './about';

export const RouterComponent = () => (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);
