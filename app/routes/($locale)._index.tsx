import {type MetaFunction} from '@remix-run/react';
import ProductCard from '~/components/product/ProductCard';
import { useProductCardMockData } from '~/hooks/useProductCardMockData';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export default function Homepage() {
  const data = useProductCardMockData();

  return (
    <div className="home">
      <ProductCard data={data} />
    </div>
  );
}

