import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';

export const meleeWeapons: { [key: string]: MeleeWeapon } = {
  ...core_meleeWeapons,
  fistOfDorn: {
    name: 'Fist of Dorn',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  handOfDefiance: {
    name: 'Hand of Defiance',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 2
  }
};

export const rangedWeapons: { [key: string]: RangedWeapon } = {
  ...core_rangedWeapons,
  artificerGravGun: {
    name: 'Artificer grav-gun',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2]
  }
};
