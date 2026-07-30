import { Metadata } from 'next';
import ProjectManagementClient from '@/components/pages/Services/ProjectManagementClient';

export const metadata: Metadata = {
  title: 'Project Management Solutions | DesignDot',
  description: 'Take control of your projects with our end-to-end project management solutions enabling planning, execution, collaboration, and delivery.',
  robots: 'index, follow',
};

export default function ProjectManagementPage() {
  return <ProjectManagementClient />;
}
