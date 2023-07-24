'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { ULTRAMARINES } from '@/factions';

const Ultramarines: FC<{}> = () => {
  return <ArmySheet faction={ULTRAMARINES} />;
};

export default Ultramarines;
