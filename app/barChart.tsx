'use client';
import { BarChart, Card, Title, Text } from "@tremor/react";
import { RevArray } from './types';

const chartdata2 = [
  {
    name: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    name: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
  {
    name: "Topic 3",
    "Group A": 380,
    "Group B": 535,
    "Group C": 352,
    "Group D": 718,
    "Group E": 539,
    "Group F": 234,
  },
  {
    name: "Topic 4",
    "Group A": 90,
    "Group B": 98,
    "Group C": 28,
    "Group D": 33,
    "Group E": 61,
    "Group F": 53,
  },
];


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