import React from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

import { ProjectMetrics } from '../types';

interface ProjectRadarChartProps {
    metrics: ProjectMetrics;
}

const ProjectRadarChart: React.FC<ProjectRadarChartProps> = ({ metrics }) => {
    const data = [
        { A: metrics.creativity, fullMark: 10, subject: 'Creativity' },
        { A: metrics.curiosity, fullMark: 10, subject: 'Curiosity' },
        { A: metrics.ambition, fullMark: 10, subject: 'Ambition' },
        { A: metrics.learning, fullMark: 10, subject: 'Learning' },
        { A: metrics.entrepreneurship, fullMark: 10, subject: 'Business' },
    ];

    return (
        <div className="w-full h-[290px] sm:h-[290px] lg:h-[290px]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data} margin={{ bottom: 0, left: 0, right: 0, top: 0 }}>
                    <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 9 }}
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 10]}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        name="Project Metrics"
                        dataKey="A"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        fill="#14b8a6"
                        fillOpacity={0.3}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '0.5rem',
                            color: '#fff'
                        }}
                        itemStyle={{ color: '#14b8a6' }}
                        cursor={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProjectRadarChart;
