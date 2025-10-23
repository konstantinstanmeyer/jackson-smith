import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-screen relative h-screen flex items-center justify-center">
        {/* <img className="w-screen h-screen object-cover" src="/landing.png" /> */}
        <video className="opacity-80 z-0" autoPlay muted loop id="myVideo">
          <source src="Dscf0683.mp4" type="video/mp4"></source>
        </video>
        <p className="z-10 absolute">Stephen Jackson Smith</p>
      </div>
    </div>
  );
}
