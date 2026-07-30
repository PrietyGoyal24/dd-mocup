import { Metadata } from 'next';
import PortalPortletDevelopmentClient from '@/components/pages/Services/PortalPortletDevelopmentClient';

export const metadata: Metadata = {
  title: 'Portal & Portlet Development Services | DesignDot',
  description: 'Our expert team provides full-cycle portal and portlet development services that enable enterprises to build scalable, customizable solutions.',
  robots: 'index, follow',
};

export default function PortalDevelopmentAliasPage() {
  return <PortalPortletDevelopmentClient />;
}
