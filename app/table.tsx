import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { RevArray } from './types';


export default function RevShareTable({ revArray }: { revArray: RevArray[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Week</TableHeaderCell>
          <TableHeaderCell>Total Revenue</TableHeaderCell>
          <TableHeaderCell>Staked Points</TableHeaderCell>
          <TableHeaderCell>Unstaked Points</TableHeaderCell>
          <TableHeaderCell>Claimed Share</TableHeaderCell>
          <TableHeaderCell>Unclaimed Share</TableHeaderCell>
          <TableHeaderCell>Sol per point</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {revArray.map((week) => (
          <TableRow key={week.week}>
            <TableCell>{week.week}</TableCell>
            <TableCell>
              <Text>{week.claimedSol.toFixed(2)}</Text>
            </TableCell>
            <TableCell>
              <Text>{week.totalStakedPoints}</Text>
            </TableCell>
            <TableCell>
              <Text>{week.totalUnstakedPoints}</Text>
            </TableCell>
            <TableCell>
              <Text>{(week.claimedSol*week.claimedShare).toFixed(2)}({(week.claimedShare*100).toFixed(2)}%)</Text>
            </TableCell>
            <TableCell>
              <Text>{(week.claimedSol*week.unclaimedShare).toFixed(2)}({(week.unclaimedShare*100).toFixed(2)}%)</Text>
            </TableCell>
            <TableCell>
              <Text>{week.ratioPerPoint.toFixed(6)}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
