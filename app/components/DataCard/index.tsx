import React, { FC, useEffect, useState } from 'react';
import { unit } from '@/types';
import styles from './dataCard.module.scss';
import { BuildCard } from './buildCard';

export const DataCard: FC<{
  unit: unit;
  hidden: boolean;
  updateUnit: (unit: unit) => void;
}> = ({ unit, hidden, updateUnit }) => {
  const [leader, setLeader] = useState<unit>();

  useEffect(() => {
    if (leader) {
      const tempUnit = { ...unit };
      tempUnit.leader = { ...leader };
      if (tempUnit.leadEffect) {
        tempUnit.leadEffect(tempUnit);
      }
      if (tempUnit.leader.leadEffect) {
        tempUnit.leader.leadEffect(tempUnit);
      }
      updateUnit(tempUnit);
    }
  }, [leader]);

  return (
    <div className={`${unit.leader ? styles.attachedUnit : ''} rounded-3 p-3`}>
      <BuildCard unit={unit} hidden={hidden} setLeader={setLeader} />
      {unit.leader ? (
        <BuildCard unit={unit.leader} hidden={hidden} setLeader={setLeader} />
      ) : null}
    </div>
  );
};
