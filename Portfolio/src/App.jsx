import "./App.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import MainLayout from "./pages/main-layout";
import LazySkeleton from "./components/layout/lazy-skeleton";

const LandingPage = lazy(() => import("./pages/landing-page"));
const AboutPage = lazy(() => import("./pages/about-page"));

function App() {
  return (
    <Suspense fallback={<LazySkeleton />}>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
