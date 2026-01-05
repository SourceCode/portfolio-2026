import React from 'react';
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

import GlassCard from './UI/GlassCard';

const data = [
    {
        A: 83,
        B: 70,
        fullMark: 100,
        subject: 'Cool Blue',
    },
    {
        A: 64,
        B: 59,
        fullMark: 100,
        subject: 'Fiery Red',
    },
    {
        A: 30,
        B: 17,
        fullMark: 100,
        subject: 'Sunshine Yellow',
    },
    {
        A: 41,
        B: 36,
        fullMark: 100,
        subject: 'Earth Green',
    },
];

const WorkingStyleRadarChart: React.FC = () => {
    return (
        <GlassCard className="p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-mint/5 to-transparent border-transparent">
            <h3 className="text-xl font-bold text-white mb-2">Working Style Analysis</h3>
            <p className="text-xs text-white/60 mb-4">Conscious (Adapting) vs Less Conscious (Natural)</p>
            <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Conscious (Adapting)"
                            dataKey="A"
                            stroke="#00FFA3"
                            strokeWidth={3}
                            fill="#00FFA3"
                            fillOpacity={0.3}
                        />
                        <Radar
                            name="Less Conscious (Natural)"
                            dataKey="B"
                            stroke="#ffffff"
                            strokeDasharray="4 4"
                            strokeWidth={2}
                            fill="#ffffff"
                            fillOpacity={0.1}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '32px' }} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-sm text-white/70 mt-6 text-center max-w-md">
                This alignment shows a professional shift towards <strong>Cool Blue</strong> (Precision) and <strong>Fiery Red</strong> (Action), prioritizing data and results.
            </p>
        </GlassCard>
    );
};

export default WorkingStyleRadarChart;
