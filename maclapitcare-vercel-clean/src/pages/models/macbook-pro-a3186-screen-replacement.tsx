import MacBookModelPage from './macbook-model-template';

export default function MacBookProA3186ScreenReplacement() {
  return (
    <MacBookModelPage
      modelNumber="A3186"
      deviceName="MacBook Pro"
      year="M4 2024"
      screenSize="14-inch"
      chipset="Apple M4"
      serviceType="screen"
      price="₹29,999"
      originalPrice="₹45,999"
      features={[
        "Liquid Retina XDR Display",
        "120Hz ProMotion Technology",
        "1000 nits Sustained Brightness",
        "1600 nits Peak HDR Brightness", 
        "P3 Wide Color Gamut",
        "3024×1964 Resolution"
      ]}
    />
  );
}