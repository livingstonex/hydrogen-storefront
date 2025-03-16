import { VariantSwatch } from "custom";

export default function ProductHeader(
    { onSale, productImage, currentSwatch } : 
    { 
        onSale: boolean;
        productImage: string | undefined;
        currentSwatch: VariantSwatch | undefined;
    }) {
    return (
        <div className='flex relative group justify-center bg-[#FFFFF] p-5 border border-gray-300 rounded-xl'>
                {
                    onSale ? <span className='z-30 left-5 top-5 absolute text-red-500 border-2 border-red-500 rounded-full h-10 pt-1.5 px-8'>On Sale!</span> : null
                }
                
                <img src={productImage}  width='350px' alt='Green shirt' className='mt-4' />

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 ml-4 hidden group-hover:block py-4 shadow-lg rounded-lg">
                    <img src={currentSwatch?.secondaryImage} alt="Tooltip Image" className="w-48 h-48 object-contain" />
                </div>
        </div>
    )
}