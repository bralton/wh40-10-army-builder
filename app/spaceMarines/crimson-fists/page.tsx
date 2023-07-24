'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { CRIMSON_FISTS } from '@/factions';

const CrimsonFists: FC<{}> = () => {
  return <ArmySheet faction={CRIMSON_FISTS} />;
};

export default CrimsonFists;
