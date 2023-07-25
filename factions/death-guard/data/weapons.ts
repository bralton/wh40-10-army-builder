import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';

export const meleeWeapons: { [key: string]: MeleeWeapon } = {
  armouredTracks: {
    name: 'Armoured tracks',
    fixedAttacks: 3,
    weaponSkill: 4,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1
  },
  astartesChainsword: {
    name: 'Astartes chainsword',
    fixedAttacks: 7,
    weaponSkill: 2,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1
  },
  balesword: {
    name: 'Balesword',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  brutalAssaultWeapon: {
    name: 'Brutal assault weapon',
    fixedAttacks: 2,
    weaponSkill: 4,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1
  },
  buboticBlade: {
    name: 'Bubotic blade',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  buboticWeapons: {
    name: 'Bubotic weapons',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  chainfist: {
    name: 'Chainfist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_3]
  },
  closeCombatWeapon: {
    name: 'Close combat weapon',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  corruptedStaff: {
    name: 'Corrupted staff',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.PSYCHIC]
  },
  cursedPlagueBell: {
    name: 'Cursed plague bell',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  defilerClaws: {
    name: 'Defiler claws',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 16,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  defilerScourge: {
    name: 'Defiler scourge',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  flailOfCorruption: {
    name: 'Flail of corruption',
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  fleshmower: {
    name: 'Fleshmower',
    fixedAttacks: 10,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  forceWeapon: {
    name: 'Force weapon',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.PSYCHIC]
  },
  gnashingMaw: {
    name: 'Gnashing maw',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  heavyPlagueFist: {
    name: 'Heavy plague fist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  heavyPlagueWeapon: {
    name: 'Heavy plague weapon',
    fixedAttacks: 3,
    weaponSkill: 4,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  helbruteFist: {
    name: 'Helbrute fist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3
  },
  helbruteHammer: {
    name: 'Helbrute hammer',
    fixedAttacks: 5,
    weaponSkill: 4,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  hellforgedWeaponsStrike: {
    name: 'Hellforged weapons - strike',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 3,
    profile: true
  },
  hellforgedWeaponsSweep: {
    name: 'Hellforged weapons - sweep',
    fixedAttacks: 14,
    weaponSkill: 2,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1,
    profile: true
  },
  hideousMutations: {
    name: 'Hideous mutations',
    fixedAttacks: 2,
    variableAttacks: 'D6',
    weaponSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  improvisedWeapon: {
    name: 'Improvised weapon',
    fixedAttacks: 2,
    weaponSkill: 5,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  manreaperStrike: {
    name: 'Manreaper - strike',
    fixedAttacks: 4,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  manreaperSweep: {
    name: 'Manreaper - sweep',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  masterCraftedManreaperStrike: {
    name: 'Master-crafted manreaper - strike',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  masterCraftedManreaperSweep: {
    name: 'Master-crafted manreaper - sweep',
    fixedAttacks: 10,
    weaponSkill: 2,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueBladeStrike: {
    name: 'Plagueblade - strike',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueBladeSweep: {
    name: 'Plagueblade - sweep',
    fixedAttacks: 10,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueEncrustedExaltedWeapon: {
    name: 'Plague-encrusted exalted weapon',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueFist: {
    name: 'Plague fist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueKnives: {
    name: 'Plague Knives',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueProbe: {
    name: 'Plague probe',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  powerScourge: {
    name: 'Power scourge',
    fixedAttacks: 8,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2
  },
  silenceStrike: {
    name: 'Silence - strike',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 4,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS],
    profile: true
  },
  silenceSweep: {
    name: 'Silence - sweep',
    fixedAttacks: 15,
    weaponSkill: 2,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS],
    profile: true
  },
  twinLightningClaws: {
    name: 'Twin lightning claws',
    fixedAttacks: 7,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  }
};

export const rangedWeapons: { [key: string]: RangedWeapon } = {
  bileSpurt: {
    name: 'Bile spurt',
    range: 12,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  blightLauncher: {
    name: 'Blight launcher',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  combiWeapon: {
    name: 'Combi-weapon',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_4,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.RAPID_FIRE_1
    ]
  },
  cultistFirearm: {
    name: 'Cultist firearm',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1
  },
  curseOfTheLeperWitchfire: {
    name: 'Curse of the Leper - witchfire',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PSYCHIC],
    profile: true
  },
  curseOfTheLeperFocusedWitchfire: {
    name: 'Curse of the Leper - focused witchfire',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: '2D6',
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.HAZARDOUS, WEAPON_ABILITIES.PSYCHIC],
    profile: true
  },
  defilerCannon: {
    name: 'Defiler cannon',
    range: 48,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  entropyCannon: {
    name: 'Entropy cannon',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  flamer: {
    name: 'Flamer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
  },
  grenadeLauncherFrag: {
    name: 'Grenade launcher - frag',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  grenadeLauncherKrak: {
    name: 'Grenade launcher - krak',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D3',
    profile: true
  },
  havocLauncher: {
    name: 'Havoc launcher',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  heavyBlightLauncher: {
    name: 'Heavy blight launcher',
    range: 36,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  heavyFlamer: {
    name: 'Heavy flamer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
  },
  heavySluggeer: {
    name: 'Heavy slugger',
    range: 36,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  heavyStubber: {
    name: 'Heavy stubber',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_3]
  },
  helbrutePlasmaCannon: {
    name: 'Helbrute plasma cannon',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HAZARDOUS]
  },
  hyperBlightGrenades: {
    name: 'Hyper blight grenades',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.LETHAL_HITS
    ]
  },
  infectedPlasmaPistolStandard: {
    name: 'Infected plasma pistol - standard',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.SUSTAINED_HITS_D3],
    profile: true
  },
  infectedplasmaPistolSupercharge: {
    name: 'Infected Plasma pistol - supercharge',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.SUSTAINED_HITS_D3
    ],
    profile: true
  },
  injectorPistol: {
    name: 'Injector pistol',
    range: 3,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  lascannon: {
    name: 'Lascannon',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  missileLauncherFrag: {
    name: 'Missile launcher - frag',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  missileLauncherKrak: {
    name: 'Missile launcher - krak',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    profile: true
  },
  meltaGun: {
    name: 'Meltagun',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.MELTA_2]
  },
  multimelta: {
    name: 'Multi-melta',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.MELTA_2]
  },
  plagueBelcher: {
    name: 'Plague belcher',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_4,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  plagueBoltPistol: {
    name: 'Plague bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueBoltgun: {
    name: 'Plague boltgun',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS]
  },
  plagueCombibolter: {
    name: 'Plague combi-bolter',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.RAPID_FIRE_2]
  },
  plagueburstMortar: {
    name: 'Plagueburst mortar',
    range: 48,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.INDIRECT_FIRE,
      WEAPON_ABILITIES.LETHAL_HITS
    ]
  },
  plagueCombiBolter: {
    name: 'Plague combi-bolter',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.RAPID_FIRE_2]
  },
  plagueSpewer: {
    name: 'Plague spewer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_2,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  plagueSpitter: {
    name: 'Plague spitter',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_2,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  plagueSprayer: {
    name: 'Plague sprayer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_2,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  plaguespurtGauntlet: {
    name: 'Plaguespurt gauntlet',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_4,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  plasmaGunStandard: {
    name: 'Plasma gun - standard',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_1],
    profile: true
  },
  plasmaGunSupercharge: {
    name: 'Plasma gun - supercharge',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.HAZARDOUS, WEAPON_ABILITIES.RAPID_FIRE_1],
    profile: true
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
    abilities: [WEAPON_ABILITIES.HAZARDOUS, WEAPON_ABILITIES.PISTOL],
    profile: true
  },
  plagueWindWitchfire: {
    name: `Plague Wind - witchfire`,
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.PSYCHIC, WEAPON_ABILITIES.TORRENT]
  },
  plagueWindFocusedWitchfire: {
    name: `Plague Wind - focused witchfire`,
    range: 12,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.PSYCHIC,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  predatorAutocannon: {
    name: 'Predator autocannon',
    range: 48,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_2]
  },
  predatorTwinLascannon: {
    name: 'Predator twin lascannon',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  reaperAutocannon: {
    name: 'Reaper autocannon',
    range: 36,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.SUSTAINED_HITS_1
    ]
  },
  rothailVolleyGun: {
    name: 'Rothail volley gun',
    range: 24,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.RAPID_FIRE_3]
  },
  rotwind: {
    name: 'Rotwind',
    range: 18,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 2,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.LETHAL_HITS,
      WEAPON_ABILITIES.PSYCHIC
    ]
  },
  soulshatterLascannon: {
    name: 'Soulshatter lascannon',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  theLantern: {
    name: 'The Lantern',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 9,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.SUSTAINED_HITS_D3]
  },
  twinAutocannon: {
    name: 'Twin autocannon',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinHeavyFlamer: {
    name: 'Twin heavy flamer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinLascannon: {
    name: 'Twin lascannon',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinPlagueHeavyBolter: {
    name: 'Twin plague heavy bolter',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.LETHAL_HITS,
      WEAPON_ABILITIES.SUSTAINED_HITS_1,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinPlagueSpewer: {
    name: 'Twin plague spewer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_2,
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  }
};
