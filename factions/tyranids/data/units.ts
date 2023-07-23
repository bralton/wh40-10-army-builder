import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { guardianOrganism } from './leader-modifiers';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';

export const troops: { [key: string]: Unit } = {
  barbgaunts: {
    name: 'BARBGAUNTS',
    move: 6,
    toughness: 4,
    save: 4,
    wounds: 2,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Disruption Bombardment',
          description:
            'In your Shooting phase, after this unit has shot, if an enemy Infantry unit was hit by one or more of those attacks made by this unit’s bio-cannons, until the end of your opponent’s next turn, that enemy unit is disrupted. While a unit is disrupted, subtract 2 from its Move characteristic, and subtract 2 from Advance and Charge rolls made for it.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.bioCannon]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          strength: 4,
          fixedAttacks: 1,
          weaponSkill: 4
        }
      ]
    ],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'BARBGAUNTS'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 5, cost: 50 },
    possibleCompositions: [
      {
        modelCount: 5,
        cost: 50
      },
      { modelCount: 10, cost: 100 }
    ]
  },
  biovores: {
    name: 'BIOVORES',
    move: 5,
    toughness: 6,
    save: 4,
    wounds: 4,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Seed Spore Mines',
          description:
            'In your Shooting phase, each time this unit is selected to shoot, it can use this ability instead of making any attacks with its ranged weapons. If it does, you can add a new Spore Mines unit to your army and set it up anywhere on the battlefield that is within 48" of this unit but more than 9" horizontally away from all enemy units. That Spore Mines unit contains 1 model for each model in this unit.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.sporeMineLauncher]],
    meleeWeapons: [[meleeWeapons.chitinBarbedLimbs]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'BIOVORES'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 1, cost: 65 },
    possibleCompositions: [
      {
        modelCount: 1,
        cost: 65
      },
      {
        modelCount: 2,
        cost: 130
      },
      { modelCount: 3, cost: 195 }
    ]
  },
  carnifexes: {
    name: 'CARNIFEXES',
    move: 8,
    toughness: 9,
    save: 2,
    wounds: 8,
    leadership: 8,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Blistering Assault',
          description:
            'Each time an enemy unit is selected to shoot, after that unit has shot, if any models from this unit lost one or more wounds as a result of those attacks, this unit can make a Blistering Assault move. To do so, roll one D6, adding 2 to the result: each model in this unit can be moved a distance in inches up to the result, but this unit must finish that move as close as possible to the closest enemy unit. When doing so, those models can be moved within Engagement Range of that enemy unit. Each unit can only make one Blistering Assault move per phase.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.bioPlasma],
      [rangedWeapons.deathspitterWithSlimerMaggots],
      [rangedWeapons.devourersWithBrainleechWorms],
      [{ ...rangedWeapons.heavyVenomCannon, ballisticSkill: 4 }],
      [rangedWeapons.spineBanks],
      [{ ...rangedWeapons.stranglethornCannon, ballisticSkill: 4 }]
    ],
    meleeWeapons: [
      [meleeWeapons.carnifexCrushingClaws],
      [meleeWeapons.carnifexExtraScythingTalons],
      [meleeWeapons.carnifexScythingTalons],
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          strength: 6,
          fixedAttacks: 4,
          weaponSkill: 4
        }
      ]
    ],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'CARNIFEXES'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 1,
        cost: 125
      },
      { modelCount: 2, cost: 250 }
    ],
    possibleLeaders: [{ character: characters.oldOneEye }],
    unitComposition: { modelCount: 1, cost: 125 }
  },
  exocrine: {
    name: 'EXOCRINE',
    move: 8,
    toughness: 10,
    save: 3,
    wounds: 14,
    leadership: 8,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Symbiotic Targeting',
          description:
            'In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly TYRANIDS model makes an attack that targets that unit, re-roll a Hit roll of 1.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.bioPlasmicCannon]],
    meleeWeapons: [[meleeWeapons.powerfulLimbs]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'EXOCRINE'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 135
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  gargoyles: {
    name: 'GARGOYLES',
    move: 12,
    toughness: 3,
    save: 6,
    wounds: 1,
    leadership: 8,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Winged Swarm',
          description: `In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a normal move of up to 6". If it does, until the end of the turn, this unit is not eligible to declare a charge.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.fleshBorer]],
    meleeWeapons: [[meleeWeapons.blindingVenom]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.ENDLESS_MULTITUDE,
      'GARGOYLES'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 10,
        cost: 75
      },
      { modelCount: 20, cost: 160 }
    ],
    possibleLeaders: [{ character: characters.wingedTyranidPrime }],
    unitComposition: { modelCount: 10, cost: 75 }
  },
  genestealers: {
    name: 'GENESTEALERS',
    move: 8,
    toughness: 4,
    save: 5,
    wounds: 2,
    leadership: 7,
    invulnerable: 5,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.SCOUTS_8],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Vanguard Predator',
          description:
            'Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.genestealerClawsAndTalons]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'GENESTEALERS'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 5,
        cost: 90
      },
      { modelCount: 10, cost: 180 }
    ],
    possibleLeaders: [{ character: characters.broodlord }],
    unitComposition: { modelCount: 5, cost: 90 }
  },
  harpy: {
    name: 'HARPY',
    move: 20,
    minimumMovement: true,
    toughness: 9,
    save: 3,
    wounds: 12,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Spore Mine Cysts',
          description: `Each time this model ends a Normal move, you can do one of the following:
- Select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.
- Add a new Spore Mines unit containing D3 models to your army and set it up anywhere on the battlefield that is within 6" of this model and more than 9" horizontally away from all enemy units.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.stingerSalvoes],
      [rangedWeapons.twinHeavyVenomCannon],
      [rangedWeapons.twinStranglethornCannon]
    ],
    meleeWeapons: [[meleeWeapons.scythingWings]],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.FLY,
      KEYWORDS.AIRCRAFT,
      KEYWORDS.GREAT_DEVOURER,
      'HARPY'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 230
    },
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  haruspex: {
    name: 'HARUSPEX',
    move: 8,
    toughness: 11,
    save: 3,
    wounds: 14,
    leadership: 8,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Grisly Spectacle',
          description: `Each time this model is selected to fight, after resolving its attacks, if one or more enemy units were destroyed by those attacks, each enemy unit within 6" of this model must take a Battle-shock test`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.graspingTongue]],
    meleeWeapons: [[meleeWeapons.ravenousMaw], [meleeWeapons.shovellingClaws]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'HARUSPEX'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 125
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  hiveCrone: {
    name: 'HIVE CRONE',
    move: 20,
    minimumMovement: true,
    toughness: 9,
    save: 3,
    wounds: 12,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Airborne Predator',
          description: `Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.droolCannon],
      [rangedWeapons.stingerSalvoes],
      [rangedWeapons.tentaclids]
    ],
    meleeWeapons: [[meleeWeapons.scythingWings], [meleeWeapons.thoraxSpur]],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.FLY,
      KEYWORDS.AIRCRAFT,
      KEYWORDS.GREAT_DEVOURER,
      'HIVE CRONE'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 200
    },
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  hiveGuard: {
    name: 'HIVE GUARD',
    move: 6,
    toughness: 7,
    save: 3,
    wounds: 4,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Defensive Stance',
          description:
            'Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or unmodified Hit rolls of 4+ instead if this unit is within range of an objective marker.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.impalerCannon], [rangedWeapons.shockCannon]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          strength: 5,
          weaponSkill: 4,
          fixedAttacks: 3
        }
      ]
    ],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'HIVE GUARD'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 100
      },
      { modelCount: 6, cost: 200 }
    ],
    unitComposition: { modelCount: 3, cost: 100 }
  },
  hormagaunts: {
    name: 'HORMAGAUNTS',
    move: 10,
    toughness: 3,
    save: 5,
    wounds: 1,
    leadership: 8,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Bounding Leap',
          description:
            'This unit is eligible to declare a charge in a turn in which it Advanced.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.hormagauntTalons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.ENDLESS_MULTITUDE,
      'HORMAGAUNTS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 10,
        cost: 70
      },
      { modelCount: 20, cost: 140 }
    ],
    unitComposition: { modelCount: 10, cost: 70 }
  },
  lictor: {
    name: 'LICTOR',
    move: 8,
    toughness: 6,
    save: 4,
    wounds: 6,
    leadership: 7,
    objectiveControl: 1,
    invulnerable: 5,
    abilities: {
      core: [
        ABILITIES.FIGHTS_FIRST,
        ABILITIES.INFILTRATORS,
        ABILITIES.LONE_OPERATIVE,
        ABILITIES.STEALTH
      ],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Feeder Tendrils',
          description:
            'Each time this model destroys an enemy CHARACTER model, you gain 1CP.'
        },
        {
          title: 'Pheromone Trail',
          description:
            'Once per battle round, you can target one model with this ability with the Rapid Ingress Stratagem for 0CP.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.lictorClawsAndTalons]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'LICTOR'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 75
    }
  },
  maleceptor: {
    name: 'MALECEPTOR',
    move: 8,
    toughness: 11,
    save: 3,
    wounds: 14,
    leadership: 7,
    invulnerable: 4,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Encephalic Diffusion (Aura, Psychic)',
          description:
            'While an enemy unit is within 6" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll, and, if that enemy unit is below Half-strength, subtract 1 from the Wound roll as well.'
        }
      ]
    },
    meleeWeapons: [
      [
        meleeWeapons.maleceptorMassiveScythingTalonsStrike,
        meleeWeapons.maleceptorMassiveScythingTalonsSweep
      ]
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.PSYKER,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'MALECEPTOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 165
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes and attack, subtract 1 from the Hit roll.'
    }
  },
  mawloc: {
    name: 'MAWLOC',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 14,
    leadership: 8,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Terror From The Deep',
          description:
            'Each time this unit is set up on the battlefield using the Deep Strike ability, roll one D6 for each enemy unit within 12" of this model: on a 2-4, that unit suffers D3 mortal wounds; on a 5+, that unit suffers 3 mortal wounds and must take a Battle-shock test.'
        }
      ]
    },
    meleeWeapons: [
      [meleeWeapons.distensibleJaw],
      [meleeWeapons.mawlocScythingTalons]
    ],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'MAWLOC'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 145
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes and attack, subtract 1 from the Hit roll.'
    }
  },
  mucolidSpores: {
    name: 'MUCOLID SPORES',
    move: 4,
    toughness: 4,
    save: 7,
    wounds: 3,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Bio-minefield',
          description:
            'Enemy units cannot start or end an Advance move within 6" of this unit.'
        },
        {
          title: 'Floating Death',
          description:
            'Each time an enemy unit ends a move within 3" of a model of this unit, and each time a model in this unit ends a move within 3" of an enemy unit, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D6 mortal wounds. The model in this unit that caused that roll is then destroyed.'
        }
      ]
    },
    keywords: [
      KEYWORDS.BEAST,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      'MUCOLID SPORES'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      { modelCount: 1, cost: 45 },
      { modelCount: 2, cost: 90 }
    ],
    unitComposition: { modelCount: 1, cost: 45 }
  },
  neurogaunts: {
    name: 'NEUROGAUNTS',
    move: 6,
    toughness: 3,
    save: 6,
    wounds: 1,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Neurocytes',
          description:
            'While this unit is within Synapse Range of your army, it has the Synapse keyword'
        }
      ]
    },
    meleeWeapons: [
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          fixedAttacks: 1,
          weaponSkill: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.ENDLESS_MULTITUDE,
      'NEUROGAUNTS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 11,
        cost: 45
      },
      { modelCount: 22, cost: 90 }
    ],
    possibleLeaders: [{ character: characters.neuroTyrant }],
    unitComposition: { modelCount: 11, cost: 45 }
  },
  psychophage: {
    name: 'PSYCHOPHAGE',
    move: 8,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 8,
    objectiveControl: 3,
    fnp: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Bio-stimulus (Aura)',
          description:
            'While a friendly TYRANIDS unit is within 6" of this model, models in that unit have the Feel No Pain 6+ ability.'
        },
        {
          title: 'Feeding Frenzy',
          description:
            'Each time this model makes a melee attack that targets a unit that is below its Starting Strength, add 1 to the Hit roll. If that target is also Below Half-strength, add 1 to the Wound roll as well.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.psychoclasticTorrent]],
    meleeWeapons: [[meleeWeapons.talonsAndBetentacledMaw]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'PSYCHOPHAGE'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 125
    }
  },
  pyrovores: {
    name: 'PYROVORES',
    move: 5,
    toughness: 6,
    save: 3,
    wounds: 4,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Burning Spray',
          description:
            'In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.flamespurt]],
    meleeWeapons: [[meleeWeapons.chitinBarbedLimbs]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'PYROVORES'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 1,
        cost: 30
      },
      { modelCount: 2, cost: 60 },
      { modelCount: 3, cost: 90 }
    ],
    unitComposition: { modelCount: 1, cost: 30 }
  },
  raveners: {
    name: 'RAVENERS',
    move: 10,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Death From Below',
          description: `At the end of your opponent's turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.thoracicBioWeapon]],
    meleeWeapons: [[meleeWeapons.ravenerClawsAndTalons]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'RAVENERS'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 75
      },
      { modelCount: 6, cost: 150 }
    ],
    unitComposition: { modelCount: 3, cost: 75 }
  },
  ripperSwarm: {
    name: 'RIPPER SWARMS',
    move: 6,
    toughness: 2,
    save: 6,
    wounds: 4,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Chitinous Horrors (Aura)',
          description: `While an enemy unit is within Engagement Rage of this unit, halve the Objective Control characteristic of models in that enemy unit.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.spinemaws]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          fixedAttacks: 6,
          strength: 2
        }
      ]
    ],
    keywords: [KEYWORDS.SWARM, KEYWORDS.GREAT_DEVOURER, 'RIPPER SWARMS'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 35
      },
      { modelCount: 6, cost: 70 }
    ],
    unitComposition: { modelCount: 3, cost: 35 }
  },
  screamerKiller: {
    name: 'SCREAMER-KILLER',
    move: 8,
    toughness: 9,
    save: 2,
    wounds: 10,
    leadership: 8,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Death Scream',
          description: `In your Shooting phase, after this model has shot, select one unit hit by one or more of those attacks. That unit must take a Battle-shock test, subtracting 1 from that test.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.bioPlasmicScream]],
    meleeWeapons: [[meleeWeapons.screamerKillerTalons]],
    keywords: [KEYWORDS.SWARM, KEYWORDS.GREAT_DEVOURER, 'SCREAMER-KILLER'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 180
    }
  },
  sporeMines: {
    name: 'SPORE MINES',
    move: 4,
    toughness: 1,
    save: 7,
    wounds: 1,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Bio-minefield',
          description:
            'Enemy units cannot start or end an Advance move within 6" of this unit.'
        },
        {
          title: 'Floating Death',
          description:
            'Each time an enemy unit ends a move within 3" of a model of this unit, and each time a model in this unit ends a move within 3" of an enemy unit, roll one D6: on a 2-5, that enemy unit suffers 1 mortal wounds; on a 6, that enemy unit suffers D3 mortal wounds. The model in this unit that caused that roll is then destroyed.'
        }
      ]
    },
    keywords: [
      KEYWORDS.BEAST,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      'SPORE MINES'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 50
      },
      { modelCount: 6, cost: 100 }
    ],
    unitComposition: {
      modelCount: 3,
      cost: 50
    }
  },
  sporocyst: {
    name: 'SPOROCYST',
    move: 0,
    toughness: 10,
    save: 3,
    wounds: 10,
    leadership: 8,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Seed Mucolids',
          description:
            'In your Shooting phase, each time this model is selected to shoot, it can use this ability instead of making any attacks with its ranged weapons. If it does, you can add a new Mucolid Spores unit containing 1 model to your army and set it up anywhere on the battlefield that is within 18" of this model but more than 9" horizontally away from all enemy units.'
        },
        {
          title: 'HIVE DEFENCES',
          description:
            'Each time an enemy unit is set up or ends a Normal, Advance or Fall Back move within range of this weapon, if that enemy unit is an eligible target, the bearer can shoot with this weapon at that unit as if it were your Shooting phase (the bearer can do so up to four times per phase).'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.sporocystBioWeapons]],
    meleeWeapons: [[{ ...meleeWeapons.flensingWhips, fixedDamage: 1 }]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'SPOROCYST'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 145
    }
  },
  termagants: {
    name: 'TERMAGANTS',
    move: 6,
    toughness: 3,
    save: 5,
    wounds: 1,
    leadership: 8,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Skulking Horrors',
          description:
            'Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6".'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.fleshBorer],
      [rangedWeapons.termagantSpinefists],
      [rangedWeapons.termagantDevourer]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.xenosClawsAndTeeth,
          fixedAttacks: 1,
          weaponSkill: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.ENDLESS_MULTITUDE,
      'TERMAGANTS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 10,
        cost: 60
      },
      { modelCount: 20, cost: 120 }
    ],
    unitComposition: { modelCount: 10, cost: 60 }
  },
  toxicrene: {
    name: 'TOXICRENE',
    move: 8,
    toughness: 11,
    save: 3,
    wounds: 14,
    leadership: 8,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Grasping Tendrils',
          description:
            'Each time an enemy unit (excluding Titanic units) within Engagement Range of one or more units from your army with this ability is selected to Fall Back, you can roll one D6: on a 3+, that enemy unit must Remain Stationary instead.'
        },
        {
          title: 'Hypertoxic Miasma (Aura)',
          description:
            'At the end of your Movement phase, roll one D6 for each enemy unit within 6" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.massiveToxicLashes]],
    meleeWeapons: [[meleeWeapons.massiveToxicLashes]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'TOXICRENE'],
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
  trygon: {
    name: 'TRYGON',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 14,
    leadership: 8,
    objectiveControl: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Subterranean Tunnels',
          description:
            'Each time this model is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 3" horizontally away from all enemy units. When doing so, if this model is set up within 9" of one or more enemy units, until the end of the turn, it is not eligible to declare a charge.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.bioElectricPulse]],
    meleeWeapons: [[meleeWeapons.trygonScythingTalons]],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'TRYGON'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 180
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  tyrannocyte: {
    name: 'TYRANNOCYTE',
    move: 8,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 8,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Aerial Seeding',
          description:
            'This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model must immediately disembark after it has been set up on the battlefield, and they must be set up more than 9" away from all enemy models. After this model has been set up on the battlefield, no units can embark within it.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.tyrannocyteBioWeapons]],
    meleeWeapons: [[meleeWeapons.flensingWhips]],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.FLY,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.GREAT_DEVOURER,
      'TYRANNOCYTE'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: {
      modelCount: 1,
      cost: 105
    },
    transportUnits:
      'This model has a transport capacity of 20 Tyranids Infantry models, or 1 Tyranids Monster model with a Wounds characteristic of 12 or less. Each Infantry model with a Wounds characteristic of more than 1 takes up the space of 3 models.'
  },
  tyrannofex: {
    name: 'TYRANNOFEX',
    move: 9,
    toughness: 12,
    save: 2,
    wounds: 16,
    leadership: 8,
    objectiveControl: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D6],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Resilient Organism',
          description:
            'Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.acidSpray],
      [rangedWeapons.fleshBorerHive],
      [rangedWeapons.ruptureCannon],
      [rangedWeapons.stingerSalvoes]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.powerfulLimbs, fixedAttacks: 4, strength: 8 }]
    ],
    keywords: [KEYWORDS.MONSTER, KEYWORDS.GREAT_DEVOURER, 'TYRANNOFEX'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    unitComposition: { modelCount: 1, cost: 200 }
  },
  tyrantGuard: {
    name: 'TYRANT GUARD',
    move: 6,
    toughness: 8,
    save: 3,
    wounds: 4,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Guardian Organism',
          description:
            'While a Character model is leading this unit, that Character has the Feel No Pain 5+ ability.'
        }
      ]
    },
    meleeWeapons: [
      [meleeWeapons.tyrantGuardCleaver],
      [meleeWeapons.tyrantGuardCrushingClaws],
      [meleeWeapons.tyrantGuardSythingTalons]
    ],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.GREAT_DEVOURER, 'TYRANT GUARD'],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 95
      },
      { modelCount: 6, cost: 190 }
    ],
    possibleLeaders: [
      { character: characters.swarmlord },
      { character: characters.hiveTyrant },
      { character: characters.neuroTyrant }
    ],
    leadEffect: guardianOrganism,
    unitComposition: { modelCount: 3, cost: 95 }
  },
  venomthrops: {
    name: `VENOMTHROPES`,
    move: 6,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 8,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.STEALTH],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Foul Spores (Aura)',
          description:
            'While a friendly TYRANIDS unit is within 6" of this unit, each time a ranged attack targets that unit, models in that unit have the Benefit of Cover against that attack. In addition, while a friendly Tyranids unit (excluding Monsters) is within 6" of this unit, models in that unit have the Stealth ability.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.toxicLashes]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      `VENOMTHROPES`
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 70
      },
      { modelCount: 6, cost: 140 }
    ],
    unitComposition: { modelCount: 3, cost: 70 }
  },
  vonRyansLeapers: {
    name: `VON RYAN's LEAPERS`,
    move: 10,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 8,
    objectiveControl: 1,
    invulnerable: 6,
    abilities: {
      core: [ABILITIES.FIGHTS_FIRST, ABILITIES.INFILTRATORS, ABILITIES.STEALTH],
      faction: [ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Pouncing Leap',
          description:
            'You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.'
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.leapersTalons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GREAT_DEVOURER,
      `VON RYAN's LEAPERS`
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 75
      },
      { modelCount: 6, cost: 150 }
    ],
    unitComposition: {
      modelCount: 3,
      cost: 75
    }
  },
  warriorsWithMeleeBioWeapons: {
    name: 'TYRANID WARRIORS with Melee Bio-Weapons',
    move: 6,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 7,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Adrenalised Onslaught',
          description: `At the start of the Fight phase, you can select one of the following abilities to apply to models in this unit until the end of the phase:
            \n- Aggression Imperative: Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1.
            \n- Preservation Imperative: Each time a saving throw is made for a model in this unit, re-roll a saving throw of 1.`
        }
      ]
    },
    meleeWeapons: [
      [
        {
          ...meleeWeapons.bioWeapons,
          abilities: [WEAPON_ABILITIES.TWIN_LINKED],
          fixedAttacks: 6,
          armourPiercing: -2
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.SYNAPSE,
      'TYRANID WARRIORS WITH MELEE BIO-WEAPONS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 90
      },
      { modelCount: 6, cost: 180 }
    ],
    possibleLeaders: [{ character: characters.wingedTyranidPrime }],
    unitComposition: { modelCount: 3, cost: 90 }
  },
  warriorsWithRangedBioWeapons: {
    name: 'TYRANID WARRIORS with Ranged Bio-Weapons',
    move: 6,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 7,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Adaptable Predators',
          description:
            'This unit is eligible to shoot and declare a charge in a turn in which it Fell Back'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.barbedStrangler],
      [rangedWeapons.deathspitter],
      [rangedWeapons.devourer],
      [rangedWeapons.spinefists],
      [rangedWeapons.venomCannon]
    ],
    meleeWeapons: [[meleeWeapons.bioWeapons]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.SYNAPSE,
      'TYRANID WARRIORS WITH RANGED BIO-WEAPONS'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 3, cost: 70 },
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 70
      },
      {
        modelCount: 6,
        cost: 140
      }
    ],
    possibleLeaders: [{ character: characters.wingedTyranidPrime }]
  },
  zoanthropes: {
    name: 'ZOANTHROPES',
    move: 5,
    toughness: 5,
    save: 5,
    wounds: 3,
    leadership: 7,
    invulnerable: 4,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.SHADOW_IN_THE_WARP, ABILITIES.SYNAPSE],
      other: [
        {
          title: 'Spirit Leech [Aura, Psychic]',
          description:
            'While this unit contains a Neurothrope, while an enemy is within 6" of this unit, each time that enemy unit fails a Battle-shock test, it suffers D3 mortal wounds and one model in this unit regains up to D3 lost wounds.'
        },
        {
          title: 'Warp Field [Aura, Psychic]',
          description:
            'While a friendly TYRANIDS unit is within 6" of this unit, models in that unit have a 6+ invulnerable save.'
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.warpBlastWitchfire,
        rangedWeapons.warpBlastFocusedWitchfire
      ]
    ],
    meleeWeapons: [[meleeWeapons.xenosClawsAndTeeth]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.PSYKER,
      KEYWORDS.FLY,
      KEYWORDS.GREAT_DEVOURER,
      KEYWORDS.SYNAPSE,
      'ZOANTHROPES'
    ],
    factionKeywords: [KEYWORDS.FACTION.TYRANIDS],
    unitComposition: { modelCount: 3, cost: 90 },
    possibleCompositions: [
      { modelCount: 3, cost: 90 },
      { modelCount: 6, cost: 180 }
    ]
  }
};
