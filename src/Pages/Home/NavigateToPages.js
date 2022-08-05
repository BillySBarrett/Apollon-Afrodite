import Wave from 'react-wavify';

const NavigateToPages = () => {
  return (
    <div className="bg-white relative top-20 z-1">
        <div className="">
            <div className="w-screen h-0 absolute -top-36 ">
                {/* change the amplitude and speed using conditional rendering */}
                <Wave fill='white'
                paused={false}
                options={{
                    height: 110,
                    amplitude: 20,
                    speed: 0.20,
                    points: 3
                }}
                />
            </div>
            <div className="flex md:flex-row flex-col md:justify-evenly justify-center md:h-96 h-[38rem] text-center items-center">
                <div className=" grid place-items-center place-content-center"> 
                    <h2 className="font-light text-xl">Galleri</h2>
                    <p className=" w-96 md:pb-10 pt-4">
                    Vi viser deg sessongens beste sko, klær og accesories. Få inspirasjon
                    til ditt neste antrekk!
                    </p>
                    <a className="inline-block p-3 m-3 w-64 border-2 border-black" href="/gallery">
                    Se sessongens beste!
                    </a>
                </div>
                <img src="./Summer2022/2.jpeg" className="h-80"></img>
            </div>
            <div className="flex  md:flex-row flex-col-reverse md:justify-evenly justify-center md:h-96 h-[38rem] text-center items-center">
                <img src="./Summer2022/3.jpeg" className="h-80"></img>
                <div className=" grid place-items-center place-content-center"> 
                    <h2 className="font-light text-xl">Merker</h2>
                    <p className="w-96 md:pb-10 pt-4">
                    Hos Apollon & Afrodite tilbyr vi kun de fineste og mest classy motehusene på markedet. Utforsk også noen nye og moderne merker du kanskje ikke har møtt på før.
                    </p>
                    <a className="inline-block p-3 m-3 w-64 border-2 border-black" href="/gallery">
                    Se hvilke merker vi tilbyr!
                    </a>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:justify-evenly justify-center md:h-96 h-[38rem] text-center items-center mb-20">
                <div className=" grid place-items-center place-content-center"> 
                    <h2 className="font-light text-xl">Om Oss</h2>
                    <p className=" w-96 md:pb-10 pt-4">
                    Apollon & Afrodite har tilbudt det fresheste innen mote siden ____.
                    </p>
                    <a className="inline-block p-3 m-3 w-64 border-2 border-black" href="/about">
                    Les videre om oss.
                    </a>
                </div>
                <img src="./Summer2022/4.jpeg" className="h-80"></img>
            </div>
        </div>
    </div>
  );
};

export default NavigateToPages;
