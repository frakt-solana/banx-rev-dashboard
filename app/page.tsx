import { Card, Title, Grid, Metric} from '@tremor/react';
import Chart from './chart';
import GrowthDecreaseChart from './growthDecreaseChart';
import { revArray } from './revData';
import RevShareTable from './table';
import DonutChartClaimUnclaim from './donutChart';
import BarChartStakedUnstakedPoints from './barChart';

export default async function IndexPage() {
let totalSol = 0
for(const week of revArray){
  totalSol+= week.claimedSol
}
const totalWeeks = revArray[revArray.length-1].week
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl ">
      <Metric>Banx Revenue</Metric>
      <Title>{totalSol.toFixed(0)} SOL distributed to holders in {totalWeeks} weeks</Title>
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
          <Chart revArray={revArray}/>
          <GrowthDecreaseChart revArray={revArray}/>
          <DonutChartClaimUnclaim revArray={revArray}/>
          <BarChartStakedUnstakedPoints revArray={revArray}/>
      </Grid>
      <Card className="mt-6">
        <RevShareTable revArray={revArray} />
      </Card>
     
    </main>
  );
}
