import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.kayvaan_shrike = {
  name: 'KAYVAAN SHRIKE',
  move: 12,
  toughness: 4,
  save: 3,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [
      ABILITIES.DEEP_STRIKE,
      ABILITIES.LEADER,
      ABILITIES.LONE_OPERATIVE,
      ABILITIES.STEALTH
    ],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Shadowmaster',
        description: `While this model is leading a unit, models in this unit cannot be targeted by ranged attacks unless the attacking model is within 12".`
      },
      {
        title: 'Echo of the Ravenspire',
        description: `At the end of your opponent's turn, if this model's unit is not within Engagement Range of any enemy models, you can remove it from the battlefield and place it into Strategic Reserves.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.blackout]],
  meleeWeapons: [[meleeWeapons.theRavensTalons]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.FLY,
    KEYWORDS.JUMP_PACK,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CHAPTER_MASTER,
    'KAYVAAN SHRIKE'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 110 }
};

export { characters };
