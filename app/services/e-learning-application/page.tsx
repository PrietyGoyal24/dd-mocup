import { Metadata } from 'next';
import ELearningClient from '@/components/pages/Services/ELearningClient';

export const metadata: Metadata = {
  title: 'E-Learning Application Development | Education & Training Platforms | DesignDot',
  description:
    'Designdot builds engaging, interactive, and scalable e-learning applications, virtual classrooms, course management systems, and mobile learning solutions.',
  robots: 'index, follow',
};

export default function ELearningApplicationPage() {
  return <ELearningClient />;
}
