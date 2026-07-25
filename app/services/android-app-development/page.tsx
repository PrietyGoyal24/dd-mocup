import { Metadata } from 'next';
import AndroidAppDevelopmentClient from '@/components/pages/Services/AndroidAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'Android App Development Services | Kotlin & Java | Designdot',
  description:
    'Custom Android app development services from Designdot. Robust, scalable Android apps built with Kotlin, Java, Jetpack, and Material Design.',
  robots: 'index, follow',
};

export default function AndroidAppDevelopmentPage() {
  return <AndroidAppDevelopmentClient />;
}
