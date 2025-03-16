import { VariantSwatch } from "custom";

export default function ProductSwatchVariant(
    { variantSwatches, handleClick, currentSwatch } : 
    { 
        variantSwatches: VariantSwatch[];
        handleClick: (swatch: VariantSwatch) => void;
        currentSwatch: VariantSwatch | undefined
    }) {
    return (
            <div className='flex gap-2'> 
                {
                    variantSwatches.map((swatch, index) => (
                        <div 
                            key={swatch.color} 
                            onClick={() => handleClick(swatch)}
                            className={`flex justify-center items-center w-10 h-10 rounded-full ${(swatch.id === currentSwatch?.id) && 'border-2 border-[#0A4874]' } mt-4`}>
                            <div className={`w-8 h-8 ${swatch.color} rounded-full`}></div>
                        </div>
                    ))
                }
            </div>
    )
}