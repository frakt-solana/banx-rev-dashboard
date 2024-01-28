'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { RevArray } from './types';

export default function Chart({ revArray }: { revArray: RevArray[] }) {
  let data = []
  for(const week of revArray) {
    data.push({
      'Week': `${week.week}`,
      'Total Revenue': week.claimedSol,
      'Claimed Share': week.claimedShare*week.claimedSol,
      'Unclaimed Share': week.unclaimedShare*week.claimedSol
    })
  }
  return (
    <Card className="mt-8">
      <Title>Banx Revenue</Title>
      <Text>Comparison between Total Revenue X Claimed Shared X Unclaimed Share</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Total Revenue', 'Claimed Share', 'Unclaimed Share']}
        index="Week"
        colors={['indigo', 'green', 'red']}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat('us').format(number).toString()} SOL`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
