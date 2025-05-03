const ServiceCard = ({ item }) => {
  const { name, description, icon } = item;
  return (
    <div className="p-6 border-[2px] border-gray-400 flex flex-col items-center justify-center gap-3 w-[250px] h-[160px] text-center rounded-md">
      <p className="bg-white rounded-full flex justify-center items-center shadow-2xl m-auto p-4 text-black">
        {icon}
      </p>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm  text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
