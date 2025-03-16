export type VariantSwatch = {
    id: number;
    color: string;
    current?: boolean;
    swatchImage: string;
    secondaryImage: string;
  };
  
export type ProductData = {
    onSale: boolean;
    productImage: string;
    productTitle: string;
    companyName: string;
    originalPrice: string;
    discountedPrice: string;
    variantSwatches: VariantSwatch[];
  };