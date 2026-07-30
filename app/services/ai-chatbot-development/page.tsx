import { Metadata } from 'next';
import AIChatbotDevelopmentClient from '@/components/pages/Services/AIChatbotDevelopmentClient';

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | Emerging Technologies | DesignDot',
  description: 'Our AI-powered Chatbot development services deliver real-time, intuitive, and scalable solutions for multiple industries.',
  robots: 'index, follow',
};

export default function AIChatbotDevelopmentPage() {
  return <AIChatbotDevelopmentClient />;
}
