import { Metadata } from 'next';
import IBeaconAppDevelopmentClient from '@/components/pages/Services/IBeaconAppDevelopmentClient';

export const metadata: Metadata = {
  title: 'iBeacon App Development Services | Emerging Technologies | DesignDot',
  description: 'DesignDot provides iBeacon app development services that enable businesses to deliver hyper-local, context-aware content using BLE technology.',
  robots: 'index, follow',
};

export default function IBeaconAppDevelopmentPage() {
  return <IBeaconAppDevelopmentClient />;
}
