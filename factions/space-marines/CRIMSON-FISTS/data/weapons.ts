import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.fistOfRetribution = {
  name: 'Fist of Retribution',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 3
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.dornsArrow = {
  name: `Dorn's Arrow`,
  range: 24,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 5,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.RAPID_FIRE_2, WEAPON_ABILITIES.SUSTAINED_HITS_1]
};

export { meleeWeapons, rangedWeapons };
