export const PortoflioCard = ({ data }) => {
  return (
    <div className="w-full overflow-hidden group relative hover:border border-gray-400">
      <img
        src={data.logo}
        alt={data.label}
        className="inset-0 object-cover w-full h-full group-hover:blur-sm group-hover:scale-110 transition-all transform"
      />
      <div className="absolute top-0 p-5 flex justify-center bg-opacity-0 group-hover:bg-opacity-40 bg-black items-center w-full h-full">
        <div className="relative">
          <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="p-2 flex flex-col items-center">
              <p className="text-center font-bold text-4xl text-white">
                {data.label}
              </p>
              <p className="text-center text-lg text-gray-200 mb-6">
                {data.stack}
              </p>
              <button className="outline-none rounded-sm bg-green-500 text-white py-2 px-6">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
