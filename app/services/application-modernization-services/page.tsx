import { Metadata } from 'next';
import AppModernizationClient from '@/components/pages/Services/AppModernizationClient';

export const metadata: Metadata = {
  title: 'Application Modernization Services | Legacy System Transformation | DesignDot',
  description:
    'Transform outdated legacy software into modern, cloud-native applications with Designdot. Microservices, cloud migration, refactoring, and UI/UX modernization.',
  robots: 'index, follow',
};

export default function AppModernizationPage() {
  return <AppModernizationClient />;
}
