'use client';
import { FC } from 'react';
import { ArmySheet } from '@/components/ArmySheet';
import { WHITE_SCARS } from '@/factions';

const WhiteScars: FC<{}> = () => {
  return <ArmySheet faction={WHITE_SCARS} />;
};

export default WhiteScars;
