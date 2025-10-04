import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineHeader from './components/Milestone/TimelineHeader';
import MentalHealthTimeline from './components/Milestone/Timeline';
import MentalHealthAdvocacy from './components/Stay-Informed/MentalHealthAdvocacy';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TimelineHeader />
      <MentalHealthTimeline /> 
      <MentalHealthAdvocacy />
    </div>
  );
}
