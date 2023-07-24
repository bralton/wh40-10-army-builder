import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.harrowhand = {
  name: 'Harrowhand',
  fixedAttacks: 6,
  weaponSkill: 3,
  strength: 7,
  armourPiercing: -2,
  fixedDamage: 2
};

meleeWeapons.medusanManipuli = {
  name: 'Medusan Manipuli',
  fixedAttacks: 2,
  weaponSkill: 3,
  strength: 8,
  armourPiercing: -2,
  fixedDamage: 3,
  abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.gorgonsWrath = {
  name: `Gorgon's Wrath`,
  range: 36,
  fixedAttacks: 3,
  ballisticSkill: 2,
  strength: 5,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
};

export { meleeWeapons, rangedWeapons };
