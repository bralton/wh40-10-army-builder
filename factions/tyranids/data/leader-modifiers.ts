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
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
        };
      });
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
        };
      });
    });
  }

  if (unit.leader) {
    unit.leader = vicious_insight(unit.leader);
  }
  if (unit.secondLeader) {
    unit.secondLeader = vicious_insight(unit.secondLeader);
  }

  return unit;
};

export const alpha_warrior = (unit: Unit): Unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: ['SUSTAINED HITS 1']
        };
      });
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: ['SUSTAINED HITS 1']
        };
      });
    });
  }

  if (unit.leader) {
    unit.leader = alpha_warrior(unit.leader);
  }
  if (unit.secondLeader) {
    unit.secondLeader = alpha_warrior(unit.secondLeader);
  }

  return unit;
};
