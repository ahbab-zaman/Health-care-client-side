import { MdOutlineLocalShipping } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { CiGift } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
const service = [
  {
    id: "1",
    name: "Free Shipping",
    description: "For all order over $100",
    icon: <MdOutlineLocalShipping  size={25}/>,
  },
  {
    id: "2",
    name: "Cash On Delivery",
    description: "100% money back",
    icon: <GiCash size={25} />,
  },
  {
    id: "3",
    name: "Special Gift Card",
    description: "Offer special bonuses",
    icon: <CiGift size={25} />,
  },
  {
    id: "4",
    name: "24/7 Support",
    description: "Answer for question",
    icon: <RiCustomerServiceLine size={25} />,
  },
];
const Services = () => {
  return (
    <div className="flex lg:flex-row flex-col w-11/12 mx-auto justify-between py-4">
      {service.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Services;
