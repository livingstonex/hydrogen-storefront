import Green from '../assets/green.png';
import Blue from '../assets/blue.png';
import Navy from '../assets/navy.png';
import Pink from '../assets/pink.png';
import Orange from '../assets/orange.png';
import Yellow from '../assets/yellow.png';
import GreenSecondary from '../assets/green-secondary.png';
import BlueSecondary from '../assets/blue-secondary.png';
import NavySecondary from '../assets/navy-secondary.png';
import PinkSecondary from '../assets/pink-secondary.png';
import OrangeSecondary from '../assets/orange-secondary.png';
import YellowSecondary from '../assets/yellow-secondary.png';

const cardMockData = () => {
    return {
      onSale: true,
      productImage: Green,
      productTitle: 'Plain T-Shirt',
      companyName: 'Good Brand Company',
      originalPrice: '29.50',
      discountedPrice: '20.00',
      variantSwatches: [
        {
          id: 1,
          color: 'bg-[#FF6633]',
          current: true,
          swatchImage: Orange,
          secondaryImage: OrangeSecondary,
        },
        {
          id: 2,
          color: 'bg-[#006600]',
          current: false,
          swatchImage: Green,
          secondaryImage: GreenSecondary,
        },
        {
          id: 3,
          color: 'bg-[#00639C]',
          current: false,
          swatchImage: Blue,
          secondaryImage: BlueSecondary,
        },
        {
          id: 4,
          color: 'bg-[#FCE78D]',
          current: false,
          swatchImage: Yellow,
          secondaryImage: YellowSecondary,
        },
        {
          id: 5,
          color: 'bg-[#FFCCFF]',
          current: false,
          swatchImage: Pink,
          secondaryImage: PinkSecondary,
        },
        {
          id: 6,
          color: 'bg-[#19264B]',
          current: false,
          swatchImage: Navy,
          secondaryImage: NavySecondary,
        },
      ]
    }
  };

  export function useProductCardMockData() {
    return cardMockData();
  }

