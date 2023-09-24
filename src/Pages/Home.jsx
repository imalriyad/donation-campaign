import { useLoaderData } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import Hero from "../Header/Hero";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Hero></Hero>
    <div className="mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 my-32 max-w-screen-2xl gap-6">
      {
        data?.map(item => <HomeCard key={item.id} item={item}></HomeCard> )
      }
   
   </div>
    </div>
  );
};

export default Home;
