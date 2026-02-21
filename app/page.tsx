import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TestModesSection } from '@/components/test-modes-section';
import { Leaderboard } from '@/components/leaderboard';
import { ResultsDashboard } from '@/components/results-dashboard';
import { QuoteSection } from '@/components/quote-section';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Typing Speed Test Online - KeyStrike',
  description: 'Typing speed test online with AI finger guide, learn typing online lessons, and free WPM test practice.',
  keywords: [
    'typing speed test',
    'learn typing online',
    'typing practice with fingers',
    'wpm test free',
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TestModesSection />
      <Leaderboard />
      <ResultsDashboard />
      <QuoteSection />
      <Footer />
    </div>
  );
}
