import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import GelecekProjeler from "@/pages/GelecekProjeler";
import TamamlananProjeler from "@/pages/TamamlananProjeler";
import Hakkimizda from "@/pages/Hakkimizda";
import Tarihce from "@/pages/Tarihce";
import VizyonMisyon from "@/pages/VizyonMisyon";
import KalitePolitikamiz from "@/pages/KalitePolitikamiz";
import Belgeler from "@/pages/Belgeler";
import AnahtarTeslimProjeler from "@/pages/AnahtarTeslimProjeler";
import MuhendislikHizmetleri from "@/pages/MuhendislikHizmetleri";
import Surdurulebilirlik from "@/pages/Surdurulebilirlik";
import BizeUlasin from "@/pages/BizeUlasin";
import SatisOfisleri from "@/pages/SatisOfisleri";
import Haberler from "@/pages/Haberler";
import HaberDetay from "@/pages/HaberDetay";
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
      <Route path="/kurumsal/tarihce" component={Tarihce} />
      <Route path="/kurumsal/vizyon-misyon" component={VizyonMisyon} />
      <Route path="/kurumsal/kalite-politikamiz" component={KalitePolitikamiz} />
      <Route path="/kurumsal/belgeler" component={Belgeler} />
      <Route path="/hizmetler/anahtar-teslim-projeler" component={AnahtarTeslimProjeler} />
      <Route path="/hizmetler/muhendislik-hizmetleri" component={MuhendislikHizmetleri} />
      <Route path="/surdurulebilirlik" component={Surdurulebilirlik} />
      <Route path="/haberler" component={Haberler} />
      <Route path="/haberler/:slug" component={HaberDetay} />
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