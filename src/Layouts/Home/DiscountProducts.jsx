import Title from "../../Components/Title/Title";
import useDiscountMedicine from "../../Hooks/useDiscountMedicine";

const DiscountProducts = () => {
  const [discount] = useDiscountMedicine();
  return (
    <div>
      <Title title="Discount Products"></Title>
    </div>
  );
};

export default DiscountProducts;
