import { Metadata } from 'next';
import FrontendDevelopmentClient from '@/components/pages/Services/FrontendDevelopmentClient';

export const metadata: Metadata = {
  title: 'Frontend Development Services | React, Angular, Vue | Designdot',
  description:
    'Elevate your digital products with high-performance, responsive frontend development services from Designdot. React, Angular, Vue.js, PWA, SPAs.',
  robots: 'index, follow',
};

export default function FrontendDevelopmentPage() {
  return <FrontendDevelopmentClient />;
}
