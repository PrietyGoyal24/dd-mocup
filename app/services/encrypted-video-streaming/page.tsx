import { Metadata } from 'next';
import EncryptedVideoStreamingClient from '@/components/pages/Services/EncryptedVideoStreamingClient';

export const metadata: Metadata = {
  title: 'Encrypted Video Streaming Services | Emerging Technologies | DesignDot',
  description: 'DesignDot offers encrypted video streaming solutions that ensure your content remains secure while delivering high-quality playback.',
  robots: 'index, follow',
};

export default function EncryptedVideoStreamingPage() {
  return <EncryptedVideoStreamingClient />;
}
