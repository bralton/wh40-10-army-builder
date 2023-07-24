'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { IMPERIAL_FISTS } from '@/factions';

const ImperialFists: FC<{}> = () => {
  return <ArmySheet faction={IMPERIAL_FISTS} />;
};

export default ImperialFists;
