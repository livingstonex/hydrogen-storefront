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


export const cardData = () => {
    return {
      onSale: true,
      productImage: Green,
      productTitle: 'Plain T-Shirt',
      companyName: 'Good Brand Company',
      variantSwatches: [
        {
          id: 1,
          color: 'bg-[#FF6633]',
          current: true,
          swatchImage: Orange
        },
        {
          id: 2,
          color: 'bg-[#006600]',
          current: false,
          swatchImage: Green
        },
        {
          id: 3,
          color: 'bg-[#00639C]',
          current: false,
          swatchImage: Navy
        },
        {
          id: 4,
          color: 'bg-[#FCE78D]',
          current: false,
          swatchImage: Yellow
        },
        {
          id: 5,
          color: 'bg-[#FFCCFF]',
          current: false,
          swatchImage: Pink
        },
        {
          id: 6,
          color: 'bg-[#19264B]',
          current: false,
          swatchImage: Blue
        },
      ]
    }
  }