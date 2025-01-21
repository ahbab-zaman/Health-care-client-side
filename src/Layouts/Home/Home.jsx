import Banner from "../../Components/Banner/Banner";
import DealMedicine from "../../Components/DealMedicine/DealMedicine";
import Category from "./Category";
import DiscountProducts from "./DiscountProducts";
import LatestCategory from "./LatestCategory";
import TopBrands from "./TopBrands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DiscountProducts></DiscountProducts>
            <DealMedicine></DealMedicine>
            <TopBrands></TopBrands>
        </div>
    );
};

export default Home;