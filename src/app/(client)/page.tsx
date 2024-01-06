import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="text-white font-extrabold w-full flex justify-center pt-20 pb-24 text-3xl md:text-5xl">
        <h1>Apollon & Afrodite</h1>
      </div>
      <NavigateToPages />
    </div>
  );
};

export default Page;

const NavigateToPages = () => {
  const NavigationInfo = [
    {
      id: 1,
      title: "Galleri",
      text: "Vi viser deg sessongens beste sko, klær og accesories. Få inspirasjon til ditt neste antrekk!",
      linkText: "Se Sesongens beste!",
      link: "/gallery",
      imagePath: "/Summer2022/2.jpeg",
    },
    {
      id: 2,
      title: "Merker",
      text: "Hos Apollon & Afrodite tilbyr vi kun de fineste og mest classy motehusene på markedet. Utforsk også noen nye og moderne merker du kanskje ikke har møtt på før.",
      linkText: "Se hvilke merker vi tilbyr!",
      link: "/brands",
      imagePath: "/Summer2022/3.jpeg",
    },
    {
      id: 3,
      title: "Om Oss",
      text: "Apollon & Afrodite har tilbudt det fresheste innen mote siden ____.",
      linkText: "Les videre om oss.",
      link: "/about",
      imagePath: "/Summer2022/4.jpeg",
    },
  ];

  return (
    <div className="bg-white w-full flex flex-col items-center">
      <div className="md:max-w-4xl grid grid-rows-3 gap-y-8 py-10">
        {NavigationInfo.map((page) => {
          return (
            <div key={page.id} className={"grid md:grid-cols-2 w-full"}>
              <div className="flex flex-col w-full justify-center items-center">
                <h2 className="font-light text-xl">{page.title}</h2>
                <p className=" w-96 md:pb-10 px-10 pt-4 text-center">
                  {page.text}
                </p>
                <a
                  className="inline-block p-3 m-3 w-64 border-2 border-black"
                  href={page.link}
                >
                  {page.linkText}
                </a>
              </div>

              <div
                className={
                  page.id == 2
                    ? "md:order-first flex justify-center items-center"
                    : "flex justify-center items-center"
                }
              >
                <Image
                  src={page.imagePath}
                  width={300}
                  height={300}
                  alt={page.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
