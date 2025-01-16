import Banner from "../../Components/Banner/Banner";
import Category from "./Category";
import DiscountProducts from "./DiscountProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DiscountProducts></DiscountProducts>
        </div>
    );
};

export default Home;