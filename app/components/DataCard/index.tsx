import React, { FC, useEffect, useState } from 'react';
import { enhancement, unit } from '@/types';
import styles from './dataCard.module.scss';
import { BuildCard } from './buildCard';

export const DataCard: FC<{
  unit: unit;
  hidden: boolean;
  enhancements: enhancement[];
  updateUnit: (unit: unit) => void;
  updateEnhancements: (enhancements: enhancement[]) => void;
}> = ({ unit, hidden, enhancements, updateUnit, updateEnhancements }) => {
  const [leader, setLeader] = useState<unit>();
  const [unitComposition, setUnitComposition] = useState<{
    modelCount: number;
    cost: number;
  }>();

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

  useEffect(() => {
    if (unitComposition) {
      const tempUnit = { ...unit };
      tempUnit.unitComposition = unitComposition;
      updateUnit(tempUnit);
    }
  }, [unitComposition]);

  const applyEnhancement = (
    enhancement: enhancement,
    unitToUpdate: unit,
    parentUnit?: unit
  ) => {
    let tempUnit = { ...unitToUpdate };
    let tempEnhancements = [
      ...enhancements,
      ...(tempUnit.enhancement ? [tempUnit.enhancement] : [])
    ];
    tempUnit.enhancement = enhancement;
    tempUnit = enhancement.change(tempUnit);
    console.log('Ben', tempUnit);

    const indexOfEnhancement = tempEnhancements.findIndex(
      (enhancementItem) => enhancementItem.name === enhancement.name
    );
    if (indexOfEnhancement > -1) {
      tempEnhancements.splice(indexOfEnhancement, 1);
    }
    updateEnhancements(tempEnhancements);

    if (parentUnit) {
      const tempParentUnit = { ...parentUnit };
      tempParentUnit.leader = tempUnit;
      updateUnit(tempParentUnit);
    } else {
      updateUnit(tempUnit);
    }
  };

  return (
    <div
      className={`${unit.leader ? styles.attachedUnit : ''} rounded-3 p-3 m-2`}>
      <BuildCard
        unit={unit}
        hidden={hidden}
        enhancements={enhancements}
        setLeader={setLeader}
        setUnitComposition={setUnitComposition}
        applyEnhancement={(enhancement: enhancement) =>
          applyEnhancement(enhancement, unit)
        }
      />
      {unit.leader ? (
        <BuildCard
          unit={unit.leader}
          hidden={hidden}
          enhancements={enhancements}
          setLeader={setLeader}
          setUnitComposition={setUnitComposition}
          applyEnhancement={(enhancement: enhancement) =>
            unit.leader
              ? applyEnhancement(enhancement, unit.leader, unit)
              : null
          }
        />
      ) : null}
    </div>
  );
};
