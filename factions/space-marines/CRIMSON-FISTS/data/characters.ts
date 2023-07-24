import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.pedro_kantor = {
  name: 'PEDRO KANTOR',
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  fnp: 6,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Oath of Rynn',
        description: `Once per battle, at the start of either player's Command phase, this model can use this ability. When it does, until the end of the turn, add 1 to the Attacks characteristic of weapons equipped by models in this model's unit.`
      },
      {
        title: 'To the Last',
        description: `While this model is leading a unit, each time a model in this unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.dornsArrow]],
  meleeWeapons: [[meleeWeapons.fistOfRetribution]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CHAPTER_MASTER,
    'PEDRO KANTOR'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 100 }
};

export { characters };
