import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.sergeant_telion = {
  name: 'SERGEANT TELION',
  move: 6,
  toughness: 4,
  save: 4,
  wounds: 3,
  leadership: 6,
  objectiveControl: 1,
  abilities: {
    core: [
      ABILITIES.INFILTRATORS,
      ABILITIES.LEADER,
      ABILITIES.SCOUTS_6,
      ABILITIES.STEALTH
    ],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Voice of Experience',
        description: `While this model is leading a unit, improve the Objective Control characteristic of models in that unit by 1 and each time a model in that unit makes an attack, add 1 to the Hit roll.`
      },
      {
        title: 'Guiding Hand',
        description:
          'While this model is leading a unit, each time that unit is selected to shoot or fight, select one of the following abilities to apply to weapons equipped by models in that unit until the end of the Phase: [LETHAL HITS]; [PRECISION]; [SUSTAINED HITS 1]'
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.quietus]
  ],
  meleeWeapons: [
    [{ ...meleeWeapons.combatKnife, fixedAttacks: 4, weaponSkill: 3 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    'SERGEANT TELION'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 70 }
};

characters.chaplain_cassius = {
  name: 'CHAPLAIN CASSIUS',
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 4,
  leadership: 5,
  objectiveControl: 1,
  invulnerable: 4,
  fnp: 5,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Catechism of Death',
        description: `While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.`
      },
      {
        title: 'Inspired Retribution',
        description: `While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking mode;'s unit has finished making its attacks, and is then removed from play.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.infernus]],
  meleeWeapons: [[meleeWeapons.artificerCrozius]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    'CHAPLAIN CASSIUS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 80 }
};

export { characters };
