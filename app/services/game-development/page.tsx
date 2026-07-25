import { Metadata } from 'next';
import GameDevelopmentClient from '@/components/pages/Services/GameDevelopmentClient';

export const metadata: Metadata = {
  title: 'Game Development Services | Unity, Unreal Engine | Designdot',
  description:
    'Full-cycle game development services from Designdot. PC, console, mobile, AR/VR, and Web3 games built with Unity and Unreal Engine 5.',
  robots: 'index, follow',
};

export default function GameDevelopmentPage() {
  return <GameDevelopmentClient />;
}
