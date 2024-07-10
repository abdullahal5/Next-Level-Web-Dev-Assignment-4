import FeaturedCard from "../../components/home/FeaturedCard";
import KeyboardBrand from "../../components/home/KeyboardBrand";
import LatestUpdate from "../../components/home/LatestUpdate";
import Review from "../../components/home/Review";
import Service from "../../components/home/Service";
import Slider from "../../components/home/Slider";

const Home = () => {
  return (
    <div className="space-y-10">
      <Slider />
      <Service />
      <LatestUpdate />
      <FeaturedCard />
      <KeyboardBrand />
      <Review />
    </div>
  );
};

export default Home;
