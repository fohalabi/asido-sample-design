import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineHeader from './components/Milestone/TimelineHeader';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TimelineHeader />
      <h1>Contents goes here!</h1>
    </div>
  );
}
