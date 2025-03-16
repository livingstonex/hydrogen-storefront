import React, { useState } from "react";

type VariantSwatch = {
    id: number;
    color: string;
    current?: boolean;
    swatchImage: string;
  };
  
type ProductData = {
    onSale: boolean;
    productImage: string;
    productTitle: string;
    companyName: string;
    variantSwatches: VariantSwatch[];
  };


export function ProductCard({ data }: { data: ProductData }) {
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

            <div className='flex relative justify-center bg-[#FFFFF] p-5 border border-gray-300 rounded-xl'>
                {
                    data.onSale ? <span className='z-30 left-5 top-5 absolute text-red-500 border-2 border-red-500 rounded-full h-10 pt-1.5 px-8'>On Sale!</span> : null
                }
                
                <img src={productImage}  width='350px' alt='Green shirt' className='mt-4' />
            </div>

            <div className='flex gap-2'> 
                {
                    data.variantSwatches.map((swatch, index) => (
                        <div 
                            key={swatch.color} 
                            onClick={() => handleClick(swatch)}
                            className={`flex justify-center items-center w-10 h-10 rounded-full ${(swatch.id === currentSwatch?.id) && 'border-2 border-[#0A4874]' } mt-4`}>
                            <div className={`w-8 h-8 ${swatch.color} rounded-full`}></div>
                        </div>
                    ))
                }
            </div>
                

            <div className='flex flex-col gap-2 mt-5'>
                <div className='text-[#111111] font-normal text-sm'>{data.companyName}</div>
                <div className='text-[#0A4874] text-base font-medium'>{data.productTitle}</div>
                <div className='flex justify-start gap-2'>
                <p className='text-black-400 line-through'>29.50</p>
                <p className='text-red-400'>20.00</p>
                </div>
            </div>
            </div>
        </div>
    )
}