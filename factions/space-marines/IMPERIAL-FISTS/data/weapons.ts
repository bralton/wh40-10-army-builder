import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.fistOfDorn = {
  name: 'Fist of Dorn',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 10,
  armourPiercing: -3,
  fixedDamage: 3,
  abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
};
meleeWeapons.handOfDefiance = {
  name: 'Hand of Defiance',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 12,
  armourPiercing: -2,
  fixedDamage: 2
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.artificerGravGun = {
  name: 'Artificer grav-gun',
  range: 18,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 5,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2]
};

export { meleeWeapons, rangedWeapons };
