'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { SPACE_MARINES } from '@/factions';

const SpaceMarines: FC<{}> = () => {
  return <ArmySheet faction={SPACE_MARINES} />;
};

export default SpaceMarines;
