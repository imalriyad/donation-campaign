import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HomeCard = ({item}) => {
     const {id,cardBg,category,categoryBg,categoryImage,color,title} = item
  return (
    <div>
     <Link to={`/donationdetails/${id}`}>
     <div className="flex cursor-pointer h-auto flex-col rounded-xl border"  style={{ backgroundColor: `${cardBg}`}}>
        <div className="rounded-xl text-white">
          <img src={categoryImage} className="w-full"/>
        </div>
        <div className="p-4">
            <div style={{
                backgroundColor: `${categoryBg}`,
                color: `${color}`
            }} className={"px-[10px] font-medium py-[4px] inline-block rounded-md"}>{category}</div>
          <h5 className="my-4 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{
            color:`${color}`
          }}>
            {title}
          </h5>
        </div>

      </div>
      </Link>
    </div>
  );
};

export default HomeCard;
