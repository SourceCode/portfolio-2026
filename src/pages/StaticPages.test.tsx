import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import BetterMorale from './BetterMorale';
import CDCPipelines from './CDCPipelines';
import CloudArchitecture from './CloudArchitecture';
import ComponentLibrary from './ComponentLibrary';
import CultureOfMastery from './CultureOfMastery';
import DataDrivenUX from './DataDrivenUX';
import DataEngineering from './DataEngineering';
import DataMesh from './DataMesh';
import DeepWork from './DeepWork';
import DesignSystems from './DesignSystems';
import DesignTokens from './DesignTokens';
import DORAmetrics from './DORAmetrics';
import EmpoweredTeams from './EmpoweredTeams';
import EventSourcing from './EventSourcing';
import FasterDiscovery from './FasterDiscovery';
import ImmutableInfrastructure from './ImmutableInfrastructure';
import LogicOverEmotion from './LogicOverEmotion';
import ModernFrontend from './ModernFrontend';
import Observability from './Observability';
import PlatformArchitecture from './PlatformArchitecture';
import PolicyAsCode from './PolicyAsCode';
import ProductEngineering from './ProductEngineering';
import ProductTrios from './ProductTrios';
import SharedUnderstanding from './SharedUnderstanding';
import StrategicLeadership from './StrategicLeadership';
import SystemDocumentation from './SystemDocumentation';
import SystemsInfrastructure from './SystemsInfrastructure';
import TechnicalRFCs from './TechnicalRFCs';
import WorkingStyle from './WorkingStyle';
import WrittenCulture from './WrittenCulture';
import ZeroTrust from './ZeroTrust';

// Map of components to test
const staticPages = [
    { component: BetterMorale, name: 'BetterMorale' },
    { component: CDCPipelines, name: 'CDCPipelines' },
    { component: CloudArchitecture, name: 'CloudArchitecture' },
    { component: ComponentLibrary, name: 'ComponentLibrary' },
    { component: CultureOfMastery, name: 'CultureOfMastery' },
    { component: DORAmetrics, name: 'DORAmetrics' },
    { component: DataDrivenUX, name: 'DataDrivenUX' },
    { component: DataEngineering, name: 'DataEngineering' },
    { component: DataMesh, name: 'DataMesh' },
    { component: DeepWork, name: 'DeepWork' },
    { component: DesignSystems, name: 'DesignSystems' },
    { component: DesignTokens, name: 'DesignTokens' },
    { component: EmpoweredTeams, name: 'EmpoweredTeams' },
    { component: EventSourcing, name: 'EventSourcing' },
    { component: FasterDiscovery, name: 'FasterDiscovery' },
    { component: ImmutableInfrastructure, name: 'ImmutableInfrastructure' },
    { component: LogicOverEmotion, name: 'LogicOverEmotion' },
    { component: ModernFrontend, name: 'ModernFrontend' },
    { component: Observability, name: 'Observability' },
    { component: PlatformArchitecture, name: 'PlatformArchitecture' },
    { component: PolicyAsCode, name: 'PolicyAsCode' },
    { component: ProductEngineering, name: 'ProductEngineering' },
    { component: ProductTrios, name: 'ProductTrios' },
    { component: SharedUnderstanding, name: 'SharedUnderstanding' },
    { component: StrategicLeadership, name: 'StrategicLeadership' },
    { component: SystemDocumentation, name: 'SystemDocumentation' },
    { component: SystemsInfrastructure, name: 'SystemsInfrastructure' },
    { component: TechnicalRFCs, name: 'TechnicalRFCs' },
    { component: WorkingStyle, name: 'WorkingStyle' },
    { component: WrittenCulture, name: 'WrittenCulture' },
    { component: ZeroTrust, name: 'ZeroTrust' },
];

describe('Static Pages Integration', () => {
    staticPages.forEach(({ component: Component, name }) => {
        it(`renders ${name} page correctly`, () => {
            renderWithProviders(<Component />);
            // Check for any heading to ensure render
            const headings = screen.getAllByRole('heading');
            expect(headings.length).toBeGreaterThan(0);
        });
    });
});
