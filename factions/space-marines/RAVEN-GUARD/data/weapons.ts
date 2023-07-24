import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.theRavensTalons = {
  name: `The Raven's Talons`,
  fixedAttacks: 7,
  weaponSkill: 2,
  strength: 5,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PRECISION, WEAPON_ABILITIES.TWIN_LINKED]
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.blackout = {
  name: `Blackout`,
  range: 18,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 5,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.PRECISION]
};

export { meleeWeapons, rangedWeapons };
