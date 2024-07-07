import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";
import HomeTab from "../Tabs/Tab/HomeTab";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Gallery></Gallery>
      <Banner></Banner>
      <HomeTab></HomeTab>
    </div>
  );
};

export default Home;
