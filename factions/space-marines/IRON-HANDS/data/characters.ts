import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.iron_father_feirros = {
  name: 'IRON FATHER FEIRROS',
  move: 5,
  toughness: 6,
  save: 2,
  wounds: 6,
  leadership: 6,
  objectiveControl: 1,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Rites of Tempering',
        description: `While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.`
      },
      {
        title: 'Iron Father',
        description:
          'While this model is within 3" of one or more friendly ADEPTUS ASTARTES VEHICLE units, it has the Lone Operative ability.'
      },
      {
        title: 'Master of the Forge',
        description: `In your Command Phase, select one friendly ADEPTUS ASTARTES VEHICLE model within 3" of this model. That model regains up to 3 lost wounds and, until the start of your next Command phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. You cannot select a unit for this ability that has already been selected for the Blessing of the Omnissiah ability this phase, and vice versa.`
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.gorgonsWrath]
  ],
  meleeWeapons: [[meleeWeapons.harrowhand], [meleeWeapons.medusanManipuli]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.GRAVIS,
    'IRON FATHER FEIRROS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 105 }
};

export { characters };
