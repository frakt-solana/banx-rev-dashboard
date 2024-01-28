'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { RevArray } from './types';

export default function GrowthDecreaseChart({ revArray }: { revArray: RevArray[] }) {
  let data = []
  let lastWeekRev = 0
  for(const week of revArray) {
    if(week.week===1){
        data.push({
            'Week': `${week.week}`,
            'Percent': 0,
        })
        lastWeekRev = week.claimedSol
    }else{
        const growthDecreaePercent = (((week.claimedSol/lastWeekRev)-1)*100).toFixed(0)
        data.push({
            'Week': `${week.week}`,
            'Percent': growthDecreaePercent,
        })
        lastWeekRev = week.claimedSol
    }
  }
  return (
    <Card className="mt-8">
      <Title>Growth & Decrease</Title>
      <Text>Comparison between Growth & Drecease of revenue by week</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Percent']}
        index="Week"
        colors={['indigo']}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat('us').format(number).toString()}%`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
