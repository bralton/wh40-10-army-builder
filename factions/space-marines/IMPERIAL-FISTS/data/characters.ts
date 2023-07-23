import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';

export const characters: { [key: string]: Unit } = {
  ...core_characters,
  darnath_lysander: {
    name: 'DARNATH LYSANDER',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Icon of Obstinancy',
          description: `While this model is leading a unit, each time an attack targets that unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll.`
        },
        {
          title: 'Rampart',
          description:
            'Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this mode has a 2+ invulnerable save.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.fistOfDorn]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      KEYWORDS.CAPTAIN,
      'DARNATH LYSANDER'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
    unitComposition: { modelCount: 1, cost: 115 }
  },
  tor_garadon: {
    name: 'TOR GARADON',
    move: 5,
    toughness: 6,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Signum Array',
          description: `While this model is leading a unit, ranged weapons equipped by models in that unit have the [LETHAL HITS] and [IGNORES COVER] abilities`
        },
        {
          title: 'Siege Captain',
          description:
            'Each time this model makes an attack that targets a MONSTER, VEHICLE or FORTIFICATION unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 2.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.artificerGravGun]],
    meleeWeapons: [[meleeWeapons.handOfDefiance]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      KEYWORDS.CAPTAIN,
      'TOR GARADON'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
    unitComposition: { modelCount: 1, cost: 100 }
  }
};
