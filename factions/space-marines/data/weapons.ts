import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';

export const meleeWeapons: { [key: string]: MeleeWeapon } = {
  closeCombatWeapon: {
    name: 'Close combat weapon',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  masterCraftedPowerSword: {
    name: 'Master-crafted power weapon',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2
  },
  powerFist: {
    name: 'Power fist',
    fixedAttacks: 4,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2
  }
};

export const rangedWeapons: { [key: string]: RangedWeapon } = {
  absolverBoltPistol: {
    name: 'Absolver bolt pistol',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  boltPistol: {
    name: 'Bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  heavyBoltPistol: {
    name: 'Heavy bolt pistol',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  masterCraftedBoltRifle: {
    name: 'Master-crafted bolt rifle',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 2
  },
  neoVolkitePistol: {
    name: 'Neo-volkite pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  plasmaPistolStandard: {
    name: 'Plasma pistol - standard',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL],
    profile: true
  },
  plasmaPistolSupercharge: {
    name: 'Plasma pistol - supercharge',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.HAZARDOUS],
    profile: true
  },
  reductorPistol: {
    name: 'Reductor pistol',
    range: 3,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -4,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL]
  }
};
