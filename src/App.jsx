import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';

// Code-split secondary pages
const Blog = lazy(() => import('./pages/Blog'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const Fallback = () => <div className="min-h-screen bg-[#0a0a0a]" />;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Home" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={
          <Suspense fallback={<Fallback />}>
            <Layout><ServicesPage /></Layout>
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<Fallback />}>
            <Layout><AboutPage /></Layout>
          </Suspense>
        } />
        <Route path="/Blog" element={
          <Suspense fallback={<Fallback />}>
            <Layout><Blog /></Layout>
          </Suspense>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

