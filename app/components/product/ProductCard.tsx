import { useState } from "react";
import { VariantSwatch, ProductData } from "custom";
import ProductSwatchVariant from "./ProductSwatchVariant";
import ProductInfo from "./ProductInfo";
import ProductHeader from "./ProductHeader";


export default function ProductCard({ data }: { data: ProductData }) {
    const [productImage, setProductImage] = useState<string | undefined>(data.variantSwatches[0]?.swatchImage);
    const [currentSwatch, setCurrentSwatch] = useState<VariantSwatch | undefined>(data.variantSwatches[0]);

    const handleClick = (swatch: VariantSwatch) => {
        setProductImage(swatch.swatchImage);
        setCurrentSwatch(swatch);
    }

    return (
        <div className='flex justify-center'>
            <div className='flex-col px-8'>
                <h1 className='justify-start'>Product Card</h1>
                <ProductHeader onSale={data.onSale} productImage={productImage} currentSwatch={currentSwatch}/>
                <ProductSwatchVariant variantSwatches={data.variantSwatches} currentSwatch={currentSwatch} handleClick={handleClick}/>
                <ProductInfo
                    companyName={data.companyName}
                    productTitle={data.productTitle} 
                    originalPrice={data.originalPrice}
                    discountedPrice={data.discountedPrice}
                />
            </div>
        </div>
    )
}