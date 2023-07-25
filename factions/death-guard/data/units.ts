import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';

export const troops: { [key: string]: Unit } = {
  blightlord_terminators: {
    name: 'BLIGHTLORD TERMINATORS',
    move: 4,
    toughness: 6,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Blistering Fusillade',
          description: `Each time a model in this unit makes a ranged attack, if it targets the closest eligible enemy unit, re-roll a Wound roll of 1.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.blightLauncher],
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.plagueSpewer],
      [rangedWeapons.reaperAutocannon]
    ],
    meleeWeapons: [
      [meleeWeapons.buboticBlade],
      [meleeWeapons.flailOfCorruption]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      'BLIGHTLORD TERMINATORS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 5, cost: 175 },
    possibleCompositions: [
      {
        modelCount: 5,
        cost: 175
      },
      { modelCount: 10, cost: 350 }
    ],
    possibleLeaders: [
      { character: characters.typhus },
      { character: characters.death_guard_chaos_lord_in_terminator_armour },
      { character: characters.lordOfVirulence },
      { character: characters.lordOfContagion },
      { character: characters.death_guard_sorcerer_in_terminator_armour }
    ]
  },
  death_guard_helbrute: {
    name: 'DEATH GUARD HELBRUTE',
    move: 6,
    toughness: 9,
    save: 2,
    wounds: 8,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: `Infused with the Blessings of Nurgle`,
          description: `Each time this model is selected to shoot or fight, after it has finished making its attacks, select one enemy unit that was hit by one or more of those attacks. Until the start of your next turn, that enemy unit is always considered to be within Contagion Range of a unit from your army.`
        },
        {
          title: `Enraged Impact`,
          description: `Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.`
        },
        {
          title: `Helbrute Fists`,
          description: `If this model is equipped with two Helbrute fists, those weapons have the [TWIN-LINKED] ability.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyFlamer],
      [rangedWeapons.helbrutePlasmaCannon],
      [rangedWeapons.missileLauncherFrag, rangedWeapons.missileLauncherKrak],
      [rangedWeapons.multimelta],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.twinAutocannon],
      [rangedWeapons.twinLascannon],
      [rangedWeapons.twinPlagueHeavyBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, strength: 6 }],
      [meleeWeapons.helbruteFist],
      [meleeWeapons.helbruteHammer],
      [meleeWeapons.powerScourge]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      'HELBRUTE'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 155 }
  },
  death_guard_chaos_spawn: {
    name: 'DEATH GUARD CHAOS SPAWN',
    move: 8,
    toughness: 5,
    save: 4,
    wounds: 4,
    leadership: 7,
    objectiveControl: 1,
    fnp: 5,
    abilities: {
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Regenerating Monstrosities',
          description: `At the start of each player's Command phase, one model in this unit regains up to D3 lost wounds.`
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.hideousMutations]],
    keywords: [KEYWORDS.BEAST, KEYWORDS.CHAOS, KEYWORDS.NURGLE, 'SPAWN'],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 2, cost: 75 }
  },
  death_guard_cultists: {
    name: 'DEATH GUARD CULTISTS',
    move: 6,
    toughness: 3,
    save: 6,
    wounds: 1,
    leadership: 7,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.SCOUTS_6],
      faction: [ABILITIES.NURGLE_GIFT]
    },
    rangedWeapons: [
      [rangedWeapons.cultistFirearm],
      [rangedWeapons.flamer],
      [rangedWeapons.grenadeLauncherFrag, rangedWeapons.grenadeLauncherKrak],
      [rangedWeapons.heavyStubber]
    ],
    meleeWeapons: [[meleeWeapons.brutalAssaultWeapon]],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.CHAOS, KEYWORDS.NURGLE, 'CULTISTS'],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 10, cost: 55 },
    possibleCompositions: [
      {
        modelCount: 10,
        cost: 55
      },
      { modelCount: 20, cost: 110 }
    ]
  },
  death_guard_defiler: {
    name: 'DEATH GUARD DEFILER',
    move: 8,
    toughness: 10,
    save: 3,
    wounds: 14,
    leadership: 6,
    objectiveControl: 5,
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Scuttling Walker',
          description: `Each time this model makes a Normal, Advance or Fall Back move, it can move over friendly MONSTER and VEHICLE models and terrain features that are 4" or less in heigh as if they were not there.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [rangedWeapons.defilerCannon],
      [rangedWeapons.havocLauncher],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.reaperAutocannon],
      [rangedWeapons.twinHeavyFlamer],
      [rangedWeapons.twinLascannon],
      [rangedWeapons.twinPlagueHeavyBolter]
    ],
    meleeWeapons: [[meleeWeapons.defilerClaws], [meleeWeapons.defilerScourge]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.DAEMON,
      KEYWORDS.SMOKE,
      'DEFILER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 205 }
  },
  death_guard_land_raider: {
    name: 'DEATH GUARD LAND RAIDER',
    move: 10,
    toughness: 12,
    save: 2,
    wounds: 16,
    leadership: 6,
    objectiveControl: 5,
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D6],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Assault Ramp',
          description: `Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [rangedWeapons.havocLauncher],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.soulshatterLascannon],
      [rangedWeapons.twinPlagueHeavyBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 6, strength: 8 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.SMOKE,
      'LAND RAIDER'
    ],
    transportUnits:
      'This model has a transport capacity of 12 DEATH GUARD INFANTRY models (excluding CULTIST and POXWALKER models). Each TERMINATOR model takes up the space of 2 models.',
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 250 }
  },
  death_guard_predator_annihilator: {
    name: 'DEATH GUARD PREDATOR ANNIHILATOR',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Annihilator',
          description: `Each time a ranged attack made by this model is allocated to a MONSTER or VEHICLE model, re-roll a Damage roll of 1.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [rangedWeapons.havocLauncher],
      [rangedWeapons.lascannon],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.twinPlagueHeavyBolter],
      [rangedWeapons.predatorTwinLascannon]
    ],
    meleeWeapons: [[meleeWeapons.armouredHull]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.SMOKE,
      'PREDATOR ANNIHILATOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 130 }
  },
  death_guard_predator_destructor: {
    name: 'DEATH GUARD PREDATOR DESTRUCTOR',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Destructor',
          description: `Each time this model makes a ranged attack that targets an INFANTRY unit, improve the Armour Penetration characteristic of that attack by 1.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [rangedWeapons.havocLauncher],
      [rangedWeapons.lascannon],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }],
      [rangedWeapons.twinPlagueHeavyBolter],
      [rangedWeapons.predatorAutocannon]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.SMOKE,
      'PREDATOR DESTRUCTOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 140 }
  },
  death_guard_rhino: {
    name: 'DEATH GUARD RHINO',
    move: 12,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.FIRING_DECK_2],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Self Repair',
          description: `At the start of your Command phase, this model regains 1 lost wound.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 4 }],
      [rangedWeapons.havocLauncher],
      [{ ...rangedWeapons.plagueCombiBolter, ballisticSkill: 3 }]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.SMOKE,
      'RHINO'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 80 },
    transportUnits:
      'This model has a transport capacity of 12 DEATH GUARD INFANTRY models. It cannot transport TERMINATOR, CULTIST or POXWALKER models.'
  },
  deathshroud_terminators: {
    name: 'DEATHSHROUD TERMINATORS',
    move: 4,
    toughness: 6,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Silent Bodyguard',
          description: `While a CHARACTER model is leading this unit, each time an attack targets this unit, if the strength characteristic of that attack is greater than this unit's Toughness characteristic, subtract 1 from the Wound roll.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.plaguespurtGauntlet]],
    meleeWeapons: [[meleeWeapons.manreaperStrike, meleeWeapons.manreaperSweep]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.TERMINATOR,
      'DEATHSHROUD TERMINATORS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 3, cost: 140 },
    possibleCompositions: [
      {
        modelCount: 3,
        cost: 140
      },
      { modelCount: 6, cost: 280 }
    ],
    possibleLeaders: [
      { character: characters.typhus },
      { character: characters.death_guard_chaos_lord_in_terminator_armour },
      { character: characters.lordOfVirulence },
      { character: characters.lordOfContagion },
      { character: characters.death_guard_sorcerer_in_terminator_armour }
    ]
  },
  foetid_bloat_drone: {
    name: 'FOETID BLOAT-DRONE',
    move: 10,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 3,
    invulnerable: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Hovering Death',
          description: `This model is eligible to shoot and declare a charge in a turn in which it Fell Back.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyBlightLauncher],
      [rangedWeapons.plagueSpitter]
    ],
    meleeWeapons: [[meleeWeapons.fleshmower], [meleeWeapons.plagueProbe]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.DAEMON,
      'FOETID BLOAT-DRONE'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 135 }
  },
  myphitic_blight_haulers: {
    name: 'MYPHITIC BLIGHT-HAULERS',
    move: 10,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 3,
    invulnerable: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Tank Hunters',
          description: `Each time a model in this unit makes a ranged attack that targets a VEHICLE unit, add 1 to the Wound roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.bileSpurt],
      [rangedWeapons.missileLauncherFrag, rangedWeapons.missileLauncherKrak],
      [rangedWeapons.multimelta]
    ],
    meleeWeapons: [[meleeWeapons.gnashingMaw]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.DAEMON,
      KEYWORDS.SMOKE,
      'MYPHITIC BLIGHT-HAULERS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 115 },
    possibleCompositions: [
      {
        modelCount: 1,
        cost: 115
      },
      { modelCount: 2, cost: 230 },
      { modelCount: 3, cost: 345 }
    ]
  },
  plague_marines: {
    name: 'PLAGUE MARINES',
    move: 5,
    toughness: 5,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Remorseless',
          description: `While this unit is within range of an objective marker you control, each time you take a Battle-shock test for this unit, add 1 to that test.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.blightLauncher],
      [rangedWeapons.meltaGun],
      [rangedWeapons.plagueBelcher],
      [{ ...rangedWeapons.plagueBoltPistol, ballisticSkill: 2 }],
      [rangedWeapons.plagueBoltgun],
      [rangedWeapons.plagueSpewer],
      [rangedWeapons.plasmaGunStandard, rangedWeapons.plasmaGunSupercharge],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 3 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 3 }
      ]
    ],
    meleeWeapons: [
      [meleeWeapons.buboticWeapons],
      [meleeWeapons.heavyPlagueWeapon],
      [meleeWeapons.plagueKnives]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.GRENADES,
      KEYWORDS.BATTLELINE,
      'PLAGUE MARINES'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 5, cost: 100 },
    possibleCompositions: [
      {
        modelCount: 5,
        cost: 100
      },
      { modelCount: 7, cost: 140 },
      { modelCount: 10, cost: 200 }
    ],
    possibleLeaders: [
      {
        character: characters.death_guard_chaos_lord,
        secondLeader: [
          characters.noxious_blightbringer,
          characters.foul_blightspawn,
          characters.biologus_putrifier,
          characters.tallyman,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.malignant_plaguecaster,
        secondLeader: [
          characters.noxious_blightbringer,
          characters.foul_blightspawn,
          characters.biologus_putrifier,
          characters.tallyman,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.noxious_blightbringer,
        secondLeader: [
          characters.death_guard_chaos_lord,
          characters.malignant_plaguecaster,
          characters.foul_blightspawn,
          characters.biologus_putrifier,
          characters.tallyman,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.foul_blightspawn,
        secondLeader: [
          characters.death_guard_chaos_lord,
          characters.malignant_plaguecaster,
          characters.noxious_blightbringer,
          characters.biologus_putrifier,
          characters.tallyman,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.biologus_putrifier,
        secondLeader: [
          characters.death_guard_chaos_lord,
          characters.malignant_plaguecaster,
          characters.noxious_blightbringer,
          characters.foul_blightspawn,
          characters.tallyman,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.tallyman,
        secondLeader: [
          characters.death_guard_chaos_lord,
          characters.malignant_plaguecaster,
          characters.noxious_blightbringer,
          characters.foul_blightspawn,
          characters.biologus_putrifier,
          characters.plague_surgeon
        ]
      },
      {
        character: characters.plague_surgeon,
        secondLeader: [
          characters.death_guard_chaos_lord,
          characters.malignant_plaguecaster,
          characters.noxious_blightbringer,
          characters.foul_blightspawn,
          characters.biologus_putrifier
        ]
      }
    ]
  },
  plagueburst_crawler: {
    name: 'PLAGUEBURST CRAWLER',
    move: 10,
    toughness: 10,
    save: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    invulnerable: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Spore-laced Shock Waves',
          description: `In your Shooting phase, after this model has shot, if one or more of those attacks made with its Plagueburst mortar scored a hit against an enemy INFANTRY unit, that INFANTRY unit must take a Battle-shock test.`
        }
      ]
    },
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    rangedWeapons: [
      [rangedWeapons.entropyCannon],
      [rangedWeapons.heavySluggeer],
      [rangedWeapons.plagueburstMortar],
      [rangedWeapons.plagueSpitter],
      [rangedWeapons.rothailVolleyGun]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      KEYWORDS.DAEMON,
      'PLAGUEBURST CRAWLER'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 1, cost: 175 }
  },
  poxwalkers: {
    name: 'POXWALKERS',
    move: 4,
    toughness: 4,
    save: 7,
    wounds: 1,
    leadership: 8,
    objectiveControl: 1,
    fnp: 5,
    abilities: {
      faction: [ABILITIES.NURGLE_GIFT],
      other: [
        {
          title: 'Curse of the Walking Pox',
          description: `Each time a model in this unit makes an attack that destroys an enemy model (excluding Monster and Vehicle models), you can return one destroyed Poxwalker model to this unit.\n\nWhile Typhus is leading this unit, enemy models destroyed as a result of Typhus’ The Eater Plague ability count as enem models destroyed by an attack made by a model in this unit for the purposes of this ability.]`
        }
      ]
    },
    meleeWeapons: [[meleeWeapons.improvisedWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHAOS,
      KEYWORDS.NURGLE,
      'POXWALKERS'
    ],
    factionKeywords: [KEYWORDS.FACTION.DEATH_GUARD],
    unitComposition: { modelCount: 10, cost: 60 },
    possibleCompositions: [
      {
        modelCount: 10,
        cost: 60
      },
      { modelCount: 20, cost: 120 }
    ],
    possibleLeaders: [{ character: characters.typhus }]
  }
};
