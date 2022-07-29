import OpeningHours from './OpeningHours.js';
import Brands from './Brands.js'
import Landing from './Landing.js'



function Home() {

  return (
    <div className="bg-#FDF3DF font-display">
      <Landing />
      <OpeningHours />
      <Brands />
    </div>
  );
}

export default Home;
