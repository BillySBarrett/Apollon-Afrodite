import Wave from 'react-wavify';

export default function OpeningHours() {
    return (      <div className="h-[100vh] bg-test-shoe  bg-top flex flex-col text-white justify-center items-center text-center">
    <div className="relative -top-20">
      <div className=" rotate-180 w-screen">
        <Wave fill='#FDF3DF'
          paused={false}
          options={{
            height: 20,
            amplitude: 25,
            speed: 0.20,
            points: 3
          }}
        />
      </div>
      <h1 className="text-5xl ">Åpningstider</h1>
      <ul className="text-extrafont">
        <li>Mondag: 10-17</li>
        <li>Tirsdag: 10-17</li>
        <li>Onsdag: 10-17</li>
        <li>Torsdag: 10-17</li>
        <li>Fredag: 10-18</li>
        <li>Lørdag: 10-16</li>
        <li>Søndag: Stengt</li>
      </ul>
    </div>
  </div>)
}