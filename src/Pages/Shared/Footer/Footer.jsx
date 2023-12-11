import { MdOutlineLocalPhone,MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-base-content">
      <nav>
        <header className=" text-xl text-black font-['Li Ador Noirrit'] font-semibold leading-normal">
          নির্বাচন সম্পর্কিত ওয়েবসাইটসমূহ
        </header>
        <a className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug">
          www.bangladesh.gov.bd
        </a>
        <a className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug">
          www.nationalparliment.bd
        </a>
        <a className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug">
          www.electioncomission.com.bd
        </a>
      </nav>
      <nav>
        <header className=" text-xl text-black font-['Li Ador Noirrit'] font-semibold leading-normal">
          যোগাযোগ
        </header>
        <a className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug">
          Tejgaon Link Road, Aloha
          <br /> Convention Hall. Shanta Forum.
        </a>
        <Link className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug ">
        
          <p className=" flex flex-row gap-2 items-center justify-center">
          <MdOutlineLocalPhone className="fill-red-500" /> +088 (246) 642-27-10
          </p>
        </Link>
        <Link className=" text-zinc-500 text-xl font-normal font-['Poppins'] leading-snug">
          <p className="flex flex-row gap-2 items-center justify-center">
          <MdEmail className="fill-red-500" /> example@gmail.com
          </p>
        </Link>
      </nav>
      <nav>
        <header className="opacity-90 text-center text-slate-900 text-xl font-semibold font-['Poppins'] leading-relaxed">
          © 2023 Voteden All Rights Reserved.
        </header>

        <div className="grid grid-flow-col gap-4 text-center text-green-700 text-xl font-semibold font-['Li Ador Noirrit'] underline leading-relaxed">
          গোপনীয় নীতিমালা
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
