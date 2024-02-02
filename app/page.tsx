'use client'

import { Card, Title, Grid, Metric, Text } from '@tremor/react';
import Chart from './chart';
import GrowthDecreaseChart from './growthDecreaseChart';
import { revArray } from './revData';
import RevShareTable from './table';
import DonutChartClaimUnclaim from './donutChart';
import BarChartStakedUnstakedPoints from './barChart';
import UsdSwitch from './switch';
import { useState } from "react";

export default function IndexPage() {

  let totalSol = 0
  for(const week of revArray){
    totalSol+= week.claimedSol
  }
  const totalWeeks = revArray[revArray.length-1].week

  const [ticker, setTicker] = useState<string>("SOL");

  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const handleSwitchChange = (value: boolean) => {
    
    setIsSwitchOn(value);
    if(value){
      revArray.forEach((obj) => {
          obj.claimedSol *= obj.solPrice;
          obj.ratioPerPoint*= obj.solPrice;
        });
        setTicker("$")
    }else{
        revArray.forEach((obj) => {
            obj.claimedSol /= obj.solPrice;
            obj.ratioPerPoint/= obj.solPrice;
        });
        setTicker("SOL")
    };
  }
    

  return (
    <Card className='rounded-none p-10'>
      <Metric>Banx Revenue Dashboard</Metric>
      <Title>{totalSol.toFixed(0)} {ticker} distributed to holders in {totalWeeks} weeks</Title>
      <UsdSwitch revArray={revArray} isswitchon={isSwitchOn} handleswitchchange={handleSwitchChange}/>
      <Text>USD values are using the price of Solana at dates of revenue share</Text>
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
          <Chart revArray={revArray} ticker={ticker}/>
          <GrowthDecreaseChart revArray={revArray}/>
          <DonutChartClaimUnclaim revArray={revArray} ticker={ticker}/>
          <BarChartStakedUnstakedPoints revArray={revArray}/>
      </Grid>
      <Card className="mt-6">
        <Title>Weekly Revenue Data</Title>
        <RevShareTable revArray={revArray} ticker={ticker}/>
      </Card>
     
    </Card>
  );
}
