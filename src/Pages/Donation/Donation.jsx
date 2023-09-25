import { useEffect, useState } from "react";
import DonationCard from "../../Cards/DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState();
  const [isSeeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("stored"));
    if (storedData) {
      setDonated(storedData);
    }
  }, []);
  return (
    <div>
      {donated?.length === undefined ? (
        <h1 className="md:text-4xl text-2xl text-center font-bold my-20">
          Opss! You have not Donated yet
        </h1>
      ) : (
        <div className="px-4 mx-auto max-w-screen-2xl grid md:grid-cols-2 gap-5 mt-16">
          {isSeeAll
            ? donated?.map((item) => (
                <DonationCard key={item.id} item={item}></DonationCard>
              ))
            : donated
                ?.slice(0, 4)
                .map((item) => (
                  <DonationCard key={item.id} item={item}></DonationCard>
                ))}
        </div>
      )}

      {donated?.length > 4 && (
        <div className="text-center my-10 mx-auto">
          <button
            onClick={() => setSeeAll(!isSeeAll)}
            className="btn btn-accent text-white"
          >
            {isSeeAll ? "See Less" : "See All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
