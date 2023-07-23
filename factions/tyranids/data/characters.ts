import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { alpha_warrior, vicious_insight } from './leader-modifiers';
import { ABILITIES } from './abilities';

export const characters: { [key: string]: Unit } = {
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
      faction: [ABILITIES.SYNAPSE],
      core: [ABILITIES.SCOUTS_8, ABILITIES.LEADER],
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
    meleeWeapons: [[meleeWeapons.broodlordClawsAndTalons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      'BROODLORD'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 100 },
    leadEffect: vicious_insight
  },
  deathLeaper: {
    name: 'DEATHLEAPER',
    move: 8,
    toughness: 6,
    save: 4,
    wounds: 7,
    leadership: 7,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      core: [
        ABILITIES.FIGHTS_FIRST,
        ABILITIES.INFILTRATORS,
        ABILITIES.LONE_OPERATIVE,
        ABILITIES.STEALTH
      ],
      other: [
        {
          title: 'Feeder Tendrils',
          description:
            'Each time this model destroys an enemy CHARACTER model, you gain 1CP.'
        },
        {
          title: 'Fear of the Unseen (Aura)',
          description: `While an enemy unit is within 6" of this model, worsen the Leadership characteristic of models in that unit by 1. In addition, in the Battle-shock step of your opponent’s Command phase, if such an enemy unit is below its Starting Strength, it must take a Battle-shock test.`
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.lictorClawsAndTalons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.GREAT_DEVOURER,
      'DEATHLEAPER'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 80 }
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
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.LEADER],
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
      [rangedWeapons.heavyVenomCannon],
      [rangedWeapons.stranglethornCannon]
    ],
    meleeWeapons: [
      [meleeWeapons.monstrousBoneswordAndLashWhip],
      [meleeWeapons.monstrousScythingTalons]
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
    unitComposition: { modelCount: 1, cost: 220 }
  },
  neuroTyrant: {
    name: 'NEUROTYRANT',
    move: 6,
    toughness: 8,
    save: 4,
    wounds: 9,
    leadership: 7,
    objectiveControl: 3,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.SYNAPSE, ABILITIES.SHADOW_IN_THE_WARP],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Node Lash [Psychic',
          description:
            'While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll. If the target is Battle-shocked, add 1 to the Wound roll as well.'
        },
        {
          title: 'Psychic Terror (Psychic)',
          description: `If one or more Neurotyrants from your army are on the battlefield when you unleash the Shadow in the Warp, subtract 1 from the Battle-shock test each enemy unit on the battlefield must take as a result.`
        },
        {
          title: 'Synaptic Relay',
          description:
            'In your Command phase, you can select up to two friendly Tyranids units within 12" of this model’s unit. Until the start of your next Command phase, the selected units are always considered to be within Synapse Range of your army.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.psychicScream]],
    meleeWeapons: [[meleeWeapons.neurotyrantClawsAndLashes]],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.FLY,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'NEUROTYRANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 105 }
  },
  oldOneEye: {
    name: 'OLD ONE EYE',
    move: 8,
    toughness: 9,
    save: 2,
    wounds: 9,
    leadership: 8,
    objectiveControl: 3,
    fnp: 5,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      core: [ABILITIES.FEEL_NO_PAIN_5, ABILITIES.LEADER],
      other: [
        {
          title: 'Alpha Leader',
          description:
            'While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll.'
        },
        {
          title: 'Unstoppable Monster',
          description: `At the start of each player's command phase, this model regains up to D3 lost wounds.`
        }
      ]
    },
    meleeWeapons: [
      [
        meleeWeapons.oldOneEyeClawsAndTalonsStrike,
        meleeWeapons.oldOneEyeClawsAndTalonsSweep
      ]
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.GREAT_DEVOURER,
      'OLD ONE EYE'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 140 }
  },
  parasiteOfMortrex: {
    name: 'PARASITE OF MORTREX',
    move: 12,
    toughness: 5,
    save: 4,
    wounds: 5,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      core: [
        ABILITIES.DEEP_STRIKE,
        ABILITIES.LONE_OPERATIVE,
        ABILITIES.STEALTH
      ],
      other: [
        {
          title: 'Parasitic Infection',
          description:
            'Each time an Infantry model is destroyed by an attack made with this model’s barbed ovipositor, after this model has finished making its attacks, you can add one new Ripper Swarms unit to your army consisting of D3 models and set it up within 3" of this model. If you do, that Ripper Swarms unit can be set up within Engagement Range of the destroyed model’s unit (but not within Engagement Range of any other enemy units).'
        },
        {
          title: 'It Itches!',
          description: `At the start of the Fight phase, select one enemy unit within Engagement Range of this model. That enemy unit must take a Battle-shock test.`
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.barbedOvipositor], [meleeWeapons.clawedLimbs]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      'PARASITE OF MORTREX'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 90 }
  },
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
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.LEADER],
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
    rangedWeapons: [[rangedWeapons.synapticPulse]],
    meleeWeapons: [[meleeWeapons.boneSabres]],
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
    unitComposition: { modelCount: 1, cost: 250 }
  },
  tervigon: {
    name: 'TERVIGON',
    move: 8,
    toughness: 11,
    save: 2,
    wounds: 16,
    leadership: 7,
    objectiveControl: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D6],
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Spawn Termagants',
          description:
            'In your Command phase, you can select one friendly Termagants unit within 6" of this model and return up to D3+3 destroyed Termagant models to that unit. A Termagants unit cannot be selected for this ability more than once per phase'
        },
        {
          title: 'Brood Progenitor (Aura, Psychic',
          description:
            'While a friendly Termagants unit is within 6" of this model, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.stingerSalvoes]],
    meleeWeapons: [
      [meleeWeapons.massiveCrushingClaws],
      [meleeWeapons.massiveScythingTalonsStrike],
      [meleeWeapons.massiveScythingTalonsSweep]
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'TERVIGON'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 200
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
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
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.DEEP_STRIKE],
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
      [rangedWeapons.heavyVenomCannon],
      [rangedWeapons.stranglethornCannon]
    ],
    meleeWeapons: [
      [meleeWeapons.monstrousBoneswordAndLashWhip],
      [meleeWeapons.monstrousScythingTalons],
      [meleeWeapons.tyrantTalons]
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
    unitComposition: { modelCount: 1, cost: 195 }
  },
  wingedTyranidPrime: {
    name: 'WINGED TYRANID PRIME',
    move: 12,
    toughness: 5,
    save: 4,
    wounds: 6,
    leadership: 7,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        {
          title: 'Alpha Warrior',
          description:
            'While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.'
        },
        {
          title: 'Death Blow',
          description: `If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.`
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.primeTalons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'WINGED TYRANID PRIME'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 80 },
    leadEffect: alpha_warrior
  }
};
