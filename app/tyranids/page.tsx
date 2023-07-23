'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { TYRANIDS } from '@/factions';

const Tyranids: FC<{}> = () => {
  return <ArmySheet faction={TYRANIDS} />;
};

export default Tyranids;
