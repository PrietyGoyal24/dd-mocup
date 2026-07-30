import { Metadata } from 'next';
import MetaverseClient from '@/components/pages/Services/MetaverseClient';

export const metadata: Metadata = {
  title: 'Metaverse Development Services | Emerging Technologies | DesignDot',
  description: 'At DesignDot, we empower businesses to enter the virtual future with immersive, scalable, and interactive Metaverse development solutions.',
  robots: 'index, follow',
};

export default function MetaversePage() {
  return <MetaverseClient />;
}
