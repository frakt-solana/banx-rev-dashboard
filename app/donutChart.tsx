'use client';

import { Card, DonutChart, Title, Text} from "@tremor/react";
import { RevArray } from "./types";


export default function DonutChartClaimUnclaim({ revArray }: { revArray: RevArray[] }) {
    
    let totalClaimed = 0
    let totalUnclaimed = 0
    for(const week of revArray) {
        totalClaimed+=(week.claimedSol*week.claimedShare)
        totalUnclaimed+=(week.claimedSol*week.unclaimedShare)
    }
    const data = [
        {
            name: "Claimed Share",
            total: Number(totalClaimed.toFixed(0)),
        },
        {
            name: "Unclaimed Share",
            total: Number(totalUnclaimed.toFixed(0)),
        },

    ]
    return (
        <Card className="mt-8">
            <Title>Total share claimed/unclaimed</Title>
            <Text>Comparison between total Claimed Share X Unclaimed Share in all weeks</Text>
            <DonutChart
            className="mt-4 h-80"
            data={data}
            category="total"
            index="name"
            colors={["green", "red"]}
            valueFormatter={(number: number) =>
                `${Intl.NumberFormat('us').format(number).toString()} SOL`
              }
            />
        </Card>
    )
};