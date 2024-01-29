'use client';

import { Switch, Text} from '@tremor/react';
import { useState } from "react";
import { RevArray } from './types';


export default function UsdSwitch({ revArray, isswitchon, handleswitchchange }: { revArray: RevArray[], isswitchon: boolean, handleswitchchange: any}) {
  return (
            <div className='inline-flex flex-end'>
                <Text>SOL</Text><Switch id="switch" name="switch" checked={isswitchon} onChange={handleswitchchange} /><Text>USD</Text>
            </div>

  );
}