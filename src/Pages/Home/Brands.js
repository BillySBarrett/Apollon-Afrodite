const Brands = () => {
    return (  
        <div className="flex flex-col items-center -top-12 relative ">
        
        <h2 className=" lg:text-5xl md:text-4xl text-[5vw] pb-7 ">Vi har sko fra dine favoritt merker</h2>
        <hr className=" px-[45%] border-b-2 m -5 border-black"></hr>
        <div className="">
          <div className="flex px-[15%] justify-between items-center">
            {/* <SwimsLogo className="absolute top-24" /> */}
            <img src="./images/svgtest.svg" alt="Swims logo" className="w-1/4 "></img>
            <img src="./images/uggLogo.png" alt="Ugg Logo" className="w-1/4"></img>
            <img src="./images/Unisa-logo.png" alt="Unisa Logo" className=" w-1/4"></img>
          </div>
          <div className="flex pl-[13%] pr-[15%] justify-between items-center">
            <img src="./images/tommyhil.png" alt="Tommy Hilfiger Logo" className="w-1/4"></img>
            <img src="./images/birkenstock.png" alt="Birkenstock Logo" className="w-1/3"></img>
            <img src="./images/morettimilano.png" alt="Moretti Milano Logo" className="w-1/6"></img>
          </div>
        </div>
      </div>
    );
}
 
export default Brands;