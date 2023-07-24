'use client';
import { FC } from 'react';
import { Faction } from '@/components';

const SpaceMarines: FC<{}> = () => {
  return (
    <div className="container">
      <h1>SPACE MARINES</h1>

      <Faction
        factionName={'Imperial Fists'}
        route={'/spaceMarines/imperial-fists'}
      />

      <Faction
        factionName={'Ultramarines'}
        route={'/spaceMarines/ultramarines'}
      />
      <Faction factionName={'Unblooded'} route={'/spaceMarines/unblooded'} />
    </div>
  );
};

export default SpaceMarines;
