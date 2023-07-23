import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';
import { profile } from 'console';

export const meleeWeapons: { [key: string]: MeleeWeapon } = {
  armouredFeet: {
    name: 'Armoured feet',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: 0,
    fixedDamage: 1
  },
  armouredHull: {
    name: 'Armoured hull',
    fixedAttacks: 6,
    weaponSkill: 4,
    strength: 8,
    armourPiercing: 0,
    fixedDamage: 1
  },
  armouredTracks: {
    name: 'Armoured tracks',
    fixedAttacks: 6,
    weaponSkill: 4,
    strength: 8,
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
  brutalisFists: {
    name: 'Brutalis fists',
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  brutalisTalonsStrike: {
    name: 'Brutalis talons - strike',
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED],
    profile: true
  },
  brutalisTalonsSweep: {
    name: 'Brutalis talons - sweep',
    fixedAttacks: 10,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED],
    profile: true
  },
  centurionFists: {
    name: 'Centurion fists',
    fixedAttacks: 3,
    weaponSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  chainFist: {
    name: 'Chainfist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_3]
  },
  championsBlade: {
    name: `Champion's blade`,
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PRECISION]
  },
  closeCombatWeapon: {
    name: 'Close combat weapon',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  combatKnife: {
    name: 'Combat knife',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  croziusArcanum: {
    name: 'Crozius arcanum',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2
  },
  dreadnoughtChainfist: {
    name: 'Dreadnought chainfist',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_3]
  },
  dreadnoughtCombatWeapon: {
    name: 'Dreadnought combat weapon',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3
  },
  eviscerator: {
    name: 'Eviscerator',
    fixedAttacks: 3,
    weaponSkill: 4,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
  },
  executionerRelicBlade: {
    name: 'Executioner relic blade',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS, WEAPON_ABILITIES.PRECISION]
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
  gunnersServoarms: {
    name: `Gunner's servo-arms`,
    fixedAttacks: 2,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  heirloomWeapon: {
    name: 'Heirloom weapon',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  invictorFist: {
    name: 'Invictor fist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 14,
    armourPiercing: -2,
    fixedDamage: 3
  },
  masterCraftedPowerWeapon: {
    name: 'Master-crafted power weapon',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2
  },
  omnissianPowerAxe: {
    name: 'Omnissian power axe',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 2
  },
  pairedCombatBlades: {
    name: 'Paired combat blades',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
  },
  plasmaCutter: {
    name: 'Plasma cutter',
    fixedAttacks: 2,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  powerFist: {
    name: 'Power fist',
    fixedAttacks: 4,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2
  },
  powerWeapon: {
    name: 'Power weapon',
    fixedAttacks: 5,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 1
  },
  redemptorFist: {
    name: 'Redemptor fist',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 12,
    armourPiercing: -2,
    fixedDamage: 3
  },
  relicBlade: {
    name: 'Relic blade',
    fixedAttacks: 2,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  relicChainsword: {
    name: 'Relic chainsword',
    fixedAttacks: 3,
    weaponSkill: 2,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  relicFist: {
    name: 'Relic fist',
    fixedAttacks: 1,
    weaponSkill: 2,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  relicWeapon: {
    name: 'Relic weapon',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 2
  },
  seismicHammer: {
    name: 'Seismic hammer',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 2,
    variableDamage: 'D6'
  },
  servitorServoArm: {
    name: 'Servitor servo-arm',
    fixedAttacks: 1,
    weaponSkill: 5,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 3
  },
  servoArm: {
    name: 'Servo-arm',
    fixedAttacks: 1,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: -3,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  siegeDrills: {
    name: 'Siege drills',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  thunderHammer: {
    name: 'Thunder hammer',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
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
  acceleratorAutocannon: {
    name: 'Accelerator autocannon',
    range: 48,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.HEAVY]
  },
  assaultBolters: {
    name: 'Assault bolters',
    range: 18,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.SUSTAINED_HITS_2,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  assaultCannon: {
    name: 'Assault cannon',
    range: 24,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  astartesGrenadeLauncherFrag: {
    name: 'Astartes grenade launcher - frag',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  astartesGrenadeLauncherKrak: {
    name: 'Astartes grenade launcher - krak',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D3',
    profile: true
  },
  astartesShotgun: {
    name: 'Astartes shotgun',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT]
  },
  autoBoltstormGauntlets: {
    name: 'Auto boltstorm gauntlets',
    range: 18,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  ballistusLascannon: {
    name: 'Ballistus lascannon',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  ballistusMissileLauncherFrag: {
    name: 'Ballistus missile launcher - frag',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: '2D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  ballistusMissileLauncherKrak: {
    name: 'Ballistus missile launcher - krak',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    profile: true
  },
  bellicatusMissileArrayFrag: {
    name: 'Bellicatus missile array - frag',
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
  bellicatusMissileArrayIcarus: {
    name: 'Bellicatus missile array - icarus',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_FLY_2],
    profile: true
  },
  bellicatusMissileArrayKrak: {
    name: 'Bellicatus missile array - krak',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    profile: true
  },
  brutalisBoltRifles: {
    name: 'Brutalis bolt rifles',
    range: 24,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  boltCarbine: {
    name: 'Bolt carbine',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PRECISION]
  },
  boltgun: {
    name: 'Boltgun',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  boltPistol: {
    name: 'Bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  boltRifle: {
    name: 'Bolt rifle',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.HEAVY]
  },
  boltSniperRifle: {
    name: 'Bolt sniper rifle',
    range: 36,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.PRECISION]
  },
  boltstormGauntlet: {
    range: 12,
    ballisticSkill: 2,
    name: 'Boltstorm gauntlet',
    fixedAttacks: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  castellanLauncher: {
    name: 'Castellan launcher',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.INDIRECT_FIRE]
  },
  centurionBolters: {
    name: 'Centurion bolters',
    range: 24,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_3, WEAPON_ABILITIES.TWIN_LINKED]
  },
  centurionMissileLauncher: {
    name: 'Centurion missile launcher',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  cerberusLauncher: {
    name: 'Cerberus launcher',
    range: 18,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  combiBolter: {
    name: 'Combi-bolter',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_2]
  },
  combiWeapon: {
    range: 24,
    ballisticSkill: 4,
    name: 'Combi-weapon',
    fixedAttacks: 1,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_INFANTRY_4,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.RAPID_FIRE_1
    ]
  },
  cycloneMissileLauncherFrag: {
    name: 'Cyclone missile launcher - frag',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: '2D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  cycloneMissileLauncherKrak: {
    name: 'Cyclone missile launcher - krak',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    profile: true
  },
  deathwindLauncher: {
    name: 'Deathwind launcher',
    range: 12,
    fixedAttacks: 1,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  demolisherCannon: {
    name: 'Demolisher cannon',
    range: 24,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.BLAST]
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
  flamestormCannon: {
    name: 'Flamestorm cannon',
    range: 12,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
  },
  flamestormGauntlets: {
    name: 'Flamestorm gauntlets',
    range: 12,
    fixedAttacks: 1,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  forgeBolter: {
    name: 'Forge bolter',
    range: 24,
    fixedAttacks: 3,
    ballisticSkill: 2,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  fragstormGrenadeLauncher: {
    name: 'Fragstorm grenade launcher',
    range: 18,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  godhammerLascannon: {
    name: 'Godhammer lascannon',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  gravCannon: {
    name: 'Grav-cannon',
    range: 24,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2]
  },
  gravGun: {
    name: 'Grav-gun',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2]
  },
  gravPistol: {
    name: 'Grav-pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2, WEAPON_ABILITIES.PISTOL]
  },
  hammerfallHeavyBolterArray: {
    name: 'Hammerfall heavy bolter array',
    range: 36,
    fixedAttacks: 6,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      'DEFENSIVE ARRAY',
      WEAPON_ABILITIES.SUSTAINED_HITS_1,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  hammerfallHeavyFlamerArray: {
    name: 'Hammerfall heavy flamer array',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: '2D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      'DEFENSIVE ARRAY',
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  hammerfallMissileLauncherSuperfrag: {
    name: 'Hammerfall missile launcher - superfrag',
    range: 48,
    fixedAttacks: 2,
    variableAttacks: '2D6',
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  hammerfallMissileLauncherSuperkrak: {
    name: 'Hammerfall missile launcher - superkrak',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 4,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 1,
    variableDamage: 'D6',
    profile: true
  },
  hammerstrikeMissileLauncher: {
    name: 'Hammerstrike missile launcher',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -3,
    fixedDamage: 0,
    variableDamage: 'D6'
  },
  handFlamer: {
    range: 12,
    ballisticSkill: 0,
    name: 'Hand flamer',
    fixedAttacks: 0,
    variableAttacks: 'D6',
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  heavyBolter: {
    name: 'Heavy bolter',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.HEAVY,
      WEAPON_ABILITIES.SUSTAINED_HITS_1
    ]
  },
  heavyBoltPistol: {
    name: 'Heavy bolt pistol',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  heavyBoltRifle: {
    name: 'Heavy bolt rifle',
    range: 30,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.HEAVY]
  },
  heavyLaserDestroyer: {
    name: 'Heavy laser destroyer',
    range: 72,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 16,
    armourPiercing: -4,
    fixedDamage: 4,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY]
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
  heavyOnslaughtGatlingCannon: {
    name: 'Heavy onslaught gatling cannon',
    range: 24,
    fixedAttacks: 12,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  heavyPlasmaCannonStandard: {
    name: 'Heavy plasma cannon - standard',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  heavyPlasmaCannonSupercharge: {
    name: 'Heavy plasma cannon - supercharge',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HAZARDOUS]
  },
  hunterkillerMissile: {
    name: 'Hunter-killer missile',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.ONE_SHOT]
  },
  hunterSlayerMissile: {
    name: 'Hunter-slayer missile',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 14,
    armourPiercing: -3,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.INDIRECT_FIRE, WEAPON_ABILITIES.ONE_SHOT]
  },
  hurricaneBolter: {
    name: 'Hurrican bolter',
    range: 24,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_6, WEAPON_ABILITIES.TWIN_LINKED]
  },
  icarusRocketPod: {
    name: 'Icarus rocket pod',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_FLY_2]
  },
  icarusStormcannon: {
    name: 'Icarus stormcannon',
    range: 48,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_FLY_2]
  },
  incendiumCannon: {
    name: 'Incendium cannon',
    range: 12,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
  },
  infernoPistol: {
    name: 'Inferno pistol',
    range: 6,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.MELTA_2, WEAPON_ABILITIES.PISTOL]
  },
  instigatorBoltCarbine: {
    name: 'Instigator bolt carbine',
    range: 24,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PRECISION]
  },
  ironhailHeavyStubber: {
    name: 'Ironhail heavy stubber',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_3]
  },
  ironhailSkytalonArray: {
    name: 'Ironhail skytalon array',
    range: 36,
    fixedAttacks: 8,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ANTI_FLY_4, WEAPON_ABILITIES.SUSTAINED_HITS_1]
  },
  kheresPatternAssaultCannon: {
    name: 'Kheres-pattern assault cannon',
    range: 24,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  krakstormGrenadeLauncher: {
    name: 'Krakstorm grenade launcher',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3'
  },
  lancerLaserDestroyer: {
    name: 'Lancer laser destroyer',
    range: 72,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 14,
    armourPiercing: -4,
    fixedDamage: 3,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY]
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
  lasFusil: {
    name: 'Las fusil',
    range: 36,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -3,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY]
  },
  lasTalon: {
    name: 'Las-talon',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  macroPlasmaIncineratorStandard: {
    name: 'Macro plasma incinerator - standard',
    range: 36,
    fixedAttacks: 1,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  macroPlasmaIncineratorSupercharge: {
    name: 'Macro plasma incinerator - supercharge',
    range: 36,
    fixedAttacks: 1,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HAZARDOUS]
  },
  marksmanBoltCarbine: {
    name: 'Marksman bolt carbine',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.HEAVY]
  },
  masterCraftedBoltgun: {
    name: 'Master-crafted boltgun',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 2
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
  masterCraftedHeavyBoltRifle: {
    name: 'Master-crafted heavy bolt rifle',
    range: 30,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  masterCraftedScopedBoltCarbine: {
    name: 'Master-crafted scoped bolt carbine',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 2
  },
  masterCraftedSpecialIssueBoltPistol: {
    name: 'Master-crafted special issue bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.PRECISION]
  },
  meltaDestroyer: {
    name: 'Melta destroyer',
    range: 18,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.MELTA_2]
  },
  meltagun: {
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
  meltaRifle: {
    name: 'Melta rifle',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.MELTA_2]
  },
  missileLauncherFrag: {
    name: 'Missing launcher - frag',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HEAVY],
    profile: true
  },
  missileLauncherKrak: {
    name: 'Missing launcher - krak',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY],
    profile: true
  },
  multiMelta: {
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
  occulusBoltCarbine: {
    name: 'Occulus bolt carbine',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.IGNORES_COVER]
  },
  onslaughtGatlingCannon: {
    name: 'Onslaught gatling cannon',
    range: 24,
    fixedAttacks: 8,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  plasmaBlasterStandard: {
    name: 'Plasma blaster - standard',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    profile: true
  },
  plasmaBlasterSupercharge: {
    name: 'Plasma blaster - supercharge',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.HAZARDOUS],
    profile: true
  },
  PlasmaCannonStandard: {
    name: 'Plasma cannon - standard',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 4,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HEAVY]
  },
  PlasmaCannonSupercharge: {
    name: 'Plasma cannon - supercharge',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 4,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.HEAVY
    ]
  },
  plasmaExterminatorsStandard: {
    name: 'Plasma exterminators - standard',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.TWIN_LINKED
    ],
    profile: true
  },
  plasmaExterminatorsSupercharge: {
    name: 'Plasma exterminators - supercharge',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.TWIN_LINKED
    ],
    profile: true
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
  plasmaIncineratorStandard: {
    name: 'Plasma incinerator - standard',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.HEAVY],
    profile: true
  },
  plasmaIncineratorSupercharge: {
    name: 'Plasma incinerator - supercharge',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.HEAVY,
      WEAPON_ABILITIES.HAZARDOUS
    ],
    profile: true
  },
  plasmaPistolStandard: {
    name: 'Plasma pistol - standard',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
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
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.HAZARDOUS],
    profile: true
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
  pyreblaster: {
    name: 'Pyreblaster',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
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
  reductorPistol: {
    name: 'Reductor pistol',
    range: 3,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -4,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  repulsorExecutionerDefensiveArray: {
    name: 'Repulsor Executioner defensive array',
    range: 24,
    fixedAttacks: 10,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  repulsorDefensiveArray: {
    name: 'Repulsor defensive array',
    range: 24,
    fixedAttacks: 18,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  scoutSniperRifle: {
    name: 'Scout sniper rifle',
    range: 36,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.PRECISION]
  },
  skyhammerMissileLauncher: {
    name: 'Skyspear missile launcher',
    range: 48,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.ANTI_FLY_2, WEAPON_ABILITIES.TWIN_LINKED]
  },
  skyspearMissileLauncher: {
    name: 'Skyspear missile launcher',
    range: 36,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 2,
    variableDamage: 'D6',
    abilities: [
      WEAPON_ABILITIES.ANTI_FLY_3,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.HEAVY
    ]
  },
  smiteWitchfire: {
    name: 'Smite - witchfire',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [WEAPON_ABILITIES.PSYCHIC],
    profile: true
  },
  smiteFocusedWitchfire: {
    name: 'Smite - focused witchfire',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D3',
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.PSYCHIC
    ],
    profile: true
  },
  specialIssueBoltPistol: {
    name: 'Special issue bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL, WEAPON_ABILITIES.PRECISION]
  },
  sternguardBoltPistol: {
    name: 'Sternguard bolt pistol',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS, WEAPON_ABILITIES.PISTOL]
  },
  sternguardBoltRifle: {
    name: 'Sternguard bolt rifle',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.HEAVY,
      WEAPON_ABILITIES.RAPID_FIRE_1
    ]
  },
  sternguardHeavyBolter: {
    name: 'Sternguard heavy bolter',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.HEAVY,
      WEAPON_ABILITIES.SUSTAINED_HITS_1
    ]
  },
  stormBolter: {
    name: 'Storm bolter',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_2]
  },
  stormfuryMissiles: {
    name: 'Stormfury missiles',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  stormstrikeMissileLauncher: {
    name: 'Stormstrike missile laucher',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 3
  },
  superfragRocketLaumcher: {
    name: 'Superfrag rocket launcher',
    range: 48,
    fixedAttacks: 1,
    variableAttacks: 'D6',
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HEAVY]
  },
  superkrakRocketLaumcher: {
    name: 'Superkrak rocket launcher',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.HEAVY]
  },
  tempestBolter: {
    name: 'Tempest bolter',
    range: 24,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_4]
  },
  thunderfireCannon: {
    name: 'Thunderfire cannon',
    range: 48,
    fixedAttacks: 4,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.INDIRECT_FIRE]
  },
  thunderstrikeLasTalon: {
    name: 'Thunderstrike las-talon',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 9,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6'
  },
  twinAssaultCannon: {
    name: 'Twin assault cannon',
    range: 24,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinBoltgun: {
    name: 'Twin boltgun',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinBoltRifle: {
    name: 'Twin bolt rifle',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinFirestrikeAutocannon: {
    name: 'Twin Firestrike autocannon',
    range: 48,
    fixedAttacks: 3,
    ballisticSkill: 2,
    strength: 9,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinFirestrikeLastalon: {
    name: 'Twin Firestrike las-talon',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 2,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinFlamer: {
    name: 'Twin flamer',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 0,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinFragstormGrenadeLauncher: {
    name: 'Twin fragstorm grenade launcher',
    range: 18,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinHeavyBolter: {
    name: 'Twin heavy bolter',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinHeavyPlasmaCannonStandard: {
    name: 'Twin heavy plasma cannon - standard',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinHeavyPlasmaCannonSupercharge: {
    name: 'Twin heavy plasma cannon - supercharge',
    range: 36,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.HAZARDOUS,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinHeavyOnslaughtGatlingCannon: {
    name: 'Twin heavy onslaught gatling cannon',
    range: 24,
    fixedAttacks: 12,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinIcarusIronhailHeavyStubber: {
    name: 'Twin Icarus ironhail heavy stubber',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ANTI_FLY_4,
      WEAPON_ABILITIES.RAPID_FIRE_3,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  twinIcarusRocketPod: {
    name: 'Twin Icarus rocket pod',
    range: 24,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.ANTI_FLY_2, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinIronhailAutocannon: {
    name: 'Twin ironhail autocannon',
    range: 48,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinIronhailHeavyStubber: {
    name: 'Twin ironhail heavy stubber',
    range: 36,
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_3, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinLascannon: {
    name: 'Twin lascannon',
    range: 48,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 12,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinLastalon: {
    name: 'Twin las-talon',
    range: 36,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -3,
    fixedDamage: 1,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinMeltagun: {
    name: 'Twin meltagun',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.MELTA_2, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinMultiMelta: {
    name: 'Twin multi-melta',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -4,
    fixedDamage: 0,
    variableDamage: 'D6',
    abilities: [WEAPON_ABILITIES.MELTA_2, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinStormBolter: {
    name: 'Twin storm bolter',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.RAPID_FIRE_2, WEAPON_ABILITIES.TWIN_LINKED]
  },
  typhoonMissileLauncherFrag: {
    name: 'Typhoon missile launcher - frag',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: '2D6',
    ballisticSkill: 3,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST],
    profile: true
  },
  typhoonMissileLauncherKrak: {
    name: 'Typhoon missile launcher - krak',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 0,
    variableDamage: 'D6',
    profile: true
  },
  vengorLauncher: {
    name: 'Vengor launcher',
    range: 48,
    fixedAttacks: 0,
    variableAttacks: 'D6',
    ballisticSkill: 2,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.INDIRECT_FIRE]
  },
  volkiteCharger: {
    name: 'Volkite charger',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 0,
    abilities: [WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  whirlwindVengeanceLauncher: {
    name: 'Whirlwind vengeance launcher',
    range: 72,
    fixedAttacks: 3,
    variableAttacks: 'D6',
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.INDIRECT_FIRE]
  }
};
