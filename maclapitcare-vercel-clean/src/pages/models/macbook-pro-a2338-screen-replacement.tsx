import MacBookModelPage from './macbook-model-template';

export default function MacBookProA2338ScreenReplacement() {
  return (
    <MacBookModelPage
      modelNumber="A2338"
      deviceName="MacBook Pro"
      year="M1 2020"
      screenSize="13.3-inch"
      chipset="Apple M1"
      serviceType="screen"
      price="₹12,999"
      originalPrice="₹18,999"
      features={[
        "Retina Display with True Tone",
        "P3 Wide Color Gamut", 
        "500 nits Brightness",
        "Touch Bar Support",
        "LED-backlit Display",
        "2560×1600 Resolution"
      ]}
    />
  );
}