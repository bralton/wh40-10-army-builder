'use client';
import { FC } from 'react';
import { Faction } from '@/components';

const Home: FC<{}> = () => {
  return (
    <div className="container">
      <h1>Warhammer 40K 10th Edition Army Builder</h1>

      <Faction factionName={'Space Marines'} route={'/spaceMarines'} />

      <Faction factionName={'Tyranids'} route={'/tyranids'} />
    </div>
  );
};

export default Home;
