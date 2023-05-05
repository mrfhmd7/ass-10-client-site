import Banner from '../Components/Banner/Banner';
import ChefSection from '../Components/ChefSection/ChefSection';
import CommingEvents from '../Components/ComingEvents/ComingEvents/CommingEvents';
import OurDetails from '../Components/OurDetails/OurDetails/OurDetails';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <ChefSection />
      <CommingEvents />
      <OurDetails />
    </div>
  );
}
