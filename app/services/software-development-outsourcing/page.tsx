import { Metadata } from 'next';
import SoftwareDevelopmentOutsourcingClient from '@/components/pages/Services/SoftwareDevelopmentOutsourcingClient';

export const metadata: Metadata = {
  title: 'Software Development Outsourcing Services | DesignDot',
  description:
    'Accelerate innovation and reduce operational costs with Designdot end-to-end software development outsourcing services for startups, SMEs, and enterprises.',
  robots: 'index, follow',
};

export default function SoftwareDevelopmentOutsourcingPage() {
  return <SoftwareDevelopmentOutsourcingClient />;
}
