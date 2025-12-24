import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Services from "./pages/Services";
import AIStrategy from "./pages/AIStrategy";
import AIImplementation from "./pages/AIImplementation";
import AIAutomation from "./pages/AIAutomation";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import BlogAdmin from "./pages/BlogAdmin";
import BlogPost from "./pages/BlogPost";
import HomeServices from "./pages/industries/HomeServices";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import Healthcare from "./pages/industries/Healthcare";
import Ecommerce from "./pages/industries/Ecommerce";
import FinancialServices from "./pages/industries/FinancialServices";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/ai-strategy"} component={AIStrategy} />
      <Route path={"/ai-implementation"} component={AIImplementation} />
      <Route path={"/ai-automation"} component={AIAutomation} />
      <Route path={"/industries"} component={Industries} />
      <Route path={"/case-studies/:slug"} component={CaseStudyDetail} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/about"} component={About} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/account"} component={Account} />
      <Route path={"/blog/admin"} component={BlogAdmin} />
      <Route path={"/insights/:slug"} component={BlogPost} />
      <Route path="/industries/home-services" component={HomeServices} />
      <Route path="/industries/professional-services" component={ProfessionalServices} />
      <Route path="/industries/healthcare" component={Healthcare} />
      <Route path="/industries/ecommerce" component={Ecommerce} />
      <Route path="/industries/financial-services" component={FinancialServices} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
            <ChatWidget />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
