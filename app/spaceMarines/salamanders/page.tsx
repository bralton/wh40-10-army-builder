'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { SALAMANDERS } from '@/factions';

const Salamanders: FC<{}> = () => {
  return <ArmySheet faction={SALAMANDERS} />;
};

export default Salamanders;
