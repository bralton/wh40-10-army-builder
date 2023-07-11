import { WEAPON_ABILITIES } from '@/enums';
import { meleeWeapon, rangedWeapon } from '@/types';

export const meleeWeapons: { [key: string]: meleeWeapon } = {
  boneSabres: {
    name: 'Bone Sabres',
    weaponSkill: 2,
    fixedAttacks: 8,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  tyrantGuardCleaver: {
    name: 'Bone Cleaver, lash whip and rending claws',
    weaponSkill: 3,
    fixedAttacks: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  tyrantGuardCrushingClaws: {
    name: 'Crushing claws and rending claws',
    weaponSkill: 4,
    fixedAttacks: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2
  },
  tyrantGuardSythingTalons: {
    name: 'Sything talons and rending claws',
    weaponSkill: 3,
    fixedAttacks: 5,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  monstrousBoneswordAndLashWhip: {
    name: 'Monstrous bonesword and lash whip',
    weaponSkill: 2,
    fixedAttacks: 6,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  monstrousScythingTalons: {
    name: 'Monstrous scything talons',
    weaponSkill: 2,
    fixedAttacks: 4,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  tyrantTalons: {
    name: 'Tyrant talons',
    weaponSkill: 2,
    fixedAttacks: 5,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2
  },
  broodlordClawsAndTalons: {
    name: 'Broodlord claws and talons',
    weaponSkill: 2,
    fixedAttacks: 5,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  genestealerClawsAndTalons: {
    name: 'Genestealer claws and talons',
    weaponSkill: 2,
    fixedAttacks: 4,
    strength: 4,
    armourPiercing: -2,
    fixedDamage: 1
  },
  hormagauntTalons: {
    name: 'Hormagaunt talons',
    weaponSkill: 4,
    fixedAttacks: 3,
    strength: 3,
    armourPiercing: -1,
    fixedDamage: 1
  },
  xenosClawsAndTeeth: {
    name: 'Xenos claws and teeth',
    weaponSkill: 5,
    fixedAttacks: 2,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1
  }
};

export const rangedWeapons: { [key: string]: rangedWeapon } = {
  synapticPulse: {
    name: 'Synaptic Pulse',
    range: 18,
    variableAttacks: 'D6',
    fixedAttacks: 3,
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.TORRENT, WEAPON_ABILITIES.PSYCHIC]
  },
  heavyVenomCannon: {
    name: 'Heavy Venom Cannon',
    range: 36,
    variableAttacks: 'D3',
    fixedAttacks: 0,
    ballisticSkill: 2,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  stranglethornCannon: {
    name: 'Stranglethorn Cannon',
    range: 36,
    variableAttacks: 'D6',
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  warpBlastWitchfire: {
    name: 'Warp Blast - witchfire',
    range: 24,
    variableAttacks: 'D3',
    fixedAttacks: 0,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    variableDamage: 'D3',
    fixedDamage: 0,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.PSYCHIC]
  },
  warpBlastFocusedWitchfire: {
    name: 'Warp Blast - focused witchfire',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    variableDamage: 'D6',
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.PSYCHIC]
  }
};
