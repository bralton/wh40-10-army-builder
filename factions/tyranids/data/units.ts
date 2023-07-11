import { unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { guardianOrganism } from './leader-modifiers';

export const troops: { [key: string]: unit } = {
  tyrantGuard: {
    name: 'TYRANT GUARD',
    move: 6,
    toughness: 8,
    save: 3,
    wounds: 4,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: ['Synapse'],
      other: [
        {
          title: 'Guardian Organism',
          description:
            'While a Character model is leading this unit, that Character has the Feel No Pain 5+ ability.'
        }
      ]
    },
    meleeWeapons: [
      meleeWeapons.tyrantGuardCleaver,
      meleeWeapons.tyrantGuardCrushingClaws,
      meleeWeapons.tyrantGuardSythingTalons
    ],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'TYRANT GUARD'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      3: 95,
      6: 190
    },
    possibleLeaders: [characters.swarmlord, characters.hiveTyrant],
    leadEffect: guardianOrganism
  },
  genestealers: {
    name: 'GENESTEALERS',
    move: 8,
    toughness: 4,
    save: 5,
    wounds: 2,
    leadership: 7,
    invulnerable: 5,
    objectiveControl: 1,
    abilities: {
      core: ['Scouts 8"'],
      faction: ['Synapse'],
      other: [
        {
          title: 'Vanguard Predator',
          description:
            'Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead.'
        }
      ]
    },
    meleeWeapons: [meleeWeapons.genestealerClawsAndTalons],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'GENESTEALERS'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      5: 90,
      10: 180
    },
    possibleLeaders: [characters.broodlord]
  },
  hormagaunts: {
    name: 'HORMAGAUNTS',
    move: 10,
    toughness: 3,
    save: 5,
    wounds: 1,
    leadership: 8,
    objectiveControl: 2,
    abilities: {
      faction: ['Synapse'],
      other: [
        {
          title: 'Bounding Leap',
          description:
            'This unit is eligible to declare a charge in a turn in which it Advanced.'
        }
      ]
    },
    meleeWeapons: [meleeWeapons.hormagauntTalons],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.ENDLESS_MULTITUDE,
      'HORMAGAUNTS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      10: 70,
      20: 140
    }
  },
  zoanthropes: {
    name: 'ZOANTHROPES',
    move: 5,
    toughness: 5,
    save: 5,
    wounds: 3,
    leadership: 7,
    invulnerable: 4,
    objectiveControl: 1,
    abilities: {
      faction: ['Shadow in the Warp', 'Synapse'],
      other: [
        {
          title: 'Spirit Leech [Aura, Psychic]',
          description:
            'While this unit contains a Neurothrope, while an enemy is within 6" of this unit, each time that enemy unit fails a Battle-shock test, it suffers D3 mortal wounds and one model in this unit regains up to D3 lost wounds.'
        },
        {
          title: 'War Field [Aura, Psychic]',
          description:
            'While a friendly TYRANIDS unit is within 6" of this unit, models in that unit have a 6+ invulnerable save.'
        }
      ]
    },
    rangedWeapons: [
      rangedWeapons.warpBlastWitchfire,
      rangedWeapons.warpBlastFocusedWitchfire
    ],
    meleeWeapons: [meleeWeapons.xenosClawsAndTeeth],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.PSYKER,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'ZOANTHROPES'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      3: 90,
      6: 180
    }
  }
};
