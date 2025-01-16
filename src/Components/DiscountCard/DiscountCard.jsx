const DiscountCard = ({ image, title, discountPrice, basePrice, coupon }) => {
  return (
    <div className="relative bg-[#F8F8F8]  flex flex-col justify-center items-center h-[375px]">
      <p className="absolute top-8 left-6 bg-[#E4573D] text-[#fff] font-semibold w-14 mx-auto px-2 py-1 rounded-md">
        -{coupon}%
      </p>
      <img className="w-[180px] object-cover" src={image} alt="" />
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="flex justify-center gap-2 items-center">
        <p className="font-semibold text-[#E4573D] line-through">
          ${discountPrice}.00
        </p>
        <p className="font-semibold text-[#E4573D]">${basePrice}.00</p>
      </div>
    </div>
  );
};

export default DiscountCard;
