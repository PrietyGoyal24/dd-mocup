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
import CloudArchitectureReviewClient from '@/components/pages/Services/CloudArchitectureReviewClient';
import CloudConsultingClient from '@/components/pages/Services/CloudConsultingClient';
import GenAIClient from '@/components/pages/Services/GenAIClient';
import SecurityComplianceClient from '@/components/pages/Services/SecurityComplianceClient';
import CybersecurityClient from '@/components/pages/Services/CybersecurityClient';
import BrandStrategyClient from '@/components/pages/Services/BrandStrategyClient';
import SignageDesignClient from '@/components/pages/Services/SignageDesignClient';
import ProductDesignClient from '@/components/pages/Services/ProductDesignClient';
import BrandReimaginationClient from '@/components/pages/Services/BrandReimaginationClient';
import StationaryDesignClient from '@/components/pages/Services/StationaryDesignClient';
import PhotographyClient from '@/components/pages/Services/PhotographyClient';
import CampaignDesignClient from '@/components/pages/Services/CampaignDesignClient';
import HoardingDesignClient from '@/components/pages/Services/HoardingDesignClient';
import TotemDesignClient from '@/components/pages/Services/TotemDesignClient';
import VisualIdentityClient from '@/components/pages/Services/VisualIdentityClient';
import PublicRelationsClient from '@/components/pages/Services/PublicRelationsClient';
import OutdoorAdvertisingClient from '@/components/pages/Services/OutdoorAdvertisingClient';
import MediaPlanningBuyingClient from '@/components/pages/Services/MediaPlanningBuyingClient';
import CorporateCommunicationClient from '@/components/pages/Services/CorporateCommunicationClient';
import ContentStrategyClient from '@/components/pages/Services/ContentStrategyClient';
import MarketResearchClient from '@/components/pages/Services/MarketResearchClient';
import SketchStoryBuildingClient from '@/components/pages/Services/SketchStoryBuildingClient';
import MotionDesignClient from '@/components/pages/Services/MotionDesignClient';
import PaidAdvertisingClient from '@/components/pages/Services/PaidAdvertisingClient';
import SearchEngineOptimizationClient from '@/components/pages/Services/SearchEngineOptimizationClient';
import SpecializedECommerceSEOClient from '@/components/pages/Services/SpecializedECommerceSEOClient';
import SocialMediaMarketingClient from '@/components/pages/Services/SocialMediaMarketingClient';
import ContentMarketingClient from '@/components/pages/Services/ContentMarketingClient';
import ConversionRateOptimizationClient from '@/components/pages/Services/ConversionRateOptimizationClient';
import MobileAdvertisingClient from '@/components/pages/Services/MobileAdvertisingClient';
import BrandManagementClient from '@/components/pages/Services/BrandManagementClient';
import InfluencerMarketingClient from '@/components/pages/Services/InfluencerMarketingClient';
import InternetAdvertisingClient from '@/components/pages/Services/InternetAdvertisingClient';
import InternetOfThingsClient from '@/components/pages/Services/InternetOfThingsClient';
import WearableAppDevelopmentClient from '@/components/pages/Services/WearableAppDevelopmentClient';
import EnterpriseSolutionsClient from '@/components/pages/Services/EnterpriseSolutionsClient';
import ITConsultingClient from '@/components/pages/Services/ITConsultingClient';
import EnterpriseMobilityServicesClient from '@/components/pages/Services/EnterpriseMobilityServicesClient';
import SoftwareConsultingClient from '@/components/pages/Services/SoftwareConsultingClient';
import AIMarketplaceEngineClient from '@/components/pages/Services/AIMarketplaceEngineClient';
import DigitalProductEngineeringClient from '@/components/pages/Services/DigitalProductEngineeringClient';
import AIChatbotDevelopmentClient from '@/components/pages/Services/AIChatbotDevelopmentClient';
import DAppsDevelopmentClient from '@/components/pages/Services/DAppsDevelopmentClient';
import ARVRDevelopmentClient from '@/components/pages/Services/ARVRDevelopmentClient';
import NFTMarketplaceClient from '@/components/pages/Services/NFTMarketplaceClient';
import EncryptedVideoStreamingClient from '@/components/pages/Services/EncryptedVideoStreamingClient';
import MetaverseClient from '@/components/pages/Services/MetaverseClient';
import IBeaconAppDevelopmentClient from '@/components/pages/Services/IBeaconAppDevelopmentClient';
import CryptocurrencyWalletClient from '@/components/pages/Services/CryptocurrencyWalletClient';
import IWatchAppDevelopmentClient from '@/components/pages/Services/IWatchAppDevelopmentClient';
import BlockchainApplicationClient from '@/components/pages/Services/BlockchainApplicationClient';
import WarehouseManagementClient from '@/components/pages/Services/WarehouseManagementClient';
import QualityAssuranceTestingClient from '@/components/pages/Services/QualityAssuranceTestingClient';
import SupportClient from '@/components/pages/Services/SupportClient';
import MarketingAndAdvertisingClient from '@/components/pages/Services/MarketingAndAdvertisingClient';
import BusinessIntelligenceClient from '@/components/pages/Services/BusinessIntelligenceClient';
import KioskSoftwareClient from '@/components/pages/Services/KioskSoftwareClient';
import PortalPortletDevelopmentClient from '@/components/pages/Services/PortalPortletDevelopmentClient';
import OperationsManagementClient from '@/components/pages/Services/OperationsManagementClient';
import CMSDevelopmentClient from '@/components/pages/Services/CMSDevelopmentClient';
import SupplyChainManagementClient from '@/components/pages/Services/SupplyChainManagementClient';
import CRMApplicationClient from '@/components/pages/Services/CRMApplicationClient';
import ECommerceApplicationClient from '@/components/pages/Services/ECommerceApplicationClient';
import EnterpriseAssetManagementClient from '@/components/pages/Services/EnterpriseAssetManagementClient';
import FleetManagementClient from '@/components/pages/Services/FleetManagementClient';
import HRMApplicationClient from '@/components/pages/Services/HRMApplicationClient';
import VendorManagementClient from '@/components/pages/Services/VendorManagementClient';
import MobileApplicationSolutionClient from '@/components/pages/Services/MobileApplicationSolutionClient';
import ProjectManagementClient from '@/components/pages/Services/ProjectManagementClient';
import ERPDesigningSolutionClient from '@/components/pages/Services/ERPDesigningSolutionClient';
import DocumentManagementClient from '@/components/pages/Services/DocumentManagementClient';
import ELearningSolutionsClient from '@/components/pages/Services/ELearningSolutionsClient';









































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
    slug === 'point-of-sales-application-solutions' ||
    slug === 'point-of-sale-application' ||
    slug === 'pos-point-of-sales' ||
    slug === 'pos-application' ||
    slug === 'pos'
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

  if (
    slug === 'cloud-architecture-review' ||
    slug === 'cloud-architecture' ||
    slug === 'architecture-review'
  ) {
    return <CloudArchitectureReviewClient />;
  }

  if (
    slug === 'cloud-consulting' ||
    slug === 'cloud-consulting-services'
  ) {
    return <CloudConsultingClient />;
  }

  if (
    slug === 'gen-ai' ||
    slug === 'generative-ai' ||
    slug === 'gen-ai-services' ||
    slug === 'generative-ai-solutions'
  ) {
    return <GenAIClient />;
  }

  if (
    slug === 'security-compliance' ||
    slug === 'security-and-compliance' ||
    slug === 'security-compliance-services'
  ) {
    return <SecurityComplianceClient />;
  }

  if (
    slug === 'cybersecurity' ||
    slug === 'cyber-security' ||
    slug === 'cybersecurity-solutions'
  ) {
    return <CybersecurityClient />;
  }

  if (
    slug === 'brand-strategy' ||
    slug === 'brand-strategy-identity' ||
    slug === 'brand-strategy-and-identity' ||
    slug === 'corporate-brand-identity-strategy' ||
    slug === 'corporate-brand-identity-and-strategy' ||
    slug === 'corporate-brand-identity' ||
    slug === 'brand-development'
  ) {
    return <BrandStrategyClient />;
  }

  if (
    slug === 'signage-design' ||
    slug === 'signage-design-services' ||
    slug === 'navigation-digital-signage' ||
    slug === 'navigation-and-digital-signage' ||
    slug === 'outdoor-signage' ||
    slug === 'indoor-signage'
  ) {
    return <SignageDesignClient />;
  }

  if (
    slug === 'product-design' ||
    slug === 'product-design-services' ||
    slug === 'industrial-product-design' ||
    slug === 'product-and-packaging-design' ||
    slug === 'product-and-packaging' ||
    slug === 'packaging-and-sales-promotion' ||
    slug === 'packaging-design' ||
    slug === 'package-design'
  ) {
    return <ProductDesignClient />;
  }

  if (
    slug === 'brand-reimagination' ||
    slug === 'brand-re-imagination' ||
    slug === 'brand-reimagination-services'
  ) {
    return <BrandReimaginationClient />;
  }

  if (
    slug === 'stationary-design' ||
    slug === 'stationery-design' ||
    slug === 'print-design' ||
    slug === 'stationary-print-design' ||
    slug === 'stationery-print-design'
  ) {
    return <StationaryDesignClient />;
  }

  if (
    slug === 'photography' ||
    slug === 'photography-services' ||
    slug === 'brand-photography'
  ) {
    return <PhotographyClient />;
  }

  if (
    slug === 'campaign-design' ||
    slug === 'campaign-design-services' ||
    slug === 'ad-campaign-design'
  ) {
    return <CampaignDesignClient />;
  }

  if (
    slug === 'hoarding-design' ||
    slug === 'hoarding-design-services' ||
    slug === 'billboard-design'
  ) {
    return <HoardingDesignClient />;
  }

  if (
    slug === 'totem-design' ||
    slug === 'totem-design-services' ||
    slug === 'totem-signage'
  ) {
    return <TotemDesignClient />;
  }

  if (
    slug === 'visual-identity' ||
    slug === 'visual-identity-services' ||
    slug === 'visual-brand-identity'
  ) {
    return <VisualIdentityClient />;
  }

  if (
    slug === 'public-relations' ||
    slug === 'public-relation' ||
    slug === 'pr-services' ||
    slug === 'public-relations-services'
  ) {
    return <PublicRelationsClient />;
  }

  if (
    slug === 'outdoor-advertising' ||
    slug === 'outdoor-advertising-services' ||
    slug === 'outdoor-ads'
  ) {
    return <OutdoorAdvertisingClient />;
  }

  if (
    slug === 'media-planning-and-buying' ||
    slug === 'media-planning' ||
    slug === 'media-buying' ||
    slug === 'media-planning-buying'
  ) {
    return <MediaPlanningBuyingClient />;
  }

  if (
    slug === 'corporate-communication' ||
    slug === 'corporate-communications' ||
    slug === 'corporate-communication-services'
  ) {
    return <CorporateCommunicationClient />;
  }

  if (
    slug === 'content-strategy' ||
    slug === 'content-management' ||
    slug === 'content-management-system' ||
    slug === 'cms'
  ) {
    return <ContentStrategyClient />;
  }

  if (
    slug === 'market-research' ||
    slug === 'market-research-services' ||
    slug === 'market-research-and-consumer-study'
  ) {
    return <MarketResearchClient />;
  }

  if (
    slug === 'sketch-story-building' ||
    slug === 'sketch-and-story-building' ||
    slug === 'storyboarding' ||
    slug === 'illustration-sketch-design'
  ) {
    return <SketchStoryBuildingClient />;
  }

  if (
    slug === 'motion-design' ||
    slug === 'motion-design-services' ||
    slug === 'motion-and-video-creation' ||
    slug === 'video-creation'
  ) {
    return <MotionDesignClient />;
  }

  if (
    slug === 'paid-advertising' ||
    slug === 'paid-advertising-services' ||
    slug === 'ppc-advertising'
  ) {
    return <PaidAdvertisingClient />;
  }

  if (
    slug === 'search-engine-optimization' ||
    slug === 'search-engine-optimization-services' ||
    slug === 'seo'
  ) {
    return <SearchEngineOptimizationClient />;
  }

  if (
    slug === 'specialized-ecommerce-seo' ||
    slug === 'specialized-ecommerce-seo-services' ||
    slug === 'ecommerce-seo'
  ) {
    return <SpecializedECommerceSEOClient />;
  }

  if (
    slug === 'social-media-marketing' ||
    slug === 'social-media-marketing-services' ||
    slug === 'smm'
  ) {
    return <SocialMediaMarketingClient />;
  }

  if (
    slug === 'content-marketing' ||
    slug === 'content-writing' ||
    slug === 'content-marketing-services'
  ) {
    return <ContentMarketingClient />;
  }

  if (
    slug === 'conversion-rate-optimization' ||
    slug === 'conversion-rate-optimization-cro' ||
    slug === 'cro'
  ) {
    return <ConversionRateOptimizationClient />;
  }

  if (
    slug === 'mobile-advertising' ||
    slug === 'mobile-advertising-services' ||
    slug === 'mobile-marketing'
  ) {
    return <MobileAdvertisingClient />;
  }

  if (
    slug === 'brand-management' ||
    slug === 'brand-management-services'
  ) {
    return <BrandManagementClient />;
  }

  if (
    slug === 'influencer-marketing' ||
    slug === 'influencer-marketing-services'
  ) {
    return <InfluencerMarketingClient />;
  }

  if (
    slug === 'internet-advertising' ||
    slug === 'internet-advertising-services' ||
    slug === 'online-advertising'
  ) {
    return <InternetAdvertisingClient />;
  }

  if (
    slug === 'internet-of-things' ||
    slug === 'iot' ||
    slug === 'iot-solutions'
  ) {
    return <InternetOfThingsClient />;
  }

  if (
    slug === 'wearable-app-development' ||
    slug === 'wearable-app-solutions' ||
    slug === 'wearable-apps'
  ) {
    return <WearableAppDevelopmentClient />;
  }

  if (
    slug === 'enterprise-solutions' ||
    slug === 'enterprise-software-solutions'
  ) {
    return <EnterpriseSolutionsClient />;
  }

  if (
    slug === 'it-consulting' ||
    slug === 'it-consulting-services'
  ) {
    return <ITConsultingClient />;
  }

  if (
    slug === 'enterprise-mobility-services' ||
    slug === 'enterprise-mobility'
  ) {
    return <EnterpriseMobilityServicesClient />;
  }

  if (
    slug === 'software-consulting' ||
    slug === 'software-consulting-services'
  ) {
    return <SoftwareConsultingClient />;
  }

  if (
    slug === 'ai-marketplace-engine' ||
    slug === 'ai-marketplace'
  ) {
    return <AIMarketplaceEngineClient />;
  }

  if (
    slug === 'digital-product-engineering' ||
    slug === 'product-engineering'
  ) {
    return <DigitalProductEngineeringClient />;
  }

  if (
    slug === 'ai-chatbot-development' ||
    slug === 'ai-chatbot' ||
    slug === 'chatbot-development'
  ) {
    return <AIChatbotDevelopmentClient />;
  }

  if (
    slug === 'dapps-development' ||
    slug === 'dapp-development' ||
    slug === 'dapps'
  ) {
    return <DAppsDevelopmentClient />;
  }

  if (
    slug === 'ar-vr-development' ||
    slug === 'ar-vr' ||
    slug === 'ar-vr-development-services'
  ) {
    return <ARVRDevelopmentClient />;
  }

  if (
    slug === 'nft-marketplace' ||
    slug === 'NFT-marketplace' ||
    slug === 'nft-marketplace-development'
  ) {
    return <NFTMarketplaceClient />;
  }

  if (
    slug === 'encrypted-video-streaming' ||
    slug === 'video-streaming' ||
    slug === 'encrypted-video-streaming-services'
  ) {
    return <EncryptedVideoStreamingClient />;
  }

  if (
    slug === 'metaverse' ||
    slug === 'metaverse-development' ||
    slug === 'metaverse-solutions'
  ) {
    return <MetaverseClient />;
  }

  if (
    slug === 'ibeacon-app-development' ||
    slug === 'ibeacon-app' ||
    slug === 'ibeacon'
  ) {
    return <IBeaconAppDevelopmentClient />;
  }

  if (
    slug === 'cryptocurrency-wallet' ||
    slug === 'cryptocurrency-wallet-development' ||
    slug === 'crypto-wallet'
  ) {
    return <CryptocurrencyWalletClient />;
  }

  if (
    slug === 'iot-development' ||
    slug === 'internet-of-things' ||
    slug === 'iot'
  ) {
    return <InternetOfThingsClient />;
  }

  if (
    slug === 'point-of-sales-application' ||
    slug === 'point-of-sale-application' ||
    slug === 'pos-application' ||
    slug === 'pos'
  ) {
    return <POSClient />;
  }

  if (
    slug === 'iwatch-app-development' ||
    slug === 'iwatch-app' ||
    slug === 'iwatch'
  ) {
    return <IWatchAppDevelopmentClient />;
  }

  if (
    slug === 'blockchain-application-development' ||
    slug === 'blockchain-application' ||
    slug === 'blockchain'
  ) {
    return <BlockchainApplicationClient />;
  }

  if (
    slug === 'warehouse-management-system' ||
    slug === 'warehouse-management' ||
    slug === 'wms'
  ) {
    return <WarehouseManagementClient />;
  }

  if (
    slug === 'quality-assurance-testing' ||
    slug === 'quality-assurance' ||
    slug === 'qa-testing' ||
    slug === 'qa'
  ) {
    return <QualityAssuranceTestingClient />;
  }

  if (
    slug === 'support' ||
    slug === 'it-support' ||
    slug === 'maintenance-and-support' ||
    slug === 'software-support'
  ) {
    return <SupportClient />;
  }

  if (
    slug === 'marketing-and-advertising' ||
    slug === 'marketing-advertising' ||
    slug === 'marketing-and-advertising-services'
  ) {
    return <MarketingAndAdvertisingClient />;
  }

  if (
    slug === 'business-intelligence' ||
    slug === 'business-intelligence-services' ||
    slug === 'bi' ||
    slug === 'bi-services'
  ) {
    return <BusinessIntelligenceClient />;
  }

  if (
    slug === 'kiosk-software' ||
    slug === 'kiosk-development' ||
    slug === 'kiosk'
  ) {
    return <KioskSoftwareClient />;
  }

  if (
    slug === 'portal-portlet-development' ||
    slug === 'portal-development' ||
    slug === 'portlet-development' ||
    slug === 'portal-and-portlet-development'
  ) {
    return <PortalPortletDevelopmentClient />;
  }

  if (
    slug === 'operations-management' ||
    slug === 'operations-management-solutions' ||
    slug === 'operations'
  ) {
    return <OperationsManagementClient />;
  }

  if (
    slug === 'cms' ||
    slug === 'cms-development' ||
    slug === 'cms-development-services'
  ) {
    return <CMSDevelopmentClient />;
  }

  if (
    slug === 'supply-chain-management' ||
    slug === 'supply-chain' ||
    slug === 'scm' ||
    slug === 'supply-chain-management-solutions'
  ) {
    return <SupplyChainManagementClient />;
  }

  if (
    slug === 'crm-application' ||
    slug === 'crm' ||
    slug === 'crm-application-development' ||
    slug === 'crm-application-development-services'
  ) {
    return <CRMApplicationClient />;
  }

  if (
    slug === 'ecommerce-application' ||
    slug === 'ecommerce' ||
    slug === 'e-commerce' ||
    slug === 'e-commerce-application' ||
    slug === 'ecommerce-development'
  ) {
    return <ECommerceApplicationClient />;
  }


  if (
    slug === 'enterprise-asset-management' ||
    slug === 'eam' ||
    slug === 'enterprise-asset-management-solutions'
  ) {
    return <EnterpriseAssetManagementClient />;
  }

  if (
    slug === 'fleet-management' ||
    slug === 'fleet' ||
    slug === 'fleet-management-solutions'
  ) {
    return <FleetManagementClient />;
  }

  if (
    slug === 'hrm-application' ||
    slug === 'hrm' ||
    slug === 'hrm-application-development'
  ) {
    return <HRMApplicationClient />;
  }

  if (
    slug === 'vendor-management' ||
    slug === 'vendor-management-solutions' ||
    slug === 'vendor-management-system'
  ) {
    return <VendorManagementClient />;
  }

  if (
    slug === 'mobile-application-solution' ||
    slug === 'mobile-application-solutions' ||
    slug === 'mobile-app-development' ||
    slug === 'mobile-application-development'
  ) {
    return <MobileApplicationSolutionClient />;
  }

  if (
    slug === 'project-management' ||
    slug === 'project-management-solutions' ||
    slug === 'project-management-system'
  ) {
    return <ProjectManagementClient />;
  }

  if (
    slug === 'erp-designing-solution' ||
    slug === 'erp-on-demand-designing-solution' ||
    slug === 'erp-design-solution' ||
    slug === 'erp-designing'
  ) {
    return <ERPDesigningSolutionClient />;
  }

  if (
    slug === 'document-management' ||
    slug === 'document-management-solutions' ||
    slug === 'document-management-system' ||
    slug === 'dms'
  ) {
    return <DocumentManagementClient />;
  }

  if (
    slug === 'eLearning-solutions' ||
    slug === 'e-learning-solutions' ||
    slug === 'elearning-solutions' ||
    slug === 'elearning' ||
    slug === 'e-learning'
  ) {
    return <ELearningSolutionsClient />;
  }








































  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
