import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex flex-col items-center bg-[#ffffff] text-black w-52 h-52 md: w-72 rounded-xl ">
          <h2 className="text-red-900 font-bold text-2xl pt-3 ">
            Your Cart (0)
          </h2>
          <img
            src="/assets/rb_82226.png"
            alt=""
            className="transition animate-bounce pt-6 w-24 text-center"
          />
          <p className="text-red-900 text-xs pt-1">
            Your added items will appear here...
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <h2
              className="text-4xl pl-5 font-extrabold dark:text-black
            "
            >
              Desserts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black">
            {/* card-1 */}
            <div className="p-6 rounded-xl">
              <div className=" relative  transition duration-300 ease-in-out hover:scale-110 ">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
                <span className=" hover:transition animate-bounce absolute -right-3 -top-2 bg-green-500 text-xs p-1 rounded-lg ">
                  New
                </span>
              </div>

              <div className="">
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-105">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-4 */}
            <div className="p-6 rounded-xl">
              <div className="relative transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
                <span className=" hover:transition animate-spin absolute -right-3 -top-2 bg-red-400 px-2  ">
                  *
                </span>
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-5 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-6 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-7 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-8 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
            {/* card-9 */}
            <div className="p-6 rounded-xl">
              <div className="transition duration-500 ease-in-out hover:scale-110">
                <img
                  src="/assets/2148352300.jpg"
                  alt=""
                  className="rounded-2xl w-60"
                />
              </div>
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#c7b9b6]">Waffle</p>
                <p className=" text-[#5b4f4c] font-extrabold text-left">
                  Waffle with Berries
                </p>
                <p className="text-[#c67b65] font-bold">$6.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
