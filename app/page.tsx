import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-3/5 bg-[#fefefc]">

      </div>
      <div className="w-2/5 bg-[#f54e00] flex items-center pl-20">
        <div className="relative flex flex-col items-center">
          <div className="absolute -left-8 flex flex-col">
            <ul>
              <li></li>
            </ul>
            <div className='z-10'>
              <p className="text-[#fefefc] font-bold zalando text-xl transform rotate-180">JACKSON-SMITH <span className="text-sm italic ">photographer</span></p>
            </div>
          </div>
          <img className="transform rotate-180 aged w-lg z-0" src="/walker.png" />
        </div>
      </div>
    </div>
  );
}
