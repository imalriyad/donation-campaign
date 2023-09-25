/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const DonationCard = ({ item }) => {
  const {
    id,
    cardBg,
    price,
    category,
    categoryBg,
    categoryImage,
    color,
    title,
  } = item;
  return (
    <div>
      <div
        className="flex rounded-xl border"
        style={{ backgroundColor: `${cardBg}` }}
      >
        <div className="rounded-xl w-6/12">
          <img src={categoryImage} className="h-full object-cover w-full" />
        </div>
        <div className="p-3 md:p-4 w-6/12">
          <div
            style={{
              backgroundColor: `${categoryBg}`,
              color: `${color}`,
            }}
            className={
              "px-[10px] md:text-base text-xs font-medium md:py-[4px] inline-block rounded-md"
            }
          >
            {category}
          </div>
          <h5 className="my-4 text-[#0B0B0B] block text-xs md:text-lg leading-snug tracking-normal text-blue-gray-900 antialiased font-bold">
            {title}
          </h5>
          <h1
            style={{
              color: `${color}`,
            }}
            className="font-bold text-lg"
          >
            ${price}
          </h1>
          <Link to={`/donationdetails/${id}`}>
            <button
              className="btn m-0 md:btn-md btn-sm md:text-sm text-xs rounded-md mt-4 text-white font-semibold normal-case"
              style={{
                backgroundColor: `${color}`,
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
