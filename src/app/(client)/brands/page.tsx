import React from "react";

// const client = createClient({
//   projectId: "yp0g8jjw", // Replace with your project ID
//   dataset: "collection", // Replace with your dataset name
//   token:
//     "skYrejLD51RNgvYF43IdJwp1JpnhKQWceTdINxoRh7Mr5l3yzXymYlPB0LlPRP4ijI9fX8ZjPI7u1Khidn3lz9ugEXdaDfoXDoCyvUsrKWWegK2HnQRfonbpolgFIUX3tvyz5dSNzrNSJTNQYRgF23iBqVlcrILfNZllkZdWazLZ3f8XZoqK", // Replace with your Sanity write token
//   useCdn: false,
// });

const Brands = () => {
  const brandsList = [
    "Arche",
    "Art",
    "Aurlandsko",
    "Billi Bi",
    "Blunddstone",
    "Brunate",
    "Camper",
    "Clarks Originals",
    "Dr.Martens",
    "Fit Flop",
    "Gait Line",
    "Hunter",
    "Hógl",
    "Inuikii",
    "KMB",
    "Kanna",
    "Kastel",
    "Lemon Jelly",
    "Liverpool",
    "Nahlo",
    "Nude",
    "Panama Jack",
    "Philip Hóg",
    "Primeboots",
    "R.M.Williams",
    "Sleepers",
    "Stewart Weitzman",
    "Superga",
    "Swims",
    "Toms",
    "Ugg",
    "Unisa",
  ];
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="bg-white font-display grid justify-center">
      <h1 className="text-center p-10 text-4xl font-bold">Våre merker</h1>

      <div className="flex-wrap justify-center flex max-w-5xl">
        {alphabetArray.map((alphChar) => {
          const brandsBeginWithChar: string[] = [];

          {
            brandsList.map((brand) => {
              if (alphChar.toUpperCase() === brand.charAt(0)) {
                brandsBeginWithChar.push(brand);
              }
            });
          }
          if (brandsBeginWithChar.length > 0) {
            return (
              <div className="m-4 w-48" key={alphChar}>
                <p className="p-2 border-x-2 border-t-2 bg-gray-200 border-gray-400 w-min">
                  {alphChar.toUpperCase()}
                </p>
                <hr className="border-t-2 mb-3 border-gray-400"></hr>
                {brandsBeginWithChar.map((letterBrand) => {
                  return (
                    <div className="px-10 font-light text-xl" key={letterBrand}>
                      {letterBrand}
                    </div>
                  );
                })}{" "}
              </div>
            );
          }
        })}
      </div>

      {/* {alphabetArray.map(alphChar => {
                return (
                <div className="flex flex-col justify-center">
                    <p>{alphChar}</p>
                    <ul>
                        {brandsList.map(brand => {
                            if (alphChar.toUpperCase() === brand.charAt(0)){
                                return (
                                    <li>{brand}</li>
                                )        
                            }
                        })}

                    </ul>
                </div>
                );
            })} */}
    </div>
  );
};

export default Brands;
