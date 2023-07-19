import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { tactical_precision } from './leader-modifiers';

export const characters: { [key: string]: Unit } = {
  primaris_apothecary: {
    name: 'PRIMARIS APOTHECARY',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Narthecium',
          description:
            'While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to that unit.'
        },
        {
          title: 'Gene-seed Recovery',
          description: `When this model's Bodyguard unit is destroyed, roll one D6: on a 2+ you gain 1CP.`
        }
      ]
    },
    rangedWeapons: [
      rangedWeapons.absolverBoltPistol,
      rangedWeapons.reductorPistol
    ],
    meleeWeapons: [meleeWeapons.closeCombatWeapon],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS APOTHECARY'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  primaris_lieutenant: {
    name: 'PRIMARIS LIEUTENANT',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Tactical Precision',
          description:
            'While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.'
        },
        {
          title: 'Target Priority',
          description: `This model's unit is eligible to shoot and declare a charge in a turn in which it Fell Back.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      rangedWeapons.boltPistol,
      rangedWeapons.heavyBoltPistol,
      rangedWeapons.masterCraftedBoltRifle,
      rangedWeapons.neoVolkitePistol,
      rangedWeapons.plasmaPistolStandard,
      rangedWeapons.plasmaPistolSupercharge
    ],
    meleeWeapons: [
      { ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 },
      meleeWeapons.masterCraftedPowerSword,
      meleeWeapons.powerFist
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS LIEUTENANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 },
    leadEffect: tactical_precision
  }
};
