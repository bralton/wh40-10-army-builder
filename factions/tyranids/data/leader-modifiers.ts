import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { unit } from '@/types';

export const guardianOrganism = (unit: unit): unit => {
  if (unit.leader) {
    unit.leader.leadStats = unit?.leader?.leadStats
      ? { ...unit?.leader?.leadStats, fnp: 5 }
      : { ...STATSBLOCK, fnp: 5 };
  }
  return unit;
};

export const vicious_insight = (unit: unit): unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      vicious_insight(leader)
    );
  }
  if (unit.leader) {
    unit.leader = vicious_insight(unit.leader);
  }

  return unit;
};
