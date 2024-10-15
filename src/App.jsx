import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="bg-[#ffffff] text-black w-52 h-48 md:w-full lg:w-full rounded-xl ">
          <h2 className="text-red-900 font-bold text-2xl pt-3 ">
            Your Cart (0)
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <h2 className="text-4xl pl-5 font-extrabold">Desserts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black">
            {/* card-1 */}
            <div className="p-6 rounded-xl">
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl relative"
              />
              <div className="">
                <button className="text-black border-stone-950 px-6 py-1 text-sm rounded-3xl ">
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
              {" "}
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              {" "}
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
              <img
                src="/src/assets/2148352300.jpg"
                alt=""
                className="rounded-2xl"
              />
              <div>
                <button className="bg-white text-black border-stone-950 px-6 py-1 text-sm rounded-3xl">
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
