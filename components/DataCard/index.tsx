import React, { FC, useEffect, useState } from 'react';
import { Enhancement, Unit } from '@/types';
import styles from './dataCard.module.scss';
import { BuildCard } from './buildCard';
import { BuildCard2 } from './buildCard2';

export const DataCard: FC<{
  unit: Unit;
  hidden: boolean;
  enhancements: Enhancement[];
  updateUnit: (unit: Unit) => void;
  updateEnhancements: (enhancements: Enhancement[]) => void;
  removeUnit: (unit: Unit) => void;
}> = ({
  unit,
  hidden,
  enhancements,
  updateUnit,
  updateEnhancements,
  removeUnit
}) => {
  const [secondaryLeaders, setSecondaryLeaders] = useState<Unit[]>();
  const [leader, setLeader] = useState<Unit>();
  const [otherLeader, setOtherLeader] = useState<Unit>();
  const [unitComposition, setUnitComposition] = useState<{
    modelCount: number;
    cost: number;
  }>();

  useEffect(() => {
    if (unit.leader && unit.possibleLeaders) {
      unit.possibleLeaders.find((leaderObject) => {
        if (
          leaderObject.character.name === unit.leader?.name &&
          leaderObject.secondLeader
        ) {
          setSecondaryLeaders(leaderObject.secondLeader);
        }
      });
    }
  });

  useEffect(() => {
    if (leader) {
      if (unit?.leader?.enhancement) {
        removeEnhancement(unit.leader);
      }
      if (unit?.secondLeader?.enhancement) {
        removeEnhancement(unit.secondLeader);
      }

      const tempUnit = { ...unit };
      tempUnit.leader = { ...leader };
      delete tempUnit.secondLeader;
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
    if (otherLeader) {
      if (unit?.secondLeader?.enhancement) {
        removeEnhancement(unit.secondLeader);
      }

      const tempUnit = { ...unit };
      tempUnit.secondLeader = { ...otherLeader };
      if (tempUnit.leadEffect) {
        tempUnit.leadEffect(tempUnit);
      }
      if (tempUnit?.leader?.leadEffect) {
        tempUnit.leader.leadEffect(tempUnit);
      }
      if (tempUnit.secondLeader?.leadEffect) {
        tempUnit.secondLeader.leadEffect(tempUnit, false);
      }
      updateUnit(tempUnit);
    }
  }, [otherLeader]);

  useEffect(() => {
    if (unitComposition) {
      const tempUnit = { ...unit };
      tempUnit.unitComposition = unitComposition;
      updateUnit(tempUnit);
    }
  }, [unitComposition]);

  const setSecondUnitComposition = (composition: {
    modelCount: number;
    cost: number;
  }) => {
    const tempUnit = { ...unit };
    if (tempUnit.secondUnit) {
      tempUnit.secondUnit.unitComposition = composition;
      updateUnit(tempUnit);
    }
  };

  const applyEnhancement = (
    enhancement: Enhancement,
    unitToUpdate: Unit,
    parentUnit?: Unit,
    primary = true
  ) => {
    let tempUnit = { ...unitToUpdate };
    const oldEnhancement = tempUnit.enhancement
      ? tempUnit.enhancement
      : undefined;

    let tempEnhancements = [
      ...enhancements,
      ...(tempUnit.enhancement ? [tempUnit.enhancement] : [])
    ];

    tempUnit.enhancement = enhancement;

    const indexOfEnhancement = tempEnhancements.findIndex(
      (enhancementItem) => enhancementItem.name === enhancement.name
    );
    if (indexOfEnhancement > -1) {
      tempEnhancements.splice(indexOfEnhancement, 1);
    }
    updateEnhancements(tempEnhancements);

    delete tempUnit.enhancementStats;
    if (tempUnit.meleeWeapons) {
      tempUnit.meleeWeapons = tempUnit.meleeWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.enhancementAbilities;
          return tempWeapon;
        })
      );
    }
    if (tempUnit.rangedWeapons) {
      tempUnit.rangedWeapons = tempUnit.rangedWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.enhancementAbilities;
          return tempWeapon;
        })
      );
    }

    if (parentUnit) {
      let tempParentUnit = { ...parentUnit };
      if (primary) {
        tempParentUnit.leader = tempUnit;
      } else {
        tempParentUnit.secondLeader = tempUnit;
      }

      if (oldEnhancement?.effectsParent) {
        if (tempParentUnit.meleeWeapons) {
          tempParentUnit.meleeWeapons = tempParentUnit.meleeWeapons.map(
            (weapons) =>
              weapons.map((weapon) => {
                const tempWeapon = { ...weapon };
                if (primary) {
                  delete tempWeapon.leaderEnhancementAbilities;
                } else {
                  delete tempWeapon.secondLeaderEnhancementAbilities;
                }
                return tempWeapon;
              })
          );
        }
        if (tempParentUnit.rangedWeapons) {
          tempParentUnit.rangedWeapons = tempParentUnit.rangedWeapons.map(
            (weapons) =>
              weapons.map((weapon) => {
                const tempWeapon = { ...weapon };
                if (primary) {
                  delete tempWeapon.leaderEnhancementAbilities;
                } else {
                  delete tempWeapon.secondLeaderEnhancementAbilities;
                }
                return tempWeapon;
              })
          );
        }
        if (tempParentUnit?.secondLeader?.meleeWeapons) {
          tempParentUnit.secondLeader.meleeWeapons =
            tempParentUnit.secondLeader.meleeWeapons.map((weapons) =>
              weapons.map((weapon) => {
                const tempWeapon = { ...weapon };
                if (primary) {
                  delete tempWeapon.leaderEnhancementAbilities;
                } else {
                  delete tempWeapon.secondLeaderEnhancementAbilities;
                }
                return tempWeapon;
              })
            );
        }
        if (tempParentUnit?.secondLeader?.rangedWeapons) {
          tempParentUnit.secondLeader.rangedWeapons =
            tempParentUnit.secondLeader.rangedWeapons.map((weapons) =>
              weapons.map((weapon) => {
                const tempWeapon = { ...weapon };
                if (primary) {
                  delete tempWeapon.leaderEnhancementAbilities;
                } else {
                  delete tempWeapon.secondLeaderEnhancementAbilities;
                }
                return tempWeapon;
              })
            );
        }
      }

      if (enhancement.effectsParent) {
        tempParentUnit = enhancement.change(tempParentUnit, primary);
      } else {
        if (primary && tempParentUnit.leader) {
          tempParentUnit.leader = enhancement.change(
            tempParentUnit.leader,
            primary
          );
        } else if (tempParentUnit.secondLeader) {
          tempParentUnit.secondLeader = enhancement.change(
            tempParentUnit.secondLeader,
            primary
          );
        }
      }

      updateUnit(tempParentUnit);
    } else {
      tempUnit = enhancement.change(tempUnit);
      updateUnit(tempUnit);
    }
  };

  const removeLeader = () => {
    const tempUnit = { ...unit };

    if (tempUnit.leader) {
      removeEnhancement(tempUnit.leader);
    }
    if (tempUnit.secondLeader) {
      removeEnhancement(tempUnit.secondLeader);
    }

    delete tempUnit.leadStats;
    delete tempUnit.secondLeadStats;
    if (tempUnit.meleeWeapons) {
      tempUnit.meleeWeapons = tempUnit.meleeWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.leaderAbilities;
          delete tempWeapon.secondLeaderAbilities;
          delete tempWeapon.leaderEnhancementAbilities;
          delete tempWeapon.secondLeaderEnhancementAbilities;
          return tempWeapon;
        })
      );
    }
    if (tempUnit.rangedWeapons) {
      tempUnit.rangedWeapons = tempUnit.rangedWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.leaderAbilities;
          delete tempWeapon.secondLeaderAbilities;
          delete tempWeapon.leaderEnhancementAbilities;
          delete tempWeapon.secondLeaderEnhancementAbilities;
          return tempWeapon;
        })
      );
    }

    delete tempUnit.leader;
    delete tempUnit.secondLeader;
    setSecondaryLeaders(undefined);
    setLeader(undefined);
    setOtherLeader(undefined);
    updateUnit(tempUnit);
  };

  const removeSecondLeader = () => {
    const tempUnit = { ...unit };

    if (tempUnit.secondLeader) {
      removeEnhancement(tempUnit.secondLeader);
    }

    delete tempUnit.secondLeadStats;
    delete tempUnit.leader?.secondLeadStats;
    if (tempUnit.meleeWeapons) {
      tempUnit.meleeWeapons = tempUnit.meleeWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.secondLeaderAbilities;
          delete tempWeapon.secondLeaderEnhancementAbilities;
          return tempWeapon;
        })
      );
    }
    if (tempUnit.rangedWeapons) {
      tempUnit.rangedWeapons = tempUnit.rangedWeapons.map((weapons) =>
        weapons.map((weapon) => {
          const tempWeapon = { ...weapon };
          delete tempWeapon.secondLeaderAbilities;
          delete tempWeapon.secondLeaderEnhancementAbilities;
          return tempWeapon;
        })
      );
    }
    if (tempUnit.leader?.meleeWeapons) {
      tempUnit.leader.meleeWeapons = tempUnit.leader.meleeWeapons.map(
        (weapons) =>
          weapons.map((weapon) => {
            const tempWeapon = { ...weapon };
            delete tempWeapon.secondLeaderAbilities;
            delete tempWeapon.secondLeaderEnhancementAbilities;
            return tempWeapon;
          })
      );
    }
    if (tempUnit.leader?.rangedWeapons) {
      tempUnit.leader.rangedWeapons = tempUnit.leader?.rangedWeapons.map(
        (weapons) =>
          weapons.map((weapon) => {
            const tempWeapon = { ...weapon };
            delete tempWeapon.secondLeaderAbilities;
            delete tempWeapon.secondLeaderEnhancementAbilities;
            return tempWeapon;
          })
      );
    }

    delete tempUnit.secondLeader;
    setOtherLeader(undefined);
    updateUnit(tempUnit);
  };

  const removeEnhancement = (unit: Unit) => {
    if (unit?.enhancement) {
      const tempEnhancements = [...enhancements, unit.enhancement];
      updateEnhancements(tempEnhancements);
    }
  };

  const addLeader = (
    {
      character,
      secondLeader
    }: {
      character: Unit;
      secondLeader?: Unit[];
    },
    primary = true
  ) => {
    if (primary) {
      setLeader(character);
      setSecondaryLeaders(secondLeader);
    } else {
      setOtherLeader(character);
    }
  };

  return (
    <div
      className={`${
        unit.leader ? styles.attachedUnit + 'rounded-3 p-3 m-2' : ''
      } `}>
      <BuildCard2
        unit={unit}
        hidden={hidden}
        enhancements={enhancements}
        setLeader={addLeader}
        setUnitComposition={setUnitComposition}
        setSecondUnitComposition={setSecondUnitComposition}
        applyEnhancement={(enhancement: Enhancement) =>
          applyEnhancement(enhancement, unit)
        }
        removeUnit={removeUnit}
        secondLeaders={secondaryLeaders}
      />
      {unit.leader ? (
        <BuildCard2
          unit={unit.leader}
          hidden={hidden}
          enhancements={enhancements}
          setLeader={addLeader}
          setUnitComposition={setUnitComposition}
          setSecondUnitComposition={setSecondUnitComposition}
          applyEnhancement={(enhancement: Enhancement) =>
            unit.leader
              ? applyEnhancement(enhancement, unit.leader, unit)
              : null
          }
          removeUnit={removeLeader}
        />
      ) : null}
      {unit.secondLeader ? (
        <BuildCard2
          unit={unit.secondLeader}
          hidden={hidden}
          enhancements={enhancements}
          setLeader={addLeader}
          setUnitComposition={setUnitComposition}
          setSecondUnitComposition={setSecondUnitComposition}
          applyEnhancement={(enhancement: Enhancement) =>
            unit.secondLeader
              ? applyEnhancement(enhancement, unit.secondLeader, unit, false)
              : null
          }
          removeUnit={removeSecondLeader}
        />
      ) : null}
    </div>
  );
};
