import "./App.css";
import images from "../src/assets/images/image-equilibrium.jpg";
import eth from "../src/assets/images/icon-ethereum.svg";
import clock from "../src/assets/images/icon-clock.svg";
import person from "../src/assets/images/image-avatar.png";
import iconView from "../src/assets/images/icon-view.svg";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center sm:p-6 2xl:p-16 custom-bg outfit-font ">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-sm rounded-xl p-3 custom-card custom-shadow">
        <div className="m-4 relative group cursor-pointer">
          <img src={images} alt="image" className="rounded-xl" />

          <div
            className="absolute inset-0 rounded-xl
              bg-cyan-400/50
              opacity-0
              flex items-center justify-center
              transition-opacity duration-200
              group-hover:opacity-100"
          >
            <img src={iconView} alt="view" className="h-12 w-12" />
          </div>
        </div>

        <section className="title text-white m-4 mt-6 cursor-pointer hover:text-cyan-400">
          Equilibrium #3429
        </section>

        <section className="title1 custom-text m-4 ">
          Our Equilibrium collection promotes balance and calm.
        </section>

        <div className="flex items-center justify-between m-4 ">
          <div className="flex items-center justify-center gap-2">
            <img src={eth} alt="ethereum" />
            <span className="custom-color "> 0.041 ETH</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={clock} alt="clock" />
            <span className="custom-text">3 days left</span>
          </div>
        </div>

        <hr className="custom-line m-4 " />

        <div className="flex items-center justify-start m-4 gap-2 ">
          <img
            className="border-1 rounded-full border-white w-12 h-12"
            src={person}
            alt="person"
          />
          <span className="title3">Creation of</span>
          <span className="title4 text-white cursor-pointer hover:text-cyan-400">
            {" "}
            Jules Wyvern
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
