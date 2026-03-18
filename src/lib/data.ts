export const products = [
  {
    id: 'refined-white-sugar',
    name: 'Refined White Sugar',
    description: 'High-purity, fine granulated sugar for all your baking and beverage needs.',
    imageId: 'product-refined-white',
    specifications: [
      { key: 'Polarization', value: '99.8% min' },
      { key: 'Moisture', value: '0.04% max' },
      { key: 'Ash Content', value: '0.04% max' },
      { key: 'Color', value: '45 ICUMSA' },
    ],
    packaging: ['1kg Bag', '2kg Bag', '5kg Bag', '25kg Bag', '50kg Bag'],
  },
  {
    id: 'natural-brown-sugar',
    name: 'Natural Brown Sugar',
    description: 'Unrefined brown sugar with a rich molasses flavor, perfect for rustic baking.',
    imageId: 'product-brown-sugar',
    specifications: [
      { key: 'Polarization', value: '97.5% min' },
      { key: 'Moisture', value: '0.25% max' },
      { key: 'Ash Content', value: '0.25% max' },
      { key: 'Color', value: '600-800 ICUMSA' },
    ],
    packaging: ['1kg Bag', '2kg Bag', '50kg Bag'],
  },
  {
    id: 'sugarcane-syrup',
    name: 'Sugarcane Syrup',
    description: 'A sweet and versatile syrup made from pure sugarcane juice.',
    imageId: 'product-syrup',
    specifications: [
      { key: 'Brix', value: '79.5 - 80.5' },
      { key: 'pH', value: '5.0 - 5.5' },
      { key: 'Total Sugars', value: '75% min' },
    ],
    packaging: ['500ml Bottle', '1L Bottle', '5L Jerrycan'],
  },
];

export const testimonials = [
  {
    name: 'Asha Mire',
    role: 'Local Farmer',
    quote: 'Since partnering with Soit, my farm\'s productivity has doubled. Their support with modern techniques and fair pricing has transformed my family\'s life. We are grateful for this partnership.',
  },
  {
    name: 'Kiprono Sitienei',
    role: 'Distributor, Transmara Region',
    quote: 'Soit Sugar\'s consistency in quality and delivery is unmatched. They are a reliable partner, and their success has brought so much growth to our local economy. Proud to work with them.',
  },
  {
    name: 'Chef Wanjala',
    role: 'Head Chef, Nairobi Eateries',
    quote: 'The purity of Soit\'s refined sugar makes a noticeable difference in my pastries. Our customers keep coming back for the taste, and I have Soit to thank for that secret ingredient.',
  },
];

export const keyAdvantages = [
  {
    icon: 'Leaf',
    title: 'Unmatched Quality',
    description: 'We adhere to the strictest international standards, using advanced technology to produce pure, high-quality sugar that consistently exceeds expectations.',
  },
  {
    icon: 'Recycle',
    title: 'Sustainable Practices',
    description: 'Our eco-friendly approach minimizes our environmental footprint by using renewable energy, recycling water, and promoting biodiversity on our farms.',
  },
  {
    icon: 'Users',
    title: 'Community Empowerment',
    description: 'We build strong, supportive partnerships with our farmers, providing them with the resources and training needed to thrive and uplift their communities.',
  },
  {
    icon: 'Cog',
    title: 'Modern Technology',
    description: 'Our state-of-the-art factory leverages cutting-edge technology for efficient, clean, and sustainable production, ensuring every grain of sugar is perfect.',
  },
];

export type Product = (typeof products)[0];
export type Testimonial = (typeof testimonials)[0];
export type KeyAdvantage = (typeof keyAdvantages)[0];
