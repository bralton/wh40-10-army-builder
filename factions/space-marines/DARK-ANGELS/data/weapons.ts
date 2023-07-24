import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.theSwordOfSecrets = {
  name: 'The Sword of Secrets',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -4,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.lionsWrath = {
  name: `Lion's Wrath`,
  range: 24,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [
    WEAPON_ABILITIES.ANTI_INFANTRY_4,
    WEAPON_ABILITIES.DEVASTATING_WOUNDS,
    WEAPON_ABILITIES.RAPID_FIRE_1
  ]
};

export { meleeWeapons, rangedWeapons };
