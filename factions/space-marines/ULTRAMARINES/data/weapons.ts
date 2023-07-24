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

meleeWeapons.gauntletsOfUltramar = {
  name: 'Gauntlets of Ultramar',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 3,
  abilities: [WEAPON_ABILITIES.TWIN_LINKED]
};

meleeWeapons.victrixPowerSword = {
  name: 'Victrix power sword',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 5,
  armourPiercing: -2,
  fixedDamage: 2
};

meleeWeapons.chronusServoArm = {
  name: `Chronus' servo-arm`,
  fixedAttacks: 3,
  weaponSkill: 3,
  strength: 8,
  armourPiercing: -2,
  fixedDamage: 3
};

meleeWeapons.rodOfTigurius = {
  name: 'Rod of Tigurius',
  fixedAttacks: 5,
  weaponSkill: 3,
  strength: 7,
  armourPiercing: -2,
  fixedDamage: 0,
  variableDamage: 'D3',
  abilities: [WEAPON_ABILITIES.PSYCHIC]
};

meleeWeapons.talassarianTempestBlade = {
  name: 'Talassarian Tempest Blade',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 5,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.LETHAL_HITS]
};

meleeWeapons.swordOfIdaeus = {
  name: 'Sword of Idaeus',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
};

meleeWeapons.emperorsSword = {
  name: `Emperor's Sword`,
  fixedAttacks: 14,
  weaponSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
};

meleeWeapons.handOfDominion = {
  name: `Hand of Dominion`,
  fixedAttacks: 7,
  weaponSkill: 2,
  strength: 14,
  armourPiercing: -4,
  fixedDamage: 4,
  abilities: [WEAPON_ABILITIES.LETHAL_HITS]
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

rangedWeapons.gauntletsOfUltramar = {
  name: 'Gauntlets of Ultramar',
  range: 18,
  fixedAttacks: 4,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.TWIN_LINKED]
};

rangedWeapons.stormOfTheEmpororsWrathWitchfire = {
  name: `Storm of the Emperor's Wrath - witchfire`,
  range: 18,
  fixedAttacks: 0,
  variableAttacks: 'D6',
  ballisticSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.PSYCHIC],
  profile: true
};

rangedWeapons.stormOfTheEmpororsWrathFocusedWitchfire = {
  name: `Storm of the Emperor's Wrath - focused witchfire`,
  range: 18,
  fixedAttacks: 2,
  variableAttacks: 'D6',
  ballisticSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [
    WEAPON_ABILITIES.BLAST,
    WEAPON_ABILITIES.HAZARDOUS,
    WEAPON_ABILITIES.PSYCHIC
  ],
  profile: true
};

rangedWeapons.artisanPlasmaPistol = {
  name: 'Artisan plasma pistol',
  range: 12,
  fixedAttacks: 1,
  ballisticSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL]
};

rangedWeapons.invictus = {
  name: 'Invictus',
  range: 24,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 2
};

rangedWeapons.handOfDominion = {
  name: 'Hand of Dominion',
  range: 30,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.RAPID_FIRE_2]
};

export { meleeWeapons, rangedWeapons };
