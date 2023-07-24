import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.korsarro_khan = {
  name: `KOR'SARRO KHAN`,
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'For the Khan!',
        description: `While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability and melee weapons equipped by models in that unit have the [LANCE] ability.`
      },
      {
        title: 'Trophy Taker',
        description: `Each time this model destroys an enemy CHARACTER model, you gain 1CP.`
      }
    ]
  },
  rangedWeapons: [
    [
      {
        ...rangedWeapons.boltPistol,
        ballisticSkill: 2
      }
    ]
  ],
  meleeWeapons: [[meleeWeapons.moonfang]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    `KOR'SARRO KHAN`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 80 }
};

export { characters };
