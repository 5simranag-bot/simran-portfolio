import KNav from '../components/kinda/KNav';
import KHero from '../components/kinda/KHero';
import TldrStrip from '../components/kinda/TldrStrip';
import StorySection from '../components/kinda/StorySection';
import DiscoverySection from '../components/kinda/DiscoverySection';
import PathSection from '../components/kinda/PathSection';
import ToolsSection from '../components/kinda/ToolsSection';
import CraftSection from '../components/kinda/CraftSection';
import LessonsSection from '../components/kinda/LessonsSection';
import ImpactSection from '../components/kinda/ImpactSection';
import KFooter from '../components/kinda/KFooter';

/** KINDA SHOPEE: an e-commerce case study told as a seven-chapter journey. */
export default function KindaShopee() {
  return (
    <div className="theme-kinda relative w-full" style={{ overflowX: 'clip', background: '#15100c', color: '#ece0c8' }}>
      <KNav />
      <KHero />
      <TldrStrip />
      <main>
        <StorySection />
        <DiscoverySection />
        <PathSection />
        <ToolsSection />
        <CraftSection />
        <LessonsSection />
        <ImpactSection />
      </main>
      <KFooter />
    </div>
  );
}
