import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Finger Placement Guide - KeyStrike',
  description:
    'Typing practice with fingers using an AI finger guide system to help you learn typing online and improve typing speed test accuracy.',
  keywords: [
    'typing practice with fingers',
    'learn typing online',
    'typing speed test',
    'ai typing trainer',
  ],
};

export default function FingerPlacementGuidePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-10">
        <section className="space-y-4">
          <p className="text-xs font-bold text-accent tracking-widest">GUIDE</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Finger Placement for Faster, Accurate Typing</h1>
          <p className="text-muted-foreground">
            This finger guide typing system helps you build speed safely. Correct finger placement improves consistency,
            lowers errors, and supports better WPM test free results.
          </p>
        </section>

        <section className="border-2 border-foreground p-6 space-y-3">
          <h2 className="text-2xl font-black">Home Row Foundation</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Left hand: A, S, D, F</li>
            <li>Right hand: J, K, L, ;</li>
            <li>Thumbs: spacebar</li>
            <li>Keep wrists straight and shoulders relaxed</li>
          </ul>
        </section>

        <section className="border-2 border-foreground p-6 space-y-3">
          <h2 className="text-2xl font-black">AI Finger Guide Typing System</h2>
          <p className="text-muted-foreground">
            Use visual prompts and repeatable key zones to train muscle memory. This is your ranking advantage: unique,
            useful typing practice with fingers that helps users improve faster.
          </p>
        </section>

        <section className="border-2 border-foreground p-6 space-y-3">
          <h2 className="text-2xl font-black">Daily Practice Plan</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>5 min: home row warm-up</li>
            <li>5 min: difficult key combinations</li>
            <li>5 min: full sentence typing speed test</li>
            <li>5 min: cooldown with high-accuracy typing</li>
          </ul>
        </section>

        <section className="border-t border-border pt-8 space-y-4">
          <h2 className="text-2xl font-black">How This Helps SEO</h2>
          <p className="text-muted-foreground">
            Useful guides attract backlinks from GitHub, LinkedIn, and articles. Over time, helpful niche pages improve
            discoverability for queries like typing speed test and learn typing online.
          </p>
        </section>

        <section className="border-2 border-accent bg-yellow-50 p-6 space-y-4">
          <h3 className="text-2xl font-black">Practice Now</h3>
          <p className="text-muted-foreground">Apply the finger placement method in a live typing session.</p>
          <Link href="/test" className="inline-block bg-accent text-accent-foreground px-6 py-3 font-bold">
            START TYPING TEST
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
