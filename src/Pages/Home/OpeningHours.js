import Wave from 'react-wavify';

export default function OpeningHours() {
    return (      <div className="h-[830px] bg-test-shoe  bg-top flex flex-col  text-white justify-items-center text-center">
    <div className="">
      <div className=" rotate-180 w-screen relative -top-2">
        <Wave fill='#ffffff'
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
        <li>Mondag: 10-17</li>
        <li>Tirsdag: 10-17</li>
        <li>Onsdag: 10-17</li>
        <li>Torsdag: 10-17</li>
        <li>Fredag: 10-18</li>
        <li>Lørdag: 10-16</li>
        <li>Søndag: Stengt</li>
      </ul>
      <div className=" w-screen ">
          <Wave fill='#ffffff'
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.18,
              points: 4
            }}
          />
        </div>
    </div>
  </div>)
}