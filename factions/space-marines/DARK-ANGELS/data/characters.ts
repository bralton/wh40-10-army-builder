import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.azrael = {
  name: `AZRAEL`,
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 6,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Supreme Grand Master',
        description: `While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.`
      },
      {
        title: 'Masterful Tactician',
        description: `At the start of your Command phase, if this model is on the battlefield, you gain 1CP.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'The Lion Helm',
      description:
        'Models in the bearer’s unit have a 4+ invulnerable save. In addition, once per battle, at any time, the bearer can summon a Watcher in the Dark. When it does, until the end of the phase, models in the bearer’s unit have the Feel No Pain 4+ ability against mortal wounds.'
    }
  ],
  rangedWeapons: [[rangedWeapons.lionsWrath]],
  meleeWeapons: [[meleeWeapons.theSwordOfSecrets]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TACTICUS,
    KEYWORDS.CHAPTER_MASTER,
    `AZRAEL`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 120 }
};

export { characters };
