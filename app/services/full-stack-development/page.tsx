import { Metadata } from 'next';
import FullStackClient from '@/components/pages/Services/FullStackClient';

export const metadata: Metadata = {
  title: 'Full Stack Development Services | Designdot',
  description:
    'Build powerful web & mobile applications from frontend to backend with full stack development services from Designdot. MERN, MEAN, Python, .NET, JAMstack.',
  robots: 'index, follow',
};

export default function FullStackPage() {
  return <FullStackClient />;
}
