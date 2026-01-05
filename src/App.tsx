import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LoadingScreen from './components/UI/LoadingScreen';
import ScrollToTop from './components/Utils/ScrollToTop';

// Lazy load page components to split the bundle
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const WorkingStyle = React.lazy(() => import('./pages/WorkingStyle'));
const LogicOverEmotion = React.lazy(() => import('./pages/LogicOverEmotion'));
const WrittenCulture = React.lazy(() => import('./pages/WrittenCulture'));
const DeepWork = React.lazy(() => import('./pages/DeepWork'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Insights = React.lazy(() => import('./pages/Insights'));
const InsightsDetail = React.lazy(() => import('./pages/InsightsDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));
const StrategicLeadership = React.lazy(() => import('./pages/StrategicLeadership'));
const PlatformArchitecture = React.lazy(() => import('./pages/PlatformArchitecture'));
const ProductEngineering = React.lazy(() => import('./pages/ProductEngineering'));
const DesignSystems = React.lazy(() => import('./pages/DesignSystems'));
const DesignTokens = React.lazy(() => import('./pages/DesignTokens'));
const ComponentLibrary = React.lazy(() => import('./pages/ComponentLibrary'));
const SystemDocumentation = React.lazy(() => import('./pages/SystemDocumentation'));
const ModernFrontend = React.lazy(() => import('./pages/ModernFrontend'));
const DataDrivenUX = React.lazy(() => import('./pages/DataDrivenUX'));
const EmpoweredTeams = React.lazy(() => import('./pages/EmpoweredTeams'));
const TechnicalRFCs = React.lazy(() => import('./pages/TechnicalRFCs'));
const DORAmetrics = React.lazy(() => import('./pages/DORAmetrics'));
const ProductTrios = React.lazy(() => import('./pages/ProductTrios'));
const SharedUnderstanding = React.lazy(() => import('./pages/SharedUnderstanding'));
const FasterDiscovery = React.lazy(() => import('./pages/FasterDiscovery'));
const BetterMorale = React.lazy(() => import('./pages/BetterMorale'));
const CultureOfMastery = React.lazy(() => import('./pages/CultureOfMastery'));
const TagDetail = React.lazy(() => import('./pages/TagDetail'));

const CloudArchitecture = React.lazy(() => import('./pages/CloudArchitecture'));
const SystemsInfrastructure = React.lazy(() => import('./pages/SystemsInfrastructure'));
const DataEngineering = React.lazy(() => import('./pages/DataEngineering'));
const EventSourcing = React.lazy(() => import('./pages/EventSourcing'));
const CDCPipelines = React.lazy(() => import('./pages/CDCPipelines'));
const DataMesh = React.lazy(() => import('./pages/DataMesh'));
const Observability = React.lazy(() => import('./pages/Observability'));

const PolicyAsCode = React.lazy(() => import('./pages/PolicyAsCode'));
const ZeroTrust = React.lazy(() => import('./pages/ZeroTrust'));
const ImmutableInfrastructure = React.lazy(() => import('./pages/ImmutableInfrastructure'));

/**
 * App Component
 * 
 * The root component of the application.
 * Handles client-side routing using HashRouter (compatible with static hosting).
 * Implements React.lazy and Suspense for performance optimization.
 */
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/working-style" element={<WorkingStyle />} />
            <Route path="/about/working-style/logic-over-emotion" element={<LogicOverEmotion />} />
            <Route path="/about/working-style/written-culture" element={<WrittenCulture />} />
            <Route path="/about/working-style/deep-work" element={<DeepWork />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/tags/:tagId" element={<TagDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightsDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Deep Dive Expertise Pages */}
            <Route path="/expertise/strategic-leadership" element={<StrategicLeadership />} />

            <Route path="/expertise/platform-architecture" element={<PlatformArchitecture />} />
            <Route path="/expertise/platform-architecture" element={<PlatformArchitecture />} />
            <Route path="/expertise/cloud-architecture" element={<CloudArchitecture />} />
            <Route path="/expertise/policy-as-code" element={<PolicyAsCode />} />
            <Route path="/expertise/zero-trust" element={<ZeroTrust />} />
            <Route path="/expertise/immutable-infrastructure" element={<ImmutableInfrastructure />} />
            <Route path="/expertise/systems-infrastructure" element={<SystemsInfrastructure />} />
            <Route path="/expertise/data-engineering" element={<DataEngineering />} />
            <Route path="/expertise/event-sourcing" element={<EventSourcing />} />
            <Route path="/expertise/cdc-pipelines" element={<CDCPipelines />} />
            <Route path="/expertise/data-mesh" element={<DataMesh />} />
            <Route path="/expertise/observability" element={<Observability />} />

            <Route path="/expertise/product-engineering" element={<ProductEngineering />} />
            <Route path="/expertise/design-systems" element={<DesignSystems />} />
            <Route path="/expertise/design-tokens" element={<DesignTokens />} />
            <Route path="/expertise/component-library" element={<ComponentLibrary />} />
            <Route path="/expertise/system-documentation" element={<SystemDocumentation />} />
            <Route path="/expertise/modern-frontend" element={<ModernFrontend />} />
            <Route path="/expertise/data-driven-ux" element={<DataDrivenUX />} />

            {/* Organization & Culture Pages */}
            <Route path="/expertise/empowered-teams" element={<EmpoweredTeams />} />
            <Route path="/expertise/technical-rfcs" element={<TechnicalRFCs />} />
            <Route path="/expertise/dora-metrics" element={<DORAmetrics />} />
            <Route path="/expertise/product-trios" element={<ProductTrios />} />
            <Route path="/expertise/shared-understanding" element={<SharedUnderstanding />} />
            <Route path="/expertise/faster-discovery" element={<FasterDiscovery />} />
            <Route path="/expertise/better-morale" element={<BetterMorale />} />
            <Route path="/expertise/culture-of-mastery" element={<CultureOfMastery />} />
          </Routes>
        </Suspense>
      </Layout>
      {/* Global Animation Utilities */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </Router>
  );
};

export default App;
