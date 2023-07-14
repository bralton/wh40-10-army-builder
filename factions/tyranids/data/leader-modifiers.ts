import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { Unit } from '@/types';

export const guardianOrganism = (unit: Unit): Unit => {
  if (unit.leader) {
    unit.leader.leadStats = unit?.leader?.leadStats
      ? { ...unit?.leader?.leadStats, fnp: 5 }
      : { ...STATSBLOCK, fnp: 5 };
  }
  return unit;
};

export const vicious_insight = (unit: Unit): Unit => {
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

export const alpha_warrior = (unit: Unit): Unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: ['SUSTAINED HITS 1']
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        leaderAbilities: ['SUSTAINED HITS 1']
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      alpha_warrior(leader)
    );
  }
  if (unit.leader) {
    unit.leader = alpha_warrior(unit.leader);
  }

  return unit;
};
