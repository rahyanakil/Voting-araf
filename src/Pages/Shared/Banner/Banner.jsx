import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero max-h-[1600px] h-screen w-auto sm:h-50 "
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div className="grid grid-flow-col gap-4 mb-6 text-center auto-cols-max  justify-end">
            <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
              দিন
              <span className="countdown font-['Li Ador Noirrit'] text-4xl">
                <span style={{ "--value": 15 }}></span>
              </span>
            </div>
            <div className="flex flex-col p-1 bg-green-100 rounded-box text-emerald-800">
              ঘণ্টা
              <span className="countdown font-['Li Ador Noirrit'] text-4xl">
                <span style={{ "--value": 10 }}></span>
              </span>
            </div>
            <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
              মিনিট
              <span className="countdown font-['Li Ador Noirrit'] text-4xl">
                <span style={{ "--value": 24 }}></span>
              </span>
            </div>
            <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
              সেকেন্ড
              <span className="countdown font-['Li Ador Noirrit'] text-4xl">
                <span style={{ "--value": 29 }}></span>
              </span>
            </div>
          </div>

          <div>
            <form className="card-body bg-emerald-100 rounded max-w-3xl max-h-sx">
              <div className="grid md:grid-cols-3 gap-4  ">
                <input
                  placeholder="বাংলাদেশ"
                  className=" bg-green-700 placeholder:text-teal-50 w-full max-w-xs textarea-xs rounded border border-green-700"
                  disabled
                />

                <select className="select shadow text-zinc-800  select-xs w-full max-w-xs border border-green-500">
                  <option disabled selected>
                    বিভাগ নির্বাচন করুন
                  </option>
                  <option>Cheese</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>

                <select className="select shadow text-zinc-800  select-xs w-full max-w-xs border-green-500">
                  <option disabled selected>
                    জেলা নির্বাচন করুন
                  </option>
                  <option>Cheese</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>

                <select className="select shadow text-zinc-800  select-xs w-full max-w-xs border-green-500">
                  <option disabled selected>
                    নির্বাচনী এলাকা
                  </option>
                  <option>Cheese</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>

                <select className="select shadow text-zinc-800 select-xs max-w-xs border-green-500">
                  <option disabled selected>
                    উপজেলা / সিটি কর্পোরেশন
                  </option>
                  <option>Cheese</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>

                <select className="select select-xs shadow text-zinc-800 w-full max-w-xs border-green-500">
                  <option disabled selected>
                    পৌরসভা / ইউনিয়ন /ওয়ার্ড
                  </option>
                  <option>Cheese</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>
              </div>
              <div className="items-center justify-center">
                <button className="btn btn-sm bg-green-700 text-white">
                  ম্যাপ থেকে নির্বাচন করুন
                </button>
              </div>
            </form>
          </div>
          <div className="m-12 text-white-700">
            <Link>আপনার প্রতিষ্ঠানের ডিজিটাল মার্কেটিং করতে ক্লিক করুন</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
