import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import DealMedicine from "../../Components/DealMedicine/DealMedicine";
import Category from "./Category";
import DiscountProducts from "./DiscountProducts";
import TopBrands from "./TopBrands";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Health Care | Home</title>
        </Helmet>
      </div>
      <Banner></Banner>
      <Category></Category>
      <DiscountProducts></DiscountProducts>
      <DealMedicine></DealMedicine>
      <TopBrands></TopBrands>
    </div>
  );
};

export default Home;
