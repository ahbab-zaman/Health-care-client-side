import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import DealMedicine from "../../Components/DealMedicine/DealMedicine";
import Category from "./Category";
import DiscountProducts from "./DiscountProducts";
import TopBrands from "./TopBrands";
import Review from "./Review";

const Home = () => {
  return (
    <div className="bg-base-100">
      <div>
        <Helmet>
          <title>Health Care | Home</title>
        </Helmet>
      </div>
      <Banner></Banner>
      <Category></Category>
      <DiscountProducts></DiscountProducts>
      <DealMedicine></DealMedicine>
      <Review></Review>
      <TopBrands></TopBrands>
    </div>
  );
};

export default Home;
