'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { DARK_ANGELS } from '@/factions';

const DarkAngels: FC<{}> = () => {
  return <ArmySheet faction={DARK_ANGELS} />;
};

export default DarkAngels;
