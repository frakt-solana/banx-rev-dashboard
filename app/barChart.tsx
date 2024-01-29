'use client';
import { BarChart, Card, Title, Text } from "@tremor/react";
import { RevArray } from './types';


export default function BarChartStakedUnstakedPoints({ revArray }: { revArray: RevArray[] }) {
    let data = []
    for(const week of revArray) {
        data.push({
        'Week': `${week.week}`,
        'Staked Points': week.totalStakedPoints,
        'Unstaked Points': week.totalUnstakedPoints,
        })
    }
    return(
        <Card className="mt-8">
            <Title>Staked vs Unstaked (points)</Title>
            <Text>Comparison between Staked and Unstaked points by week</Text>
            <BarChart
            className="mt-4 h-80"
            data={data}
            index="Week"
            categories={["Staked Points", "Unstaked Points",]}
            colors={["green", "red",]}
            valueFormatter={(number: number) =>
                `${Intl.NumberFormat('us').format(number).toString()} points`
            }
            yAxisWidth={48}
            />
        </Card>
    );
}