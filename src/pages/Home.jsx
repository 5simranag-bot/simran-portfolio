import Nav from '../components/layout/Nav';
import ProgressRail from '../components/layout/ProgressRail';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import WorkSection from '../components/home/WorkSection';
import ProcessSection from '../components/home/ProcessSection';
import ContactSection from '../components/home/ContactSection';
import { ParallaxProvider } from '../context/ParallaxContext';

const ANCHORS = ['hero', 'about', 'work', 'process', 'contact'];

/** The Journey of a Designer: Simran Agarwal's portfolio. */
export default function Home() {
  return (
    <div className="theme-journey relative w-full" style={{ overflowX: 'clip', background: '#ece2d1' }}>
      <Nav />
      <ProgressRail />
      <ParallaxProvider anchors={ANCHORS}>
        <Hero />
        <main>
          <AboutSection />
          <WorkSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </ParallaxProvider>
    </div>
  );
}
