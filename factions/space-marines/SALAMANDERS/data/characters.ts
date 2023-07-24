import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.adrax_agatone = {
  name: `ADRAX AGATONE`,
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Unto the Anvil',
        description: `While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Wound roll.`
      },
      {
        title: 'Lord of the Pyroclasts',
        description: `While an enemy unit is within Engagement Range of this model, halve the Objective Control characteristic of models in that enemy unit.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.drakkis]],
  meleeWeapons: [[meleeWeapons.malleusNoctum]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    `ADRAX AGATONE`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 100 }
};

characters.vulkan_hestan = {
  name: `VULCAN HE'STAN`,
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
        title: 'Forgefather',
        description: `In your Shooting phase, select one enemy unit within 24" of and visible to this model. Until the end of the phase, each time a friendly ADEPTUS ASTARTES model makes a ranged attack with a Torrent or Melta weapon that targets that enemy unit, you can re-roll the Wound roll.`
      },
      {
        title: 'Seeker of Lost Relics',
        description: `At the start of the battle, select one objective marker on the battlefield. While this model is within range of that objective marker, it has an Objective Control characteristic of 10, a Leadership characteristic of 5+ and the Feel No Pain 4+ ability.`
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.gauntletOfTheForge]
  ],
  meleeWeapons: [[meleeWeapons.spearOfVulkan]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    `VULKAN HE'STAN`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 95 }
};

export { characters };
