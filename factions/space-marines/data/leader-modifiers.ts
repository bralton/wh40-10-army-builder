import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { Unit } from '@/types';

export const tactical_precision = (unit: Unit): Unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: [WEAPON_ABILITIES.LETHAL_HITS]
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: [WEAPON_ABILITIES.LETHAL_HITS]
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      tactical_precision(leader)
    );
  }
  if (unit.leader) {
    unit.leader = tactical_precision(unit.leader);
  }

  return unit;
};
