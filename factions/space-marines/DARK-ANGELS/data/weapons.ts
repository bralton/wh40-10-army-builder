import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import {
  meleeWeapons as core_meleeWeapons,
  rangedWeapons as core_rangedWeapons
} from '../../CORE/data/weapons';
import { cloneDeep, range } from 'lodash';

const meleeWeapons: { [key: string]: MeleeWeapon } =
  cloneDeep(core_meleeWeapons);

meleeWeapons.bladesOfReason = {
  name: `Blades of Reason`,
  fixedAttacks: 3,
  weaponSkill: 2,
  strength: 4,
  armourPiercing: 0,
  fixedDamage: 1,
  abilities: [
    WEAPON_ABILITIES.ANTI_CHARACTER_2,
    WEAPON_ABILITIES.EXTRA_ATTACKS,
    WEAPON_ABILITIES.PRECISION
  ]
};

meleeWeapons.blackKnightCombatWeapon = {
  name: 'Black Knight combat weapon',
  fixedAttacks: 3,
  weaponSkill: 3,
  strength: 5,
  armourPiercing: -2,
  fixedDamage: 1
};

meleeWeapons.enmitysEdge = {
  name: `Enmity's Edge`,
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.ANTI_PSYKER_2]
};

meleeWeapons.fealtyStrike = {
  name: 'Fealty - strike',
  fixedAttacks: 8,
  weaponSkill: 2,
  strength: 12,
  armourPiercing: -4,
  fixedDamage: 4,
  abilities: [WEAPON_ABILITIES.LETHAL_HITS],
  profile: true
};

meleeWeapons.fealtySweep = {
  name: 'Fealty - sweep',
  fixedAttacks: 16,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1],
  profile: true
};

meleeWeapons.flailOfTheUnforgiven = {
  name: 'Flail of the Unforgiven',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [
    WEAPON_ABILITIES.DEVASTATING_WOUNDS,
    WEAPON_ABILITIES.SUSTAINED_HITS_1
  ]
};

meleeWeapons.halberdOfCaliban = {
  name: 'Halberd of Caliban',
  fixedAttacks: 5,
  weaponSkill: 3,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PRECISION]
};

meleeWeapons.maceOfAbsolution = {
  name: 'Mace of absolution',
  fixedAttacks: 5,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -1,
  fixedDamage: 3
};

meleeWeapons.theRavenSword = {
  name: 'The Raven Sword',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_2]
};

meleeWeapons.theSwordOfSecrets = {
  name: 'The Sword of Secrets',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -4,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
};

meleeWeapons.theSwordOfSilence = {
  name: 'The Sword of Silence',
  fixedAttacks: 6,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PRECISION]
};

meleeWeapons.traitorsBane = {
  name: `Traitor's Bane`,
  fixedAttacks: 4,
  weaponSkill: 2,
  strength: 6,
  armourPiercing: -2,
  fixedDamage: 0,
  variableDamage: 'D3',
  abilities: [WEAPON_ABILITIES.ANTI_CHAOS_2]
};

const rangedWeapons: { [key: string]: RangedWeapon } =
  cloneDeep(core_rangedWeapons);

rangedWeapons.armaLuminisBolt = {
  name: 'Arma Luminis - bolt',
  range: 12,
  fixedAttacks: 4,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL],
  profile: true
};

rangedWeapons.armaLuminisPlasma = {
  name: 'Arma Luminis - plasma',
  range: 12,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL],
  profile: true
};

rangedWeapons.avengerMegaBolter = {
  name: 'Avenger mega bolter',
  range: 36,
  fixedAttacks: 10,
  ballisticSkill: 3,
  strength: 5,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
};

rangedWeapons.blackswordMissiles = {
  name: 'Blacksword missiles',
  range: 36,
  fixedAttacks: 2,
  ballisticSkill: 3,
  strength: 8,
  armourPiercing: -2,
  fixedDamage: 0,
  variableDamage: 'D6',
  abilities: [WEAPON_ABILITIES.ANTI_FLY_2]
};

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

rangedWeapons.mastercraftedPlasmaCannon = {
  name: 'Master-crafted plasma cannon',
  range: 36,
  fixedAttacks: 0,
  variableAttacks: 'D3',
  ballisticSkill: 2,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.BLAST]
};

rangedWeapons.masterCraftedStormBolter = {
  name: 'Master-crafted storm bolter',
  range: 24,
  fixedAttacks: 2,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: 0,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PRECISION, WEAPON_ABILITIES.RAPID_FIRE_2]
};

rangedWeapons.mindWipeWitchfire = {
  name: `Mind Wipe - witchfire`,
  range: 12,
  fixedAttacks: 1,
  ballisticSkill: 2,
  strength: 6,
  armourPiercing: -1,
  fixedDamage: 0,
  variableDamage: 'D6',
  abilities: [
    WEAPON_ABILITIES.DEVASTATING_WOUNDS,
    WEAPON_ABILITIES.PRECISION,
    WEAPON_ABILITIES.PSYCHIC
  ],
  profile: true
};

rangedWeapons.mindWipeFocusedWitchfire = {
  name: `Mind Wipe - focused witchfire`,
  range: 12,
  fixedAttacks: 1,
  ballisticSkill: 2,
  strength: 6,
  armourPiercing: -1,
  fixedDamage: 0,
  variableDamage: 'D6',
  abilities: [
    WEAPON_ABILITIES.ANTI_CHARACTER_4,
    WEAPON_ABILITIES.DEVASTATING_WOUNDS,
    WEAPON_ABILITIES.HAZARDOUS,
    WEAPON_ABILITIES.PRECISION,
    WEAPON_ABILITIES.PSYCHIC
  ],
  profile: true
};

rangedWeapons.nephilimLascannons = {
  name: 'Nephilim lascannons',
  range: 48,
  fixedAttacks: 2,
  ballisticSkill: 3,
  strength: 12,
  armourPiercing: -3,
  fixedDamage: 1,
  variableDamage: 'D6'
};

rangedWeapons.plasmaTalonStandard = {
  name: 'Plasma talon - standard',
  range: 18,
  fixedAttacks: 2,
  ballisticSkill: 3,
  strength: 7,
  armourPiercing: -2,
  fixedDamage: 1,
  abilities: [WEAPON_ABILITIES.RAPID_FIRE_1],
  profile: true
};

rangedWeapons.plasmaTalonSupercharge = {
  name: 'Plasma talon - supercharge',
  range: 18,
  fixedAttacks: 2,
  ballisticSkill: 3,
  strength: 8,
  armourPiercing: -3,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.HAZARDOUS, WEAPON_ABILITIES.RAPID_FIRE_1],
  profile: true
};

rangedWeapons.plasmaStormBatteryStandard = {
  name: 'Plasma storm battery - standard',
  range: 36,
  fixedAttacks: 1,
  variableAttacks: 'D6',
  ballisticSkill: 3,
  strength: 8,
  armourPiercing: -2,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.TWIN_LINKED],
  profile: true
};

rangedWeapons.plasmaStormBatterySupercharge = {
  name: 'Plasma storm battery - supercharge',
  range: 36,
  fixedAttacks: 1,
  variableAttacks: 'D6',
  ballisticSkill: 3,
  strength: 9,
  armourPiercing: -3,
  fixedDamage: 3,
  abilities: [
    WEAPON_ABILITIES.BLAST,
    WEAPON_ABILITIES.HAZARDOUS,
    WEAPON_ABILITIES.TWIN_LINKED
  ],
  profile: true
};

rangedWeapons.riftCannon = {
  name: 'Rift cannon',
  range: 18,
  fixedAttacks: 1,
  variableAttacks: 'D3',
  ballisticSkill: 3,
  strength: 16,
  armourPiercing: -4,
  fixedDamage: 3,
  abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.DEVASTATING_WOUNDS]
};

rangedWeapons.theDeliverer = {
  name: `The Deliverer`,
  range: 12,
  fixedAttacks: 1,
  ballisticSkill: 2,
  strength: 4,
  armourPiercing: -1,
  fixedDamage: 2,
  abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.PRECISION]
};

export { meleeWeapons, rangedWeapons };
