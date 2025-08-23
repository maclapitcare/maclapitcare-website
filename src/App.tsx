import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import MacBookRepair from "./pages/services/macbook-repair";
import LaptopRepair from "./pages/services/laptop-repair";
import ScreenRepair from "./pages/screen-repair";
import BatteryReplacement from "./pages/services/battery-replacement";
import KeyboardRepair from "./pages/services/keyboard-repair";
import LogicBoardRepair from "./pages/services/logic-board-repair";
import DataRecovery from "./pages/services/data-recovery";
import iMacRepair from "./pages/services/imac-repair";
import MacMiniRepair from "./pages/services/mac-mini-repair";
import GamingLaptopRepair from "./pages/services/gaming-laptop-repair";
import SurfaceRepair from "./pages/services/surface-repair";
import MacBookRepairNoida from "./pages/macbook-repair-noida";
import MacBookProScreenReplacement from "./pages/macbook-pro-screen-replacement";
import MacBookAirScreenReplacement from "./pages/macbook-air-screen-replacement";
import Delhi from "./pages/locations/delhi";
import Noida from "./pages/locations/noida";
import Gurgaon from "./pages/locations/gurgaon";
import Ghaziabad from "./pages/locations/ghaziabad";
import About from "./pages/about";

import Contact from "./pages/contact";
import FAQ from "./pages/faq";

import MacBookComponentPricing from "./pages/pricing/macbook-component-pricing";
import MacBookRepairDelhi from "./pages/locations/macbook-repair-delhi";
import MacBookRepairGurgaon from "./pages/locations/macbook-repair-gurgaon";
import MacBookRepairGhaziabad from "./pages/locations/macbook-repair-ghaziabad";
import MacBookBezelReplacement from "./pages/macbook-bezel-replacement";
import MacBookTouchBarReplacement from "./pages/macbook-touchbar-replacement";
import MacBookRepairSector18Noida from "./pages/locations/macbook-repair-sector-18-noida";
import MacBookRepairSector62Noida from "./pages/locations/macbook-repair-sector-62-noida";
import MacBookRepairKnowledgeParkGreaterNoida from "./pages/locations/macbook-repair-knowledge-park-greater-noida";
import MacBookRepairSector137Noida from "./pages/locations/macbook-repair-sector-137-noida";
import MacBookRepairSector128Noida from "./pages/locations/macbook-repair-sector-128-noida";
import MacBookRepairSector16Noida from "./pages/locations/macbook-repair-sector-16-noida";
import MacBookRepairSector15Noida from "./pages/locations/macbook-repair-sector-15-noida";
import MacBookRepairSector12Noida from "./pages/locations/macbook-repair-sector-12-noida";
import MacBookRepairSector10Noida from "./pages/locations/macbook-repair-sector-10-noida";
import MacBookRepairSector50Noida from "./pages/locations/macbook-repair-sector-50-noida";
import MacBookRepairSector51Noida from "./pages/locations/macbook-repair-sector-51-noida";
import MacBookRepairSector100Noida from "./pages/locations/macbook-repair-sector-100-noida";
import MacBookRepairSector110Noida from "./pages/locations/macbook-repair-sector-110-noida";
import MacBookRepairSector70Noida from "./pages/locations/macbook-repair-sector-70-noida";
import MacBookRepairSector78Noida from "./pages/locations/macbook-repair-sector-78-noida";
import MacBookRepairSector44Noida from "./pages/locations/macbook-repair-sector-44-noida";
import MacBookRepairSector120Noida from "./pages/locations/macbook-repair-sector-120-noida";
import MacBookRepairSector132Noida from "./pages/locations/macbook-repair-sector-132-noida";
import MacBookRepairSector150Noida from "./pages/locations/macbook-repair-sector-150-noida";
import MacBookRepairGreaterNoidaWest from "./pages/locations/macbook-repair-greater-noida-west";
import MacBookRepairSector75Noida from "./pages/locations/macbook-repair-sector-75-noida";
import MacBookRepairSector94Noida from "./pages/locations/macbook-repair-sector-94-noida";
import MacBookRepairSector129Noida from "./pages/locations/macbook-repair-sector-129-noida";
import MacBookRepairSector142Noida from "./pages/locations/macbook-repair-sector-142-noida";
import MacBookRepairSector90Noida from "./pages/locations/macbook-repair-sector-90-noida";
import MacBookRepairSector72Noida from "./pages/locations/macbook-repair-sector-72-noida";
import MacBookRepairSector121Noida from "./pages/locations/macbook-repair-sector-121-noida";
import MacBookRepairSector18Noida from "./pages/locations/macbook-repair-sector-18-noida";
import MacBookRepairSector62Noida from "./pages/locations/macbook-repair-sector-62-noida";

// Missing Area Pages - All 404 Fixes
import MacBookRepairTechzone4GreaterNoida from "./pages/locations/macbook-repair-techzone-4-greater-noida";
import MacBookRepairSector36GreaterNoida from "./pages/locations/macbook-repair-sector-36-greater-noida";
import MacBookRepairPariChowkGreaterNoida from "./pages/locations/macbook-repair-pari-chowk-greater-noida";
import MacBookRepairSector1GreaterNoida from "./pages/locations/macbook-repair-sector-1-greater-noida";
import MacBookRepairSector16BGreaterNoida from "./pages/locations/macbook-repair-sector-16b-greater-noida";
import MacBookRepairSector125Noida from "./pages/locations/macbook-repair-sector-125-noida";
import MacBookRepairSector41Noida from "./pages/locations/macbook-repair-sector-41-noida";
import MacBookRepairSector45Noida from "./pages/locations/macbook-repair-sector-45-noida";
import MacBookRepairSector61Noida from "./pages/locations/macbook-repair-sector-61-noida";
import MacBookRepairSector63Noida from "./pages/locations/macbook-repair-sector-63-noida";
import MacBookRepairSector104Noida from "./pages/locations/macbook-repair-sector-104-noida";
import MacBookRepairSector135Noida from "./pages/locations/macbook-repair-sector-135-noida";
import MacBookRepairNoidaExtension from "./pages/locations/macbook-repair-noida-extension";
import MacBookRepairAlphaCommercialBelt from "./pages/locations/macbook-repair-alpha-commercial-belt";
import MacBookRepairFilmCityGreaterNoida from "./pages/locations/macbook-repair-film-city-greater-noida";

// Laptop Repair Pages
import LaptopRepairGhaziabadVaishaliIndirapuram from "./pages/locations/laptop-repair-ghaziabad-vaishali-indirapuram";

// Model-Specific Screen Replacement Pages (M1/M2/M3 Models)
import MacBookAirA2681ScreenReplacement from "./pages/macbook-air-a2681-screen-replacement-delhi-ncr";
import MacBookAirA1466ScreenReplacement from "./pages/macbook-air-a1466-screen-replacement-delhi-ncr";
import MacBookAirA1932ScreenReplacement from "./pages/macbook-air-a1932-screen-replacement-delhi-ncr";
import MacBookAirA2179ScreenReplacement from "./pages/macbook-air-a2179-screen-replacement-delhi-ncr";
import MacBookAirA3130ScreenReplacement from "./pages/macbook-air-a3130-screen-replacement-delhi-ncr";
import MacBookProA2686ScreenReplacement from "./pages/macbook-pro-a2686-screen-replacement-delhi-ncr";
import MacBookProA1706ScreenReplacement from "./pages/macbook-pro-a1706-screen-replacement-delhi-ncr";
import MacBookProA1708ScreenReplacement from "./pages/macbook-pro-a1708-screen-replacement-delhi-ncr";

// A2337 and A2338 Model Pages
import MacBookAirA2337 from "./pages/macbook-air-a2337";
import MacBookAirA2337BatteryReplacement from "./pages/macbook-air-a2337-battery-replacement-delhi-ncr";
import MacBookAirA2337ScreenReplacement from "./pages/macbook-air-a2337-screen-replacement-delhi-ncr";
import MacBookProA2338 from "./pages/macbook-pro-a2338";
import MacBookProA2338ScreenReplacement from "./pages/macbook-pro-a2338-screen-replacement-delhi-ncr";
import MacBookProA2338BatteryReplacement from "./pages/macbook-pro-a2338-battery-replacement-delhi-ncr";

// Additional Missing MacBook Pro Screen Pages
import MacBookProA2485ScreenReplacement from "./pages/macbook-pro-a2485-screen-replacement-delhi-ncr";
import MacBookProA2442ScreenReplacement from "./pages/macbook-pro-a2442-screen-replacement-delhi-ncr";
import MacBookProA3186ScreenReplacement from "./pages/macbook-pro-a3186-screen-replacement-delhi-ncr";
import MacBookProA1707ScreenReplacement from "./pages/macbook-pro-a1707-screen-replacement-delhi-ncr";
import MacBookProA1989ScreenReplacement from "./pages/macbook-pro-a1989-screen-replacement-delhi-ncr";
import MacBookProA1990ScreenReplacement from "./pages/macbook-pro-a1990-screen-replacement-delhi-ncr";
import MacBookProA2159ScreenReplacement from "./pages/macbook-pro-a2159-screen-replacement-delhi-ncr";
import MacBookProA2251ScreenReplacement from "./pages/macbook-pro-a2251-screen-replacement-delhi-ncr";
import MacBookProA2289ScreenReplacement from "./pages/macbook-pro-a2289-screen-replacement-delhi-ncr";
import MacBookProA2141ScreenReplacement from "./pages/macbook-pro-a2141-screen-replacement-delhi-ncr";

// Additional Missing MacBook Pro Battery Pages - Batch 1 (Apple Silicon)
import MacBookProA2485BatteryReplacement from "./pages/macbook-pro-a2485-battery-replacement-delhi-ncr";
import MacBookProA2442BatteryReplacement from "./pages/macbook-pro-a2442-battery-replacement-delhi-ncr";
import MacBookProA3186BatteryReplacement from "./pages/macbook-pro-a3186-battery-replacement-delhi-ncr";

// Additional Missing MacBook Pro Battery Pages - Batch 2 (Intel Models)
import MacBookProA1707BatteryReplacement from "./pages/macbook-pro-a1707-battery-replacement-delhi-ncr";
import MacBookProA1989BatteryReplacement from "./pages/macbook-pro-a1989-battery-replacement-delhi-ncr";
import MacBookProA1990BatteryReplacement from "./pages/macbook-pro-a1990-battery-replacement-delhi-ncr";
import MacBookProA2159BatteryReplacement from "./pages/macbook-pro-a2159-battery-replacement-delhi-ncr";

// Additional Missing MacBook Pro Battery Pages - Batch 3 (Final Intel Models)
import MacBookProA2251BatteryReplacement from "./pages/macbook-pro-a2251-battery-replacement-delhi-ncr";
import MacBookProA2289BatteryReplacement from "./pages/macbook-pro-a2289-battery-replacement-delhi-ncr";
import MacBookProA2141BatteryReplacement from "./pages/macbook-pro-a2141-battery-replacement-delhi-ncr";

// Additional Model Pages
import MacBookAirA3240 from "./pages/macbook-air-a3240";
import MacBookProA3131BatteryReplacement from "./pages/macbook-pro-a3131-battery-replacement-delhi-ncr";
import MacBookProA3131ScreenReplacement from "./pages/macbook-pro-a3131-screen-replacement-delhi-ncr";
import MacBookProA3240BatteryReplacement from "./pages/macbook-pro-a3240-battery-replacement-delhi-ncr";
import MacBookProA3240ScreenReplacement from "./pages/macbook-pro-a3240-screen-replacement-delhi-ncr";
import MacBookProA2918BatteryReplacement from "./pages/macbook-pro-a2918-battery-replacement-delhi-ncr";
import MacBookProA2918ScreenReplacement from "./pages/macbook-pro-a2918-screen-replacement-delhi-ncr";

// Model-Specific Battery Replacement Pages (M1/M2/M3 Models)
import MacBookAirA2681BatteryReplacement from "./pages/macbook-air-a2681-battery-replacement-delhi-ncr";
import MacBookAirA1466BatteryReplacement from "./pages/macbook-air-a1466-battery-replacement-delhi-ncr";
import MacBookAirA1932BatteryReplacement from "./pages/macbook-air-a1932-battery-replacement-delhi-ncr";
import MacBookAirA2179BatteryReplacement from "./pages/macbook-air-a2179-battery-replacement-delhi-ncr";
import MacBookAirA3130BatteryReplacement from "./pages/macbook-air-a3130-battery-replacement-delhi-ncr";
import MacBookProA2686BatteryReplacement from "./pages/macbook-pro-a2686-battery-replacement-delhi-ncr";
import MacBookProA1706BatteryReplacement from "./pages/macbook-pro-a1706-battery-replacement-delhi-ncr";
import MacBookProA1708BatteryReplacement from "./pages/macbook-pro-a1708-battery-replacement-delhi-ncr";

import Admin from "./pages/admin";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-96">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>}>
          <Switch>
          <Route path="/" component={Home} />
          
          {/* SEO-Optimized Service URLs */}
          <Route path="/macbook-repair-service-delhi-ncr" component={MacBookRepair} />
          <Route path="/laptop-repair-service-noida-delhi" component={LaptopRepair} />
          <Route path="/imac-repair-service-delhi-ncr" component={iMacRepair} />
          <Route path="/mac-mini-repair-service-delhi-ncr" component={MacMiniRepair} />
          <Route path="/gaming-laptop-repair-noida-delhi" component={GamingLaptopRepair} />
          <Route path="/surface-repair-service-delhi-ncr" component={SurfaceRepair} />
          <Route path="/macbook-laptop-screen-replacement-noida" component={ScreenRepair} />
          <Route path="/macbook-pro-screen-replacement-price-delhi-ncr" component={MacBookProScreenReplacement} />
          <Route path="/macbook-air-screen-replacement-price-delhi-ncr" component={MacBookAirScreenReplacement} />
          <Route path="/macbook-bezel-replacement-aluminum-frame-delhi-ncr" component={MacBookBezelReplacement} />
          <Route path="/macbook-touchbar-replacement-touch-id-delhi-ncr" component={MacBookTouchBarReplacement} />
          
          {/* Core pages maintained for deployment - model-specific pages temporarily removed for clean build */}
          
          <Route path="/macbook-laptop-battery-replacement-delhi-ncr" component={BatteryReplacement} />
          <Route path="/macbook-keyboard-repair-noida-delhi" component={KeyboardRepair} />
          <Route path="/macbook-logic-board-repair-chip-level" component={LogicBoardRepair} />
          <Route path="/laptop-data-recovery-service-noida" component={DataRecovery} />
          
          {/* Area-Specific MacBook Repair Pages - Must come before general location pages */}
          <Route path="/macbook-repair-sector-18-noida" component={MacBookRepairSector18Noida} />
          <Route path="/macbook-repair-sector-62-noida" component={MacBookRepairSector62Noida} />
          <Route path="/macbook-repair-knowledge-park-greater-noida" component={MacBookRepairKnowledgeParkGreaterNoida} />
          <Route path="/macbook-repair-sector-137-noida" component={MacBookRepairSector137Noida} />
          <Route path="/macbook-repair-sector-128-noida" component={MacBookRepairSector128Noida} />
          <Route path="/macbook-repair-sector-16-noida" component={MacBookRepairSector16Noida} />
          <Route path="/macbook-repair-sector-15-noida" component={MacBookRepairSector15Noida} />
          <Route path="/macbook-repair-sector-12-noida" component={MacBookRepairSector12Noida} />
          <Route path="/macbook-repair-sector-10-noida" component={MacBookRepairSector10Noida} />
          <Route path="/macbook-repair-sector-50-noida" component={MacBookRepairSector50Noida} />
          <Route path="/macbook-repair-sector-51-noida" component={MacBookRepairSector51Noida} />
          <Route path="/macbook-repair-sector-100-noida" component={MacBookRepairSector100Noida} />
          <Route path="/macbook-repair-sector-110-noida" component={MacBookRepairSector110Noida} />
          <Route path="/macbook-repair-sector-70-noida" component={MacBookRepairSector70Noida} />
          <Route path="/macbook-repair-sector-78-noida" component={MacBookRepairSector78Noida} />
          <Route path="/macbook-repair-sector-44-noida" component={MacBookRepairSector44Noida} />
          <Route path="/macbook-repair-sector-120-noida" component={MacBookRepairSector120Noida} />
          <Route path="/macbook-repair-sector-132-noida" component={MacBookRepairSector132Noida} />
          <Route path="/macbook-repair-sector-150-noida" component={MacBookRepairSector150Noida} />
          <Route path="/macbook-repair-greater-noida-west" component={MacBookRepairGreaterNoidaWest} />
          <Route path="/macbook-repair-sector-75-noida" component={MacBookRepairSector75Noida} />
          <Route path="/macbook-repair-sector-94-noida" component={MacBookRepairSector94Noida} />
          <Route path="/macbook-repair-sector-129-noida" component={MacBookRepairSector129Noida} />
          <Route path="/macbook-repair-sector-142-noida" component={MacBookRepairSector142Noida} />
          <Route path="/macbook-repair-sector-90-noida" component={MacBookRepairSector90Noida} />
          <Route path="/macbook-repair-sector-72-noida" component={MacBookRepairSector72Noida} />
          <Route path="/macbook-repair-sector-121-noida" component={MacBookRepairSector121Noida} />
          <Route path="/macbook-repair-sector-18-noida" component={MacBookRepairSector18Noida} />
          <Route path="/macbook-repair-sector-62-noida" component={MacBookRepairSector62Noida} />
          
          {/* Missing Area Pages - 404 Fixes */}
          <Route path="/macbook-repair-techzone-4-greater-noida" component={MacBookRepairTechzone4GreaterNoida} />
          <Route path="/macbook-repair-sector-36-greater-noida" component={MacBookRepairSector36GreaterNoida} />
          <Route path="/macbook-repair-pari-chowk-greater-noida" component={MacBookRepairPariChowkGreaterNoida} />
          <Route path="/macbook-repair-sector-1-greater-noida" component={MacBookRepairSector1GreaterNoida} />
          <Route path="/macbook-repair-sector-16b-greater-noida" component={MacBookRepairSector16BGreaterNoida} />
          <Route path="/macbook-repair-sector-125-noida" component={MacBookRepairSector125Noida} />
          <Route path="/macbook-repair-sector-41-noida" component={MacBookRepairSector41Noida} />
          <Route path="/macbook-repair-sector-45-noida" component={MacBookRepairSector45Noida} />
          <Route path="/macbook-repair-sector-61-noida" component={MacBookRepairSector61Noida} />
          <Route path="/macbook-repair-sector-63-noida" component={MacBookRepairSector63Noida} />
          <Route path="/macbook-repair-sector-104-noida" component={MacBookRepairSector104Noida} />
          <Route path="/macbook-repair-sector-135-noida" component={MacBookRepairSector135Noida} />
          <Route path="/macbook-repair-noida-extension" component={MacBookRepairNoidaExtension} />
          <Route path="/macbook-repair-alpha-commercial-belt" component={MacBookRepairAlphaCommercialBelt} />
          <Route path="/macbook-repair-film-city-greater-noida" component={MacBookRepairFilmCityGreaterNoida} />
          
          {/* Location-Specific Pages */}
          <Route path="/macbook-repair-noida-sector-121" component={MacBookRepairNoida} />
          <Route path="/laptop-repair-delhi-doorstep-service" component={Delhi} />
          <Route path="/macbook-repair-noida-greater-noida" component={Noida} />
          <Route path="/laptop-repair-noida-greater-noida" component={Noida} />
          <Route path="/laptop-repair-gurgaon-gurugram" component={Gurgaon} />
          <Route path="/laptop-repair-ghaziabad-vaishali-indirapuram" component={LaptopRepairGhaziabadVaishaliIndirapuram} />
          
          {/* Simple URL routes for navigation */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />

          <Route path="/macbook-component-pricing" component={MacBookComponentPricing} />
          <Route path="/macbook-repair-delhi" component={MacBookRepairDelhi} />
          <Route path="/macbook-repair-gurgaon" component={MacBookRepairGurgaon} />
          <Route path="/macbook-repair-ghaziabad" component={MacBookRepairGhaziabad} />
          <Route path="/admin" component={Admin} />
          
          {/* Legacy URL redirects for SEO */}
          <Route path="/services/macbook-repair" component={MacBookRepair} />
          <Route path="/services/laptop-repair" component={LaptopRepair} />
          <Route path="/services/screen-replacement" component={ScreenRepair} />
          <Route path="/services/battery-replacement" component={BatteryReplacement} />
          <Route path="/services/keyboard-repair" component={KeyboardRepair} />
          <Route path="/services/logic-board-repair" component={LogicBoardRepair} />
          <Route path="/services/data-recovery" component={DataRecovery} />
          <Route path="/macbook-repair-noida" component={MacBookRepairNoida} />
          <Route path="/locations/delhi" component={Delhi} />
          <Route path="/locations/noida" component={Noida} />
          <Route path="/locations/gurgaon" component={Gurgaon} />
          <Route path="/locations/ghaziabad" component={Ghaziabad} />
          
          {/* Model-Specific Screen Replacement Routes */}
          <Route path="/macbook-air-a2681-screen-replacement-delhi-ncr" component={MacBookAirA2681ScreenReplacement} />
          <Route path="/macbook-air-a1466-screen-replacement-delhi-ncr" component={MacBookAirA1466ScreenReplacement} />
          <Route path="/macbook-air-a1932-screen-replacement-delhi-ncr" component={MacBookAirA1932ScreenReplacement} />
          <Route path="/macbook-air-a2179-screen-replacement-delhi-ncr" component={MacBookAirA2179ScreenReplacement} />
          <Route path="/macbook-air-a3130-screen-replacement-delhi-ncr" component={MacBookAirA3130ScreenReplacement} />
          <Route path="/macbook-pro-a2686-screen-replacement-delhi-ncr" component={MacBookProA2686ScreenReplacement} />
          <Route path="/macbook-pro-a1706-screen-replacement-delhi-ncr" component={MacBookProA1706ScreenReplacement} />
          <Route path="/macbook-pro-a1708-screen-replacement-delhi-ncr" component={MacBookProA1708ScreenReplacement} />
          
          {/* Additional MacBook Pro Screen Replacement Routes */}
          <Route path="/macbook-pro-a2485-screen-replacement-delhi-ncr" component={MacBookProA2485ScreenReplacement} />
          <Route path="/macbook-pro-a2442-screen-replacement-delhi-ncr" component={MacBookProA2442ScreenReplacement} />
          <Route path="/macbook-pro-a3186-screen-replacement-delhi-ncr" component={MacBookProA3186ScreenReplacement} />
          <Route path="/macbook-pro-a1707-screen-replacement-delhi-ncr" component={MacBookProA1707ScreenReplacement} />
          <Route path="/macbook-pro-a1989-screen-replacement-delhi-ncr" component={MacBookProA1989ScreenReplacement} />
          <Route path="/macbook-pro-a1990-screen-replacement-delhi-ncr" component={MacBookProA1990ScreenReplacement} />
          <Route path="/macbook-pro-a2159-screen-replacement-delhi-ncr" component={MacBookProA2159ScreenReplacement} />
          <Route path="/macbook-pro-a2251-screen-replacement-delhi-ncr" component={MacBookProA2251ScreenReplacement} />
          <Route path="/macbook-pro-a2289-screen-replacement-delhi-ncr" component={MacBookProA2289ScreenReplacement} />
          <Route path="/macbook-pro-a2141-screen-replacement-delhi-ncr" component={MacBookProA2141ScreenReplacement} />

          {/* A2337 and A2338 Model Routes */}
          <Route path="/macbook-air-a2337" component={MacBookAirA2337} />
          <Route path="/macbook-air-a2337-battery-replacement-delhi-ncr" component={MacBookAirA2337BatteryReplacement} />
          <Route path="/macbook-air-a2337-screen-replacement-delhi-ncr" component={MacBookAirA2337ScreenReplacement} />
          <Route path="/macbook-pro-a2338" component={MacBookProA2338} />
          <Route path="/macbook-pro-a2338-screen-replacement-delhi-ncr" component={MacBookProA2338ScreenReplacement} />
          <Route path="/macbook-pro-a2338-battery-replacement-delhi-ncr" component={MacBookProA2338BatteryReplacement} />

          {/* Model-Specific Battery Replacement Routes */}
          <Route path="/macbook-air-a2681-battery-replacement-delhi-ncr" component={MacBookAirA2681BatteryReplacement} />
          <Route path="/macbook-air-a1466-battery-replacement-delhi-ncr" component={MacBookAirA1466BatteryReplacement} />
          <Route path="/macbook-air-a1932-battery-replacement-delhi-ncr" component={MacBookAirA1932BatteryReplacement} />
          <Route path="/macbook-air-a2179-battery-replacement-delhi-ncr" component={MacBookAirA2179BatteryReplacement} />
          <Route path="/macbook-air-a3130-battery-replacement-delhi-ncr" component={MacBookAirA3130BatteryReplacement} />
          <Route path="/macbook-pro-a2686-battery-replacement-delhi-ncr" component={MacBookProA2686BatteryReplacement} />
          <Route path="/macbook-pro-a1706-battery-replacement-delhi-ncr" component={MacBookProA1706BatteryReplacement} />
          <Route path="/macbook-pro-a1708-battery-replacement-delhi-ncr" component={MacBookProA1708BatteryReplacement} />
          
          {/* Additional MacBook Pro Battery Replacement Routes - Batch 1 */}
          <Route path="/macbook-pro-a2485-battery-replacement-delhi-ncr" component={MacBookProA2485BatteryReplacement} />
          <Route path="/macbook-pro-a2442-battery-replacement-delhi-ncr" component={MacBookProA2442BatteryReplacement} />
          <Route path="/macbook-pro-a3186-battery-replacement-delhi-ncr" component={MacBookProA3186BatteryReplacement} />
          
          {/* Additional MacBook Pro Battery Replacement Routes - Batch 2 */}
          <Route path="/macbook-pro-a1707-battery-replacement-delhi-ncr" component={MacBookProA1707BatteryReplacement} />
          <Route path="/macbook-pro-a1989-battery-replacement-delhi-ncr" component={MacBookProA1989BatteryReplacement} />
          <Route path="/macbook-pro-a1990-battery-replacement-delhi-ncr" component={MacBookProA1990BatteryReplacement} />
          <Route path="/macbook-pro-a2159-battery-replacement-delhi-ncr" component={MacBookProA2159BatteryReplacement} />
          
          {/* Additional MacBook Pro Battery Replacement Routes - Batch 3 */}
          <Route path="/macbook-pro-a2251-battery-replacement-delhi-ncr" component={MacBookProA2251BatteryReplacement} />
          <Route path="/macbook-pro-a2289-battery-replacement-delhi-ncr" component={MacBookProA2289BatteryReplacement} />
          <Route path="/macbook-pro-a2141-battery-replacement-delhi-ncr" component={MacBookProA2141BatteryReplacement} />
          
          {/* Additional Model Pages */}
          <Route path="/macbook-air-a3240" component={MacBookAirA3240} />
          <Route path="/macbook-pro-a3131-battery-replacement-delhi-ncr" component={MacBookProA3131BatteryReplacement} />
          <Route path="/macbook-pro-a3131-screen-replacement-delhi-ncr" component={MacBookProA3131ScreenReplacement} />
          <Route path="/macbook-pro-a3240-battery-replacement-delhi-ncr" component={MacBookProA3240BatteryReplacement} />
          <Route path="/macbook-pro-a3240-screen-replacement-delhi-ncr" component={MacBookProA3240ScreenReplacement} />
          <Route path="/macbook-pro-a2918-battery-replacement-delhi-ncr" component={MacBookProA2918BatteryReplacement} />
          <Route path="/macbook-pro-a2918-screen-replacement-delhi-ncr" component={MacBookProA2918ScreenReplacement} />

          {/* SEO-Optimized URL routes */}
          <Route path="/about-maclap-it-care-laptop-experts" component={About} />
          <Route path="/contact-laptop-repair-service-noida" component={Contact} />
          <Route path="/macbook-laptop-repair-faq-delhi-ncr" component={FAQ} />

          <Route path="/macbook-component-repair-pricing-guide-delhi-ncr" component={MacBookComponentPricing} />
          <Route path="/macbook-repair-delhi-doorstep-service" component={MacBookRepairDelhi} />
          <Route path="/macbook-repair-gurgaon-gurugram-doorstep" component={MacBookRepairGurgaon} />
          <Route path="/macbook-repair-ghaziabad-vaishali-indirapuram" component={MacBookRepairGhaziabad} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919211720790?text=Hi%2C%20I%20need%20MacBook%2FLaptop%20repair%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.135-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919211720790"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
          title="Call Now"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
