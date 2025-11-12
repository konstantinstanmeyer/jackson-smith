import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="hidden md:flex w-3/5 bg-[#fefefc] items-center pr-16">
        <div className="flex flex-col items-center ml-auto relative">
          <div className="absolute flex flex-col -right-8 -top-1.5 z-10" >
            <ul className="cormorant italic text-sm flex flex-row absolute font-bold -top-3.5 right-0">
              <li className="ml-4">cinematography</li>
              <li className="ml-4">screenwriting</li>
              <li className="ml-4">production</li>
            </ul>
            <div className='z-10'>
              <p className="text-[#111111] font-semibold oswald text-xl lg:text-3xl"><span className="text-base font-black italic cormorant -mr-[0.3rem]">filmmaker</span> JACKSON SMITH</p>
            </div>
          </div>
          <div className="relative">
            <img className="w-60 lg:w-xs xl:w-md z-0 aged-less" src="/walker-2.png" />
            <div className="absolute right-0 top-full font-sans font-semibold text-right">
              <h4 className="font-black leading-4 mt-2">FEATURE FILMS</h4>
              <ul className="text-sm leading-3.5 mb-3">
                <li>Misfits, Fires, and Forges</li>
              </ul>
              <h4 className="font-black leading-4">SHORT FILMS</h4>
              <ul className="text-sm leading-3.5 mb-3">
                <li>The Lines We'll Cross</li>
                <li>The Forlorn Escape</li>
              </ul>
              <h4 className="font-black leading-4">SCREENPLAYS</h4>
              <ul className="text-sm leading-3.5">

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-2/5 bg-[#f54e00] items-center pl-16 text-[#fefefc]">
        <div className="relative flex flex-col items-center">
          <div className="absolute -left-8 flex flex-col -top-1.5">
            <div>
              <ul className="cormorant text-[#fefefc] italic text-sm flex flex-row absolute font-bold -top-[0.67rem] left-0 transform rotate-180">
                <li className="ml-4">creativity</li>
                <li className="ml-4">composition</li>
                <li className="ml-4">editing</li>
              </ul>
            </div>
            <div className='z-10'>
              <p className="text-[#fefefc] tracking-wide font-semibold oswald text-xl lg:text-3xl transform rotate-180"><span className="text-base italic cormorant -mr-[0.3rem]">photographer</span> JACKSON SMITH</p>
            </div>
          </div>
          <div className="relative">
            <img className="transform rotate-180 aged w-60 lg:w-xs xl:w-md z-0" src="/walker-2.png" />
            <div className="absolute left-0 top-full font-sans font-semibold">
              <h4 className="font-black leading-4 mt-2">PHOTO ASSIGNMENTS</h4>
              <h4 className="font-black leading-4 mt-3">STREET</h4>
              <h4 className="font-black leading-4 mt-3">GALLERY</h4>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screens */}
      <div className="flex md:hidden w-full bg-[#fefefc] items-center relative justify-center">
        <div className="flex flex-col items-center justify-center relative w-[90%]">
          <div className="absolute flex flex-col -top-1.5 z-10 w-full" >
            <ul className="cormorant italic text-sm flex flex-row absolute font-bold -top-3.5 right-0">
              <li className="ml-4">filmmaker & photographer</li>
            </ul>
            <div className='z-10 text-right'>
              <p className="text-[#111111] font-semibold oswald text-3xl">JACKSON SMITH</p>
            </div>
          </div>
          <div className="relative">
            <img className="w-md z-0 aged-less" src="/walker-2.png" />
            <div className="absolute right-0 top-full font-sans font-semibold text-right">
              <h4 className="font-black leading-4 mt-2">FEATURE FILMS</h4>
              <ul className="text-sm leading-3.5 mb-3">
                <li>Misfits, Fires, and Forges</li>
              </ul>
              <h4 className="font-black leading-4">SHORT FILMS</h4>
              <ul className="text-sm leading-3.5 mb-3">
                <li>The Lines We'll Cross</li>
                <li>The Forlorn Escape</li>
              </ul>
              <h4 className="font-black leading-4">SCREENPLAYS</h4>
              <h4 className="font-black leading-4 mt-2">PHOTO ASSIGNMENTS</h4>
              <h4 className="font-black leading-4 mt-3">STREET</h4>
              <h4 className="font-black leading-4 mt-3">GALLERY</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
