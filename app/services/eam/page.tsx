import { Metadata } from 'next';
import EnterpriseAssetManagementClient from '@/components/pages/Services/EnterpriseAssetManagementClient';

export const metadata: Metadata = {
  title: 'Enterprise Asset Management (EAM) Solutions | DesignDot',
  description: 'Empower your organization to manage physical assets efficiently with our advanced Enterprise Asset Management solutions.',
  robots: 'index, follow',
};

export default function EAMAliasPage() {
  return <EnterpriseAssetManagementClient />;
}
