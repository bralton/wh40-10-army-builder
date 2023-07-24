import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.moonfang = {
  name: 'Moonfang',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 5,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS, WEAPON_ABILITIES.PRECISION]
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

export { meleeWeapons, rangedWeapons };
