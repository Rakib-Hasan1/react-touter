import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {



  const { name, price, description, features, popular } = pricing;
  return (
    <div className="flex flex-col">
      <div className="card w-96 bg-base-100 shadow-sm flex-1">
      {popular && <span className="badge badge-xs badge-warning text-center ml-5">Most Popular</span>}
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">${price}</span>
          </div>


        <div className="flex-1 h-full">
        <p className="py-4">{description}</p>
            {
                features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
        </div>

          
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
