import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Home />
      <Footer />
      <ScrollToTop />
    </Suspense>
  );
};
