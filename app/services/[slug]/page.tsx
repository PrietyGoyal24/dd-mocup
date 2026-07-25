import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_SERVICES, SERVICE_BY_SLUG } from '@/constants/serviceData';
import ServicePageTemplate from '@/components/pages/Services/ServicePageTemplate';
import EnterpriseSoftwareClient from '@/components/pages/Services/EnterpriseSoftwareClient';
import CRMSoftwareClient from '@/components/pages/Services/CRMSoftwareClient';
import SaaSClient from '@/components/pages/Services/SaaSClient';
import ELearningClient from '@/components/pages/Services/ELearningClient';

import SoftwareDevelopmentOutsourcingClient from '@/components/pages/Services/SoftwareDevelopmentOutsourcingClient';
import OffshoreSoftwareClient from '@/components/pages/Services/OffshoreSoftwareClient';
import BigDataAnalyticsClient from '@/components/pages/Services/BigDataAnalyticsClient';
import ERPClient from '@/components/pages/Services/ERPClient';
import AppModernizationClient from '@/components/pages/Services/AppModernizationClient';
import APIDevelopmentClient from '@/components/pages/Services/APIDevelopmentClient';
import AIInSoftwareClient from '@/components/pages/Services/AIInSoftwareClient';
import WebPortalClient from '@/components/pages/Services/WebPortalClient';
import ECommerceAppClient from '@/components/pages/Services/ECommerceAppClient';
import CRMForECommerceClient from '@/components/pages/Services/CRMForECommerceClient';
import BigCommerceClient from '@/components/pages/Services/BigCommerceClient';
import POSClient from '@/components/pages/Services/POSClient';
import FullStackClient from '@/components/pages/Services/FullStackClient';
import UIUXDesignClient from '@/components/pages/Services/UIUXDesignClient';
import FrontendDevelopmentClient from '@/components/pages/Services/FrontendDevelopmentClient';
import BackendDevelopmentClient from '@/components/pages/Services/BackendDevelopmentClient';
import MVPDevelopmentClient from '@/components/pages/Services/MVPDevelopmentClient';
import MobileAppsDevelopmentClient from '@/components/pages/Services/MobileAppsDevelopmentClient';
import AndroidAppDevelopmentClient from '@/components/pages/Services/AndroidAppDevelopmentClient';
import IOSAppDevelopmentClient from '@/components/pages/Services/IOSAppDevelopmentClient';
import ReactNativeClient from '@/components/pages/Services/ReactNativeClient';
import FlutterAppDevelopmentClient from '@/components/pages/Services/FlutterAppDevelopmentClient';
import PWAClient from '@/components/pages/Services/PWAClient';
import GameDevelopmentClient from '@/components/pages/Services/GameDevelopmentClient';
import AIInMobileAppsClient from '@/components/pages/Services/AIInMobileAppsClient';
import DevOpsClient from '@/components/pages/Services/DevOpsClient';
import AWSClient from '@/components/pages/Services/AWSClient';
import AzureCloudServiceClient from '@/components/pages/Services/AzureCloudServiceClient';
import GoogleAppEngineClient from '@/components/pages/Services/GoogleAppEngineClient';
import Office365Client from '@/components/pages/Services/Office365Client';
import CloudMigrationClient from '@/components/pages/Services/CloudMigrationClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    return {
      title: 'Service Not Found | DesignDot',
    };
  }

  return {
    title: `${service.title} | ${service.category} Services | DesignDot`,
    description: service.heroDescription,
    robots: 'index, follow',
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === 'enterprise-software-development') {
    return <EnterpriseSoftwareClient />;
  }

  if (slug === 'crm-software-development') {
    return <CRMSoftwareClient />;
  }

  if (slug === 'saas') {
    return <SaaSClient />;
  }

  if (slug === 'e-learning' || slug === 'e-learning-application') {
    return <ELearningClient />;
  }

  if (slug === 'software-development-outsourcing') {
    return <SoftwareDevelopmentOutsourcingClient />;
  }

  if (slug === 'offshore-software-development') {
    return <OffshoreSoftwareClient />;
  }

  if (slug === 'big-data-analytics' || slug === 'big-data-analytics-ai') {
    return <BigDataAnalyticsClient />;
  }

  if (slug === 'erp-development') {
    return <ERPClient />;
  }

  if (slug === 'application-modernization-services') {
    return <AppModernizationClient />;
  }

  if (slug === 'api-development') {
    return <APIDevelopmentClient />;
  }

  if (slug === 'ai-in-software' || slug === 'ai-in-software-development') {
    return <AIInSoftwareClient />;
  }

  if (slug === 'web-portal-development') {
    return <WebPortalClient />;
  }

  if (slug === 'ecommerce-app-development') {
    return <ECommerceAppClient />;
  }

  if (slug === 'crm-for-ecommerce') {
    return <CRMForECommerceClient />;
  }

  if (slug === 'bigcommerce-development') {
    return <BigCommerceClient />;
  }

  if (
    slug === 'pos-point-of-sales-application' ||
    slug === 'point-of-sales-application' ||
    slug === 'pos-point-of-sales'
  ) {
    return <POSClient />;
  }

  if (slug === 'full-stack-development') {
    return <FullStackClient />;
  }

  if (slug === 'ui-ux-design' || slug === 'ui-and-ux-design') {
    return <UIUXDesignClient />;
  }

  if (slug === 'frontend-development') {
    return <FrontendDevelopmentClient />;
  }

  if (slug === 'backend-development') {
    return <BackendDevelopmentClient />;
  }

  if (slug === 'mvp-development') {
    return <MVPDevelopmentClient />;
  }

  if (slug === 'mobile-apps-development' || slug === 'mobile-app-development') {
    return <MobileAppsDevelopmentClient />;
  }

  if (slug === 'android-app-development') {
    return <AndroidAppDevelopmentClient />;
  }

  if (
    slug === 'ios-ipad-os-apps-development' ||
    slug === 'ios-app-development' ||
    slug === 'ios-development'
  ) {
    return <IOSAppDevelopmentClient />;
  }

  if (slug === 'react-native-app-development' || slug === 'react-native-development') {
    return <ReactNativeClient />;
  }

  if (slug === 'flutter-app-development' || slug === 'flutter-development') {
    return <FlutterAppDevelopmentClient />;
  }

  if (slug === 'progressive-web-apps' || slug === 'pwa-development') {
    return <PWAClient />;
  }

  if (slug === 'game-development') {
    return <GameDevelopmentClient />;
  }

  if (
    slug === 'ai-in-all-mobile-apps' ||
    slug === 'ai-in-mobile-apps' ||
    slug === 'ai-app-development'
  ) {
    return <AIInMobileAppsClient />;
  }

  if (slug === 'devops' || slug === 'devops-services') {
    return <DevOpsClient />;
  }

  if (
    slug === 'amazon-web-services' ||
    slug === 'amazon-web-service' ||
    slug === 'aws-services' ||
    slug === 'aws-development'
  ) {
    return <AWSClient />;
  }

  if (
    slug === 'azure-cloud-service' ||
    slug === 'azure-cloud-services' ||
    slug === 'microsoft-azure'
  ) {
    return <AzureCloudServiceClient />;
  }

  if (
    slug === 'google-app-engine-service' ||
    slug === 'google-app-engine-services' ||
    slug === 'google-app-engine'
  ) {
    return <GoogleAppEngineClient />;
  }

  if (
    slug === 'office-365' ||
    slug === 'office365' ||
    slug === 'microsoft-office-365'
  ) {
    return <Office365Client />;
  }

  if (
    slug === 'cloud-migration-modernization' ||
    slug === 'cloud-migration-and-modernization' ||
    slug === 'cloud-migration' ||
    slug === 'cloud-modernization'
  ) {
    return <CloudMigrationClient />;
  }

  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
