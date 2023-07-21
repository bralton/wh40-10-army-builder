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
    meleeWeapons: [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }],
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
  primaris_captain: {
    name: 'PRIMARIS CAPTAIN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Rites of Battle',
          description:
            'Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase.'
        },
        {
          title: 'Finest Hour',
          description:
            'Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability'
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [
      { ...rangedWeapons.boltPistol, ballisticSkill: 2 },
      rangedWeapons.heavyBoltPistol,
      rangedWeapons.masterCraftedBoltRifle,
      rangedWeapons.neoVolkitePistol,
      { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
      { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
    ],
    meleeWeapons: [
      { ...meleeWeapons.closeCombatWeapon, fixedAttacks: 6, weaponSkill: 2 },
      { ...meleeWeapons.masterCraftedPowerSword, fixedAttacks: 6 },
      { ...meleeWeapons.powerFist, fixedAttacks: 5 }
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS',
      'CAPTAIN'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
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
      { ...rangedWeapons.boltPistol, ballisticSkill: 2 },
      rangedWeapons.heavyBoltPistol,
      rangedWeapons.masterCraftedBoltRifle,
      rangedWeapons.neoVolkitePistol,
      { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
      { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
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
