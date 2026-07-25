import { Metadata } from 'next';
import UIUXDesignClient from '@/components/pages/Services/UIUXDesignClient';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Designdot',
  description:
    'Crafting experiences that inspire, engage, and convert with UI/UX design services from Designdot. Web, Mobile, SaaS & E-commerce UI/UX.',
  robots: 'index, follow',
};

export default function UIUXDesignPage() {
  return <UIUXDesignClient />;
}
