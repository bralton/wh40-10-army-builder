import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';

export const characters: { [key: string]: Unit } = {
  biologus_putrifier: {
    name: 'BIOLOGUS PUTRIFIER',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Foul Infusion',
          description: `While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability. In addition, each time a model in that unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.`
        },
        {
          title: `Explosive Maladies`,
          description: `Once per battle, in your Shooting phase, you can target this model with the Grenade Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hyperBlightGrenades],
      [rangedWeapons.injectorPistol]
    ],
    meleeWeapons: [[{ ...meleeWeapons.plagueKnives, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.GRENADES,
      'BIOLOGUS PUTRIFIER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 60 }
  },
  death_guard_chaos_lord: {
    name: 'DEATH GUARD CHAOS LORD',
    move: 5,
    toughness: 5,
    save: 3,
    invulnerable: 4,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Chaos Lord`,
          description: `While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1.`
        },
        {
          title: `Desiccation Conduit (Aura)`,
          description: `While an enemy unit is within Contagion Range of this model, at the end of the turn, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.combiWeapon],
      [{ ...rangedWeapons.plagueBoltPistol, ballisticSkill: 2 }],
      [rangedWeapons.plagueCombiBolter],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [meleeWeapons.astartesChainsword],
      [meleeWeapons.plagueFist],
      [meleeWeapons.plagueEncrustedExaltedWeapon],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.GRENADES,
      'CHAOS LORD'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  death_guard_chaos_lord_in_terminator_armour: {
    name: 'DEATH GUARD CHAOS LORD IN TERMINATOR ARMOUR',
    move: 4,
    toughness: 6,
    save: 2,
    invulnerable: 4,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Chaos Lord`,
          description: `While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1.`
        },
        {
          title: `Desiccation Conduit (Aura)`,
          description: `While an enemy unit is within Contagion Range of this model, at the end of the turn, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.combiWeapon],
      [rangedWeapons.plagueCombiBolter]
    ],
    meleeWeapons: [
      [meleeWeapons.chainfist],
      [meleeWeapons.plagueFist],
      [meleeWeapons.plagueEncrustedExaltedWeapon],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      'CHAOS LORD'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  death_guard_sorcerer_in_terminator_armour: {
    name: 'DEATH GUARD SORCERER IN TERMINATOR ARMOUR',
    move: 4,
    toughness: 6,
    save: 2,
    invulnerable: 4,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Putrescent Vitality (Psychic)`,
          description: `At the start of the Fight phase, you can select one enemy unit within 18" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, each time an attack is allocated to a model in this Psyker’s unit, subtract 1 from the Damage characteristic of that attack.`
        },
        {
          title: `Pestilent Familiar (Psychic)`,
          description: `Once per battle, after selecting targets for a Psychic weapon equipped by this model, until the end of the phase, improve the Strength and Damage characteristics of that weapon by 2.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [
        rangedWeapons.curseOfTheLeperWitchfire,
        rangedWeapons.curseOfTheLeperFocusedWitchfire
      ],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.chainfist, fixedAttacks: 3, weaponSkill: 4 }],
      [meleeWeapons.forceWeapon],
      [{ ...meleeWeapons.plagueFist, fixedAttacks: 3 }],
      [
        {
          ...meleeWeapons.plagueEncrustedExaltedWeapon,
          fixedAttacks: 4,
          weaponSkill: 3
        }
      ],
      [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 5, weaponSkill: 3 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      'SORCERER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  death_guard_daemon_prince: {
    name: 'DEATH GUARD DAEMON PRINCE',
    move: 7,
    toughness: 11,
    save: 2,
    invulnerable: 4,
    wounds: 10,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Grandfather's Blessing (Aura)`,
          description: `While a friendly Death Guard Infantry unit is within Contagion Range of this model, models in that unit have the Feel No Pain 6+ ability.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.plagueSpewer]],
    meleeWeapons: [
      [
        meleeWeapons.hellforgedWeaponsStrike,
        meleeWeapons.hellforgedWeaponsSweep
      ]
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.PSYKER,
      KEYWORDS.DAEMON,
      'DAEMON PRINCE'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 170 }
  },
  death_guard_daemon_prince_with_wings: {
    name: 'DEATH GUARD DAEMON PRINCE WITH WINGS',
    move: 11,
    toughness: 10,
    save: 2,
    invulnerable: 4,
    wounds: 10,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Warp Horror (Psychic)`,
          description: `Each time this model ends a Charge move, select one enemy unit within Engagement Range of it. That unit must take a Battle-shock test.`
        },
        {
          title: 'Devastating Assault',
          description: `Each time this model ends a Charge move, until the end of the turn, its hellforged weapons have the [DEVASTATING WOUNDS] ability.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.plagueSpewer]],
    meleeWeapons: [
      [
        meleeWeapons.hellforgedWeaponsStrike,
        meleeWeapons.hellforgedWeaponsSweep
      ]
    ],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.CHARACTER,
      KEYWORDS.FLY,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.PSYKER,
      KEYWORDS.DAEMON,
      'DAEMON PRINCE WITH WINGS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 215 }
  },
  foul_blightspawn: {
    name: 'FOUL BLIGHTSPAWN',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Putrefying Stink',
          description: `While this model is leading a unit, models in that unit have the Fights First ability.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.plagueSprayer]],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.GRENADES,
      'FOUL BLIGHTSPAWN'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  lordOfContagion: {
    name: 'LORD OF CONTAGION',
    move: 4,
    toughness: 6,
    save: 2,
    invulnerable: 4,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Vector of Disease`,
          description: `While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll.`
        },
        {
          title: 'Abundance of Sickness',
          description: `In the Fight phase, each time this model loses a wound, roll one D6: on a 4+, the closes enemy unit within Engagement Range of this model suffers 1 mortal wound.`
        }
      ]
    },
    meleeWeapons: [
      [meleeWeapons.plagueBladeStrike, meleeWeapons.plagueBladeSweep]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      KEYWORDS.GRENADES,
      'LORD OF CONTAGION'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  lordOfVirulence: {
    name: 'LORD OF VIRULENCE',
    move: 4,
    toughness: 6,
    save: 2,
    invulnerable: 4,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Master of Destruction (Aura)`,
          description: ` While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Wound roll.`
        },
        {
          title: 'Blight Bombardment',
          description: `Each time a friendly Death Guard model makes an attack with a Blast weapon that targets a unit that is visible to this model, add 1 to the Hit roll and that attack has the [IGNORES COVER] ability.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.twinPlagueSpewer]],
    meleeWeapons: [[meleeWeapons.heavyPlagueFist]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      'LORD OF VIRULENCE'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 115 }
  },
  malignant_plaguecaster: {
    name: 'MALIGNANT PLAGUECASTER',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Gift of Contagion (Psychic)`,
          description: `In your Shooting phase, you can select one enemy unit within 18" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Shooting phase, each time a model in that enemy unit makes a melee attack, subtract 1 from the Wound roll.`
        },
        {
          title: `Pestilent Fallout (Psychic)`,
          description: `In your Shooting phase, after this model has shot, if one or more of those attacks made with its Plague Wind scored a wound against an enemy Infantry unit, until the start of your next turn, subtract 2 from that unit’s Move characteristic and subtract 2 from Advance and Charge rolls made for that unit.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.plagueBoltPistol],
      [
        rangedWeapons.plagueWindWitchfire,
        rangedWeapons.plagueWindFocusedWitchfire
      ]
    ],
    meleeWeapons: [[meleeWeapons.corruptedStaff]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.PSYKER,
      'MALIGNANT PLAGUECASTER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  mortarion: {
    name: 'MORTARION',
    move: 10,
    toughness: 12,
    save: 2,
    invulnerable: 4,
    wounds: 16,
    leadership: 5,
    objectiveControl: 6,
    fnp: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D6],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Host of Plagues',
          description: `At the start of the battle round, select one of the abilities in the Host of Plagues section. Until the start of the next battle round, this model has that ability.`
        },
        {
          title: 'Lord of the Death Guard (Aura)',
          description: `While a friendly Death Guard unit is within 6" of this model, that unit can ignore any or all modifiers to its characteristics and to any roll or test made for it (excluding modifiers to saving throws).`
        },
        {
          title: 'SUPREME COMMANDER',
          description: 'If this model is in your army, it must be your WARLORD.'
        }
      ],
      special: {
        'HOST OF PLAGUES': [
          {
            title: 'Miasma of Pestilence (Aura)',
            description: `While a friendly Death Guard unit is within 6" of this model, each time a ranged attack targets that unit, models in that unit have the Benefit of Cover against that attack.`
          },
          {
            title: 'Diseased Influence (Aura)',
            description: `While a friendly Death Guard unit is within 6" of this model, each time a model in that unit makes an attack, re-roll a Wound roll of 1.`
          },
          {
            title: 'Toxic Presence (Aura)',
            description: `While a friendly Death Guard unit is within 12" of this model, add 3" to the Contagion Range of that unit.`
          }
        ]
      }
    },
    rangedWeapons: [[rangedWeapons.rotwind], [rangedWeapons.theLantern]],
    meleeWeapons: [[meleeWeapons.silenceStrike, meleeWeapons.silenceSweep]],
    keywords: [
      KEYWORDS.MONSTER,
      KEYWORDS.PSYKER,
      KEYWORDS.FLY,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.DAEMON,
      KEYWORDS.GRENADES,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.PRIMARCH,
      'MORTARION'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 370 },
    damaged: {
      range: '1-6',
      description:
        'While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    }
  },
  noxious_blightbringer: {
    name: 'NOXIOUS BLIGHTBRINGER',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Sickening Vitality',
          description: `While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit.`
        },
        {
          title: 'The Bell Tolls (Aura)',
          description: `While an enemy unit is within Contagion Range of this model, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 2 from that test.`
        }
      ]
    },
    rangedWeapons: [
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 3 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 3 }
      ]
    ],
    meleeWeapons: [[meleeWeapons.cursedPlagueBell]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      'NOXIOUS BLIGHTBRINGER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 60 }
  },
  plague_surgeon: {
    name: 'PLAGUE SURGEON',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Tainted Narthecium`,
          description: `While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit.`
        },
        {
          title: `Diseased Healing`,
          description: `At the end of your Movement phase, you can select one friendly Death Guard Infantry Character model within 3" of this model. That model regains up to 3 lost wounds. Each model can only be selected for this ability once per turn.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.plagueBoltPistol]],
    meleeWeapons: [[meleeWeapons.balesword]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      'PLAGUE SURGEON'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 65 }
  },
  tallyman: {
    name: 'TALLYMAN',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Malicious Calculations',
          description: `While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.`
        },
        {
          title: `The Seven-fold Chant`,
          description: `In your Command phase, if this model is on the battlefield, roll 2D6: on a 7+, you gain 1CP.`
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.infectedPlasmaPistolStandard,
        rangedWeapons.infectedplasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      'TALLYMAN'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  typhus: {
    name: 'TYPHUS',
    move: 5,
    toughness: 6,
    save: 2,
    invulnerable: 4,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `The Destroyer Hive`,
          description: `While this model is leading a unit, each time a melee attack targets that unit, subtract 1 from the Hit roll.`
        },
        {
          title: 'The Eater Plague (Psychic)',
          description: `In your Shooting phase, you can select one enemy unit within 18" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2-5, that enemy unit suffers D6 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.`
        }
      ]
    },
    meleeWeapons: [
      [
        meleeWeapons.masterCraftedManreaperStrike,
        meleeWeapons.masterCraftedManreaperSweep
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.EPIC_HERO,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.PSYKER,
      KEYWORDS.TERMINATOR,
      'TYPHUS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 115 }
  }
};
