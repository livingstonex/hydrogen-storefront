export default function ProductInfo(
    { companyName, productTitle, originalPrice, discountedPrice } : 
    { 
        companyName: string;
        productTitle: string;
        originalPrice: string;
        discountedPrice: string;
    }) {
    return (
        <div className='flex flex-col gap-2 mt-5'>
            <div className='text-[#111111] font-normal text-sm'>{companyName}</div>
            <div className='text-[#0A4874] text-base font-medium'>{productTitle}</div>
            <div className='flex justify-start gap-2'>
                <p className={`text-black-400 ${discountedPrice && 'line-through'}`}>{originalPrice}</p>
                <p className='text-red-400'>{discountedPrice ?? null}</p>
            </div>
        </div>
    )
}