const CategoryCard = ({ image, category, number }) => {
  return (
    <div className="flex justify-center items-center gap-4 bg-[#EDF7F9] p-2 transform transition-transform duration-300 hover:scale-105">
      <div>
        <img className="w-[150px] h-[150px]" src={image} alt="" />
      </div>
      <div>
        <h4 className="text-xl font-semibold">{category}</h4>
        <p text-lg font-semibold>
          {number} products
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
