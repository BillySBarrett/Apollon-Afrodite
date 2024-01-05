"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";

type SeasonImage = {
  seasonName: string;
  imageUrls: string[];
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("");
  const [seasonImages, setSeasonImages] = useState<SeasonImage[]>([]);
  const [tabs, setTabs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      const seasons = await client.fetch(
        `*[_type == "season"] | order(images[0].asset->originalFilename desc)[0..4]{seasonName}`
      );
      setTabs(
        seasons.map((season: { seasonName: string }) => season.seasonName)
      );
      setActiveTab(seasons[0].seasonName);
    };
    fetchSeasons();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      if (!activeTab) return;
      setLoading(true);
      const images = await client.fetch(
        `*[_type == "season" && seasonName == "${activeTab}"][0...5]{seasonName, "imageUrls": images[].asset->url}`
      );
      console.log(images);
      setSeasonImages(images);
      setLoading(false);
    };
    fetchImages();
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white min-h-96 pb-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-extrabold py-10">Gallery</h1>
        <nav className="">
          <ul className="flex gap-6 py-5">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`${
                  activeTab === tab
                    ? "text-lg text-cyan-600  border-b-2 border-cyan-600"
                    : "text-gray-600 text-lg hover:text-cyan-600"
                } cursor-pointer`}
                onClick={() => handleTabClick(tab)}
              >
                {seasonNameParser(tab)}
              </li>
            ))}
          </ul>
        </nav>
        <div className="max-w-2xl">
          {loading ? (
            <div className="flex h-screen justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : (
            <Carousel
              className="rounded-xl md:h-[40rem] md:w-[40rem] w-full h-full bg-gradient-to-br from-gray-100 to-gray-600"
              placeholder={undefined}
              key={activeTab}
              loop
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i
                          ? "w-12 bg-gradient-to-br from-cyan-100 to-cyan-400"
                          : "w-6 bg-white hover:bg-gray-300"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {seasonImages[0]?.imageUrls.length > 0 ? (
                seasonImages[0]?.imageUrls.map((imageUrl) => (
                  <div key={imageUrl} className="flex h-full justify-center">
                    <Image
                      src={imageUrl}
                      alt="Gallery Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="flex h-full justify-center items-center">
                  <p>No pictures found</p>
                </div>
              )}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const seasonNameParser = (seasonName: string) => {
  const [season, year] = seasonName.split("_");
  return `${season.charAt(0).toUpperCase()}${season.slice(1)} ${year}`;
};
