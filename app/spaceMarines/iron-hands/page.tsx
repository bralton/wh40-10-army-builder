'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { IRON_HANDS } from '@/factions';

const IronHands: FC<{}> = () => {
  return <ArmySheet faction={IRON_HANDS} />;
};

export default IronHands;
