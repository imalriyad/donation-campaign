import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const donationCard = data.find((item) => item.id === parseInt(id));
  const { price, categoryImage, color, title } = donationCard;
  const hadelDonate = () => {
    const donatedCart = [];
    const storedDonated = JSON.parse(localStorage.getItem("stored"));
    if (!storedDonated) {
      donatedCart.push(donationCard);
      localStorage.setItem("stored", JSON.stringify(donatedCart));
      swal(
        "Congratulations",
        `You have succesfully Donatated $${price}!`,
        "success"
      );
    } else {
      const isExist = storedDonated?.find((item) => item.id === parseInt(id));
      if (!isExist) {
        donatedCart.push(...storedDonated, donationCard);
        localStorage.setItem("stored", JSON.stringify(donatedCart));
        swal(
          "Congratulations",
          `You have succesfully Donatated $${price}!`,
          "success"
        );
      } else {
        swal("Opss", `You have already Donatated!`, "error");
      }
    }
  };
  return (
    <div className=" mx-auto my-5  px-4 max-w-screen-2xl">
      <div className="hero relative">
        <img
          src={categoryImage}
          alt=""
          className="w-full h-[70vh] rounded-md object-cover"
        />
        <div className="hero-overlay absolute bottom-0 h-24 md:h-28 bg-opacity-60 bg-[#0B0B0B80]">
          <button
            onClick={hadelDonate}
            style={{
              backgroundColor: `${color}`,
            }}
            className="btn px-5 tracking-wide text-white absolute top-8 md:left-10 left-5 mx-auto"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="my-8">
        <h1 className="md:text-4xl mb-4 text-2xl font-bold">{title}</h1>
        <p>{donationCard.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
