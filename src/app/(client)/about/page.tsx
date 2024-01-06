"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function About() {
  return (
    <div className="font-display text-xl bg-white">
      <h1 className="flex justify-center p-8 text-4xl font-black">Om Oss</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <p className="lg:w-5/12 w-3/4 text-center p-12">
          Apollon & Afrodite er consectetur adipiscing elit. Nullam accumsan
          mattis gravida. Integer accumsan tellus eu magna consectetur, quis
          posuere urna porttitor. Nullam id magna tempus. dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="bg-violet-200 w-64 h-64      flex justify-center items-center">
          bilde
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" p-12 text-center">
          <h2 className="pb-10 text-2xl font-black">Finn Oss</h2>
          <p>Vi holder oss til på Torget 1A i Sandefjord. </p>
        </div>
        <div className=" py-10 w-full justify-center flex">
          {" "}
          <APIProvider apiKey="AIzaSyDRTW_NCqTDWrnc-sns416RpRZY7vXk22Y">
            <Map
              className="w-1/2 h-96 overflow-visible"
              zoom={17}
              center={{ lat: 59.129979536124985, lng: 10.224626430911902 }}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <Marker
                position={{ lat: 59.129979536124985, lng: 10.224626430911902 }}
              />
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
}
export default About;
