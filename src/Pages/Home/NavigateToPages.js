import Wave from "react-wavify";

const NavigateToPages = () => {
    const NavigationInfo = [
        {
            id: 1,
            title: "Galleri",
            text: "Vi viser deg sessongens beste sko, klær og accesories. Få inspirasjon til ditt neste antrekk!",
            linkText: "Se Sesongens beste!",
            link: "/Apollon-Afrodite/gallery",
            imagePath: "./Summer2022/2.jpeg",
        },
        {
            id: 2,
            title: "Merker",
            text: "Hos Apollon & Afrodite tilbyr vi kun de fineste og mest classy motehusene på markedet. Utforsk også noen nye og moderne merker du kanskje ikke har møtt på før.",
            linkText: "Se hvilke merker vi tilbyr!",
            link: "/Apollon-Afrodite/brands",
            imagePath: "./Summer2022/3.jpeg",
        },
        {
            id: 3,
            title: "Om Oss",
            text: "Apollon & Afrodite har tilbudt det fresheste innen mote siden ____.",
            linkText: "Les videre om oss.",
            link: "/Apollon-Afrodite/about",
            imagePath: "./Summer2022/4.jpeg",
        },
    ];

    return (
        <div className="bg-white relative top-20 z-1 last:pb-20 grid justify-center">
            <div className="w-[150vw] h-0 absolute -top-36">
                {/* change the amplitude and speed using conditional rendering */}
                <Wave
                    fill="white"
                    paused={false}
                    options={{
                        height: 80,
                        amplitude: 20,
                        speed: 0.2,
                        points: 3,
                    }}
                />
            </div>
            <div className="">
                {NavigationInfo.map((page) => {
                    return (
                        <div className={("flex md:flex-row flex-col md:justify-evenly justify-center md:h-96 h-[38rem] text-center items-center")} >
                            <div className=" grid place-items-center place-content-center">
                                <h2 className="font-light text-xl">{page.title}</h2>
                                <p className=" w-96 md:pb-10 px-10 pt-4">{page.text}</p>
                                <a
                                    className="inline-block p-3 m-3 w-64 border-2 border-black"
                                    href={page.link}
                                >
                                    {page.linkText}
                                </a>
                            </div>
                            <img src={page.imagePath} alt={page.title} className={((page.id % 2===0) ? "w-80 md:order-first" : "w-80")}></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigateToPages;
