// All service data for dynamic service pages
// Each service has a slug, title, category, and placeholder description

export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  parentMenu: 'expertise' | 'ai-ingenuity' | 'technology';
  heroDescription: string;
  heroImage: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[\/]/g, '-')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ==========================================
// EXPERTISE MENU SERVICES
// ==========================================

const ENGINEERING_SERVICES: ServiceData[] = [
  {
    slug: 'software-engineering-consulting',
    title: 'Software Engineering & Consulting',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Pioneering Excellence With Our Software Consulting Services. In today\'s fast-moving digital economy, software is no longer just a support function — it is the backbone of innovation, scalability, and competitive advantage.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'enterprise-software-development',
    title: 'Enterprise Software Development',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Build robust, scalable enterprise solutions that drive digital transformation. Our enterprise software development services deliver custom applications tailored to your business processes and growth objectives.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'crm-software-development',
    title: 'CRM Software Development',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Transform customer relationships with intelligent CRM solutions. We develop custom CRM platforms that streamline sales, marketing, and customer service operations for measurable business growth.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'saas',
    title: 'SAAS',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Launch and scale your SaaS product with confidence. Our end-to-end SaaS development services cover architecture design, multi-tenant infrastructure, subscription management, and seamless deployment.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'e-learning-application',
    title: 'E-Learning Application',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Create engaging, interactive e-learning platforms that transform education delivery. Our solutions support live classes, assessments, content management, and analytics for modern learning experiences.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'software-development-outsourcing',
    title: 'Software Development Outsourcing',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Accelerate your development pipeline with expert outsourcing. We provide dedicated development teams that integrate seamlessly with your workflow, delivering quality code on time and within budget.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'offshore-software-development',
    title: 'Offshore Software Development',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Leverage global talent with our offshore software development services. Access skilled developers, reduce costs, and accelerate delivery with our proven offshore development center model.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'big-data-analytics',
    title: 'Big Data Analytics',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Unlock actionable insights from your data. Our big data analytics services help organizations process, analyze, and visualize massive datasets to make data-driven decisions with confidence.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'erp-development',
    title: 'ERP Development',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Streamline your business operations with custom ERP solutions. We build integrated enterprise resource planning systems that connect finance, HR, supply chain, and operations in a unified platform.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'application-modernization-services',
    title: 'Application Modernization Services',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Modernize legacy systems for the cloud era. We help organizations migrate, refactor, and re-architect aging applications to modern, scalable, and maintainable technology stacks.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'api-development',
    title: 'API Development',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Build robust, secure, and scalable APIs that power seamless integrations. Our API development services cover RESTful, GraphQL, and real-time APIs designed for performance and developer experience.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ai-in-software',
    title: 'AI In Software',
    category: 'ENGINEERING',
    parentMenu: 'expertise',
    heroDescription: 'Embed artificial intelligence into your software products. We integrate machine learning, NLP, computer vision, and predictive analytics to create intelligent applications that learn and adapt.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const WEB_ECOMMERCE_SERVICES: ServiceData[] = [
  {
    slug: 'custom-web-development',
    title: 'Custom Web Development',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Create stunning, high-performance websites tailored to your brand. Our custom web development services deliver responsive, SEO-optimized digital experiences that engage users and drive conversions.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'shopify-e-commerce',
    title: 'Shopify E-Commerce',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Launch and grow your online store with Shopify. We create custom Shopify storefronts, integrate payment solutions, and optimize your e-commerce experience for maximum sales and customer satisfaction.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'magento-solutions',
    title: 'Magento Solutions',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Power enterprise-grade e-commerce with Magento. Our Magento development services deliver feature-rich, scalable online stores with advanced catalog management, multi-store support, and custom extensions.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Build flexible, customizable e-commerce stores with WooCommerce. We develop WordPress-powered online shops with custom themes, plugins, payment integrations, and scalable architecture.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'headless-commerce',
    title: 'Headless Commerce',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Future-proof your e-commerce with headless architecture. Decouple your frontend from backend systems for faster performance, omnichannel delivery, and ultimate flexibility in customer experience.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'b2b-e-commerce-solutions',
    title: 'B2B E-Commerce Solutions',
    category: 'WEB & ECOMMERCE',
    parentMenu: 'expertise',
    heroDescription: 'Transform B2B commerce with digital-first solutions. We build procurement portals, wholesale platforms, and automated ordering systems that streamline business-to-business transactions.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const MOBILE_APP_SERVICES: ServiceData[] = [
  {
    slug: 'ios-app-development',
    title: 'iOS App Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Create premium iOS applications that delight users. Our iOS development team builds native, high-performance apps for iPhone and iPad using Swift and the latest Apple frameworks.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'android-app-development',
    title: 'Android App Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Build powerful Android applications for billions of users. We develop native Android apps with Kotlin that deliver exceptional performance, material design, and seamless Google ecosystem integration.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'flutter-app-development',
    title: 'Flutter App Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Ship beautiful cross-platform apps faster with Flutter. Build natively compiled iOS and Android applications from a single codebase with Google\'s UI toolkit for crafting beautiful experiences.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'react-native-development',
    title: 'React Native Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Build cross-platform mobile apps with React Native. Leverage your JavaScript expertise to create high-quality native mobile applications for iOS and Android with shared business logic.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'kotlin-app-development',
    title: 'Kotlin App Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Develop modern, concise Android applications with Kotlin. Our Kotlin developers build type-safe, expressive apps that leverage coroutines, Jetpack Compose, and the full Android ecosystem.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'swift-app-development',
    title: 'Swift App Development',
    category: 'MOBILE APP',
    parentMenu: 'expertise',
    heroDescription: 'Create fast, safe iOS applications with Swift. Our Swift developers build native Apple platform apps with modern language features, protocol-oriented design, and seamless SwiftUI integration.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const CLOUD_SERVICES: ServiceData[] = [
  {
    slug: 'aws-solutions-and-devops',
    title: 'AWS Solutions & DevOps',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Harness the power of Amazon Web Services for scalable, secure cloud infrastructure. Our AWS solutions and DevOps practices automate deployments, optimize costs, and ensure high availability.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'azure-cloud-integration',
    title: 'Azure Cloud Integration',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Seamlessly integrate Microsoft Azure into your IT ecosystem. We design and implement cloud solutions that leverage Azure\'s enterprise-grade services for compute, storage, AI, and hybrid cloud.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'google-cloud-management',
    title: 'Google Cloud Management',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Optimize your Google Cloud Platform environment for performance and cost. Our managed services cover infrastructure setup, monitoring, security, and continuous optimization of GCP resources.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'cloud-migration-and-consulting',
    title: 'Cloud Migration & Consulting',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Navigate your cloud journey with expert guidance. Our cloud migration services ensure smooth transitions from on-premises to cloud, minimizing downtime and maximizing operational efficiency.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'kubernetes-containerization',
    title: 'Kubernetes Containerization',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Orchestrate containerized workloads with Kubernetes. We design, deploy, and manage Kubernetes clusters that enable microservices architecture, auto-scaling, and zero-downtime deployments.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'cloud-security-audits',
    title: 'Cloud Security Audits',
    category: 'CLOUD SERVICES',
    parentMenu: 'expertise',
    heroDescription: 'Protect your cloud infrastructure with comprehensive security audits. We identify vulnerabilities, enforce compliance, and implement security best practices across your cloud environments.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const BRAND_DEVELOPMENT_SERVICES: ServiceData[] = [
  {
    slug: 'corporate-identity-design',
    title: 'Corporate Identity Design',
    category: 'BRAND DEVELOPMENT',
    parentMenu: 'expertise',
    heroDescription: 'Craft a powerful corporate identity that communicates your brand values. We design comprehensive visual identity systems including logos, color palettes, typography, and brand collateral.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'brand-guidelines',
    title: 'Brand Guidelines',
    category: 'BRAND DEVELOPMENT',
    parentMenu: 'expertise',
    heroDescription: 'Establish consistent brand communication with comprehensive guidelines. We create detailed brand books that define visual standards, voice, tone, and usage rules for all touchpoints.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'logo-design-systems',
    title: 'Logo Design Systems',
    category: 'BRAND DEVELOPMENT',
    parentMenu: 'expertise',
    heroDescription: 'Design iconic, versatile logo systems that stand the test of time. Our logo design process creates distinctive marks with responsive variations for every medium and application.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'visual-asset-management',
    title: 'Visual Asset Management',
    category: 'BRAND DEVELOPMENT',
    parentMenu: 'expertise',
    heroDescription: 'Organize and manage your visual brand assets efficiently. We create digital asset management systems that ensure brand consistency across teams, channels, and campaigns.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'rebranding-strategy',
    title: 'Rebranding Strategy',
    category: 'BRAND DEVELOPMENT',
    parentMenu: 'expertise',
    heroDescription: 'Reinvent your brand for the modern market. Our rebranding services cover market research, competitive analysis, brand positioning, and complete visual transformation.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const MEDIA_ADVERTISING_SERVICES: ServiceData[] = [
  {
    slug: 'visual-identity',
    title: 'Visual Identity',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Create a compelling visual identity that resonates with your audience. We design cohesive visual systems that establish brand recognition and emotional connection across all platforms.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'public-relations',
    title: 'Public Relations',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Build and protect your brand reputation with strategic PR. Our public relations services cover media outreach, crisis management, thought leadership, and stakeholder communications.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'outdoor-advertising',
    title: 'Outdoor Advertising',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Make a bold impact with outdoor advertising campaigns. From billboards to transit ads, we create eye-catching outdoor media that drives brand awareness and foot traffic.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'media-planning-and-buying',
    title: 'Media Planning & Buying',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Maximize your media ROI with strategic planning and buying. We analyze audiences, negotiate rates, and place your brand across the most effective channels for optimal reach and engagement.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'corporate-communication',
    title: 'Corporate Communication',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Strengthen internal and external corporate communications. We develop communication strategies, content, and channels that align employees and stakeholders with your organizational goals.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'content-strategy',
    title: 'Content Strategy',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Develop a content strategy that drives results. We create comprehensive content plans that align with business goals, audience needs, and search intent for maximum impact.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'market-research-and-consumer-study',
    title: 'Market Research & Consumer Study',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Make informed decisions with data-driven market research. Our consumer studies uncover market trends, competitive landscapes, and customer behaviors that shape winning strategies.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'illustration-sketch-design',
    title: 'Illustration / Sketch Design',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Bring ideas to life with custom illustrations and sketches. Our artists create unique visual content for branding, editorial, advertising, and digital media applications.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'motion-and-video-creation',
    title: 'Motion & Video Creation',
    category: 'MEDIA ADVERTISING',
    parentMenu: 'expertise',
    heroDescription: 'Captivate audiences with professional motion graphics and video content. We produce animations, explainer videos, commercials, and social media videos that tell your brand story.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const DIGITAL_MARKETING_SERVICES: ServiceData[] = [
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Dominate search results with expert SEO strategies. We optimize your website\'s technical foundation, content, and authority to drive sustainable organic traffic and qualified leads.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'paid-advertising',
    title: 'Paid Advertising',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Maximize your advertising ROI with data-driven paid campaigns. We manage Google Ads, social media advertising, and programmatic campaigns that deliver measurable results.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Build engaged communities and drive growth through social media. Our social media marketing services cover strategy, content creation, community management, and performance analytics.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'specialized-ecommerce-seo',
    title: 'Specialized ECommerce SEO',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Boost your online store visibility with specialized e-commerce SEO. We optimize product pages, category structures, and technical SEO to drive organic traffic and increase sales.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Attract and retain customers with compelling content marketing. We create and distribute valuable, relevant content that builds authority, drives traffic, and nurtures leads through the funnel.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Turn more visitors into customers with CRO. We analyze user behavior, run A/B tests, and optimize landing pages, forms, and user flows to maximize your conversion rates.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'mobile-advertising',
    title: 'Mobile Advertising',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Reach users on their most personal device with mobile advertising. We create targeted mobile ad campaigns across apps, mobile web, and social platforms for maximum engagement.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'brand-management',
    title: 'Brand Management',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Protect and grow your brand equity with strategic brand management. We monitor brand perception, manage online reputation, and ensure consistent brand messaging across all channels.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Amplify your brand reach through strategic influencer partnerships. We identify, engage, and manage influencer collaborations that authentically connect with your target audience.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'internet-advertising',
    title: 'Internet Advertising',
    category: 'DIGITAL MARKETING',
    parentMenu: 'expertise',
    heroDescription: 'Expand your digital footprint with comprehensive internet advertising. From display ads to native advertising, we create cross-channel campaigns that build awareness and drive action.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const DIGITAL_TRANSFORMATION_SERVICES: ServiceData[] = [
  {
    slug: 'internet-of-things',
    title: 'Internet Of Things',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Connect the physical and digital worlds with IoT solutions. We develop smart, connected systems that collect real-time data, automate processes, and enable intelligent decision-making.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'wearable-app-development',
    title: 'Wearable App Development',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Create innovative wearable applications for smartwatches, fitness trackers, and AR devices. We build companion apps that deliver seamless experiences on wrist-worn and body-worn devices.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Drive digital transformation with enterprise-grade solutions. We architect and implement systems that modernize operations, enhance collaboration, and create competitive advantages.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Navigate technology decisions with expert IT consulting. We provide strategic guidance on technology roadmaps, architecture, vendor selection, and digital transformation initiatives.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'software-consulting',
    title: 'Software Consulting',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Optimize your software strategy with expert consulting. We evaluate your current systems, identify improvement opportunities, and recommend technology solutions aligned with business goals.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'enterprise-mobility-services',
    title: 'Enterprise Mobility Services',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Empower your mobile workforce with enterprise mobility solutions. We develop secure, scalable mobile platforms that enable employees to work productively from anywhere.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ai-marketplace-engine',
    title: 'AI Marketplace Engine',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Power intelligent marketplaces with AI-driven engines. We build recommendation systems, dynamic pricing algorithms, and smart matching platforms that enhance marketplace experiences.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'digital-product-engineering',
    title: 'Digital Product Engineering',
    category: 'DIGITAL TRANSFORMATION',
    parentMenu: 'expertise',
    heroDescription: 'Transform ideas into market-ready digital products. Our end-to-end product engineering covers discovery, design, development, testing, and continuous iteration for product-market fit.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const EMERGING_TECHNOLOGIES_SERVICES: ServiceData[] = [
  {
    slug: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Build intelligent conversational AI that transforms customer engagement. Our chatbot development services create smart assistants powered by NLP and machine learning for seamless interactions.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'dapps-development',
    title: 'DApps Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Build decentralized applications on blockchain networks. We develop secure, transparent DApps using Ethereum, Solana, and other blockchain platforms for various industries.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ar-vr-development',
    title: 'AR/VR Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Create immersive augmented and virtual reality experiences. We develop AR/VR applications for training, education, retail, real estate, and entertainment using cutting-edge technologies.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'nft-marketplace',
    title: 'NFT Marketplace',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Launch your own NFT marketplace platform. We build custom NFT trading platforms with minting, bidding, buying, and selling capabilities on multiple blockchain networks.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'encrypted-video-streaming',
    title: 'Encrypted Video Streaming',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Deliver secure, DRM-protected video streaming experiences. We build encrypted streaming platforms with content protection, adaptive bitrate, and multi-device support.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'metaverse',
    title: 'Metaverse',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Enter the metaverse with custom virtual world development. We create immersive 3D environments, virtual spaces, and digital experiences for social, commercial, and enterprise use cases.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ibeacon-app-development',
    title: 'IBeacon App Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Leverage proximity technology with iBeacon app development. We build location-aware applications for retail, hospitality, and events that deliver contextual, personalized experiences.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'cryptocurrency-wallet',
    title: 'Cryptocurrency Wallet',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Build secure cryptocurrency wallet applications. We develop multi-currency wallets with robust security features, transaction management, and exchange integrations.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'iot-development',
    title: 'IoT Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Build connected IoT ecosystems that drive efficiency and innovation. We develop end-to-end IoT solutions covering hardware integration, data processing, and intelligent analytics.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'point-of-sales-application',
    title: 'Point Of Sales Application',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Modernize your retail operations with custom POS applications. We build intuitive point-of-sale systems with inventory management, payment processing, and real-time analytics.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'iwatch-app-development',
    title: 'IWatch App Development',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Create powerful Apple Watch applications that complement your iOS ecosystem. We build watchOS apps with complications, health tracking, notifications, and seamless iPhone pairing.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'warehouse-management-system',
    title: 'Warehouse Management System',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Optimize warehouse operations with intelligent management systems. We build WMS solutions that automate inventory tracking, order fulfillment, and logistics for maximum efficiency.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'blockchain',
    title: 'Blockchain',
    category: 'EMERGING TECHNOLOGIES',
    parentMenu: 'expertise',
    heroDescription: 'Leverage blockchain technology for transparent, secure business processes. We develop smart contracts, decentralized platforms, and blockchain solutions across finance, supply chain, and healthcare.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const QUALITY_SUPPORT_SERVICES: ServiceData[] = [
  {
    slug: 'quality-assurance-testing',
    title: 'Quality Assurance Testing',
    category: 'QUALITY & SUPPORT',
    parentMenu: 'expertise',
    heroDescription: 'Ensure flawless software delivery with comprehensive QA testing. Our testing services cover functional, performance, security, and automation testing for web, mobile, and enterprise applications.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'support',
    title: 'Support',
    category: 'QUALITY & SUPPORT',
    parentMenu: 'expertise',
    heroDescription: 'Keep your systems running smoothly with dedicated support services. We provide 24/7 application support, maintenance, monitoring, and incident management for business-critical software.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const SOLUTIONS_SERVICES: ServiceData[] = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Deploy comprehensive enterprise solutions that unify your business operations. We build scalable, integrated platforms that connect departments and streamline complex business processes.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'marketing-and-advertising',
    title: 'Marketing & Advertising',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Amplify your market presence with integrated marketing and advertising solutions. We combine creative strategy with digital tools to deliver campaigns that resonate and convert.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Transform raw data into strategic insights with business intelligence solutions. We build dashboards, reporting tools, and analytics platforms that empower data-driven decision-making.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'kiosk-software',
    title: 'Kiosk Software',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Create interactive kiosk experiences for retail, hospitality, and public spaces. We develop custom kiosk software with touchscreen interfaces, payment integration, and remote management.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'portal-portlet-development',
    title: 'Portal/Portlet Development',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Build powerful web portals that centralize information and services. We develop enterprise portals with role-based access, content management, and third-party integrations.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'operations-management',
    title: 'Operations Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Streamline operations with intelligent management solutions. We build systems that optimize workflows, resource allocation, and process automation for operational excellence.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'cms',
    title: 'CMS',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Manage your digital content effortlessly with custom CMS solutions. We build content management systems that simplify publishing, collaboration, and multi-channel content distribution.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'supply-chain-management',
    title: 'Supply Chain Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Optimize your supply chain with end-to-end management solutions. We build systems that provide visibility, coordination, and automation across procurement, logistics, and distribution.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'crm-application',
    title: 'CRM Application',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Build strong customer relationships with custom CRM applications. We develop solutions that centralize customer data, automate sales processes, and enhance service delivery.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'warehouse-management',
    title: 'Warehouse Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Maximize warehouse efficiency with intelligent management solutions. We build WMS platforms that automate inventory control, order processing, and logistics coordination.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'e-commerce-application',
    title: 'E-Commerce Application',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Launch feature-rich e-commerce applications that drive online sales. We build custom shopping platforms with product management, payment processing, and customer engagement features.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'enterprise-asset-management',
    title: 'Enterprise Asset Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Manage your organization\'s assets throughout their lifecycle. We build EAM solutions for tracking, maintenance scheduling, compliance, and performance optimization.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'point-of-sales-application-solutions',
    title: 'Point Of Sales Application',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Deploy modern point-of-sale solutions for retail and hospitality. We build POS applications with payment processing, inventory management, reporting, and multi-location support.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'fleet-management',
    title: 'Fleet Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Optimize fleet operations with intelligent management solutions. We build platforms for vehicle tracking, route optimization, driver management, and maintenance scheduling.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'hrm-application',
    title: 'HRM Application',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Streamline human resource management with custom HRM applications. We build platforms covering recruitment, onboarding, payroll, performance management, and employee engagement.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'vendor-management',
    title: 'Vendor Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Manage vendor relationships efficiently with dedicated management solutions. We build systems for vendor onboarding, performance tracking, compliance, and procurement optimization.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'mobile-application-solution',
    title: 'Mobile Application Solution',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Deliver complete mobile application solutions for enterprise and consumer markets. We build cross-platform mobile apps with robust backend services and intuitive user experiences.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Manage projects effectively with custom project management solutions. We build platforms for task tracking, resource management, collaboration, and real-time project analytics.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'erp-on-demand-designing-solution',
    title: 'ERP On Demand Designing Solution',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Deploy flexible, on-demand ERP solutions tailored to your business. We design and implement cloud-based ERP systems that scale with your organization and adapt to changing requirements.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'document-management',
    title: 'Document Management',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Digitize and manage your documents efficiently with custom DMS solutions. We build document management systems with version control, search, collaboration, and compliance features.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Build and grow your online business with comprehensive e-commerce solutions. We develop scalable e-commerce platforms with advanced features for product management, payments, and analytics.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'elearning-solutions',
    title: 'ELearning Solutions',
    category: 'SOLUTIONS',
    parentMenu: 'expertise',
    heroDescription: 'Transform education with comprehensive e-learning solutions. We build learning management systems, virtual classrooms, and interactive course platforms for educational institutions and enterprises.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

// ==========================================
// AI INGENUITY MENU SERVICES
// ==========================================

const AI_SERVICES: ServiceData[] = [
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    category: 'AI SERVICES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Navigate the AI landscape with expert consulting. We help organizations identify AI opportunities, develop strategies, and implement machine learning solutions for measurable business impact.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'rag-data-to-llms',
    title: 'RAG (Data To LLMs)',
    category: 'AI SERVICES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Enhance LLM accuracy with Retrieval Augmented Generation. We build RAG pipelines that connect your enterprise data to large language models for contextual, factual AI responses.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'custom-llms-for-enterprises',
    title: 'Custom LLMs For Enterprises',
    category: 'AI SERVICES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Deploy custom large language models tailored to your business. We fine-tune and train LLMs on your proprietary data to create AI systems that understand your domain and deliver precision.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ai-in-mobile-apps',
    title: 'AI In Mobile Apps',
    category: 'AI SERVICES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Integrate AI capabilities into mobile applications. We embed on-device machine learning, computer vision, NLP, and predictive features that make mobile apps smarter and more personalized.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ai-in-software-development',
    title: 'AI In Software',
    category: 'AI SERVICES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Embed artificial intelligence into your software products. We integrate machine learning, NLP, computer vision, and predictive analytics to create intelligent applications.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const DATA_ENGINEERING_SERVICES: ServiceData[] = [
  {
    slug: 'data-pipelines-etl',
    title: 'Data Pipelines (ETL)',
    category: 'DATA ENGINEERING',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Build robust data pipelines for seamless ETL processes. We design and implement scalable data extraction, transformation, and loading pipelines that ensure data quality and timeliness.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'data-warehousing-solutions',
    title: 'Data Warehousing Solutions',
    category: 'DATA ENGINEERING',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Centralize your data with enterprise data warehousing solutions. We architect and implement modern data warehouses that enable fast analytics, reporting, and business intelligence.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'big-data-analytics-ai',
    title: 'Big Data Analytics',
    category: 'DATA ENGINEERING',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Unlock actionable insights from massive datasets. Our big data analytics services combine distributed computing, ML algorithms, and visualization tools for enterprise-scale data analysis.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'real-time-stream-processing',
    title: 'Real-time Stream Processing',
    category: 'DATA ENGINEERING',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Process and analyze data in real-time with stream processing solutions. We build event-driven architectures using Kafka, Flink, and Spark Streaming for instant data insights.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'business-intelligence-dashboards',
    title: 'Business Intelligence Dashboards',
    category: 'DATA ENGINEERING',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Visualize your business data with interactive BI dashboards. We build custom analytics dashboards that provide real-time insights, KPI tracking, and data-driven decision support.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const GENERATIVE_AI_SERVICES: ServiceData[] = [
  {
    slug: 'llm-fine-tuning-and-prompting',
    title: 'LLM Fine-Tuning & Prompting',
    category: 'GENERATIVE AI',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Optimize large language models for your specific use cases. We fine-tune foundation models and engineer prompts that deliver accurate, domain-specific AI outputs.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'retrieval-augmented-generation',
    title: 'Retrieval Augmented Generation',
    category: 'GENERATIVE AI',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Build intelligent RAG systems that combine retrieval and generation. We create AI pipelines that ground LLM responses in your organization\'s knowledge base for factual accuracy.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'ai-copilots-and-chatbots',
    title: 'AI Copilots & Chatbots',
    category: 'GENERATIVE AI',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Deploy AI copilots and chatbots that augment your team. We build conversational AI assistants that handle customer queries, automate workflows, and provide intelligent recommendations.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'multi-agent-system-design',
    title: 'Multi-Agent System Design',
    category: 'GENERATIVE AI',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Design and build multi-agent AI systems for complex workflows. We architect collaborative AI agent networks that decompose tasks, coordinate actions, and deliver sophisticated outcomes.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const DEVOPS_SERVICES: ServiceData[] = [
  {
    slug: 'ci-cd-pipelines-and-testing',
    title: 'CI/CD Pipelines & Testing',
    category: 'DEVOPS',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Accelerate software delivery with automated CI/CD pipelines. We set up continuous integration and deployment workflows with automated testing to ensure rapid, reliable releases.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    category: 'DEVOPS',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Manage infrastructure through code for consistency and scalability. We implement IaC using Terraform, Pulumi, and CloudFormation for reproducible, version-controlled environments.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'cloud-native-integrations',
    title: 'Cloud-Native Integrations',
    category: 'DEVOPS',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Build cloud-native applications with seamless integrations. We design and implement microservices, serverless functions, and cloud services that work together for maximum agility.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'sre-and-monitoring-services',
    title: 'SRE & Monitoring Services',
    category: 'DEVOPS',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Ensure system reliability with Site Reliability Engineering practices. We implement monitoring, alerting, incident response, and capacity planning for highly available systems.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

const KUBERNETES_SERVICES: ServiceData[] = [
  {
    slug: 'cluster-orchestration',
    title: 'Cluster Orchestration',
    category: 'KUBERNETES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Master Kubernetes cluster orchestration for production workloads. We design, deploy, and manage Kubernetes clusters that ensure high availability, scalability, and operational excellence.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'microservices-autoscaling',
    title: 'Microservices Autoscaling',
    category: 'KUBERNETES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Scale microservices automatically based on demand. We implement horizontal and vertical pod autoscaling, custom metrics, and intelligent scaling policies for optimal resource utilization.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'helm-charts-deployment',
    title: 'Helm Charts Deployment',
    category: 'KUBERNETES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Simplify Kubernetes deployments with Helm charts. We create reusable, parameterized Helm charts that standardize application packaging and streamline deployment across environments.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
  {
    slug: 'service-mesh-configuration',
    title: 'Service Mesh Configuration',
    category: 'KUBERNETES',
    parentMenu: 'ai-ingenuity',
    heroDescription: 'Implement service mesh architectures for microservices communication. We configure Istio, Linkerd, and other service mesh solutions for traffic management, security, and observability.',
    heroImage: 'https://dd.mocup.in/assets/web/images/services/software-engineering.webp',
  },
];

// ==========================================
// COMBINE ALL SERVICES
// ==========================================

export const ALL_SERVICES: ServiceData[] = [
  ...ENGINEERING_SERVICES,
  ...WEB_ECOMMERCE_SERVICES,
  ...MOBILE_APP_SERVICES,
  ...CLOUD_SERVICES,
  ...BRAND_DEVELOPMENT_SERVICES,
  ...MEDIA_ADVERTISING_SERVICES,
  ...DIGITAL_MARKETING_SERVICES,
  ...DIGITAL_TRANSFORMATION_SERVICES,
  ...EMERGING_TECHNOLOGIES_SERVICES,
  ...QUALITY_SUPPORT_SERVICES,
  ...SOLUTIONS_SERVICES,
  ...AI_SERVICES,
  ...DATA_ENGINEERING_SERVICES,
  ...GENERATIVE_AI_SERVICES,
  ...DEVOPS_SERVICES,
  ...KUBERNETES_SERVICES,
];

// Create a lookup map: service name -> slug
export const SERVICE_SLUG_MAP: Record<string, string> = {};
ALL_SERVICES.forEach((service) => {
  SERVICE_SLUG_MAP[service.title] = service.slug;
});

// Create a lookup map: slug -> service data
export const SERVICE_BY_SLUG: Record<string, ServiceData> = {};
ALL_SERVICES.forEach((service) => {
  SERVICE_BY_SLUG[service.slug] = service;
});

// Helper: get slug from service name
export function getServiceSlug(serviceName: string): string {
  return SERVICE_SLUG_MAP[serviceName] || toSlug(serviceName);
}

// Helper: get service href from name
export function getServiceHref(serviceName: string): string {
  return `/services/${getServiceSlug(serviceName)}`;
}
