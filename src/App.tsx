import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import GelecekProjeler from "@/pages/GelecekProjeler";
import TamamlananProjeler from "@/pages/TamamlananProjeler";
import Hakkimizda from "@/pages/Hakkimizda";
import OnursalBaskan from "@/pages/OnursalBaskan";
import Tarihce from "@/pages/Tarihce";
import VizyonMisyon from "@/pages/VizyonMisyon";
import KalitePolitikamiz from "@/pages/KalitePolitikamiz";
import Belgeler from "@/pages/Belgeler";
import Gayrimenkul from "@/pages/Gayrimenkul";
import Taahhut from "@/pages/Taahhut";
import Turizm from "@/pages/Turizm";
import MakineParki from "@/pages/MakineParki";
import BizeUlasin from "@/pages/BizeUlasin";
import SatisOfisleri from "@/pages/SatisOfisleri";
import InsanKaynaklari from "@/pages/InsanKaynaklari";
import Kvkk from "@/pages/Kvkk";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTopOnNavigate() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projeler/gelecek" component={GelecekProjeler} />
      <Route path="/projeler/tamamlanan" component={TamamlananProjeler} />
      <Route path="/kurumsal/hakkimizda" component={Hakkimizda} />
      <Route path="/kurumsal/onursal-baskan" component={OnursalBaskan} />
      <Route path="/kurumsal/tarihce" component={Tarihce} />
      <Route path="/kurumsal/vizyon-misyon" component={VizyonMisyon} />
      <Route path="/kurumsal/kalite-politikamiz" component={KalitePolitikamiz} />
      <Route path="/kurumsal/belgeler" component={Belgeler} />
      <Route path="/faaliyet-alanlari/gayrimenkul" component={Gayrimenkul} />
      <Route path="/faaliyet-alanlari/taahhut" component={Taahhut} />
      <Route path="/faaliyet-alanlari/turizm" component={Turizm} />
      <Route path="/makine-parki" component={MakineParki} />
      <Route path="/iletisim/bize-ulasin" component={BizeUlasin} />
      <Route path="/iletisim/satis-ofisleri" component={SatisOfisleri} />
      <Route path="/insan-kaynaklari" component={InsanKaynaklari} />
      <Route path="/kvkk-aydinlatma-metni" component={Kvkk} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <ScrollToTop />
          <ScrollToTopOnNavigate />
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;