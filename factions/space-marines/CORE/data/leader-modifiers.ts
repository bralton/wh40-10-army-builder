import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { Unit } from '@/types';

export const tactical_precision = (unit: Unit, primary = true): Unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) =>
      weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: primary ? [WEAPON_ABILITIES.LETHAL_HITS] : undefined,
          secondLeaderAbilities: !primary
            ? [WEAPON_ABILITIES.LETHAL_HITS]
            : undefined
        };
      })
    );
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) =>
      weapons.map((weapon) => {
        return {
          ...weapon,
          leaderAbilities: primary ? [WEAPON_ABILITIES.LETHAL_HITS] : undefined,
          secondLeaderAbilities: !primary
            ? [WEAPON_ABILITIES.LETHAL_HITS]
            : undefined
        };
      })
    );
  }

  if (unit.leader) {
    unit.leader = tactical_precision(unit.leader, primary);
  }
  if (unit.secondLeader) {
    unit.secondLeader = tactical_precision(unit.secondLeader, primary);
  }

  return unit;
};
