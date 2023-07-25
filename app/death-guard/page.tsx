'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { DEATH_GUARD } from '@/factions';

const DeathGuard: FC<{}> = () => {
  return <ArmySheet faction={DEATH_GUARD} />;
};

export default DeathGuard;
