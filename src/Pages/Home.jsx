import { useLoaderData } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import Hero from "../Header/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  const data = useLoaderData();
  const [info, setData] = useState(data);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    setData(data);
  }, [data,searchText]);

  const handleSearchInput = (e) => {
    setsearchText(e.target.value);
  };
  const handleSearchButton = () => {
    const filterArray = info?.filter((item) => item.category.toLowerCase() === searchText.toLowerCase());
    setData(filterArray)
   
  };
  return (
    <div>
      <Hero
        handleSearchButton={handleSearchButton}
        setsearchText={setsearchText}
        handleSearchInput={handleSearchInput}
      ></Hero>
      {
     info.length === 0 ? <h1 className="text-center font-bold mt-6 text-3xl text-red-500">Opss! Typing Mistake i guess... Try Again!</h1> : <div className="mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 my-32 max-w-screen-2xl gap-6">
        {info?.map((item) => (
          <HomeCard key={item.id} item={item}></HomeCard>
        ))}
      </div>
      }
    </div>
  );
};

export default Home;
