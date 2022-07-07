const Landing = () => {
    return (      
    <div className="flex flex-col items-center justify-items-center relative top-1">
        <p className="text-5xl px-[10vw] py-10">Apollon & Afrodite</p>
        <div className="grid lg:flex lg:justify-center lg:items-center justify-items-center">
          <p className="w-[80%] lg:w-1/3 lg:pr-20 pb-20 text-center text-2xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum consequat fringilla. Fusce nunc justo, placerat tristique volutpat quis, volutpat vitae neque. Nullam lobortis dui.</p>
          <img src="./images/landingimagemodel.jpeg" alt="handbag" className="max-w-sm lg:max-w-md pb-2 rounded-tl-[200px] rounded-br-[200px] "></img>
        </div>
    </div>
  );
}
 
export default Landing;