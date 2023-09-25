import { useEffect, useState } from "react";
import DonationCard from "../../Cards/DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState();
  const [isSeeAll,setSeeAll] = useState(false)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("stored"));
    if (storedData) {
      setDonated(storedData);
    } 
  }, []);
  return (
    <div>
      <div className="px-4 mx-auto max-w-screen-2xl grid md:grid-cols-2 gap-5 mt-16">
        {
            isSeeAll ? donated?.map(item => <DonationCard key={item.id} item={item}></DonationCard>) :
            donated?.slice(0,4).map(item => <DonationCard key={item.id} item={item}></DonationCard>)
        }
      </div>
      {
        donated?.length >= 4 && !isSeeAll && <div onClick={()=> setSeeAll(true)} className="text-center"><button className="btn btn-accent my-10 text-white">See All</button></div>
      }
       
    </div>
  );
};

export default Donation;
