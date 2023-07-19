import { WEAPON_ABILITIES } from '@/enums';
import { MeleeWeapon, RangedWeapon } from '@/types';

export const meleeWeapons: { [key: string]: MeleeWeapon } = {
  barbedOvipositor: {
    name: 'Barbed ovipositor',
    fixedAttacks: 1,
    weaponSkill: 2,
    strength: 3,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: ['ANTI-INFANTRY 3+', WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  bioWeapons: {
    name: 'Bio-weapons',
    weaponSkill: 3,
    fixedAttacks: 5,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  blindingVenom: {
    name: 'Blinding venom',
    weaponSkill: 4,
    fixedAttacks: 1,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1
  },
  boneSabres: {
    name: 'Bone Sabres',
    weaponSkill: 2,
    fixedAttacks: 8,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
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
  carnifexCrushingClaws: {
    name: 'Carnifex crushing claws',
    fixedAttacks: 4,
    weaponSkill: 4,
    strength: 12,
    armourPiercing: -3,
    variableDamage: 'D6',
    fixedDamage: 1
  },
  carnifexExtraScythingTalons: {
    name: 'Carnifex extra scything talons',
    fixedAttacks: 2,
    weaponSkill: 4,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  carnifexScythingTalons: {
    name: 'Carnifex scything talons',
    fixedAttacks: 6,
    weaponSkill: 4,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3
  },
  chitinBarbedLimbs: {
    name: 'Chitin-barbed limbs',
    fixedAttacks: 2,
    weaponSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1
  },
  clawedLimbs: {
    name: 'Clawed limbs',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  distensibleJaw: {
    name: 'Distensible Jaw',
    fixedAttacks: 1,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 3,
    abilities: [
      'ANTI-INFANTRY 4+',
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.EXTRA_ATTACKS
    ]
  },
  flensingWhips: {
    name: 'Flensing whips',
    fixedAttacks: 6,
    weaponSkill: 4,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2
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
  leapersTalons: {
    name: `Leaper's talons`,
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  lictorClawsAndTalons: {
    name: 'Lictor claws and talons',
    fixedAttacks: 6,
    weaponSkill: 2,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.PRECISION]
  },
  maleceptorMassiveScythingTalonsStrike: {
    name: 'Massive scything talons - strike',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 9,
    armourPiercing: -2,
    variableDamage: 'D6',
    fixedDamage: 1,
    profile: true
  },
  maleceptorMassiveScythingTalonsSweep: {
    name: 'Massive scything talons - sweep',
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    profile: true
  },
  mawlocScythingTalons: {
    name: 'Mawloc scything talons',
    fixedAttacks: 16,
    weaponSkill: 3,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 1
  },
  massiveCrushingClaws: {
    name: 'Massive crushing claws',
    fixedAttacks: 4,
    weaponSkill: 4,
    strength: 12,
    armourPiercing: -3,
    variableDamage: 'D6',
    fixedDamage: 1
  },
  massiveScythingTalonsStrike: {
    name: 'Massive scything talons - strike',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 9,
    armourPiercing: -2,
    variableDamage: 'D6',
    fixedDamage: 0,
    profile: true
  },
  massiveScythingTalonsSweep: {
    name: 'Massive scything talons - sweep',
    fixedAttacks: 8,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    profile: true
  },
  massiveToxicLashes: {
    name: 'Massive toxic lashes',
    fixedAttacks: 12,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: ['ANTI-INFANTRY 2+']
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
  neurotyrantClawsAndLashes: {
    name: 'Neurotyrant claws and lashes',
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1
  },
  oldOneEyeClawsAndTalonsStrike: {
    name: `Old One Eye's claws and talons - strike`,
    fixedAttacks: 6,
    weaponSkill: 3,
    strength: 14,
    armourPiercing: -3,
    variableDamage: 'D6',
    fixedDamage: 1,
    profile: true
  },
  oldOneEyeClawsAndTalonsSweep: {
    name: `Old One Eye's claws and talons - sweep`,
    fixedAttacks: 12,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    profile: true
  },
  powerfulLimbs: {
    name: 'Powerful limbs',
    fixedAttacks: 3,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: 0,
    fixedDamage: 2
  },
  primeTalons: {
    name: 'Prime talons',
    weaponSkill: 2,
    fixedAttacks: 6,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2
  },
  ravenerClawsAndTalons: {
    name: 'Ravener claws and talons',
    fixedAttacks: 7,
    weaponSkill: 3,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TWIN_LINKED]
  },
  ravenousMaw: {
    name: 'Ravenous maw',
    fixedAttacks: 14,
    weaponSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2
  },
  screamerKillerTalons: {
    name: 'Screamer-killer talons',
    fixedAttacks: 10,
    weaponSkill: 3,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 3
  },
  scythingWings: {
    name: 'Scything wings',
    fixedAttacks: 4,
    weaponSkill: 4,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2
  },
  shovellingClaws: {
    name: 'Shovelling claws',
    fixedAttacks: 4,
    weaponSkill: 3,
    strength: 14,
    armourPiercing: -2,
    variableDamage: 'D6',
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  talonsAndBetentacledMaw: {
    name: 'Talons and betentacled maw',
    variableAttacks: 'D6',
    fixedAttacks: 1,
    weaponSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: ['ANTI-PSYKER 2+', WEAPON_ABILITIES.DEVASTATING_WOUNDS]
  },
  thoraxSpur: {
    name: 'Thorax spur',
    fixedAttacks: 1,
    weaponSkill: 3,
    strength: 10,
    armourPiercing: -3,
    variableDamage: 'D6',
    fixedDamage: 0,
    abilities: ['ANTI-FLY 2+', WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  toxicLashes: {
    name: 'Toxic lashes',
    fixedAttacks: 5,
    weaponSkill: 3,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: ['ANTI-INFANTRY 2+']
  },
  trygonScythingTalons: {
    name: 'Trygon scything talons',
    fixedAttacks: 12,
    weaponSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3
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
  tyrantTalons: {
    name: 'Tyrant talons',
    weaponSkill: 2,
    fixedAttacks: 5,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 2
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

export const rangedWeapons: { [key: string]: RangedWeapon } = {
  acidSpray: {
    name: 'Acid spray',
    range: 18,
    variableAttacks: 'D6',
    fixedAttacks: 6,
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -2,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.TORRENT]
  },
  barbedStrangler: {
    name: 'Barbed strangler',
    range: 36,
    variableAttacks: 'D6',
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  bioCannon: {
    name: 'Bio-cannon',
    range: 24,
    variableAttacks: 'D6',
    fixedAttacks: 0,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HEAVY]
  },
  bioElectricPulse: {
    name: 'Bio-electric pulse',
    range: 12,
    fixedAttacks: 6,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: ['SUSTAINED HITS 2']
  },
  bioPlasma: {
    name: 'Bio-plasma',
    range: 12,
    fixedAttacks: 0,
    variableAttacks: 'D3',
    ballisticSkill: 4,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.BLAST]
  },
  bioPlasmicCannon: {
    name: 'Bio-plasmic cannon',
    range: 36,
    variableAttacks: 'D6',
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 8,
    armourPiercing: -3,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.HEAVY]
  },
  bioPlasmicScream: {
    name: 'Bio-plasmic scream',
    range: 18,
    variableAttacks: 'D6',
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 8,
    armourPiercing: -2,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT, WEAPON_ABILITIES.BLAST]
  },
  deathspitter: {
    name: 'Deathspitter',
    range: 24,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1
  },
  deathspitterWithSlimerMaggots: {
    name: 'Deathspitters with slimer maggots',
    range: 24,
    fixedAttacks: 6,
    ballisticSkill: 4,
    strength: 7,
    armourPiercing: -2,
    fixedDamage: 1
  },
  devourer: {
    name: 'Devourer',
    range: 18,
    fixedAttacks: 5,
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.BLAST]
  },
  devourersWithBrainleechWorms: {
    name: 'Devourers with brainleech worms',
    range: 18,
    fixedAttacks: 12,
    ballisticSkill: 4,
    strength: 6,
    armourPiercing: 0,
    fixedDamage: 1
  },
  droolCannon: {
    name: 'Drool cannon',
    range: 12,
    variableAttacks: '2D6',
    fixedAttacks: 0,
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.TORRENT]
  },
  flamespurt: {
    name: 'Flamespurt',
    range: 12,
    variableAttacks: 'D6',
    fixedAttacks: 1,
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.TORRENT,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  fleshBorer: {
    name: 'Fleshborer',
    range: 18,
    fixedAttacks: 1,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT]
  },
  fleshBorerHive: {
    name: 'Fleshborer Hive',
    range: 24,
    fixedAttacks: 20,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.HEAVY,
      'SUSTAINED HITS 1',
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  graspingTongue: {
    name: 'Grasping tongue',
    range: 12,
    fixedAttacks: 1,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -2,
    variableDamage: 'D6',
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PRECISION]
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
  impalerCannon: {
    name: 'Impaler cannon',
    range: 36,
    fixedAttacks: 4,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.INDIRECT_FIRE]
  },
  massiveToxicLashes: {
    name: 'Massive toxic lashes',
    range: 9,
    variableAttacks: '2D6',
    fixedAttacks: 0,
    ballisticSkill: 3,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: ['ANTI-INFANTRY 2+']
  },
  psychicOverload: {
    name: 'Psychic overload',
    range: 18,
    variableAttacks: 'D6',
    fixedAttacks: 3,
    ballisticSkill: 3,
    strength: 10,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.PSYCHIC]
  },
  psychicScream: {
    name: 'Psychic scream',
    range: 18,
    variableAttacks: '2D6',
    fixedAttacks: 0,
    ballisticSkill: 0,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.IGNORES_COVER,
      WEAPON_ABILITIES.PSYCHIC,
      WEAPON_ABILITIES.TORRENT
    ]
  },
  psychoclasticTorrent: {
    name: 'Psychoclastic torrent',
    range: 12,
    variableAttacks: 'D6',
    fixedAttacks: 0,
    ballisticSkill: 0,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.IGNORES_COVER, WEAPON_ABILITIES.TORRENT]
  },
  ruptureCannon: {
    name: 'Rupture cannon',
    range: 48,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 18,
    armourPiercing: -4,
    variableDamage: '2D6',
    fixedDamage: 0,
    abilities: [WEAPON_ABILITIES.HEAVY]
  },
  shockCannon: {
    name: 'Shockcannon',
    range: 24,
    fixedAttacks: 2,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 3,
    abilities: ['ANTI-VEHICLE 2+']
  },
  spineBanks: {
    name: 'Spine banks',
    range: 6,
    fixedAttacks: 5,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.ASSAULT]
  },
  spinefists: {
    name: 'Spinefists',
    range: 12,
    fixedAttacks: 2,
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  spinemaws: {
    name: 'Spinemaws',
    range: 6,
    fixedAttacks: 4,
    ballisticSkill: 5,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [WEAPON_ABILITIES.PISTOL]
  },
  sporeMineLauncher: {
    name: 'Spore Mine launcher',
    range: 48,
    variableAttacks: 'D3',
    fixedAttacks: 0,
    ballisticSkill: 4,
    strength: 6,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [
      WEAPON_ABILITIES.BLAST,
      WEAPON_ABILITIES.DEVASTATING_WOUNDS,
      WEAPON_ABILITIES.HEAVY,
      WEAPON_ABILITIES.INDIRECT_FIRE
    ]
  },
  sporocystBioWeapons: {
    name: 'Sporocyst bio-weapons',
    range: 24,
    fixedAttacks: 5,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: ['HIVE DEFENCES']
  },
  stingerSalvoes: {
    name: 'Stinger salvoes',
    range: 24,
    fixedAttacks: 8,
    ballisticSkill: 3,
    strength: 5,
    armourPiercing: 0,
    fixedDamage: 1
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
  tentaclids: {
    name: 'Tentaclids',
    range: 36,
    fixedAttacks: 4,
    ballisticSkill: 3,
    strength: 7,
    armourPiercing: 0,
    fixedDamage: 2,
    abilities: ['ANTI-VEHICLE 4+', WEAPON_ABILITIES.EXTRA_ATTACKS]
  },
  termagantSpinefists: {
    name: 'Termagant spinefists',
    range: 12,
    fixedAttacks: 2,
    ballisticSkill: 4,
    strength: 3,
    armourPiercing: 0,
    fixedDamage: 1,
    abilities: [
      WEAPON_ABILITIES.ASSAULT,
      WEAPON_ABILITIES.PISTOL,
      WEAPON_ABILITIES.TWIN_LINKED
    ]
  },
  termagantDevourer: {
    name: 'Termagant devourer',
    range: 18,
    fixedAttacks: 2,
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  thoracicBioWeapon: {
    name: 'Thoracic bio-weapon',
    range: 12,
    fixedAttacks: 3,
    ballisticSkill: 4,
    strength: 4,
    armourPiercing: 0,
    fixedDamage: 1
  },
  twinHeavyVenomCannon: {
    name: 'Twin heavy venom cannon',
    range: 36,
    variableAttacks: 'D3',
    fixedAttacks: 0,
    ballisticSkill: 3,
    strength: 9,
    armourPiercing: -2,
    fixedDamage: 3,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.TWIN_LINKED]
  },
  twinStranglethornCannon: {
    name: 'Twin stranglethorn Cannon',
    range: 36,
    variableAttacks: 'D6',
    fixedAttacks: 1,
    ballisticSkill: 2,
    strength: 7,
    armourPiercing: -1,
    fixedDamage: 2,
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.TWIN_LINKED]
  },
  tyrannocyteBioWeapons: {
    name: 'Tyrannocyte bio-weapons',
    range: 24,
    fixedAttacks: 5,
    ballisticSkill: 4,
    strength: 5,
    armourPiercing: -1,
    fixedDamage: 2
  },
  venomCannon: {
    name: 'Venom cannon',
    range: 36,
    variableAttacks: 'D3',
    fixedAttacks: 0,
    ballisticSkill: 4,
    strength: 9,
    armourPiercing: -2,
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
    abilities: [WEAPON_ABILITIES.BLAST, WEAPON_ABILITIES.PSYCHIC],
    profile: true
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
    abilities: [WEAPON_ABILITIES.LETHAL_HITS, WEAPON_ABILITIES.PSYCHIC],
    profile: true
  }
};
