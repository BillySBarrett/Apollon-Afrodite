function About() {
    return (
        <div className="font-display text-xl bg-white">
            <h1 className="flex justify-center p-8 text-4xl font-black">Om Oss</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <p className="lg:w-5/12 w-3/4 text-center p-12">Apollon & Afrodite er consectetur adipiscing elit. Nullam accumsan mattis gravida. Integer accumsan tellus eu magna consectetur, quis posuere urna porttitor. Nullam id magna tempus. dolor sit amet, consectetur adipiscing elit.</p>
                <div className="bg-violet-200 w-64 h-64      flex justify-center items-center">bilde</div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-10">
                <div className="bg-blue-200 w-96 h-96           flex justify-center items-center">Google Maps</div>
                <div className=" p-12 text-center">
                    <h2 className="pb-10 text-2xl font-black">Finn Oss</h2>
                    <p>Vi holder oss til på Torget 1A i Sandefjord. </p>
                </div>
            </div>
        </div>
    )
}
export default About;