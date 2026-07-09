import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import PalletSizesList from "./pages/PalletSizesList";
import PalletSizeDetails from "./pages/PalletSizeDetails";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/">{() => <Home lang="ar" />}</Route>
        <Route path="/en">{() => <Home lang="en" />}</Route>
        <Route path="/pallet-sizes">{() => <PalletSizesList lang="ar" />}</Route>
        <Route path="/pallet-sizes/:slug">{(params) => <PalletSizeDetails slug={params.slug} lang="ar" />}</Route>
        <Route path="/en/pallet-sizes">{() => <PalletSizesList lang="en" />}</Route>
        <Route path="/en/pallet-sizes/:slug">{(params) => <PalletSizeDetails slug={params.slug} lang="en" />}</Route>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
