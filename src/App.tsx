import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "@/pages/HomePage";
import GelecekProjeler from "@/pages/GelecekProjeler";
import TamamlananProjeler from "@/pages/TamamlananProjeler";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projeler/gelecek" component={GelecekProjeler} />
      <Route path="/projeler/tamamlanan" component={TamamlananProjeler} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
