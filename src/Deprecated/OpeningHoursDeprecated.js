import Wave from 'react-wavify';

export default function OpeningHours() {
    return (<div className="h-[830px] bg-white text-black flex flex-col justify-items-center text-center">
    <div className="">
      <div className=" w-screen relative -top-2">
        <Wave fill='blue'
          paused={false}
          options={{
            height: 50,
            amplitude: 20,
            speed: 0.20,
            points: 3
          }}
        />
      </div>
      <h1 className="text-5xl">Åpningstider</h1>
      <ul className="text-extrafont">
        <li>Mandag - Fredag: 10:00-18:00</li>

        <li>Lørdag: 10-16</li>
        <li>Søndag: Stengt</li>
      </ul>
    </div>
  </div>)
}