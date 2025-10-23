import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-screen relative h-screen flex items-center justify-center">
        {/* <img className="w-screen h-screen object-cover" src="/landing.png" /> */}
        <video className="opacity-80 z-0 h-full w-full object-cover aspect-video" autoPlay muted loop id="myVideo">
          <source src="Dscf0683.mp4" type="video/mp4"></source>
        </video>
        <p className="z-10 absolute zalando text-white text-5xl p-2">Stephen Jackson Smith</p>
      </div>
    </div>
  );
}
