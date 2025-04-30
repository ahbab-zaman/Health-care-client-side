import { DNA } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-32">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Loading;
