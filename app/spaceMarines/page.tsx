'use client';
import { FC } from 'react';
import { Faction } from '@/components';

const SpaceMarines: FC<{}> = () => {
  return (
    <div className="container">
      <h1>SPACE MARINES</h1>
      <Faction
        factionName={'Crimson Fists'}
        route={'/spaceMarines/crimson-fists'}
      />
      <Faction
        factionName={'Imperial Fists'}
        route={'/spaceMarines/imperial-fists'}
      />

      <Faction factionName={'Iron Hands'} route={'/spaceMarines/iron-hands'} />
      <Faction
        factionName={'Raven Guard'}
        route={'/spaceMarines/raven-guard'}
      />

      <Faction
        factionName={'Salamanders'}
        route={'/spaceMarines/salamanders'}
      />

      <Faction
        factionName={'Ultramarines'}
        route={'/spaceMarines/ultramarines'}
      />
      <Faction factionName={'Unblooded'} route={'/spaceMarines/unblooded'} />
      <Faction
        factionName={'White Scars'}
        route={'/spaceMarines/white-scars'}
      />
    </div>
  );
};

export default SpaceMarines;
