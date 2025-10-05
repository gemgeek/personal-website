import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import FeaturedProjects from './components/FeaturedProjects';
import Expertise from './components/Expertise';
import Stats from './components/Stats';
import CallToAction from './components/CallToAction'; 
import Footer from './components/Footer'; 

export default function Home() {
  return (
  <>
    <main className="pt-16">
      <Hero />
      <WhyHireMe />
      <FeaturedProjects />
      <Expertise />
      <Stats />
      <CallToAction />
    </main>
    <Footer />
  </>
  );
}