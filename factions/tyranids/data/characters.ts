import { unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { vicious_insight } from './leader-modifiers';

export const characters: { [key: string]: unit } = {
  swarmlord: {
    name: 'THE SWARMLORD',
    move: 8,
    toughness: 10,
    save: 2,
    invulnerable: 4,
    wounds: 10,
    leadership: 7,
    objectiveControl: 3,
    abilities: {
      faction: ['Shadow in the warp', 'Synapse'],
      core: ['Deadly Demise D3', 'Leader'],
      other: [
        {
          title: 'Hive Commander',
          description:
            'At the start of your Command phase, if this model is on the battlefield, you gain 1CP.'
        },
        {
          title: 'Malign Presence',
          description:
            'Once per battle, after your opponent uses a Stratagem, if this model is your Warlord and is on the battlefield, it can use this ability. If it does, until the end of the battle, increase that Stratagem’s cost to your opponent by 1CP.'
        },
        {
          title: 'Domination of the Hive Mind',
          description:
            'While a friendly Tyranids unit is within 9" of this model, that unit is within your army’s Synapse Range.'
        }
      ]
    },
    rangedWeapons: [rangedWeapons.synapticPulse],
    meleeWeapons: [meleeWeapons.boneSabres],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'THE SWARMLORD'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { 1: 250 }
  },
  wingedHiveTyrant: {
    name: 'WINGED HIVE TYRANT',
    move: 12,
    toughness: 9,
    save: 2,
    invulnerable: 4,
    wounds: 10,
    leadership: 7,
    objectiveControl: 3,
    abilities: {
      faction: ['Shadow in the warp', 'Synapse'],
      core: ['Deadly Demise D3', 'Deep Strike'],
      other: [
        {
          title: 'Will of the Hive Mind',
          description:
            'Once per turn, one friendly TYRANIDS unit within 12" of one or more models with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase'
        },
        {
          title: 'Paroxysm [Psychic]',
          description:
            'At the start of the Fight phase, you can select one enemy unit within 12" of and visible to this model and roll one D6: on a 1, this Psyker suffers D3 mortal wounds; on a 2+, until the end of the phase, subtract 1 from the Attacks characteristic of weapons equipped by models in that unit.'
        }
      ]
    },
    rangedWeapons: [
      rangedWeapons.heavyVenomCannon,
      rangedWeapons.stranglethornCannon
    ],
    meleeWeapons: [
      meleeWeapons.monstrousBoneswordAndLashWhip,
      meleeWeapons.monstrousScythingTalons,
      meleeWeapons.tyrantTalons
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'WINGED HIVE TYRANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { 1: 195 }
  },
  hiveTyrant: {
    name: 'HIVE TYRANT',
    move: 8,
    toughness: 10,
    save: 2,
    invulnerable: 4,
    wounds: 10,
    leadership: 7,
    objectiveControl: 3,
    abilities: {
      faction: ['Shadow in the warp', 'Synapse'],
      core: ['Deadly Demise D3', 'Leader'],
      other: [
        {
          title: 'Will of the Hive Mind',
          description:
            'Once per turn, one friendly TYRANIDS unit within 12" of one or more models with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase'
        },
        {
          title: 'Onslaught [Aura, Psychic]',
          description:
            'While a friendly TYRANIDS unit is within 6" of this model, ranged weapons equipped by models in that unit have the [ASSAULT] ability.'
        }
      ]
    },
    rangedWeapons: [
      rangedWeapons.heavyVenomCannon,
      rangedWeapons.stranglethornCannon
    ],
    meleeWeapons: [
      meleeWeapons.monstrousBoneswordAndLashWhip,
      meleeWeapons.monstrousScythingTalons
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'HIVE TYRANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { 1: 220 }
  },
  broodlord: {
    name: 'BROODLORD',
    move: 8,
    toughness: 5,
    save: 4,
    invulnerable: 4,
    wounds: 6,
    leadership: 7,
    objectiveControl: 1,
    abilities: {
      faction: ['Synapse'],
      core: ['Scouts 8"', 'Leader'],
      other: [
        {
          title: 'Vicious Insight',
          description:
            'While this model is leading a unit, weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability'
        },
        {
          title: 'Hypnotic Gaze [Psychic]',
          description:
            'At the start of the Fight phase, select one enemy unit within Engagement Range of this model. Until the end of the phase, each time a model in that unit makes and attack, subtract 1 from the Hit roll.'
        }
      ]
    },
    meleeWeapons: [meleeWeapons.broodlordClawsAndTalons],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      'BROODLORD'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { 1: 100 },
    leadEffect: vicious_insight
  }
};
