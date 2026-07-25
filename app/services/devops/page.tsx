import { Metadata } from 'next';
import DevOpsClient from '@/components/pages/Services/DevOpsClient';

export const metadata: Metadata = {
  title: 'DevOps Services | CI/CD, IaC, Kubernetes, Cloud Automation | Designdot',
  description:
    'DevOps services from Designdot. Automate CI/CD pipelines, infrastructure as code, containerization with Docker & Kubernetes, and cloud security automation.',
  robots: 'index, follow',
};

export default function DevOpsPage() {
  return <DevOpsClient />;
}
