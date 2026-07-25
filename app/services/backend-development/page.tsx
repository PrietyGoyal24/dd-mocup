import { Metadata } from 'next';
import BackendDevelopmentClient from '@/components/pages/Services/BackendDevelopmentClient';

export const metadata: Metadata = {
  title: 'Backend Development Services | Node.js, Python, Java, Go | Designdot',
  description:
    'Strengthen your digital applications with secure, scalable, and robust backend development services from Designdot. Microservices, APIs, Databases, Cloud.',
  robots: 'index, follow',
};

export default function BackendDevelopmentPage() {
  return <BackendDevelopmentClient />;
}
