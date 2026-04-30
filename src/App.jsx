import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';

// Blog is code-split: its JS only loads when the user navigates to /Blog
const Blog = lazy(() => import('./pages/Blog'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Home" element={<Layout><Home /></Layout>} />
        <Route path="/Blog" element={
          <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
            <Layout><Blog /></Layout>
          </Suspense>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

