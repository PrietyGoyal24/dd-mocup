import { Metadata } from 'next';
import DocumentManagementClient from '@/components/pages/Services/DocumentManagementClient';

export const metadata: Metadata = {
  title: 'Document Management Solutions | DesignDot',
  description: 'Our Document Management System (DMS) offers a centralized platform to securely store, organize, retrieve, and share digital documents.',
  robots: 'index, follow',
};

export default function DocumentManagementSolutionsAliasPage() {
  return <DocumentManagementClient />;
}
