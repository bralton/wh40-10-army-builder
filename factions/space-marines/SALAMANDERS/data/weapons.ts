import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.malleusNoctum = {
  name: `Malleus Noctum`,
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 10,
  armourPiercing: -2,
  fixedDamage: 3
};

meleeWeapons.spearOfVulkan = {
  name: 'Speak of Vulkan',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.drakkis = {
  name: 'Drakkis',
  range: 12,
  fixedAttacks: 3,
  variableAttacks: 'D6',
  ballisticSkill: 0,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 1,
  abilities: [
    WEAPON_ABILITIES.IGNORES_COVER,
    WEAPON_ABILITIES.PISTOL,
    WEAPON_ABILITIES.TORRENT
  ]
};

rangedWeapons.gauntletOfTheForge = {
  name: 'Gauntlet of the Forge',
  range: 12,
  fixedAttacks: 3,
  variableAttacks: 'D6',
  ballisticSkill: 0,
  strength: 6,
  armourPiercing: -1,
  fixedDamage: 1,
  abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
};

export { meleeWeapons, rangedWeapons };
