import React from 'react';
import Logo from '../Logo.js';
import OpenHeader from '../OpenHeader.js';
import LandingImageShoe from '../LandingImageShoe'
import OpeningHours from '../OpeningHours.js';
import Wave from 'react-wavify';



function Home() {

  return (
    <div className="bg-#FDF3DF font-serif">
      <div className="h-auto flex flex-col items-center relative top-1">
        <div className="text-5xl p-6">Klær du kan leve i</div>
        <div className="flex flex-row justify-center">
          <div className="w-1/3 flex flex-col text-center justify-center text-xl mr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum consequat fringilla. Fusce nunc justo, placerat tristique volutpat quis, volutpat vitae neque. Nullam lobortis dui.</div>
          <div className="ml-36">
            <LandingImageShoe />
          </div>
        </div>
      </div>
      <OpeningHours />
      <div className="flex flex-col items-center">
        <div className="relative -top-14 w-screen">
          <Wave fill='#FDF3DF'
            paused={false}
            options={{
              height: 20,
              amplitude: 25,
              speed: 0.20,
              points: 3
            }}
          />
        </div>
          <h2 className=" text-[3vw] relative -top-[35px] ">Vi har sko fra dine favoritt merker</h2>
          <hr className=" px-[45%] border-b-2 m -5 border-black"></hr>
          <div className="pb-20">
            <div className="flex w-screen px-[15%] justify-between items-center">
              {/* <SwimsLogo className="absolute top-24" /> */}
              <img src="./images/svgtest.svg" alt="Swims logo" className="w-1/4 "></img>
              <img src="./images/uggLogo.png" alt="Ugg Logo" className="w-1/4"></img>
              <img src="./images/Unisa-logo.png" alt="Unisa Logo" className="h-max w-1/4"></img>
            </div>
            <div className="flex w-screen pl-[13%] pr-[15%] justify-between items-center">
              <img src="./images/tommyhil.png" alt="Tommy Hilfiger Logo" className="w-1/4"></img>
              <img src="./images/birkenstock.png" alt="Birkenstock Logo" className="w-1/3"></img>
              <img src="./images/morettimilano.png" alt="Moretti Milano Logo" className="w-1/6"></img>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
