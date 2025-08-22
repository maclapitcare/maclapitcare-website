import { 
  Laptop, Apple, Monitor, HardDrive, Battery, Keyboard, Cpu, Volume2, Fan,
  MousePointer, Wifi, Usb, Wrench, Shield, Zap, Database, Camera, Mic,
  Power, RefreshCcw, Smartphone, Gamepad2, Settings, MemoryStick, CircuitBoard
} from "lucide-react";

export const LOCATIONS = [
  { name: "Noida", path: "/macbook-repair-noida-greater-noida" },
  { name: "Ghaziabad", path: "/laptop-repair-ghaziabad-vaishali-indirapuram" },
  { name: "Delhi", path: "/laptop-repair-delhi-doorstep-service" },
  { name: "Gurgaon", path: "/laptop-repair-gurgaon-gurugram" },
];

export const SERVICES = [
  { name: "MacBook Repair", path: "/macbook-repair-service-delhi-ncr", icon: Apple },
  { name: "iMac Repair", path: "/imac-repair-service-delhi-ncr", icon: Monitor },
  { name: "Mac Mini Repair", path: "/mac-mini-repair-service-delhi-ncr", icon: HardDrive },
  { name: "Laptop Repair", path: "/laptop-repair-service-noida-delhi", icon: Laptop },
  { name: "Gaming Laptop Repair", path: "/gaming-laptop-repair-noida-delhi", icon: Laptop },
  { name: "Surface Repair", path: "/surface-repair-service-delhi-ncr", icon: Monitor },
  { name: "MacBook Pro Screen", path: "/macbook-pro-screen-replacement-price-delhi-ncr", icon: Monitor },
  { name: "MacBook Air Screen", path: "/macbook-air-screen-replacement-price-delhi-ncr", icon: Monitor },
  { name: "MacBook Bezel Replacement", path: "/macbook-bezel-replacement-aluminum-frame-delhi-ncr", icon: Monitor },
  { name: "MacBook Touch Bar", path: "/macbook-touchbar-replacement-touch-id-delhi-ncr", icon: Monitor },
];

export const SPECIALIZED_SERVICES = [
  { name: "Logic Board Repair", icon: Cpu, path: "/macbook-logic-board-repair-chip-level" },
  { name: "Data Recovery", icon: HardDrive, path: "/laptop-data-recovery-service-noida" },
  { name: "Battery Replacement", icon: Battery },
  { name: "Keyboard Repair", icon: Keyboard },
  { name: "Trackpad Repair", icon: MousePointer },
  { name: "WiFi Repair", icon: Wifi },
  { name: "USB Port Repair", icon: Usb },
  { name: "Speaker Repair", icon: Volume2 },
  { name: "Cooling System", icon: Fan },
  { name: "Performance Upgrade", icon: Zap },
  { name: "Virus Removal", icon: Shield },
  { name: "Camera Repair", icon: Camera },
  { name: "Microphone Repair", icon: Mic },
  { name: "Power Jack Repair", icon: Power },
  { name: "System Restore", icon: RefreshCcw },
  { name: "Memory Upgrade", icon: MemoryStick },
  { name: "Gaming Optimization", icon: Gamepad2 },
  { name: "Hardware Diagnosis", icon: Settings },
  { name: "Motherboard Repair", icon: CircuitBoard },
  { name: "Mobile Device Repair", icon: Smartphone }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    location: "Noida Sector 121",
    rating: 5,
    comment: "My MacBook Pro 2019 screen was completely shattered after dropping it. They replaced it with original quality display in just 3 hours. Apple Store quoted much higher! The color accuracy and brightness is exactly like new. Outstanding same-day service.",
    service: "MacBook Pro Screen Replacement"
  },
  {
    name: "Priya Sharma",
    location: "Delhi Lajpat Nagar",
    rating: 5,
    comment: "My MacBook Air M1 was completely dead after liquid spill. Other shops said motherboard replacement needed. These experts did component-level cleaning and repair. It's working perfectly for 6+ months now with all data intact!",
    service: "Liquid Damage Logic Board Repair"
  },
  {
    name: "Amit Singh",
    location: "Greater Noida",
    rating: 5,
    comment: "My ASUS gaming laptop was overheating and shutting down during games. They cleaned entire cooling system, replaced thermal paste, and upgraded RAM. Now runs all games smoothly at optimal temperature. Outstanding technical expertise!",
    service: "Gaming Laptop Performance Upgrade"
  },
  {
    name: "Dr. Sneha Gupta",
    location: "Gurgaon DLF Phase 2",
    rating: 5,
    comment: "As a doctor working from home, my MacBook is critical. Battery was draining in 45 minutes. They replaced with genuine Apple battery and now getting all-day backup! The warranty and doorstep service was exceptional.",
    service: "MacBook Air M1 Battery Replacement"
  },
  {
    name: "Kavya Reddy",
    location: "Ghaziabad Vaishali",
    rating: 5,
    comment: "My laptop crashed with 5 years of family photos and work files. I thought everything was lost forever. Their data recovery team retrieved almost all of my data including videos from corrupted SSD. Incredible technical skills - they're data recovery wizards!",
    service: "SSD Data Recovery Service"
  },
  {
    name: "Vikram Malhotra",
    location: "Delhi CP Connaught Place", 
    rating: 5,
    comment: "My Surface Pro 8 touch screen stopped responding after a fall. Microsoft service center wanted much higher price for screen replacement. These experts fixed it with original quality display and completed in 4 hours. Touch sensitivity is perfect!",
    service: "Microsoft Surface Pro Screen Repair"
  },
  {
    name: "Rahul Gamer",
    location: "Noida Sector 62",
    rating: 5,
    comment: "My ROG Strix gaming laptop was overheating and throttling during PUBG. They replaced thermal pads, cleaned GPU, upgraded to liquid metal paste and added extra cooling fan. Now runs at optimal temperature with excellent FPS! Gaming performance boosted dramatically.",
    service: "Gaming Laptop Cooling & Performance"
  },
  {
    name: "Maya Design Studio",
    location: "Gurgaon Cyber City",
    rating: 5,
    comment: "Our Mac Mini 2018 was struggling with 4K video editing projects. They upgraded to high-capacity RAM and fast NVMe SSD. Now renders 4K videos much faster! Our entire creative workflow transformed. Professional upgrade service with data migration included.",
    service: "Mac Mini Performance Upgrade"
  },
  {
    name: "Ananya Startup",
    location: "Delhi Janakpuri",
    rating: 5,
    comment: "Running a tech startup, my MacBook Pro is my lifeline. Suddenly it wouldn't boot - completely dead. Panic mode! They diagnosed a faulty logic board component and repaired it at chip level. Now works like new with all data intact. Saved my business deadlines!",
    service: "MacBook Logic Board Chip-Level Repair"
  },
  {
    name: "Professor Sharma",
    location: "Gurgaon Sector 14",
    rating: 5,
    comment: "My iMac 2017 was running extremely slow with spinning beach balls constantly. They upgraded the hard drive to SSD and increased RAM. The transformation is incredible - boots in 15 seconds, applications open instantly. It's like getting a new computer!",
    service: "iMac SSD Upgrade & Performance Enhancement"
  },
  {
    name: "Ravi Photography",
    location: "Noida Film City",
    rating: 5,
    comment: "As a wedding photographer, my laptop contains thousands of precious memories. It suddenly crashed during post-processing. They recovered all RAW files and edited photos from the dead hard drive. Professional service with complete confidentiality. Highly recommended!",
    service: "Professional Photo Recovery & Restoration"
  },
  {
    name: "Tech Entrepreneur",
    location: "Ghaziabad Indirapuram", 
    rating: 5,
    comment: "My MacBook keyboard had multiple key failures making typing impossible. Apple Store said complete top case replacement needed. These experts replaced individual keys and mechanisms. Keyboard feels brand new and cost was very reasonable. Excellent technical skills!",
    service: "MacBook Keyboard Individual Key Replacement"
  },
  {
    name: "Vikash Yadav",
    location: "Delhi Janakpuri",
    rating: 5,
    comment: "MacBook Pro 2017 had Flexgate issue - screen flickering and stage light effect. Apple quoted ₹42,000 for complete display replacement. These experts fixed just the flex cable for ₹6,500 and it's working perfectly for 10+ months. Amazing expertise!",
    service: "MacBook Pro Flexgate Repair",
    savings: "₹35,500 saved vs Apple Store",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
  },
];

export const CONTACT_INFO = {
  phone1: "9211720790",
  phone2: "8750160550",
  email: "Maclapitcare@gmail.com",
  workingHours: "Mon-Sat: 10:30 AM - 8:30 PM",
  address: "Shop 75, 1st Floor, Opposite Cleo County Society, Sector 121 Noida 201301",
  socialHandle: "@maclapitcare"
};

export const WHY_CHOOSE_US = [
  {
    title: "Free Doorstep Service",
    description: "We come to your location for pickup and delivery at no extra cost",
    icon: "🏠"
  },
  {
    title: "High Quality Parts",
    description: "We use only genuine and premium quality replacement parts",
    icon: "💎"
  },
  {
    title: "Expert Technicians",
    description: "Certified technicians with years of experience in MacBook repair",
    icon: "👨‍💼"
  },
  {
    title: "No Fix No Fee",
    description: "You only pay if we successfully repair your device",
    icon: "💰"
  },
];
