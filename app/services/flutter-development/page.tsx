import { Metadata } from 'next';
import FlutterAppDevelopmentClient from '@/components/pages/Services/FlutterAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'Flutter App Development Services | Google Flutter | Designdot',
  description:
    'Custom Flutter app development services from Designdot. Build fast, expressive cross-platform apps for mobile, web, and desktop using a single codebase.',
  robots: 'index, follow',
};

export default function FlutterDevelopmentPage() {
  return <FlutterAppDevelopmentClient />;
}
