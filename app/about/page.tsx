import AboutHero from '../components/AboutHero';
import JourneyAndExpertise from '../components/JourneyAndExpertise';
import Drives from '../components/Drives';
import CallToAction from '../components/CallToAction';

const AboutPage = () => {
  return (
    <main className="pt-16">
      <AboutHero />
      <JourneyAndExpertise />
      <Drives />
      <CallToAction />
    </main>
  );
};

export default AboutPage;