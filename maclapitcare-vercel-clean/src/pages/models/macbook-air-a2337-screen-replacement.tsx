import MacBookModelPage from './macbook-model-template';

export default function MacBookAirA2337ScreenReplacement() {
  return (
    <MacBookModelPage
      modelNumber="A2337"
      deviceName="MacBook Air"
      year="M1 2020"
      screenSize="13.3-inch"
      chipset="Apple M1"
      serviceType="screen"
      price="₹8,999"
      originalPrice="₹14,999"
      features={[
        "Retina Display with True Tone",
        "P3 Wide Color Gamut",
        "500 nits Brightness",
        "LED-backlit Display",
        "IPS Technology",
        "2560×1600 Resolution"
      ]}
    />
  );
}