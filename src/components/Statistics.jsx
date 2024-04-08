import { iconBrand } from "../utils";
import { iconCustomizable } from "../utils";
import { iconDetailed } from "../utils";

// eslint-disable-next-line react/prop-types
const Statistics = () => {
  return (
    <section className="bg-slate-200 py-12 pb-32 pt-32">
      <div className="screen-max-width px-2">
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <h2 className="text-center text-3xl font-bold">
            Advanced Statistics
          </h2>
          <p className="text-center text-violet-100">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className="md:flex md:flex-row flex flex-col items-center mt-24">
          <div className="bg-white px-6 py-10 pt-14 rounded-md relative flex flex-col md:items-start items-center">
            <div className="bg-violet-default w-fit p-3 rounded-full flex items-center justify-center absolute top-[-18%]">
              <img src={iconBrand} alt="icond brand recognition" />
            </div>
            <h3 className="text-xl font-bold mb-4">Brand Recognition</h3>
            <p className="text-violet-100 text-sm md:text-left text-center">
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instill cofidence in
              your content.
            </p>
          </div>
          <div className="md:w-24 md:h-2 h-20 w-2 bg-cyan"></div>
          <div className="bg-white px-6 py-10 pt-14 rounded-md relative md:translate-y-10 flex flex-col md:items-start items-center">
            <div className="bg-violet-default w-fit p-3 rounded-full flex items-center justify-center absolute top-[-18%]">
              <img src={iconDetailed} alt="icond detailed records" />
            </div>
            <h3 className="text-xl font-bold mb-4">Detailed Records</h3>
            <p className="text-violet-100 text-sm md:text-left text-center">
              Get insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="md:w-24 md:h-2 h-20 w-2 bg-cyan"></div>
          <div className="bg-white px-6 py-10 pt-14 rounded-md relative md:translate-y-20 flex flex-col md:items-start items-center">
            <div className="bg-violet-default w-fit p-3 rounded-full flex items-center justify-center absolute top-[-18%]">
              <img src={iconCustomizable} alt="icond fully costomizable" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fully Costomizable</h3>
            <p className="text-violet-100 text-sm md:text-left text-center">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
