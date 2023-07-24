import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.artificerCrozius = {
  name: 'Artificer crozius',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -1,
  fixedDamage: 2
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.quietus = {
  name: 'Quietus',
  range: 36,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: -2,
  fixedDamage: 3,
  abilities: [WEAPON_ABILITIES.PRECISION]
};

rangedWeapons.infernus = {
  name: 'Infernus',
  range: 12,
  fixedAttacks: 0,
  variableAttacks: 'D6',
  ballisticSkill: 0,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 1,
  abilities: [
    WEAPON_ABILITIES.ANTI_INFANTRY_4,
    WEAPON_ABILITIES.DEVASTATING_WOUNDS,
    WEAPON_ABILITIES.IGNORES_COVER,
    WEAPON_ABILITIES.TORRENT
  ]
};

export { meleeWeapons, rangedWeapons };
