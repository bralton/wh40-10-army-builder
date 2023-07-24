import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';

const invader_atv = {
  name: 'INVADER ATV',
  move: 12,
  toughness: 5,
  save: 3,
  wounds: 8,
  leadership: 6,
  objectiveControl: 2
};
const attack_bike_squad = {
  name: 'ATTACK BIKE SQUAD',
  move: 12,
  toughness: 5,
  save: 3,
  wounds: 5,
  leadership: 6,
  objectiveControl: 2
};

export const troops: { [key: string]: Unit } = {
  aggressor_squad: {
    name: 'AGGRESSOR SQUAD',
    move: 5,
    toughness: 6,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Close-quarters Firepower',
          description: `Each time a model in this unit makes a ranged attack that targets the closes eligible target, improve the Armour Penetration characteristic of that attck by 1.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.autoBoltstormGauntlets],
      [rangedWeapons.flamestormGauntlets],
      [rangedWeapons.fragstormGrenadeLauncher]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.powerFist,
          fixedAttacks: 3,
          weaponSkill: 4,
          abilities: [WEAPON_ABILITIES.TWIN_LINKED]
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      'AGGRESSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 110 },
    possibleCompositions: [
      { modelCount: 3, cost: 110 },
      { modelCount: 6, cost: 220 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_gravis_armour,
        secondLeader: [characters.apothecary_biologis]
      },
      {
        character: characters.apothecary_biologis,
        secondLeader: [characters.captain_in_gravis_armour]
      }
    ]
  },
  assault_intercessor_squad: {
    name: 'ASSAULT INTERCESSOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Shock Assault',
          description: `Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.handFlamer],
      [rangedWeapons.heavyBoltPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.BATTLELINE,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'ASSAULT INTERCESSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 90 },
    possibleCompositions: [
      { modelCount: 5, cost: 90 },
      { modelCount: 10, cost: 180 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      { character: characters.primaris_librarian },
      { character: characters.primaris_chaplain },
      { character: characters.primaris_techmarine },
      { character: characters.primaris_company_champion },
      {
        character: characters.primaris_apothecary,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      {
        character: characters.primaris_ancient,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      { character: characters.judiciar }
    ]
  },
  assault_squad: {
    name: 'ASSAULT SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Chainsword Doctrines',
          description: `Each time thi unit is selected to fight, select one of the following abilities to apply to all Astartes chainswords equipped by models in this unit until the end of the phase: [SUSTAINED HITS 1]; [LETHAL HITS]; [LANCE]`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Astartes shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.flamer],
      [rangedWeapons.meltagun],
      [rangedWeapons.plasmaGunStandard, rangedWeapons.plasmaGunSupercharge],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [meleeWeapons.eviscerator],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }],
      [
        {
          ...meleeWeapons.twinLightningClaws,
          fixedAttacks: 5,
          weaponSkill: 3,
          strength: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'ASSAULT SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 95 },
    possibleCompositions: [
      { modelCount: 5, cost: 95 },
      { modelCount: 10, cost: 190 }
    ],
    possibleLeaders: [
      {
        character: characters.captain,
        secondLeader: [characters.lieutenant]
      },
      { character: characters.lieutenant, secondLeader: [characters.captain] },
      { character: characters.librarian },
      { character: characters.chaplain }
    ]
  },
  assault_squad_with_jump_packs: {
    name: 'ASSAULT SQUAD WITH JUMP PACKS',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Hammer of Wrath',
          description: `Each time thi unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Astartes shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.flamer],
      [rangedWeapons.meltagun],
      [rangedWeapons.plasmaGunStandard, rangedWeapons.plasmaGunSupercharge],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [meleeWeapons.eviscerator],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }],
      [
        {
          ...meleeWeapons.twinLightningClaws,
          fixedAttacks: 5,
          weaponSkill: 3,
          strength: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'ASSAULT SQUAD WITH JUMP PACKS'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 115 },
    possibleCompositions: [
      { modelCount: 5, cost: 115 },
      { modelCount: 10, cost: 230 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_with_jump_pack
      },
      { character: characters.librarian_with_jump_pack },
      { character: characters.chaplain_with_jump_pack }
    ]
  },
  astartes_servitors: {
    name: 'ASTARTES SERVITORS',
    move: 6,
    toughness: 4,
    save: 4,
    wounds: 1,
    leadership: 8,
    objectiveControl: 0,
    invulnerable: 6,
    abilities: {
      other: [
        {
          title: 'Mindlock',
          description: `While a TECHMARINE model is leading this unit, improve the Ballistic skill and Weapon skill characteristics of ranged and melee weapons equipped by ASTARTES SERVITOR models in this unit by 1.`
        }
      ]
    },
    rangedWeapons: [
      [
        {
          ...rangedWeapons.heavyBolter,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [
        {
          ...rangedWeapons.multiMelta,
          ballisticSkill: 4,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.MELTA_2]
        }
      ],
      [
        rangedWeapons.plasmaCannonStandard,
        rangedWeapons.plasmaCannonSupercharge
      ]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.closeCombatWeapon,
          fixedAttacks: 1,
          weaponSkill: 5,
          strength: 3
        }
      ],
      [meleeWeapons.servitorServoArm]
    ],
    keywords: [KEYWORDS.INFANTRY, KEYWORDS.IMPERIUM, 'ASTARTES SERVITORS'],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 4, cost: 55 },
    possibleLeaders: [
      { character: characters.techmarine },
      { character: characters.primaris_techmarine }
    ]
  },
  attack_bike_squad: {
    ...attack_bike_squad,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Outrider Escort',
          description: `Once per turn, in your opponent's Shooting phase, when a friendly ADEPTUS ASTARTES MOUNTED unit within 6" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).`
        }
      ]
    },
    possibleCompositions: [
      { modelCount: 1, cost: 55 },
      { modelCount: 2, cost: 110 },
      { modelCount: 3, cost: 165 }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.multiMelta],
      [{ ...rangedWeapons.twinBoltgun, ballisticSkill: 3 }]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }]],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'ATTACK BIKE SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  ballistus_dreadnought: {
    name: 'BALLISTUS DREADNOUGHT',
    move: 8,
    toughness: 10,
    save: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Ballistus Strike',
          description: `Each time this model makes a ranged attack that targets a unit that is not Below Half-strength, you can re-roll the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.ballistusMissileLauncherFrag,
        rangedWeapons.ballistusMissileLauncherKrak
      ],
      [rangedWeapons.ballistusLascannon],
      [rangedWeapons.twinStormBolter]
    ],
    meleeWeapons: [[meleeWeapons.armouredFeet]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.IMPERIUM,
      'BALLISTUS DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 170 }
  },
  bike_squad: {
    name: 'BIKE SQUAD',
    individualName: 'SPACE MARINE BIKE',
    secondUnit: {
      ...attack_bike_squad,
      name: 'ATTACK BIKE',
      unitComposition: { modelCount: 1, cost: 55 },
      possibleCompositions: [
        { modelCount: 0, cost: 0 },
        { modelCount: 1, cost: 55 }
      ],
      abilities: {}
    },
    move: 12,
    toughness: 5,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Turbo-boost',
          description: `Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in this unit.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [{ ...rangedWeapons.gravPistol, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [{ ...rangedWeapons.twinBoltgun, ballisticSkill: 3 }],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.multiMelta]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.astartesChainsword,
          fixedAttacks: 3,
          weaponSkill: 3
        }
      ],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 3, weaponSkill: 2 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'BIKE SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 80 },
    possibleCompositions: [
      { modelCount: 3, cost: 80 },
      { modelCount: 6, cost: 160 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_on_bike
      },
      {
        character: characters.chaplain_on_bike
      }
    ]
  },
  bladeguard_veteran_squad: {
    name: 'BLADEGUARD VETERAN SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Bladeguard',
          description: `At the start of the Fight phase, you can select one of the following abilities to apply to models in this unit until the end of the phase: Swords of the Imperium; Shields of the Imperium.`
        },
        {
          title: 'Swords of the Imperium',
          description:
            'Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1.'
        },
        {
          title: 'Shields of the Imperium',
          description:
            'Each time an invulnerable saving throw is made for a model in this unit, re-roll a saving throw of 1.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyBoltPistol],
      [{ ...rangedWeapons.neoVolkitePistol, ballisticSkill: 3 }],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.masterCraftedPowerWeapon,
          fixedAttacks: 4,
          weaponSkill: 3
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'BLADEGUARD VETERAN SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 100 },
    possibleCompositions: [
      { modelCount: 5, cost: 100 },
      { modelCount: 10, cost: 200 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.bladeguard_ancient
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_captain,
          characters.bladeguard_ancient
        ]
      },
      { character: characters.primaris_company_champion },
      { character: characters.primaris_chaplain },
      {
        character: characters.bladeguard_ancient,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_captain
        ]
      },
      { character: characters.judiciar }
    ]
  },
  brutalis_dreadnought: {
    name: 'BRUTALIS DREADNOUGHT',
    move: 8,
    toughness: 10,
    save: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Brutalis Charge',
          description: `Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers d3+3 mortal wounds.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.brutalisBoltRifles],
      [rangedWeapons.twinHeavyBolter],
      [rangedWeapons.twinIcarusIronhailHeavyStubber],
      [rangedWeapons.twinMultiMelta]
    ],
    meleeWeapons: [
      [meleeWeapons.brutalisFists],
      [meleeWeapons.brutalisTalonsStrike, meleeWeapons.brutalisTalonsSweep]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.DREADNOUGHT,
      'BRUTALIS DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 220 }
  },
  centurion_assault_squad: {
    name: 'CENTURION ASSAULT SQUAD',
    move: 4,
    toughness: 7,
    save: 2,
    wounds: 4,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Annihilator Protocols',
          description: `Melee weapons equipped by models in this unit have the [SUSTAINED HITS 2] ability when targeting MONSTER, VEHICLE or FORTIFICATION units.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Centurion Assault Launcher',
        description: 'The bearer has the GRENADES keyword.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.centurionBolters],
      [rangedWeapons.twinFlamer],
      [rangedWeapons.twinMeltagun]
    ],
    meleeWeapons: [[meleeWeapons.siegeDrills]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      'CENTURION',
      'CENTURION ASSAULT SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 175 },
    possibleCompositions: [
      { modelCount: 3, cost: 175 },
      { modelCount: 6, cost: 350 }
    ]
  },
  centurion_devastator_squad: {
    name: 'CENTURION DEVASTATOR SQUAD',
    move: 4,
    toughness: 7,
    save: 2,
    wounds: 4,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Decimator Protocols',
          description: `Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.centurionBolters],
      [rangedWeapons.centurionMissileLauncher],
      [rangedWeapons.gravCannon],
      [rangedWeapons.twinHeavyBolter],
      [rangedWeapons.twinLascannon]
    ],
    meleeWeapons: [[meleeWeapons.centurionFists]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      'CENTURION',
      'CENTURION DEVASTATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 175 },
    possibleCompositions: [
      { modelCount: 3, cost: 205 },
      { modelCount: 6, cost: 410 }
    ]
  },
  command_squad: {
    name: 'COMMAND SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Narthecium',
          description: `While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to this unit.`
        },
        {
          title: 'Astartes Banner',
          description:
            'While this unit contains a Company Ansient, add 1 to the Objective Control characteristic of models in this unit.'
        },
        {
          title: 'Honour or Death',
          description:
            'While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase.'
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Astartes Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.flamer],
      [{ ...rangedWeapons.gravGun, fixedDamage: 1 }],
      [rangedWeapons.meltagun],
      [rangedWeapons.plasmaGunStandard, rangedWeapons.plasmaGunSupercharge]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [meleeWeapons.closeCombatWeapon],
      [meleeWeapons.championsBlade],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }],
      [
        {
          ...meleeWeapons.twinLightningClaws,
          fixedAttacks: 4,
          weaponSkill: 3,
          strength: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'COMMAND SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 165 },
    possibleLeaders: [
      {
        character: characters.captain,
        secondLeader: [characters.lieutenant]
      },
      { character: characters.lieutenant, secondLeader: [characters.captain] },
      { character: characters.librarian },
      { character: characters.chaplain }
    ]
  },
  contemptor_dreadnought: {
    name: 'CONTEMPTOR DREADNOUGHT',
    move: 6,
    toughness: 9,
    save: 2,
    wounds: 10,
    leadership: 6,
    objectiveControl: 3,
    invulnerable: 5,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Even In Death, I Serve',
          description: `The first time this model is destroyed, remove it from play without resolving its Deadly Demise ability. Then, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with D6 wounds remaining.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.combiBolter],
      [rangedWeapons.kheresPatternAssaultCannon],
      [rangedWeapons.multiMelta]
    ],
    meleeWeapons: [[meleeWeapons.dreadnoughtCombatWeapon]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.IMPERIUM,
      'CONTEMPTOR DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 170 }
  },
  desolation_squad: {
    name: 'DESOLATION SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Targeter Optics',
          description: `Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability and can ignore the penalty to their Hit rolls when making attacks with Indirect Fire weapons against targets that are not visible to them.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.superfragRocketLaumcher],
      [rangedWeapons.superkrakRocketLaumcher],
      [rangedWeapons.vengorLauncher]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'DESOLATION SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 170 },
    possibleCompositions: [
      { modelCount: 5, cost: 170 },
      { modelCount: 10, cost: 340 }
    ],
    possibleLeaders: [
      { character: characters.primaris_librarian },
      { character: characters.primaris_apothecary },
      { character: characters.primaris_ancient }
    ]
  },
  devastator_squad: {
    name: 'DEVASTATOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Signum',
          description: `Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability.`
        },
        {
          title: 'Armorium Cherub',
          description:
            'Once per battle, after making a Hit roll for a model in this unit, you can change that roll to an unmodified 6.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [
        {
          ...rangedWeapons.gravCannon,
          ballisticSkill: 4,
          abilities: [WEAPON_ABILITIES.ANTI_VEHICLE_2, WEAPON_ABILITIES.HEAVY]
        }
      ],
      [
        {
          ...rangedWeapons.heavyBolter,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [
        {
          ...rangedWeapons.lascannon,
          ballisticSkill: 4,
          abilities: [WEAPON_ABILITIES.HEAVY]
        }
      ],
      [rangedWeapons.missileLauncherFrag, rangedWeapons.missileLauncherKrak],
      [
        {
          ...rangedWeapons.multiMelta,
          ballisticSkill: 4,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.MELTA_2]
        }
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }],
      [
        {
          ...meleeWeapons.twinLightningClaws,
          fixedAttacks: 4,
          weaponSkill: 3,
          strength: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'DEVASTATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 120 },
    possibleCompositions: [
      { modelCount: 5, cost: 120 },
      { modelCount: 10, cost: 200 }
    ]
  },
  dreadnought: {
    name: 'DREADNOUGHT',
    move: 6,
    toughness: 9,
    save: 2,
    wounds: 8,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Wisdom of the Ancients (Aura)',
          description: `While a friendly ADEPTUS ASTARTES INFANTRY unit is within 6" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.assaultCannon],
      [rangedWeapons.heavyFlamer],
      [
        rangedWeapons.heavyPlasmaCannonStandard,
        rangedWeapons.heavyPlasmaCannonSupercharge
      ],
      [
        { ...rangedWeapons.missileLauncherFrag, ballisticSkill: 3 },
        { ...rangedWeapons.missileLauncherKrak, ballisticSkill: 3 }
      ],
      [rangedWeapons.multiMelta],
      [rangedWeapons.stormBolter],
      [rangedWeapons.twinLascannon]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, strength: 6 }],
      [meleeWeapons.dreadnoughtCombatWeapon]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 160 }
  },
  drop_pod: {
    name: 'DROP POD',
    move: 0,
    toughness: 7,
    save: 3,
    wounds: 8,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Drop Pod Assault',
          description: `This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model must immediately disembark after it has been set up on the battlefield, and they must be set up more than 9" away from all enemy models. After this model has been set up on the battlefield, no units can embark within it.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.deathwindLauncher],
      [rangedWeapons.stormBolter]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'DROP POD'
    ],
    transportUnits:
      'This model has a transport capacity of 10 ADEPTUS ASTARTES INFANTRY models. It cannot transport JUMP PACK, WULFEN, GRAVIS, CENTURIAN or TERMINATOR models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 70 }
  },
  eliminator_squad: {
    name: 'ELIMINATOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.INFILTRATORS, ABILITIES.STEALTH],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Reposition Under Covering Fire',
          description: `In your Shooting phase, after this unit has shot, if it contains an Eliminator Sergeant equipped with an instigator bolt carbine, this unit can make a Normal move. If it does so, until the end of the turn, this unit is not eligible to declare a charge.`
        },
        {
          title: 'Mark the Target',
          description:
            'Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltSniperRifle],
      [
        {
          ...rangedWeapons.instigatorBoltCarbine,
          ballisticSkill: 3,
          fixedDamage: 3
        }
      ],
      [rangedWeapons.lasFusil]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      'ELIMINATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 95 },
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour
      },
      { character: characters.librarian_in_phobos_armour }
    ]
  },
  eradicator_squad: {
    name: 'ERADICATOR SQUAD',
    move: 4,
    toughness: 6,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Total Obliteration',
          description: `Each time a ranged attack made by a model in this unit targets a MONSTER or VEHICLE model, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.meltaRifle],
      [
        {
          ...rangedWeapons.multiMelta,
          ballisticSkill: 4,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.MELTA_2]
        }
      ]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      'ERADICATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 95 },
    possibleCompositions: [
      { modelCount: 3, cost: 95 },
      { modelCount: 6, cost: 190 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_gravis_armour,
        secondLeader: [characters.apothecary_biologis]
      },
      {
        character: characters.apothecary_biologis,
        secondLeader: [characters.captain_in_gravis_armour]
      }
    ]
  },
  firestrike_servo_turrets: {
    name: 'FIRESTRIKE SERVO-TURRETS',
    move: 3,
    toughness: 6,
    save: 2,
    wounds: 6,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Sentinel Protocols',
          description: `Each time you select this unit for the Fire Overwatch stratagem, hits are scored on unmodified Hit rolls of 4+ when resolving this Stratagem.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.twinFirestrikeAutocannon],
      [rangedWeapons.twinFirestrikeLastalon]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.ARTILLERY,
      KEYWORDS.VEHICLE,
      KEYWORDS.IMPERIUM,
      'FIRESTRIKE SERVO-TURRETS'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 },
    possibleCompositions: [
      { modelCount: 1, cost: 80 },
      { modelCount: 2, cost: 160 }
    ]
  },
  gladiator_lancer: {
    name: 'GLADIATOR LANCER',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 12,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Aquilon Optics',
          description: `Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.fragstormGrenadeLauncher],
      [rangedWeapons.icarusRocketPod],
      [rangedWeapons.ironhailHeavyStubber],
      [rangedWeapons.lancerLaserDestroyer],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'GLADIATOR LANCER'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 145 }
  },
  gladiator_reaper: {
    name: 'GLADIATOR REAPER',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 12,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Rotating Death',
          description: `This model's twin heavy onslaught gatling cannon has the [SUSTAINED HITS 2] ability when targeting INFANTRY units.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.icarusRocketPod],
      [rangedWeapons.ironhailHeavyStubber],
      [rangedWeapons.tempestBolter],
      [
        {
          ...rangedWeapons.twinHeavyOnslaughtGatlingCannon,
          abilities: [
            WEAPON_ABILITIES.DEVASTATING_WOUNDS,
            WEAPON_ABILITIES.TWIN_LINKED,
            'INFANTRY SUSTAINED HITS 2'
          ]
        }
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'GLADIATOR REAPER'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 155 }
  },
  gladiator_valiant: {
    name: 'GLADIATOR VALIANT',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 12,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Ferocious Assault',
          description: `Each time this model makes an attack with its twin las-talon that targets the closest eligible MONSTER or VEHICLE unit, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.icarusRocketPod],
      [rangedWeapons.ironhailHeavyStubber],
      [rangedWeapons.multiMelta],
      [rangedWeapons.twinLastalon]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'GLADIATOR VALIANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 155 }
  },
  hammerfall_bunker: {
    name: 'HAMMERFALL BUNKER',
    move: 0,
    toughness: 12,
    save: 2,
    wounds: 14,
    leadership: 6,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Fortification',
          description:
            'While an enemy unit is only within Engagement Range of one or more FORTIFICATIONS from your army: - That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. - Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.'
        },
        {
          title: 'Ceramite Cover',
          description: `Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack.`
        },
        {
          title: 'Defensive Array',
          description: `Each time an enemy unit is set up or ends a Normal, Advance or Fall Back move within range of this weapon, if that enemy unit is an eligible target, the bearer can shoot with this weapon at that unit as if it were your Shooting phase. The bearer can shoot up to four times in this way in your opponent's Movement phase.`
        }
      ]
    },
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes and attack, subtract 1 from the Hit roll.'
    },
    rangedWeapons: [
      [rangedWeapons.hammerfallHeavyBolterArray],
      [rangedWeapons.hammerfallHeavyFlamerArray],
      [
        rangedWeapons.hammerfallMissileLauncherSuperfrag,
        rangedWeapons.hammerfallMissileLauncherSuperkrak
      ]
    ],
    keywords: [KEYWORDS.FORTIFICATION, KEYWORDS.IMPERIUM, 'HAMMERFALL BUNKER'],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: {
      modelCount: 1,
      cost: 210
    }
  },
  heavy_intercessor_squad: {
    name: 'HEAVY INTERCESSOR SQUAD',
    move: 5,
    toughness: 6,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Unyielding in the Face of the Foe',
          description: `While this unit is within range of an objective marker you control, each time an attack with a Damage characteristic of 1 is allocated to a model in this unit, add 1 to any armour saving throw made against that attack.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.heavyBoltRifle],
      [rangedWeapons.heavyBolter]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.BATTLELINE,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      'HEAVY INTERCESSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 110 },
    possibleCompositions: [
      { modelCount: 5, cost: 110 },
      { modelCount: 10, cost: 220 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_gravis_armour,
        secondLeader: [characters.apothecary_biologis]
      },
      {
        character: characters.apothecary_biologis,
        secondLeader: [characters.captain_in_gravis_armour]
      }
    ]
  },
  hellblasters: {
    name: 'HELLBLASTER SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'For the Chapter!',
          description: `Each time a model in this unit is destroyed, roll one D6: on a 3+, do not remove it from play. The destroyed model can shoot after the attacking model's unit has finished making its attacks, and is then removed from play. When resolving these attacks, any Hazardous tests taken for that attack are automatically passed.`
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.plasmaIncineratorStandard,
        rangedWeapons.plasmaIncineratorSupercharge
      ],
      [rangedWeapons.boltPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'HELLBLASTER SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 125 },
    possibleCompositions: [
      { modelCount: 5, cost: 125 },
      { modelCount: 10, cost: 250 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_apothecary,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_captain
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_apothecary,
          characters.primaris_captain,
          characters.primaris_ancient
        ]
      },
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      { character: characters.primaris_librarian },
      { character: characters.primaris_chaplain },
      {
        character: characters.primaris_ancient,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      }
    ]
  },
  hunter: {
    name: 'HUNTER',
    move: 9,
    toughness: 11,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Hunter Missile Targeting',
          description: `Each time this model makes an attack with its skyspear missile launcher that targets a MONSTER or VEHICLE unit, that attack scores a hit on an unmodified Hit roll of 2+.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.skyspearMissileLauncher],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [KEYWORDS.VEHICLE, KEYWORDS.SMOKE, KEYWORDS.IMPERIUM, 'HUNTER'],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  impulsor: {
    name: 'IMPULSOR',
    move: 12,
    toughness: 9,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.FIRING_DECK_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Assault Vehicle',
          description: `Units can disembark from this TRANSPORT after it has Advances. Units that do so count as having made a Normal move, and cannot declare a charge that turn.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Orbital Comms Array (Aura)',
        description: `While a friendly ADEPTUS ASTARTES unit is within 6" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.`
      },
      {
        title: 'Shield Dome',
        description: `The bearer has a 5+ invulnerable save.`
      }
    ],
    rangedWeapons: [
      [
        rangedWeapons.bellicatusMissileArrayFrag,
        rangedWeapons.bellicatusMissileArrayIcarus,
        rangedWeapons.bellicatusMissileArrayKrak
      ],
      [rangedWeapons.fragstormGrenadeLauncher],
      [rangedWeapons.ironhailHeavyStubber],
      [rangedWeapons.ironhalSkytalonArray],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.IMPERIUM,
      'IMPULSOR'
    ],
    transportUnits:
      'This model has a transport capacity of 6 TACTICUS or PHOBOS INFANTRY models. It cannot transport JUMP PACK models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 95 }
  },
  inceptor_squad: {
    name: 'INCEPTOR SQUAD',
    move: 10,
    toughness: 6,
    save: 3,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Meteoric Descent',
          description: `When this unit is set up on the battlefield using the Deep Strike ability, it can perform a meteoric descent. If it does, this unit can be set up anywhere on the battlefield that is more than 3" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.assaultBolters],
      [
        rangedWeapons.plasmaExterminatorsStandard,
        rangedWeapons.plasmaExterminatorsSupercharge
      ]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      'INCEPTOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 115 },
    possibleCompositions: [
      { modelCount: 3, cost: 115 },
      { modelCount: 6, cost: 230 }
    ]
  },
  incursor_squad: {
    name: 'INCURSOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.SCOUTS_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Multi-spectrum Array',
          description: `In your Shooting phase, after this unit has shot, select one enemy unit that was hit by one or more attacks made by this unit this phase. Until the end of the phase, each time a friendly ADEPTUS ASTARTES unit makes an attack that targets that enemy unit, add 1 to the Hit roll.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Haywire Mine',
        description: `Once per battle, at the start of any phase, you can select one enemy unit within 3" of the bearer and roll one D6; on a 2+, that enemy unit suffers D3 mortal wounds, or 2D3 mortal wounds instead if it is a VEHICLE unit.`
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.occulusBoltCarbine]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.pairedCombatBlades, fixedAttacks: 3, weaponSkill: 3 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      'INCURSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 90 },
    possibleCompositions: [
      { modelCount: 5, cost: 90 },
      { modelCount: 10, cost: 180 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour,
        secondLeader: [characters.lieutenant_in_phobos_armour]
      },
      {
        character: characters.lieutenant_in_phobos_armour,
        secondLeader: [characters.captain_in_phobos_armour]
      },
      { character: characters.librarian_in_phobos_armour }
    ]
  },
  infernus_squad: {
    name: 'INFERNUS SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Purge the Foe',
          description: `In your Shooting phase, after this unit has shot, you can select one enemy INFANTRY unit hit by one or more of those attacks made with a pyreblaster. That enemy unit must take a Battle-shock test.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.boltPistol], [rangedWeapons.pyreblaster]],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'INFERNUS SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 90 },
    possibleCompositions: [
      { modelCount: 5, cost: 90 },
      { modelCount: 10, cost: 180 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_apothecary,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_captain
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_apothecary,
          characters.primaris_captain,
          characters.primaris_ancient
        ]
      },
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      { character: characters.primaris_librarian },
      { character: characters.primaris_chaplain },
      { character: characters.primaris_company_champion },
      {
        character: characters.primaris_ancient,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      { character: characters.judiciar }
    ]
  },
  infiltrator_squad: {
    name: 'INFILTRATOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.INFILTRATORS],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Omni-scramblers',
          description: `Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12" of this unit.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Helix Gauntlet',
        description: `Models in the bearer's unit have the Feel No Pain 6+ ability.`
      },
      {
        title: 'Infiltrator Comms Array',
        description: `Each time you target the bearer's unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.`
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.marksmanBoltCarbine]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      'INFILTRATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 90 },
    possibleCompositions: [
      { modelCount: 5, cost: 90 },
      { modelCount: 10, cost: 180 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour,
        secondLeader: [characters.lieutenant_in_phobos_armour]
      },
      {
        character: characters.lieutenant_in_phobos_armour,
        secondLeader: [characters.captain_in_phobos_armour]
      },
      { character: characters.librarian_in_phobos_armour }
    ]
  },
  intercessor_squad: {
    name: 'INTERCESSOR SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Objective Secured',
          description: `If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.`
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.astartesGrenadeLauncherFrag,
        rangedWeapons.astartesGrenadeLauncherKrak
      ],
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltRifle],
      [rangedWeapons.handFlamer],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 5, weaponSkill: 3 }],
      [meleeWeapons.closeCombatWeapon],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.BATTLELINE,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'INTERCESSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 95 },
    possibleCompositions: [
      { modelCount: 5, cost: 95 },
      { modelCount: 10, cost: 190 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_apothecary,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_captain
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_apothecary,
          characters.primaris_captain,
          characters.primaris_ancient
        ]
      },
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      { character: characters.primaris_librarian },
      { character: characters.primaris_chaplain },
      { character: characters.primaris_techmarine },
      { character: characters.primaris_company_champion },
      {
        character: characters.primaris_ancient,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      { character: characters.judiciar }
    ]
  },
  invader_atv: {
    ...invader_atv,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Outrider Escort',
          description: `Once per turn, in your opponent's Shooting phase, when a friendly ADEPTUS ASTARTES MOUNTED unit within 6" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyBoltPistol],
      [rangedWeapons.multiMelta],
      [rangedWeapons.onslaughtGatlingCannon],
      [rangedWeapons.twinBoltRifle]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5 }]],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'INVADER ATV'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  invictor_tactical_warsuit: {
    name: 'INVICTOR TACTICAL WARSUIT',
    move: 8,
    toughness: 8,
    save: 3,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.SCOUTS_8],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Combat Support',
          description: `Once per turn, in your opponent's Shooting phase, when a friendly ADEPTUS ASTARTES PHOBOS INFANTRY unit within 6" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy model's unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target the enemy unit (and only if it is an eligible target).`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.fragstormGrenadeLauncher],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.incendiumCannon],
      [rangedWeapons.twinIronhailAutocannon],
      [rangedWeapons.twinIronhailHeavyStubber]
    ],
    meleeWeapons: [[meleeWeapons.invictorFist]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      'INVICTOR TACTICAL WARSUIT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 160 }
  },
  ironclad_dreadnought: {
    name: 'IRONCLAD DREADNOUGHT',
    move: 6,
    toughness: 10,
    save: 2,
    wounds: 8,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Siege-breaker Protocols',
          description: `Each time this model makes a melee attack that targets a VEHICLE or FORTIFICATION unit, add 1 to the Hit roll and add 1 to the Wound roll.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Ironclad Assault Launchers',
        description: 'The bearer has the GRENADES keyword.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.heavyFlamer],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.hurricaneBolter],
      [rangedWeapons.meltagun],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [meleeWeapons.dreadnoughtChainfist],
      [meleeWeapons.dreadnoughtCombatWeapon],
      [meleeWeapons.seismicHammer]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      KEYWORDS.DREADNOUGHT,
      'IRONCLAD DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 150 }
  },
  land_raider: {
    name: 'LAND RAIDER',
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
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Assault Ramp',
          description: `Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.godhammerLascannon],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.multiMelta],
      [rangedWeapons.stormBolter],
      [rangedWeapons.twinHeavyBolter]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'LAND RAIDER'
    ],
    transportUnits:
      'This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURIAN model takes up the space of 3 models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 275 }
  },
  land_raider_crusader: {
    name: 'LAND RAIDER CRUSADER',
    move: 12,
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
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Assault Ramp',
          description: `Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.hurricaneBolter],
      [rangedWeapons.multiMelta],
      [rangedWeapons.stormBolter],
      [rangedWeapons.twinAssaultCannon]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'LAND RAIDER'
    ],
    transportUnits:
      'This model has a transport capacity of 16 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURIAN model takes up the space of 3 models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 255 }
  },
  land_raider_redeemer: {
    name: 'LAND RAIDER REDEEMER',
    move: 12,
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
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Assault Ramp',
          description: `Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.flamestormCannon],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.multiMelta],
      [rangedWeapons.stormBolter],
      [rangedWeapons.twinAssaultCannon]
    ],
    meleeWeapons: [[meleeWeapons.armouredTracks]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.GRENADES,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'LAND RAIDER REDEEMER'
    ],
    transportUnits:
      'This model has a transport capacity of 14 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURIAN model takes up the space of 3 models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 295 }
  },
  land_speeder: {
    name: 'LAND SPEEDER',
    move: 14,
    toughness: 7,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Target Sighted',
          description: `At the start of your Shooting phase, select one enemy unit that is visible to this model. Until the end of the phase, each time a friendly ADEPTUS ASTARTES model makes an attack with a Blast weapon that targets that enemy unit, add 1 to the Hit roll and that attack has the [IGNORES COVER] ability.`
        }
      ]
    },
    rangedWeapons: [
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.multiMelta]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'LAND SPEEDER'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  land_speeder_storm: {
    name: 'LAND SPEEDER STORM',
    move: 14,
    toughness: 7,
    save: 4,
    wounds: 7,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.FIRING_DECK_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Storm Assault',
          description: `Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.cerberusLauncher],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.IMPERIUM,
      'LAND SPEEDER STORM'
    ],
    transportUnits:
      'This model has a transport capacity of 6 models. It can only transport SCOUT SQUAD, SCOUT SNIPER SQUAD and SERGEANT TELION models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 70 }
  },
  land_speeder_tornado: {
    name: 'LAND SPEEDER TORNADO',
    move: 14,
    toughness: 7,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Strafing Enfilade',
          description: `Each time this model ends a Normal move, you can select one enemy unit (excluding MONSTER and VEHICLE units) that it moved over during that move, then roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.assaultCannon],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.heavyFlamer],
      [rangedWeapons.multiMelta]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'LAND SPEEDER TORNADO'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 95 }
  },
  land_speeder_typhoon: {
    name: 'LAND SPEEDER TYPHOON',
    move: 14,
    toughness: 7,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Fire and Redeploy',
          description: `In your Shooting phase, each time this model has shot, if it is not withing Engagement Range of any enemy units, it can make a Normal move of up to D6". If it does, until the end of the turn, this model is not eligible to declare a charge.`
        }
      ]
    },
    rangedWeapons: [
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.multiMelta],
      [
        rangedWeapons.typhoonMissileLauncherFrag,
        rangedWeapons.typhoonMissileLauncherKrak
      ]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'LAND SPEEDER TYPHOON'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  predator_annihilator: {
    name: 'PREDATOR ANNIHILATOR',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Annihilator',
          description: `Each time a ranged attack made by this model is allocated to a MONSTER or VEHICLE model, re-roll a Damage roll of 1.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.predatorTwinLascannon],
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.lascannon],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'PREDATOR ANNIHILATOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 130 }
  },
  predator_destructor: {
    name: 'PREDATOR DESTRUCTOR',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Destructor',
          description: `Each time this model makes a ranged attack that targets an INFANTRY unit, improve the Armour Penetration characteristic of that attack by 1.`
        }
      ]
    },
    rangedWeapons: [
      [
        {
          ...rangedWeapons.heavyBolter,
          ballisticSkill: 3,
          abilities: [WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.lascannon],
      [rangedWeapons.predatorAutocannon],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'PREDATOR DESTRUCTOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 135 }
  },
  outrider_squad: {
    name: 'OUTRIDER SQUAD',
    individualName: 'OUTRIDER',
    secondUnit: {
      ...invader_atv,
      unitComposition: { modelCount: 1, cost: 80 },
      possibleCompositions: [
        { modelCount: 0, cost: 0 },
        { modelCount: 1, cost: 80 }
      ],
      abilities: {}
    },
    move: 12,
    toughness: 5,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Turbo-boost',
          description: `Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in this unit.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyBoltPistol],
      [rangedWeapons.twinBoltRifle],
      [rangedWeapons.multiMelta],
      [rangedWeapons.onslaughtGatlingCannon]
    ],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.astartesChainsword,
          fixedAttacks: 4,
          weaponSkill: 3
        }
      ],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5 }]
    ],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'OUTRIDER SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 115 },
    possibleCompositions: [
      { modelCount: 3, cost: 115 },
      { modelCount: 6, cost: 230 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_on_bike
      },
      { character: characters.chaplain_on_bike }
    ]
  },
  razorback: {
    name: 'RAZORBACK',
    move: 12,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Fire Support',
          description: `In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this TRANSPORT this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.stormBolter],
      [rangedWeapons.twinAssaultCannon],
      [rangedWeapons.twinHeavyBolter],
      [rangedWeapons.twinLascannon]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.IMPERIUM,
      'RAZORBACK'
    ],
    transportUnits:
      'This model has a transport capacity of 6 ADEPTUS ASTARTES INFANTRY models. It cannot transport JUMP PACK, WULFEN, TACTICUS, PHOBOS, GRAVIS, CENTURIAN or TERMINATOR models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  redemptor_dreadnought: {
    name: 'REDEMPTOR DREADNOUGHT',
    move: 8,
    toughness: 10,
    save: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Duty Eternal',
          description: `Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyFlamer],
      [rangedWeapons.heavyOnslaughtGatlingCannon],
      [rangedWeapons.icarusRocketPod],
      [
        rangedWeapons.macroPlasmaIncineratorStandard,
        rangedWeapons.macroPlasmaIncineratorSupercharge
      ],
      [rangedWeapons.onslaughtGatlingCannon],
      [rangedWeapons.twinFragstormGrenadeLauncher],
      [rangedWeapons.twinStormBolter]
    ],
    meleeWeapons: [[meleeWeapons.redemptorFist]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.WALKER,
      KEYWORDS.IMPERIUM,
      'REDEMPTOR DREADNOUGHT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 225 }
  },
  reiver_squad: {
    name: 'REIVER SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.SCOUTS_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Fearsome Assault',
          description: `At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test.`
        },
        {
          title: 'Terror Troops (Aura)',
          description:
            'While an enemy unit is within 6" of this unit, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test.'
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Grapnel Launcher',
        description: `Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore any vertical distance when determining the total distance the bearer can be moved during that move.`
      },
      {
        title: 'Reiver Grav-chute',
        description: `The bearer has the Deep Strike ability.`
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltCarbine],
      [rangedWeapons.specialIssueBoltPistol]
    ],
    meleeWeapons: [
      [meleeWeapons.closeCombatWeapon],
      [
        {
          ...meleeWeapons.combatKnife,
          fixedAttacks: 4,
          weaponSkill: 3,
          abilities: [WEAPON_ABILITIES.PRECISION]
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      'REIVER SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 95 },
    possibleCompositions: [
      { modelCount: 5, cost: 95 },
      { modelCount: 10, cost: 190 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour,
        secondLeader: [
          characters.lieutenant_in_phobos_armour,
          characters.lieutenant_in_reiver_armour
        ]
      },
      {
        character: characters.lieutenant_in_phobos_armour,
        secondLeader: [characters.captain_in_phobos_armour]
      },
      {
        character: characters.lieutenant_in_reiver_armour,
        secondLeader: [characters.captain_in_phobos_armour]
      },
      { character: characters.librarian_in_phobos_armour }
    ]
  },
  relic_terminator_squad: {
    name: 'RELIC TERMINATOR SQUAD',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Fury of the First',
          description: `Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that tagets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Grenade Harness',
        description: 'The bearer has the GRENADES keyword.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.combiBolter],
      [rangedWeapons.heavyFlamer],
      [
        rangedWeapons.plasmaBlasterStandard,
        rangedWeapons.plasmaBlasterSupercharge
      ],
      [rangedWeapons.reaperAutocannon],
      [rangedWeapons.volkiteCharger]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.chainFist, fixedAttacks: 3, weaponSkill: 4 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 5, weaponSkill: 3 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      'RELIC TERMINATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 200 },
    possibleCompositions: [
      { modelCount: 5, cost: 200 },
      { modelCount: 10, cost: 400 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_terminator_armour,
        secondLeader: [characters.ancient_in_terminator_armour]
      },
      { character: characters.librarian_in_terminator_armour },
      { character: characters.chaplain_in_terminator_armour },
      {
        character: characters.ancient_in_terminator_armour,
        secondLeader: [characters.captain_in_terminator_armour]
      }
    ]
  },
  repulsor: {
    name: 'REPULSOR',
    move: 10,
    toughness: 12,
    save: 3,
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
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Emergency Combat Embarkation',
          description: `Once per turn, in your opponent's Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one ADEPTUS ASTARTES unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3" of this TRANSPORT, it can embark within this TRANSPORT. The charging unit can then select new targets for its charge.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyOnslaughtGatlingCannon],
      [rangedWeapons.hunterSlayerMissile],
      [rangedWeapons.lasTalon],
      [rangedWeapons.repulsorDefensiveArray],
      [rangedWeapons.twinHeavyBolter],
      [rangedWeapons.twinLascannon]
    ],
    meleeWeapons: [[meleeWeapons.armouredHull]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'REPULSOR'
    ],
    transportUnits:
      'This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURIAN model takes up the space of 3 models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 195 }
  },
  repulsor_executioner: {
    name: 'REPULSOR EXECUTIONER',
    move: 10,
    toughness: 12,
    save: 3,
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
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Executioner',
          description: `Each time this model makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.heavyLaserDestroyer],
      [rangedWeapons.heavyOnslaughtGatlingCannon],
      [rangedWeapons.icarusRocketPod],
      [rangedWeapons.ironhailHeavyStubber],
      [
        rangedWeapons.macroPlasmaIncineratorStandard,
        rangedWeapons.macroPlasmaIncineratorSupercharge
      ],
      [rangedWeapons.repulsorExecutionerDefensiveArray],
      [rangedWeapons.twinHeavyBolter],
      [{ ...rangedWeapons.twinIcarusIronhailHeavyStubber, armourPiercing: 0 }]
    ],
    meleeWeapons: [[meleeWeapons.armouredHull]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'REPULSOR EXECUTIONER'
    ],
    transportUnits:
      'This model has a transport capacity of 6 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURIAN model takes up the space of 3 models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 230 }
  },
  rhino: {
    name: 'RHINO',
    move: 12,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.FIRING_DECK_2],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Self Repair',
          description: `At the end of your Command phase, this model regains 1 lost wound.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.TRANSPORT,
      KEYWORDS.DEDICATED_TRANSPORT,
      KEYWORDS.IMPERIUM,
      'RHINO'
    ],
    transportUnits:
      'This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY models. It cannot transport JUMP PACK, WULFEN, TACTICUS, PHOBOS, GRAVIS, CENTURIAN or TERMINATOR models.',
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 85 }
  },
  scout_bike_squad: {
    name: 'SCOUT BIKE SQUAD',
    move: 12,
    toughness: 5,
    save: 4,
    wounds: 3,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      core: [ABILITIES.SCOUTS_9],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Outflank',
          description: `When this unit arrives from Strategic Reerves, it can be set up within your opponent's deployment zone (all other restrictions still apply).`
        }
      ]
    },
    rangedWeapons: [
      [
        rangedWeapons.astartesGrenadeLauncherFrag,
        rangedWeapons.astartesGrenadeLauncherKrak
      ],
      [rangedWeapons.astartesShotgun],
      [rangedWeapons.boltPistol],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [{ ...rangedWeapons.twinBoltgun, ballisticSkill: 3 }]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.combatKnife, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [
        {
          ...meleeWeapons.powerWeapon,
          fixedAttacks: 3,
          weaponSkill: 3
        }
      ],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'SCOUT BIKE SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 75 },
    possibleCompositions: [
      { modelCount: 3, cost: 75 },
      { modelCount: 6, cost: 150 }
    ]
  },
  scout_sniper_squad: {
    name: 'SCOUT SNIPER SQUAD',
    move: 6,
    toughness: 4,
    save: 4,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.INFILTRATORS, ABILITIES.STEALTH],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Concealed Positions',
          description: `This unit can only be selected as the target of a ranged attack if the attacking model is within 12".`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.missileLauncherFrag, rangedWeapons.missileLauncherKrak],
      [rangedWeapons.scoutSniperRifle]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 2 }]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'SCOUT SNIPER SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 75 },
    possibleCompositions: [
      { modelCount: 5, cost: 75 },
      { modelCount: 10, cost: 150 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour
      }
    ]
  },
  scout_squad: {
    name: 'SCOUT SQUAD',
    move: 6,
    toughness: 4,
    save: 4,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.INFILTRATORS, ABILITIES.SCOUTS_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Guerrilla Tactics',
          description: `At the end of your opponent's turn, if this unit is more than 6" away from all enemy models, you can remove this unit from the battlefield and place it into Strategic Reserves.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.astartesShotgun],
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [
        {
          ...rangedWeapons.heavyBolter,
          abilities: [WEAPON_ABILITIES.HEAVY, WEAPON_ABILITIES.SUSTAINED_HITS_1]
        }
      ],
      [rangedWeapons.missileLauncherFrag, rangedWeapons.missileLauncherKrak]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 2 }],
      [{ ...meleeWeapons.combatKnife, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [
        {
          ...meleeWeapons.powerWeapon,
          fixedAttacks: 3,
          weaponSkill: 3,
          strength: 4
        }
      ],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'SCOUT SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 70 },
    possibleCompositions: [
      { modelCount: 5, cost: 70 },
      { modelCount: 10, cost: 140 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_phobos_armour
      }
    ]
  },
  stalker: {
    name: 'STALKER',
    move: 9,
    toughness: 11,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Skyfire Protocols',
          description: `Each time you target this model with the Overwatch Stratagem just after an enemy unit that can FLY starts or ends a Normal, Advance or Fall Back move, when resolving that Stratagem, in addition to shooting that enemy unit, you can select up to three additional enemy units within 24" of this model that can FLY; this model can also shoot at each of those units with its Icarus stormcannons (provided each one is an eligible target), but when doing so, an unmodified Hit roll of 6 is required to score a hit.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.icarusStormcannon],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [KEYWORDS.VEHICLE, KEYWORDS.SMOKE, KEYWORDS.IMPERIUM, 'STALKER'],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 140 }
  },
  sternguard_veteran_squad: {
    name: 'STERNGUARD VETERAN SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Bolter Drill',
          description: `Once per battle, in your Shooting phase, after this unit has shot, if one or more enemy units were destroyed as a result of those attacks, this unit can shoot again.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.combiWeapon],
      [rangedWeapons.sternguardBoltPistol],
      [rangedWeapons.sternguardBoltRifle],
      [rangedWeapons.sternguardHeavyBolter]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'STERNGUARD VETERAN SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 105 },
    possibleCompositions: [
      { modelCount: 5, cost: 105 },
      { modelCount: 10, cost: 210 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_captain,
        secondLeader: [
          characters.primaris_lieutenant,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_apothecary,
          characters.primaris_ancient
        ]
      },
      { character: characters.primaris_librarian },
      { character: characters.primaris_chaplain },
      { character: characters.primaris_company_champion },
      {
        character: characters.primaris_apothecary,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      {
        character: characters.primaris_ancient,
        secondLeader: [
          characters.primaris_captain,
          characters.primaris_lieutenant
        ]
      },
      { character: characters.judiciar }
    ]
  },
  storm_speeder_hailstrike: {
    name: 'STORM SPEEDER HAILSTRIKE',
    move: 14,
    toughness: 9,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Hailstrike',
          description: `Each time this model has shot, select one enemy unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, each time a friendly ADEPTUS ASTARTES unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.fragstormGrenadeLauncher],
      [rangedWeapons.onslaughtGatlingCannon],
      [rangedWeapons.twinIronhailHeavyStubber]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'STORM SPEEDER HAILSTRIKE'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 130 }
  },
  storm_speeder_hammerstrike: {
    name: 'STORM SPEEDER HAMMERSTRIKE',
    move: 14,
    toughness: 9,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Hammerstrike',
          description: `Each time this model has shot, select one enemy unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hammerstrikeMissileLauncher],
      [rangedWeapons.krakstormGrenadeLauncher],
      [rangedWeapons.meltaDestroyer]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'STORM SPEEDER HAMMERSTRIKE'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 160 }
  },
  storm_speeder_thunderstrike: {
    name: 'STORM SPEEDER THUNDERSTRIKE',
    move: 14,
    toughness: 9,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Thunderstrike',
          description: `Each time this model has shot, select one enemy MONSTER or VEHICLE unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, each time a friendly ADEPTUS ASTARTES unit makes a ranged attack that targets that enemy unit, add 1 to the Wound roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.stormfuryMissiles],
      [rangedWeapons.thunderstrikeLasTalon],
      [rangedWeapons.twinIcarusRocketPod]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'STORM SPEEDER THUNDERSTRIKE'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 160 }
  },
  stormhawk_interceptor: {
    name: 'STORMHAWK INTERCEPTOR',
    move: 20,
    minimumMovement: true,
    toughness: 9,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Interceptor',
          description: `Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [
        {
          ...rangedWeapons.icarusStormcannon,
          abilities: [WEAPON_ABILITIES.ANTI_FLY_2, WEAPON_ABILITIES.TWIN_LINKED]
        }
      ],
      [rangedWeapons.lasTalon],
      [
        {
          ...rangedWeapons.skyhammerMissileLauncher,
          abilities: [WEAPON_ABILITIES.ANTI_FLY_2]
        }
      ],
      [rangedWeapons.twinAssaultCannon],
      [rangedWeapons.twinHeavyBolter],
      [
        rangedWeapons.typhoonMissileLauncherFrag,
        rangedWeapons.typhoonMissileLauncherKrak
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.AIRCRAFT,
      KEYWORDS.IMPERIUM,
      KEYWORDS.SMOKE,
      'STORMHAWK INTERCEPTOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 165 }
  },
  stormraven_gunship: {
    name: 'STORMRAVEN GUNSHIP',
    move: 20,
    minimumMovement: true,
    toughness: 10,
    save: 3,
    wounds: 14,
    leadership: 6,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Armoured Resilience',
          description: `Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack.`
        }
      ]
    },
    damaged: {
      range: '1-5',
      description:
        'While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    rangedWeapons: [
      [rangedWeapons.hurricaneBolter],
      [rangedWeapons.stormstrikeMissileLauncher],
      [rangedWeapons.twinAssaultCannon],
      [rangedWeapons.twinHeavyBolter],
      [
        rangedWeapons.twinHeavyPlasmaCannonStandard,
        rangedWeapons.twinHeavyPlasmaCannonSupercharge
      ],
      [rangedWeapons.twinLascannon],
      [rangedWeapons.twinMultiMelta],
      [
        rangedWeapons.typhoonMissileLauncherFrag,
        rangedWeapons.typhoonMissileLauncherKrak
      ]
    ],
    meleeWeapons: [[meleeWeapons.armouredHull]],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.AIRCRAFT,
      KEYWORDS.TRANSPORT,
      KEYWORDS.IMPERIUM,
      'STORMRAVEN GUNSHIP'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 255 },
    transportUnits:
      'This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY models and 1 DREADNOUGHT model. Each JUMP PACL, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION modoel takes up the space of 3 models.'
  },
  stormtalon_gunship: {
    name: 'STORMTALON GUNSHIP',
    move: 20,
    minimumMovement: true,
    toughness: 8,
    save: 3,
    wounds: 10,
    leadership: 6,
    objectiveControl: 0,
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Strafing Run',
          description: `Each time this model makes a ranged attack that targets a unit that cannot FLY, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.skyhammerMissileLauncher],
      [rangedWeapons.twinAssaultCannon],
      [rangedWeapons.twinHeavyBolter],
      [rangedWeapons.twinLascannon],
      [
        rangedWeapons.typhoonMissileLauncherFrag,
        rangedWeapons.typhoonMissileLauncherKrak
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredHull, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.FLY,
      KEYWORDS.AIRCRAFT,
      KEYWORDS.IMPERIUM,
      'STORMTALON GUNSHIP'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 175 }
  },
  suppressor_squad: {
    name: 'SUPPRESSOR SQUAD',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Suppression Fire',
          description: `In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks made with an accelerator autocannon. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.acceleratorAutocannon],
      [rangedWeapons.boltPistol]
    ],
    meleeWeapons: [[meleeWeapons.closeCombatWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'SUPPRESSOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 3, cost: 95 }
  },
  tactical_squad: {
    name: 'TACTICAL SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Tactical Flexibility',
          description: `This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.flamer],
      [rangedWeapons.gravGun],
      [rangedWeapons.meltagun],
      [rangedWeapons.plasmaGunStandard, rangedWeapons.plasmaGunSupercharge]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 4, weaponSkill: 3 }],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 2, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 2, weaponSkill: 4 }],
      [
        {
          ...meleeWeapons.twinLightningClaws,
          fixedAttacks: 4,
          weaponSkill: 3,
          strength: 4
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.BATTLELINE,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'TACTICAL SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 10, cost: 175 },
    possibleLeaders: [
      {
        character: characters.captain,
        secondLeader: [characters.lieutenant]
      },
      { character: characters.lieutenant, secondLeader: [characters.captain] },
      { character: characters.librarian },
      { character: characters.chaplain },
      { character: characters.techmarine }
    ]
  },
  terminator_assault_squad: {
    name: 'TERMINATOR ASSAULT SQUAD',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Teleport Homer',
          description: `At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent's deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3" horizontally of that token and not within 9" horizontally of any enemy models. That token is then removed.`
        },
        {
          title: 'Terminatus Assault',
          description: `Each time this unit ends a Charge move, each enemy unit within Engagement Range of this unit must take a Battle-shock test.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a Wounds characteristic of 4.'
      }
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }],
      [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 5, weaponSkill: 3 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      'TERMINATOR ASSAULT SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 200 },
    possibleCompositions: [
      { modelCount: 5, cost: 200 },
      { modelCount: 10, cost: 400 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_terminator_armour,
        secondLeader: [characters.ancient_in_terminator_armour]
      },
      { character: characters.librarian_in_terminator_armour },
      { character: characters.chaplain_in_terminator_armour },
      {
        character: characters.ancient_in_terminator_armour,
        secondLeader: [characters.captain_in_terminator_armour]
      }
    ]
  },
  terminator_squad: {
    name: 'TERMINATOR SQUAD',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Teleport Homer',
          description: `At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent's deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3" horizontally of that token and not within 9" horizontally of any enemy models. That token is then removed.`
        },
        {
          title: 'Fury of the First',
          description: `Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that tagets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.assaultCannon],
      [
        rangedWeapons.cycloneMissileLauncherFrag,
        rangedWeapons.cycloneMissileLauncherKrak
      ],
      [rangedWeapons.heavyFlamer],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.chainFist, fixedAttacks: 3, weaponSkill: 4 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
      [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      'TERMINATOR SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 205 },
    possibleCompositions: [
      { modelCount: 5, cost: 205 },
      { modelCount: 10, cost: 410 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_in_terminator_armour,
        secondLeader: [characters.ancient_in_terminator_armour]
      },
      { character: characters.librarian_in_terminator_armour },
      { character: characters.chaplain_in_terminator_armour },
      {
        character: characters.ancient_in_terminator_armour,
        secondLeader: [characters.captain_in_terminator_armour]
      }
    ]
  },
  thunderfire_cannon: {
    name: 'THUNDERFIRE CANNON',
    move: 3,
    toughness: 6,
    save: 2,
    wounds: 6,
    leadership: 6,
    objectiveControl: 2,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Tremor Shells',
          description: `In your Shooting phase, after this unit has shot, if an enemy INFANTRY unit was hit by one or more attacks made by this unit's thunderfire cannon this phase, until the end of your opponent's next turn, that enemy unit is shaken. While a unit is shaken, subtract 2 from that unit's Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit.`
        },
        {
          title: 'Crewed Artillery',
          description: `If one model in this unit is destroyed, the remaining model in this unit is also destroyed.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [rangedWeapons.flamer],
      [rangedWeapons.thunderfireCannon]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 3 }],
      [meleeWeapons.gunnersServoarms],
      [{ ...meleeWeapons.plasmaCutter, fixedDamage: 1 }]
    ],
    keywords: [
      KEYWORDS.ARTILLERY,
      KEYWORDS.VEHICLE,
      KEYWORDS.IMPERIUM,
      'THUNDERFIRE CANNON'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 2, cost: 90 }
  },
  vanguard_veteran_squad: {
    name: 'VANGUARD VETERAN SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.SCOUTS_6],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Vanguard Assault',
          description: `Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.gravPistol],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [[meleeWeapons.heirloomWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'VANGUARD VETERAN SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 120 },
    possibleCompositions: [
      { modelCount: 5, cost: 120 },
      { modelCount: 10, cost: 240 }
    ],
    possibleLeaders: [
      {
        character: characters.captain,
        secondLeader: [characters.lieutenant]
      },
      { character: characters.lieutenant, secondLeader: [characters.captain] },
      { character: characters.librarian },
      { character: characters.chaplain }
    ]
  },
  vanguard_veteran_squad_with_jump_packs: {
    name: 'VANGUARD VETERAN SQUAD WITH JUMP PACKS',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      core: [ABILITIES.DEEP_STRIKE],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Vanguard Assault',
          description: `Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.gravPistol],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ]
    ],
    meleeWeapons: [[meleeWeapons.heirloomWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      'VANGUARD VETERAN SQUAD WITH JUMP PACKS'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 130 },
    possibleCompositions: [
      { modelCount: 5, cost: 130 },
      { modelCount: 10, cost: 260 }
    ],
    possibleLeaders: [
      {
        character: characters.captain_with_jump_pack
      },
      { character: characters.librarian_with_jump_pack },
      { character: characters.chaplain_with_jump_pack }
    ]
  },
  vindicator: {
    name: 'VINDICATOR',
    move: 9,
    toughness: 11,
    save: 2,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Siege Shield',
          description: `When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.demolisherCannon],
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'VINDICATOR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 205 }
  },
  whirlwind: {
    name: 'WHIRLWIND',
    move: 10,
    toughness: 10,
    save: 3,
    wounds: 11,
    leadership: 6,
    objectiveControl: 3,
    damaged: {
      range: '1-4',
      description:
        'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
    },
    abilities: {
      core: [ABILITIES.DEADLY_DEMISE_D3],
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'Pinning Bombardment',
          description: `In your Shooting phase, after this model has shot, if one or more of those attacks made with its Whirlwind vengeance launcher scored a hit against an enemy INFANTRY unit, that unit must take a Battle-shock test.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.hunterkillerMissile],
      [rangedWeapons.stormBolter],
      [rangedWeapons.whirlwindVengeanceLauncher]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.armouredTracks, fixedAttacks: 3, strength: 6 }]
    ],
    keywords: [
      KEYWORDS.VEHICLE,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      'WHIRLWIND'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 150 }
  }
};
