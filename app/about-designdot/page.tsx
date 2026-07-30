import { Metadata } from 'next';
import AboutUsClient from '@/components/pages/Corporate/AboutUsClient';

export const metadata: Metadata = {
  title: 'About DesignDot | Award-Winning Offshore Software Company',
  description: "Learn about DesignDot, a global creative agency established in 2005 specializing in strategy, design, UI/UX, and technology solutions.",
  robots: 'index, follow',
};

export default function AboutDesignDotAliasPage() {
  return <AboutUsClient />;
}
