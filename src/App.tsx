
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import GlobalReach from "./pages/GlobalReach";
import ProductDetail from "./pages/ProductDetail";
import RequestQuote from "./pages/RequestQuote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Layout>
                <Index />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Layout>
                <About />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Layout>
                <Products />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/products/:category" element={
            <>
              <Layout>
                <Products />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/products/:category/:id" element={
            <>
              <Layout>
                <ProductDetail />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/global-reach" element={
            <>
              <Layout>
                <GlobalReach />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Layout>
                <Contact />
              </Layout>
              <Footer />
            </>
          } />
          <Route path="/request-quote" element={
            <>
              <Layout>
                <RequestQuote />
              </Layout>
              <Footer />
            </>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <>
              <Layout>
                <NotFound />
              </Layout>
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
