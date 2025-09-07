import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Laptop, Monitor, HardDrive, Phone, MessageCircle, Search, ArrowRight, Wrench, Settings, ChevronDown, HelpCircle, MapPin, Clock
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function MacBookModelSelection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleBookService = (modelName: string) => {
    setSelectedModel(modelName);
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "Select Your Apple Device Model for Expert Repair | MacBook iMac Mac Mini | MacLap IT Care Delhi NCR";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Select your Apple device model for expert repair service in Delhi NCR. MacBook Pro, MacBook Air, iMac, Mac Mini all models 2013-2024 supported. Same-day service, up to 3 months warranty, free pickup. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'Apple device repair, MacBook Pro repair, MacBook Air repair, iMac repair, Mac Mini repair, Apple service center Delhi, MacBook model selection, iMac model repair, Mac Mini service');
    };
    setKeywordsTag();
  }, []);

  const appleDevices = [
    {
      category: "MacBook Air Models",
      icon: Laptop,
      color: "bg-blue-600",
      models: [
        // MacBook Air 2024-2023
        { name: "MacBook Air M3 13-inch A3113", year: "2024" },
        { name: "MacBook Air M3 15-inch A3114", year: "2024" },
        { name: "MacBook Air M2 13-inch A2681", year: "2022" },
        { name: "MacBook Air M2 15-inch A2941", year: "2023" },
        // MacBook Air 2022-2020
        { name: "MacBook Air M1 13-inch A2337", year: "2020" },
        { name: "MacBook Air Intel 13-inch A2179", year: "2020" },
        { name: "MacBook Air Intel 13-inch A1932", year: "2018-2019" },
        // MacBook Air 2017-2013
        { name: "MacBook Air 13-inch A1466", year: "2013-2017" },
        { name: "MacBook Air 11-inch A1465", year: "2013-2015" }
      ]
    },
    {
      category: "MacBook Pro Models", 
      icon: Laptop,
      color: "bg-gray-700",
      models: [
        // MacBook Pro 2024-2023
        { name: "MacBook Pro M3 Max 16-inch A2991", year: "2023" },
        { name: "MacBook Pro M3 Pro 16-inch A2991", year: "2023" },
        { name: "MacBook Pro M3 14-inch A2992", year: "2023" },
        { name: "MacBook Pro M3 13-inch A2988", year: "2022" },
        // MacBook Pro 2022-2021
        { name: "MacBook Pro M2 Max 16-inch A2780", year: "2023" },
        { name: "MacBook Pro M2 Pro 16-inch A2780", year: "2023" },
        { name: "MacBook Pro M2 14-inch A2779", year: "2023" },
        { name: "MacBook Pro M2 13-inch A2338", year: "2022" },
        { name: "MacBook Pro M1 Max 16-inch A2485", year: "2021" },
        { name: "MacBook Pro M1 Pro 16-inch A2485", year: "2021" },
        { name: "MacBook Pro M1 Max 14-inch A2442", year: "2021" },
        { name: "MacBook Pro M1 Pro 14-inch A2442", year: "2021" },
        { name: "MacBook Pro M1 13-inch A2338", year: "2020" },
        // MacBook Pro Intel 2020-2016
        { name: "MacBook Pro Intel 16-inch A2141", year: "2019-2020" },
        { name: "MacBook Pro Intel 13-inch A2289", year: "2020" },
        { name: "MacBook Pro Intel 13-inch A2251", year: "2020" },
        { name: "MacBook Pro Intel 15-inch A1990", year: "2018-2019" },
        { name: "MacBook Pro Intel 13-inch A1989", year: "2018-2019" },
        { name: "MacBook Pro Intel 15-inch A1707", year: "2016-2017" },
        { name: "MacBook Pro Intel 13-inch A1708", year: "2016-2017" },
        { name: "MacBook Pro Intel 13-inch A1706", year: "2016-2017" },
        // MacBook Pro Legacy 2015-2013
        { name: "MacBook Pro 15-inch A1398", year: "2013-2015" },
        { name: "MacBook Pro 13-inch A1502", year: "2013-2015" },
        { name: "MacBook Pro 15-inch A1286", year: "2013" },
        { name: "MacBook Pro 13-inch A1278", year: "2013" }
      ]
    },
    {
      category: "iMac Models",
      icon: Monitor,
      color: "bg-purple-600", 
      models: [
        // iMac 2024-2021
        { name: "iMac M3 24-inch A2615", year: "2023" },
        { name: "iMac M1 24-inch A2438", year: "2021" },
        // iMac Intel 2020-2017
        { name: "iMac Intel 27-inch A2115", year: "2019-2020" },
        { name: "iMac Intel 21.5-inch A2116", year: "2019" },
        { name: "iMac Pro 27-inch A1862", year: "2017-2021" },
        { name: "iMac Intel 27-inch A1419", year: "2017-2019" },
        { name: "iMac Intel 21.5-inch A1418", year: "2017-2019" },
        // iMac 2015-2013
        { name: "iMac 27-inch A1419", year: "2014-2015" },
        { name: "iMac 21.5-inch A1418", year: "2013-2015" }
      ]
    },
    {
      category: "Mac Mini Models",
      icon: HardDrive,
      color: "bg-green-600",
      models: [
        // Mac Mini 2024-2020
        { name: "Mac Mini M2 Pro A2686", year: "2023" },
        { name: "Mac Mini M2 A2686", year: "2023" },
        { name: "Mac Mini M1 A2348", year: "2020" },
        // Mac Mini Intel 2018-2014
        { name: "Mac Mini Intel A1993", year: "2018" },
        { name: "Mac Mini Intel A1347", year: "2014" }
      ]
    }
  ];

  const searchTermsRows = [
    {
      title: "Popular MacBook Air Searches in Noida",
      color: "bg-blue-600",
      terms: [
        "MacBook Air A3113 (2024) repair in noida",
        "MacBook Air A3114 (2024) repair in noida", 
        "MacBook Air A2681 (2022) repair in noida",
        "MacBook Air A2941 (2023) repair in noida",
        "MacBook Air A2337 (2020) repair in noida",
        "MacBook Air A2179 (2020) repair in noida",
        "MacBook Air A1932 (2018) repair in noida",
        "MacBook Air A1466 (2017) repair in noida",
        "MacBook Air A1465 (2015) repair in noida",
        "MacBook Air M3 13-inch repair in noida",
        "MacBook Air M3 15-inch repair in noida",
        "MacBook Air M2 repair in noida",
        "MacBook Air M1 repair in noida",
        "MacBook Air Intel repair in noida",
        "MacBook Air screen replacement noida",
        "MacBook Air battery replacement noida"
      ]
    },
    {
      title: "Popular MacBook Pro Searches in Noida", 
      color: "bg-gray-700",
      terms: [
        "MacBook Pro A2991 (2023) repair in noida",
        "MacBook Pro A2992 (2023) repair in noida",
        "MacBook Pro A2988 (2022) repair in noida",
        "MacBook Pro A2780 (2023) repair in noida",
        "MacBook Pro A2779 (2023) repair in noida",
        "MacBook Pro A2485 (2021) repair in noida",
        "MacBook Pro A2442 (2021) repair in noida",
        "MacBook Pro A2338 (2020) repair in noida",
        "MacBook Pro A2141 (2020) repair in noida",
        "MacBook Pro A1398 (2015) repair in noida",
        "MacBook Pro A1502 (2015) repair in noida",
        "MacBook Pro M3 Max repair in noida",
        "MacBook Pro M2 Max repair in noida",
        "MacBook Pro M1 Pro repair in noida",
        "MacBook Pro 16-inch repair in noida",
        "MacBook Pro 14-inch repair in noida"
      ]
    },
    {
      title: "Popular iMac & Mac Mini Searches in Noida",
      color: "bg-purple-600",
      terms: [
        "iMac A2615 (2023) repair in noida",
        "iMac A2438 (2021) repair in noida",
        "iMac A2115 (2020) repair in noida",
        "iMac A2116 (2019) repair in noida",
        "iMac A1862 Pro repair in noida",
        "iMac A1419 (2015) repair in noida",
        "iMac A1418 (2015) repair in noida",
        "Mac Mini A2686 (2023) repair in noida",
        "Mac Mini A2348 (2020) repair in noida",
        "Mac Mini A1993 (2018) repair in noida",
        "Mac Mini A1347 (2014) repair in noida",
        "iMac M3 24-inch repair in noida",
        "iMac M1 repair in noida", 
        "iMac screen repair in noida",
        "Mac Mini upgrade service noida",
        "All-in-one Mac repair noida"
      ]
    }
  ];

  const repairServicesRows = [
    {
      title: "General MacBook Repair Services",
      color: "bg-green-600",
      icon: Wrench,
      terms: [
        "macbook dc jack repair",
        "macbook dc jack replacement", 
        "macbook keyboard repair",
        "macbook battery replacement",
        "macbook logic board repair",
        "macbook logicboard replacement",
        "macbook screen repair",
        "macbook display replacement",
        "macbook camera replacement",
        "macbook trackpad repair",
        "macbook touchpad replacement",
        "macbook wifi repair",
        "macbook ssd upgrade",
        "macbook ssd replacement",
        "macbook bezel replacement",
        "macbook screen rubber replacement",
        "macbook speaker repair",
        "macbook speaker replacement"
      ]
    },
    {
      title: "MacBook Air Model-Specific Repairs",
      color: "bg-blue-600",
      icon: Settings,
      terms: [
        // MacBook Air A3113 (2024) repairs
        "MacBook Air A3113 dc jack repair", "MacBook Air A3113 dc jack replacement", "MacBook Air A3113 keyboard repair", "MacBook Air A3113 battery replacement",
        "MacBook Air A3113 logic board repair", "MacBook Air A3113 screen repair", "MacBook Air A3113 display replacement", "MacBook Air A3113 camera replacement",
        "MacBook Air A3113 trackpad repair", "MacBook Air A3113 wifi repair", "MacBook Air A3113 ssd upgrade", "MacBook Air A3113 speaker repair",
        
        // MacBook Air A3114 (2024) repairs  
        "MacBook Air A3114 dc jack repair", "MacBook Air A3114 dc jack replacement", "MacBook Air A3114 keyboard repair", "MacBook Air A3114 battery replacement",
        "MacBook Air A3114 logic board repair", "MacBook Air A3114 screen repair", "MacBook Air A3114 display replacement", "MacBook Air A3114 camera replacement",
        "MacBook Air A3114 trackpad repair", "MacBook Air A3114 wifi repair", "MacBook Air A3114 ssd upgrade", "MacBook Air A3114 speaker repair",
        
        // MacBook Air A2681 (2022) repairs
        "MacBook Air A2681 dc jack repair", "MacBook Air A2681 dc jack replacement", "MacBook Air A2681 keyboard repair", "MacBook Air A2681 battery replacement",
        "MacBook Air A2681 logic board repair", "MacBook Air A2681 screen repair", "MacBook Air A2681 display replacement", "MacBook Air A2681 camera replacement",
        "MacBook Air A2681 trackpad repair", "MacBook Air A2681 wifi repair", "MacBook Air A2681 ssd upgrade", "MacBook Air A2681 speaker repair",
        
        // MacBook Air A2941 (2023) repairs
        "MacBook Air A2941 dc jack repair", "MacBook Air A2941 dc jack replacement", "MacBook Air A2941 keyboard repair", "MacBook Air A2941 battery replacement",
        "MacBook Air A2941 logic board repair", "MacBook Air A2941 screen repair", "MacBook Air A2941 display replacement", "MacBook Air A2941 camera replacement",
        "MacBook Air A2941 trackpad repair", "MacBook Air A2941 wifi repair", "MacBook Air A2941 ssd upgrade", "MacBook Air A2941 speaker repair",
        
        // MacBook Air A2337 (2020) repairs
        "MacBook Air A2337 dc jack repair", "MacBook Air A2337 dc jack replacement", "MacBook Air A2337 keyboard repair", "MacBook Air A2337 battery replacement",
        "MacBook Air A2337 logic board repair", "MacBook Air A2337 screen repair", "MacBook Air A2337 display replacement", "MacBook Air A2337 camera replacement",
        "MacBook Air A2337 trackpad repair", "MacBook Air A2337 wifi repair", "MacBook Air A2337 ssd upgrade", "MacBook Air A2337 speaker repair",
        
        // MacBook Air A2179 (2020) repairs
        "MacBook Air A2179 dc jack repair", "MacBook Air A2179 dc jack replacement", "MacBook Air A2179 keyboard repair", "MacBook Air A2179 battery replacement",
        "MacBook Air A2179 logic board repair", "MacBook Air A2179 screen repair", "MacBook Air A2179 display replacement", "MacBook Air A2179 camera replacement",
        "MacBook Air A2179 trackpad repair", "MacBook Air A2179 wifi repair", "MacBook Air A2179 ssd upgrade", "MacBook Air A2179 speaker repair",
        
        // MacBook Air A1932 (2018) repairs
        "MacBook Air A1932 dc jack repair", "MacBook Air A1932 dc jack replacement", "MacBook Air A1932 keyboard repair", "MacBook Air A1932 battery replacement",
        "MacBook Air A1932 logic board repair", "MacBook Air A1932 screen repair", "MacBook Air A1932 display replacement", "MacBook Air A1932 camera replacement",
        "MacBook Air A1932 trackpad repair", "MacBook Air A1932 wifi repair", "MacBook Air A1932 ssd upgrade", "MacBook Air A1932 speaker repair",
        
        // MacBook Air A1466 (2017) repairs
        "MacBook Air A1466 dc jack repair", "MacBook Air A1466 dc jack replacement", "MacBook Air A1466 keyboard repair", "MacBook Air A1466 battery replacement",
        "MacBook Air A1466 logic board repair", "MacBook Air A1466 screen repair", "MacBook Air A1466 display replacement", "MacBook Air A1466 camera replacement",
        "MacBook Air A1466 trackpad repair", "MacBook Air A1466 wifi repair", "MacBook Air A1466 ssd upgrade", "MacBook Air A1466 speaker repair",
        
        // MacBook Air A1465 (2015) repairs
        "MacBook Air A1465 dc jack repair", "MacBook Air A1465 dc jack replacement", "MacBook Air A1465 keyboard repair", "MacBook Air A1465 battery replacement",
        "MacBook Air A1465 logic board repair", "MacBook Air A1465 screen repair", "MacBook Air A1465 display replacement", "MacBook Air A1465 camera replacement",
        "MacBook Air A1465 trackpad repair", "MacBook Air A1465 wifi repair", "MacBook Air A1465 ssd upgrade", "MacBook Air A1465 speaker repair"
      ]
    },
    {
      title: "MacBook Pro Model-Specific Repairs",
      color: "bg-gray-700", 
      icon: Wrench,
      terms: [
        // MacBook Pro A2991 (2023) repairs
        "MacBook Pro A2991 dc jack repair", "MacBook Pro A2991 dc jack replacement", "MacBook Pro A2991 keyboard repair", "MacBook Pro A2991 battery replacement",
        "MacBook Pro A2991 logic board repair", "MacBook Pro A2991 screen repair", "MacBook Pro A2991 display replacement", "MacBook Pro A2991 camera replacement",
        "MacBook Pro A2991 trackpad repair", "MacBook Pro A2991 wifi repair", "MacBook Pro A2991 ssd upgrade", "MacBook Pro A2991 speaker repair",
        
        // MacBook Pro A2992 (2023) repairs
        "MacBook Pro A2992 dc jack repair", "MacBook Pro A2992 dc jack replacement", "MacBook Pro A2992 keyboard repair", "MacBook Pro A2992 battery replacement",
        "MacBook Pro A2992 logic board repair", "MacBook Pro A2992 screen repair", "MacBook Pro A2992 display replacement", "MacBook Pro A2992 camera replacement",
        "MacBook Pro A2992 trackpad repair", "MacBook Pro A2992 wifi repair", "MacBook Pro A2992 ssd upgrade", "MacBook Pro A2992 speaker repair",
        
        // MacBook Pro A2988 (2022) repairs
        "MacBook Pro A2988 dc jack repair", "MacBook Pro A2988 dc jack replacement", "MacBook Pro A2988 keyboard repair", "MacBook Pro A2988 battery replacement",
        "MacBook Pro A2988 logic board repair", "MacBook Pro A2988 screen repair", "MacBook Pro A2988 display replacement", "MacBook Pro A2988 camera replacement",
        "MacBook Pro A2988 trackpad repair", "MacBook Pro A2988 wifi repair", "MacBook Pro A2988 ssd upgrade", "MacBook Pro A2988 speaker repair",
        
        // MacBook Pro A2780 (2023) repairs
        "MacBook Pro A2780 dc jack repair", "MacBook Pro A2780 dc jack replacement", "MacBook Pro A2780 keyboard repair", "MacBook Pro A2780 battery replacement",
        "MacBook Pro A2780 logic board repair", "MacBook Pro A2780 screen repair", "MacBook Pro A2780 display replacement", "MacBook Pro A2780 camera replacement",
        "MacBook Pro A2780 trackpad repair", "MacBook Pro A2780 wifi repair", "MacBook Pro A2780 ssd upgrade", "MacBook Pro A2780 speaker repair",
        
        // MacBook Pro A2779 (2023) repairs
        "MacBook Pro A2779 dc jack repair", "MacBook Pro A2779 dc jack replacement", "MacBook Pro A2779 keyboard repair", "MacBook Pro A2779 battery replacement",
        "MacBook Pro A2779 logic board repair", "MacBook Pro A2779 screen repair", "MacBook Pro A2779 display replacement", "MacBook Pro A2779 camera replacement",
        "MacBook Pro A2779 trackpad repair", "MacBook Pro A2779 wifi repair", "MacBook Pro A2779 ssd upgrade", "MacBook Pro A2779 speaker repair",
        
        // MacBook Pro A2485 (2021) repairs
        "MacBook Pro A2485 dc jack repair", "MacBook Pro A2485 dc jack replacement", "MacBook Pro A2485 keyboard repair", "MacBook Pro A2485 battery replacement",
        "MacBook Pro A2485 logic board repair", "MacBook Pro A2485 screen repair", "MacBook Pro A2485 display replacement", "MacBook Pro A2485 camera replacement",
        "MacBook Pro A2485 trackpad repair", "MacBook Pro A2485 wifi repair", "MacBook Pro A2485 ssd upgrade", "MacBook Pro A2485 speaker repair",
        
        // MacBook Pro A2442 (2021) repairs
        "MacBook Pro A2442 dc jack repair", "MacBook Pro A2442 dc jack replacement", "MacBook Pro A2442 keyboard repair", "MacBook Pro A2442 battery replacement",
        "MacBook Pro A2442 logic board repair", "MacBook Pro A2442 screen repair", "MacBook Pro A2442 display replacement", "MacBook Pro A2442 camera replacement",
        "MacBook Pro A2442 trackpad repair", "MacBook Pro A2442 wifi repair", "MacBook Pro A2442 ssd upgrade", "MacBook Pro A2442 speaker repair",
        
        // MacBook Pro A2338 (2020) repairs
        "MacBook Pro A2338 dc jack repair", "MacBook Pro A2338 dc jack replacement", "MacBook Pro A2338 keyboard repair", "MacBook Pro A2338 battery replacement",
        "MacBook Pro A2338 logic board repair", "MacBook Pro A2338 screen repair", "MacBook Pro A2338 display replacement", "MacBook Pro A2338 camera replacement",
        "MacBook Pro A2338 trackpad repair", "MacBook Pro A2338 wifi repair", "MacBook Pro A2338 ssd upgrade", "MacBook Pro A2338 speaker repair",
        
        // MacBook Pro A2141 (2020) repairs
        "MacBook Pro A2141 dc jack repair", "MacBook Pro A2141 dc jack replacement", "MacBook Pro A2141 keyboard repair", "MacBook Pro A2141 battery replacement",
        "MacBook Pro A2141 logic board repair", "MacBook Pro A2141 screen repair", "MacBook Pro A2141 display replacement", "MacBook Pro A2141 camera replacement",
        "MacBook Pro A2141 trackpad repair", "MacBook Pro A2141 wifi repair", "MacBook Pro A2141 ssd upgrade", "MacBook Pro A2141 speaker repair",
        
        // MacBook Pro A1398 (2015) repairs
        "MacBook Pro A1398 dc jack repair", "MacBook Pro A1398 dc jack replacement", "MacBook Pro A1398 keyboard repair", "MacBook Pro A1398 battery replacement",
        "MacBook Pro A1398 logic board repair", "MacBook Pro A1398 screen repair", "MacBook Pro A1398 display replacement", "MacBook Pro A1398 camera replacement",
        "MacBook Pro A1398 trackpad repair", "MacBook Pro A1398 wifi repair", "MacBook Pro A1398 ssd upgrade", "MacBook Pro A1398 speaker repair",
        
        // MacBook Pro A1502 (2015) repairs
        "MacBook Pro A1502 dc jack repair", "MacBook Pro A1502 dc jack replacement", "MacBook Pro A1502 keyboard repair", "MacBook Pro A1502 battery replacement",
        "MacBook Pro A1502 logic board repair", "MacBook Pro A1502 screen repair", "MacBook Pro A1502 display replacement", "MacBook Pro A1502 camera replacement",
        "MacBook Pro A1502 trackpad repair", "MacBook Pro A1502 wifi repair", "MacBook Pro A1502 ssd upgrade", "MacBook Pro A1502 speaker repair",
        
        // MacBook Pro A1286 (2013) repairs
        "MacBook Pro A1286 dc jack repair", "MacBook Pro A1286 dc jack replacement", "MacBook Pro A1286 keyboard repair", "MacBook Pro A1286 battery replacement",
        "MacBook Pro A1286 logic board repair", "MacBook Pro A1286 screen repair", "MacBook Pro A1286 display replacement", "MacBook Pro A1286 camera replacement",
        "MacBook Pro A1286 trackpad repair", "MacBook Pro A1286 wifi repair", "MacBook Pro A1286 ssd upgrade", "MacBook Pro A1286 speaker repair",
        
        // MacBook Pro A1278 (2013) repairs
        "MacBook Pro A1278 dc jack repair", "MacBook Pro A1278 dc jack replacement", "MacBook Pro A1278 keyboard repair", "MacBook Pro A1278 battery replacement",
        "MacBook Pro A1278 logic board repair", "MacBook Pro A1278 screen repair", "MacBook Pro A1278 display replacement", "MacBook Pro A1278 camera replacement",
        "MacBook Pro A1278 trackpad repair", "MacBook Pro A1278 wifi repair", "MacBook Pro A1278 ssd upgrade", "MacBook Pro A1278 speaker repair"
      ]
    },
    {
      title: "iMac & Mac Mini Specific Repairs",
      color: "bg-purple-600",
      icon: Settings,
      terms: [
        // iMac A2615 (2023) repairs
        "iMac A2615 logic board repair", "iMac A2615 screen replacement", "iMac A2615 display repair", "iMac A2615 camera replacement",
        "iMac A2615 wifi repair", "iMac A2615 ssd upgrade", "iMac A2615 speaker repair", "iMac A2615 power supply repair",
        
        // iMac A2438 (2021) repairs
        "iMac A2438 logic board repair", "iMac A2438 screen replacement", "iMac A2438 display repair", "iMac A2438 camera replacement",
        "iMac A2438 wifi repair", "iMac A2438 ssd upgrade", "iMac A2438 speaker repair", "iMac A2438 power supply repair",
        
        // iMac A2115 (2020) repairs
        "iMac A2115 logic board repair", "iMac A2115 screen replacement", "iMac A2115 display repair", "iMac A2115 camera replacement",
        "iMac A2115 wifi repair", "iMac A2115 ssd upgrade", "iMac A2115 speaker repair", "iMac A2115 power supply repair",
        
        // iMac A2116 (2019) repairs
        "iMac A2116 logic board repair", "iMac A2116 screen replacement", "iMac A2116 display repair", "iMac A2116 camera replacement",
        "iMac A2116 wifi repair", "iMac A2116 ssd upgrade", "iMac A2116 speaker repair", "iMac A2116 power supply repair",
        
        // iMac A1862 Pro repairs
        "iMac A1862 logic board repair", "iMac A1862 screen replacement", "iMac A1862 display repair", "iMac A1862 camera replacement",
        "iMac A1862 wifi repair", "iMac A1862 ssd upgrade", "iMac A1862 speaker repair", "iMac A1862 power supply repair",
        
        // iMac A1419 (2015) repairs
        "iMac A1419 logic board repair", "iMac A1419 screen replacement", "iMac A1419 display repair", "iMac A1419 camera replacement",
        "iMac A1419 wifi repair", "iMac A1419 ssd upgrade", "iMac A1419 speaker repair", "iMac A1419 power supply repair",
        
        // iMac A1418 (2015) repairs
        "iMac A1418 logic board repair", "iMac A1418 screen replacement", "iMac A1418 display repair", "iMac A1418 camera replacement",
        "iMac A1418 wifi repair", "iMac A1418 ssd upgrade", "iMac A1418 speaker repair", "iMac A1418 power supply repair",
        
        // Mac Mini A2686 (2023) repairs
        "Mac Mini A2686 logic board repair", "Mac Mini A2686 wifi repair", "Mac Mini A2686 ssd upgrade", "Mac Mini A2686 power supply repair",
        "Mac Mini A2686 port repair", "Mac Mini A2686 cooling fan repair", "Mac Mini A2686 thermal paste replacement", "Mac Mini A2686 bluetooth repair",
        
        // Mac Mini A2348 (2020) repairs
        "Mac Mini A2348 logic board repair", "Mac Mini A2348 wifi repair", "Mac Mini A2348 ssd upgrade", "Mac Mini A2348 power supply repair",
        "Mac Mini A2348 port repair", "Mac Mini A2348 cooling fan repair", "Mac Mini A2348 thermal paste replacement", "Mac Mini A2348 bluetooth repair",
        
        // Mac Mini A1993 (2018) repairs
        "Mac Mini A1993 logic board repair", "Mac Mini A1993 wifi repair", "Mac Mini A1993 ssd upgrade", "Mac Mini A1993 power supply repair",
        "Mac Mini A1993 port repair", "Mac Mini A1993 cooling fan repair", "Mac Mini A1993 thermal paste replacement", "Mac Mini A1993 bluetooth repair",
        
        // Mac Mini A1347 (2014) repairs
        "Mac Mini A1347 logic board repair", "Mac Mini A1347 wifi repair", "Mac Mini A1347 ssd upgrade", "Mac Mini A1347 power supply repair",
        "Mac Mini A1347 port repair", "Mac Mini A1347 cooling fan repair", "Mac Mini A1347 thermal paste replacement", "Mac Mini A1347 bluetooth repair"
      ]
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook screen repair cost in Delhi NCR?",
      answer: "MacBook screen repair costs vary based on your specific model and screen type. We offer competitive pricing for all MacBook Air and MacBook Pro models from 2013-2024. Contact us for an instant quote - we provide transparent pricing with no hidden charges. Our rates are among the most affordable in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does MacBook battery replacement take?",
      answer: "Most MacBook battery replacements are completed within 2-4 hours on the same day. For newer MacBook models (M1, M2, M3), the process typically takes 2-3 hours. Older Intel MacBook models may require 3-4 hours. We provide free pickup and delivery across Delhi NCR, so you don't need to wait at our center."
    },
    {
      question: "Do you repair MacBook logic board issues?",
      answer: "Yes, we specialize in MacBook logic board repair for all models including MacBook Air and MacBook Pro from 2013-2024. Our expert technicians handle complex issues like liquid damage, power failures, port problems, and component-level repairs. We use genuine components and provide up to 3 months warranty on logic board repairs."
    },
    {
      question: "What is the warranty on MacBook repair services?",
      answer: "We provide up to 3 months warranty on all MacBook repair services including screen replacement, battery replacement, keyboard repair, and logic board fixes. Our warranty covers the repaired component and workmanship. For major repairs like logic board replacement, we offer extended warranty options."
    },
    {
      question: "Can you repair water damaged MacBook?",
      answer: "Yes, we have excellent success rates with water damaged MacBook repair. Our process includes complete disassembly, ultrasonic cleaning, component inspection, and precision repairs. Time is critical for liquid damage - contact us immediately for the best recovery chances. We handle all MacBook models including the latest M3 MacBooks."
    },
    {
      question: "Do you use genuine Apple parts for MacBook repair?",
      answer: "We use high-quality compatible parts that meet or exceed Apple specifications. For critical components like screens and batteries, we source from premium manufacturers with the same quality as original parts. All parts come with warranty and are tested for compatibility with your specific MacBook model."
    },
    {
      question: "How do I know which MacBook model I have?",
      answer: "You can find your MacBook model number by checking: Apple Menu > About This Mac, or look for the model number (A####) on the bottom of your MacBook. You can also contact us on WhatsApp and our experts will help you identify your model for accurate repair quotes and service."
    },
    {
      question: "Do you provide free pickup and delivery for MacBook repair?",
      answer: "Yes, we offer free pickup and delivery service across Delhi NCR including Noida, Gurgaon, Ghaziabad, and Greater Noida. Our trained technicians collect your MacBook from your location and deliver it back after repair. This service is complimentary for all repair services."
    },
    {
      question: "Can MacBook keyboard repair fix sticky or dead keys?",
      answer: "Absolutely! We repair all MacBook keyboard issues including sticky keys, dead keys, repeated characters, and complete keyboard failures. We handle both butterfly keyboards (2016-2019 models) and scissor keyboards (2020+ models). Most keyboard repairs are completed the same day."
    },
    {
      question: "Is MacBook SSD upgrade possible for older models?",
      answer: "Yes, we provide MacBook SSD upgrade services for compatible models. Many 2013-2017 MacBook models can be upgraded to larger capacity SSDs for improved performance and storage. We'll assess your specific MacBook model and recommend the best upgrade options during consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const serviceAreas = [
    {
      city: "Noida Apple Repair Service Areas",
      color: "bg-blue-600",
      areas: [
        "MacBook repair in Sector 1 Noida", "MacBook repair in Sector 2 Noida", "MacBook repair in Sector 3 Noida", "MacBook repair in Sector 4 Noida",
        "MacBook repair in Sector 5 Noida", "MacBook repair in Sector 6 Noida", "MacBook repair in Sector 7 Noida", "MacBook repair in Sector 8 Noida",
        "MacBook repair in Sector 9 Noida", "MacBook repair in Sector 10 Noida", "MacBook repair in Sector 11 Noida", "MacBook repair in Sector 12 Noida",
        "MacBook repair in Sector 15 Noida", "MacBook repair in Sector 16 Noida", "MacBook repair in Sector 18 Noida", "MacBook repair in Sector 19 Noida",
        "MacBook repair in Sector 20 Noida", "MacBook repair in Sector 21 Noida", "MacBook repair in Sector 22 Noida", "MacBook repair in Sector 25 Noida",
        "MacBook repair in Sector 26 Noida", "MacBook repair in Sector 27 Noida", "MacBook repair in Sector 28 Noida", "MacBook repair in Sector 29 Noida",
        "MacBook repair in Sector 30 Noida", "MacBook repair in Sector 31 Noida", "MacBook repair in Sector 32 Noida", "MacBook repair in Sector 33 Noida",
        "MacBook repair in Sector 34 Noida", "MacBook repair in Sector 35 Noida", "MacBook repair in Sector 36 Noida", "MacBook repair in Sector 37 Noida",
        "MacBook repair in Sector 38 Noida", "MacBook repair in Sector 39 Noida", "MacBook repair in Sector 40 Noida", "MacBook repair in Sector 41 Noida",
        "MacBook repair in Sector 44 Noida", "MacBook repair in Sector 45 Noida", "MacBook repair in Sector 46 Noida", "MacBook repair in Sector 47 Noida",
        "MacBook repair in Sector 49 Noida", "MacBook repair in Sector 50 Noida", "MacBook repair in Sector 51 Noida", "MacBook repair in Sector 52 Noida",
        "MacBook repair in Sector 53 Noida", "MacBook repair in Sector 55 Noida", "MacBook repair in Sector 56 Noida", "MacBook repair in Sector 57 Noida",
        "MacBook repair in Sector 58 Noida", "MacBook repair in Sector 59 Noida", "MacBook repair in Sector 60 Noida", "MacBook repair in Sector 61 Noida",
        "MacBook repair in Sector 62 Noida", "MacBook repair in Sector 63 Noida", "MacBook repair in Sector 65 Noida", "MacBook repair in Sector 66 Noida",
        "MacBook repair in Sector 67 Noida", "MacBook repair in Sector 68 Noida", "MacBook repair in Sector 70 Noida", "MacBook repair in Sector 71 Noida",
        "MacBook repair in Sector 72 Noida", "MacBook repair in Sector 73 Noida", "MacBook repair in Sector 74 Noida", "MacBook repair in Sector 75 Noida",
        "MacBook repair in Sector 76 Noida", "MacBook repair in Sector 77 Noida", "MacBook repair in Sector 78 Noida", "MacBook repair in Sector 82 Noida",
        "MacBook repair in Sector 83 Noida", "MacBook repair in Sector 104 Noida", "MacBook repair in Sector 110 Noida", "MacBook repair in Sector 125 Noida",
        "MacBook repair in Sector 135 Noida", "MacBook repair in Sector 137 Noida", "MacBook repair in Sector 142 Noida", "MacBook repair in Sector 144 Noida"
      ]
    },
    {
      city: "Greater Noida Apple Repair Service Areas",
      color: "bg-green-600", 
      areas: [
        "MacBook repair in Alpha 1 Greater Noida", "MacBook repair in Alpha 2 Greater Noida", "MacBook repair in Beta 1 Greater Noida", "MacBook repair in Beta 2 Greater Noida",
        "MacBook repair in Gamma 1 Greater Noida", "MacBook repair in Gamma 2 Greater Noida", "MacBook repair in Delta 1 Greater Noida", "MacBook repair in Delta 2 Greater Noida",
        "MacBook repair in Eta 1 Greater Noida", "MacBook repair in Eta 2 Greater Noida", "MacBook repair in Zeta 1 Greater Noida", "MacBook repair in Mu Greater Noida",
        "MacBook repair in Omicron Greater Noida", "MacBook repair in Pi Greater Noida", "MacBook repair in Pari Chowk Greater Noida", "MacBook repair in Knowledge Park 1",
        "MacBook repair in Knowledge Park 2", "MacBook repair in Knowledge Park 3", "MacBook repair in Knowledge Park 5", "MacBook repair in Techzone 4 Greater Noida",
        "MacBook repair in Surajpur Greater Noida", "MacBook repair in Dadri Greater Noida", "MacBook repair in Bisrakh Greater Noida", "MacBook repair in Kasna Greater Noida",
        "MacBook repair in Ecotech Extension 1", "MacBook repair in Ecotech Extension 2", "MacBook repair in Chi Greater Noida", "MacBook repair in Phi Greater Noida",
        "MacBook repair in Sigma Greater Noida", "MacBook repair in Upsilon Greater Noida", "MacBook repair in Omega Greater Noida", "MacBook repair in Site C Greater Noida"
      ]
    },
    {
      city: "Delhi Apple Repair Service Areas",
      color: "bg-red-600",
      areas: [
        "MacBook repair in Connaught Place Delhi", "MacBook repair in Karol Bagh Delhi", "MacBook repair in Lajpat Nagar Delhi", "MacBook repair in Rajouri Garden Delhi",
        "MacBook repair in Janakpuri Delhi", "MacBook repair in Dwarka Delhi", "MacBook repair in Rohini Delhi", "MacBook repair in Pitampura Delhi",
        "MacBook repair in Model Town Delhi", "MacBook repair in Civil Lines Delhi", "MacBook repair in GTB Nagar Delhi", "MacBook repair in Kamla Nagar Delhi",
        "MacBook repair in Laxmi Nagar Delhi", "MacBook repair in Preet Vihar Delhi", "MacBook repair in Mayur Vihar Delhi", "MacBook repair in Vasundhara Enclave Delhi",
        "MacBook repair in East of Kailash Delhi", "MacBook repair in Greater Kailash Delhi", "MacBook repair in Defence Colony Delhi", "MacBook repair in Saket Delhi",
        "MacBook repair in Hauz Khas Delhi", "MacBook repair in Green Park Delhi", "MacBook repair in Malviya Nagar Delhi", "MacBook repair in Chanakyapuri Delhi",
        "MacBook repair in Vasant Vihar Delhi", "MacBook repair in Vasant Kunj Delhi", "MacBook repair in Mahipalpur Delhi", "MacBook repair in Punjabi Bagh Delhi",
        "MacBook repair in Tagore Garden Delhi", "MacBook repair in Tilak Nagar Delhi", "MacBook repair in Subhash Nagar Delhi", "MacBook repair in Patel Nagar Delhi"
      ]
    },
    {
      city: "Gurgaon Apple Repair Service Areas", 
      color: "bg-purple-600",
      areas: [
        "MacBook repair in Cyber City Gurgaon", "MacBook repair in DLF Phase 1 Gurgaon", "MacBook repair in DLF Phase 2 Gurgaon", "MacBook repair in DLF Phase 3 Gurgaon",
        "MacBook repair in DLF Phase 4 Gurgaon", "MacBook repair in DLF Phase 5 Gurgaon", "MacBook repair in Sushant Lok Gurgaon", "MacBook repair in South City Gurgaon",
        "MacBook repair in Sector 14 Gurgaon", "MacBook repair in Sector 15 Gurgaon", "MacBook repair in Sector 17 Gurgaon", "MacBook repair in Sector 21 Gurgaon",
        "MacBook repair in Sector 22 Gurgaon", "MacBook repair in Sector 23 Gurgaon", "MacBook repair in Sector 26 Gurgaon", "MacBook repair in Sector 27 Gurgaon",
        "MacBook repair in Sector 28 Gurgaon", "MacBook repair in Sector 29 Gurgaon", "MacBook repair in Sector 31 Gurgaon", "MacBook repair in Sector 32 Gurgaon",
        "MacBook repair in Sector 37 Gurgaon", "MacBook repair in Sector 38 Gurgaon", "MacBook repair in Sector 39 Gurgaon", "MacBook repair in Sector 40 Gurgaon",
        "MacBook repair in Sector 42 Gurgaon", "MacBook repair in Sector 43 Gurgaon", "MacBook repair in Sector 44 Gurgaon", "MacBook repair in Sector 45 Gurgaon",
        "MacBook repair in Sector 46 Gurgaon", "MacBook repair in Sector 47 Gurgaon", "MacBook repair in Sector 48 Gurgaon", "MacBook repair in Sector 49 Gurgaon",
        "MacBook repair in Sector 50 Gurgaon", "MacBook repair in Sector 51 Gurgaon", "MacBook repair in Sector 52 Gurgaon", "MacBook repair in Sector 53 Gurgaon",
        "MacBook repair in Sector 54 Gurgaon", "MacBook repair in Sector 55 Gurgaon", "MacBook repair in Sector 56 Gurgaon", "MacBook repair in Sector 57 Gurgaon",
        "MacBook repair in MG Road Gurgaon", "MacBook repair in Golf Course Road Gurgaon", "MacBook repair in NH8 Gurgaon", "MacBook repair in Old Gurgaon"
      ]
    },
    {
      city: "Ghaziabad Apple Repair Service Areas",
      color: "bg-orange-600",
      areas: [
        "MacBook repair in Raj Nagar Ghaziabad", "MacBook repair in Raj Nagar Extension Ghaziabad", "MacBook repair in Shakti Khand Ghaziabad", "MacBook repair in Kavi Nagar Ghaziabad",
        "MacBook repair in Govindpuram Ghaziabad", "MacBook repair in Crossings Republik Ghaziabad", "MacBook repair in Indirapuram Ghaziabad", "MacBook repair in Vasundhara Ghaziabad",
        "MacBook repair in Mohan Nagar Ghaziabad", "MacBook repair in Pratap Vihar Ghaziabad", "MacBook repair in Vijay Nagar Ghaziabad", "MacBook repair in Maliwara Ghaziabad",
        "MacBook repair in Sahibabad Ghaziabad", "MacBook repair in Lohia Nagar Ghaziabad", "MacBook repair in Shastri Nagar Ghaziabad", "MacBook repair in Sanjay Nagar Ghaziabad",
        "MacBook repair in Nehru Nagar Ghaziabad", "MacBook repair in Civil Lines Ghaziabad", "MacBook repair in Lal Kuan Ghaziabad", "MacBook repair in Link Road Ghaziabad",
        "MacBook repair in GT Road Ghaziabad", "MacBook repair in NH24 Ghaziabad", "MacBook repair in Meerut Road Ghaziabad", "MacBook repair in Delhi Ghaziabad Border"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge className="bg-white/20 text-white">All Models Supported</Badge>
              <Badge className="bg-white/20 text-white">2013-2024</Badge>
              <Badge className="bg-white/20 text-white">Same Day Service</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Select Your Apple Device Model
              <br />
              <span className="text-blue-200">For Expert Repair Service</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Choose your specific Apple device model below. We repair all MacBook, iMac, and Mac Mini models from 2013 to 2024 with genuine parts and professional service.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center justify-center space-x-3 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Apple%20device%20repair%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Device Model for Repair Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on your specific model to book repair service. All models from 2013-2024 supported.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {appleDevices.map((deviceCategory, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${deviceCategory.color} mr-4`}>
                    <deviceCategory.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{deviceCategory.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {deviceCategory.models.map((model, modelIndex) => (
                    <Card key={modelIndex} className="hover:shadow-md transition-all duration-300 border-l-4 border-blue-500">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                              {model.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{model.year}</p>
                          </div>
                          
                          <Button 
                            onClick={() => handleBookService(`${model.name} (${model.year}) Repair Service`)}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs py-2"
                          >
                            Book Service
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common MacBook Model Search in Noida */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Apple Device Searches in Noida
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're searching for with our comprehensive Apple device repair services across Noida Greater Noida
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {searchTermsRows.map((row, rowIndex) => (
              <div key={rowIndex} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg ${row.color} mr-3`}>
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{row.title}</h3>
                </div>
                
                {/* Horizontal Scrolling Search Terms */}
                <div className="relative">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                      {row.terms.map((term, termIndex) => (
                        <div key={termIndex} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500 flex-shrink-0 w-80 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <Search className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium text-gray-900 text-sm leading-relaxed capitalize">{term}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="flex justify-center mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      <span>Scroll horizontally to see more searches</span>
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Statistics */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">48+ Popular Apple Device Searches in Noida</h3>
            <p className="text-blue-100">Comprehensive repair services for all Apple device models across Noida Greater Noida with local expertise</p>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can't Find Your Device Model Search?
              </h3>
              <p className="text-gray-600 mb-4">
                We repair all Apple devices from 2013-2024. Contact us directly for any model not listed above!
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20help%20with%20Apple%20device%20repair%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>Ask Our Experts on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems We Repair in Mac */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Problems We Repair in Mac
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert repair services for all Apple device issues. From simple replacements to complex logic board repairs, we fix every Mac problem with precision.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {repairServicesRows.map((row, rowIndex) => (
              <div key={rowIndex} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg ${row.color} mr-3`}>
                    <row.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{row.title}</h3>
                </div>
                
                {/* Horizontal Scrolling Repair Terms */}
                <div className="relative">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                      {row.terms.map((term, termIndex) => (
                        <div key={termIndex} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500 flex-shrink-0 w-80 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <Wrench className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="font-medium text-gray-900 text-sm leading-relaxed capitalize">{term}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="flex justify-center mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      <span>Scroll horizontally to see more repair services</span>
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Repair Statistics */}
          <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">490+ Mac Repair Services Available</h3>
            <p className="text-green-100">Complete repair solutions for every Apple device model and component with expert technicians</p>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need a Specific Repair Service?
              </h3>
              <p className="text-gray-600 mb-4">
                From screen replacements to logic board repairs, we handle all Mac repair services. Get instant quote for your device!
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Mac%20repair%20service%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Wrench className="h-4 w-4" />
                <span>Get Repair Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Apple Repair Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about MacBook, iMac, and Mac Mini repair services in Delhi NCR
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pl-8 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Still Have Questions About Your Apple Device?</h3>
              <p className="text-blue-100 mb-4">
                Our expert technicians are ready to help with any Apple repair question
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20Apple%20device%20repair`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Coverage */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Apple Repair Service Locations Across Delhi NCR
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional MacBook, iMac, and Mac Mini repair services available across 200+ locations in Delhi NCR with free pickup and delivery
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {serviceAreas.map((cityArea, cityIndex) => (
              <div key={cityIndex} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg ${cityArea.color} mr-3`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cityArea.city}</h3>
                  <div className="ml-auto flex items-center text-green-600 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Same Day Service</span>
                  </div>
                </div>
                
                {/* Service Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {cityArea.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-blue-300">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800 capitalize">{area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Service Coverage Statistics */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">200+ Service Locations Across Delhi NCR</h3>
            <p className="text-orange-100">Complete Apple device repair coverage with free pickup and delivery in all areas</p>
          </div>

          {/* Service Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Doorstep Service</h3>
              <p className="text-gray-600 text-sm">Free pickup and delivery from your location across all Delhi NCR areas</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Same Day Repair</h3>
              <p className="text-gray-600 text-sm">Most Apple device repairs completed within 2-4 hours across all locations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified Apple repair specialists serving all Delhi NCR locations</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Don't See Your Area Listed?
              </h3>
              <p className="text-gray-600 mb-4">
                We provide Apple device repair services across entire Delhi NCR. Contact us to confirm service availability in your area!
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Apple%20device%20repair%20service%20in%20my%20area`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Check Service Availability</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}