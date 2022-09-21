import Landing from './Landing.js'
import NavigateToPages from './NavigateToPages'


function Home() {

  return (
    <div className="bg-#FDF3DF font-display">
      <Landing />
      {/* <OpeningHours /> */}
      <NavigateToPages />
      {/* <Brands /> */}
    </div>
  );
}

export default Home;