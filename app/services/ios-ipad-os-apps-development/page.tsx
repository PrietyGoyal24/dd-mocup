import { Metadata } from 'next';
import IOSAppDevelopmentClient from '@/components/pages/Services/IOSAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'iOS & iPadOS App Development Services | Swift, SwiftUI | Designdot',
  description:
    'Custom iOS and iPadOS app development services from Designdot. High-performance iPhone and iPad applications built with Swift, SwiftUI, and Apple ecosystem integrations.',
  robots: 'index, follow',
};

export default function IOSIPadOSAppsDevelopmentPage() {
  return <IOSAppDevelopmentClient />;
}
