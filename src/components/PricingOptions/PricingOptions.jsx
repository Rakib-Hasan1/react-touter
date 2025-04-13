import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-5xl text-center my-20">Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {
                   pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>) 
                }
            </div>
        </div>
    );
};

export default PricingOptions;