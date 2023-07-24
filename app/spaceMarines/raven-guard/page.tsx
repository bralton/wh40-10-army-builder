'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { RAVEN_GUARD } from '@/factions';

const RavenGuard: FC<{}> = () => {
  return <ArmySheet faction={RAVEN_GUARD} />;
};

export default RavenGuard;
