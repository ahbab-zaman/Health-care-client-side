import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import DealMedicine from "../../Components/DealMedicine/DealMedicine";
import Category from "./Category";
import DiscountProducts from "./DiscountProducts";
import TopBrands from "./TopBrands";
import Review from "./Review";
import Join from "../Join/Join";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  const { loading } = useAuth();
  if (loading) return <Loading></Loading>;
  return (
    <div >
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
      <Join></Join>
    </div>
  );
};

export default Home;
