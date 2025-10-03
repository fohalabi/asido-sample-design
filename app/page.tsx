import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineHeader from './components/Milestone/TimelineHeader';
import Timeline from './components/Milestone/Timeline';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TimelineHeader />
      <Timeline />
      <h1>Contents goes here!</h1>
    </div>
  );
}
