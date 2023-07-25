import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

troops.deathwing_command_squad = {
  name: 'DEATHWING COMMAND SQUAD',
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
        title: 'Narthecium',
        description: `While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to this unit.`
      },
      {
        title: 'Astartes Banner',
        description: `While this unit contains an ancient, add 1 to the Objective Control characteristic of its models.`
      },
      {
        title: 'Honour or Death',
        description: `While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'Storm Shield',
      description: 'The bearer has a Wounds characteristic of 4.'
    },
    {
      title: 'Watcher in the Dark',
      description:
        'Once per battle, at any time, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds.'
    }
  ],
  rangedWeapons: [
    [rangedWeapons.assaultCannon],
    [
      rangedWeapons.cycloneMissileLauncherFrag,
      rangedWeapons.cycloneMissileLauncherKrak
    ],
    [rangedWeapons.heavyFlamer],
    [
      { ...rangedWeapons.plasmaCannonStandard, ballisticSkill: 3 },
      { ...rangedWeapons.plasmaCannonSupercharge, ballisticSkill: 3 }
    ],
    [rangedWeapons.stormBolter]
  ],
  meleeWeapons: [
    [{ ...meleeWeapons.chainFist, fixedAttacks: 3, weaponSkill: 4 }],
    [meleeWeapons.halberdOfCaliban],
    [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
    [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
    [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }],
    [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 5, weaponSkill: 3 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TERMINATOR,
    `DEATHWING COMMAND SQUAD`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 5, cost: 215 },
  possibleCompositions: [
    { modelCount: 5, cost: 215 },
    { modelCount: 10, cost: 430 }
  ],
  possibleLeaders: [
    {
      character: characters.captain_in_terminator_armour,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    { character: characters.librarian_in_terminator_armour },
    { character: characters.chaplain_in_terminator_armour },
    {
      character: characters.ancient_in_terminator_armour,
      secondLeader: [
        characters.captain_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.belial,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.deathwing_strikemaster,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.captain_in_terminator_armour,
        characters.belial
      ]
    }
  ]
};

troops.deathwing_knights = {
  name: 'DEATHWING KNIGHTS',
  move: 5,
  toughness: 5,
  save: 2,
  wounds: 4,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.DEEP_STRIKE],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Inner Circle',
        description: `Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'Watcher in the Dark',
      description:
        'Once per battle, at any time, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds.'
    }
  ],
  meleeWeapons: [
    [meleeWeapons.flailOfTheUnforgiven],
    [{ ...meleeWeapons.maceOfAbsolution, fixedAttacks: 4 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TERMINATOR,
    `DEATHWING KNIGHTS`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 5, cost: 205 },
  possibleCompositions: [
    { modelCount: 5, cost: 235 },
    { modelCount: 10, cost: 470 }
  ],
  possibleLeaders: [
    {
      character: characters.captain_in_terminator_armour,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    { character: characters.librarian_in_terminator_armour },
    { character: characters.chaplain_in_terminator_armour },
    {
      character: characters.ancient_in_terminator_armour,
      secondLeader: [
        characters.captain_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.belial,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.deathwing_strikemaster,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.captain_in_terminator_armour,
        characters.belial
      ]
    }
  ]
};

troops.deathwing_terminator_squad = {
  name: 'DEATHWING TERMINATOR SQUAD',
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
        title: 'Deathwing',
        description: `Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristics and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected at the start of your Command phase for the Oath of Moment ability, add 1 to the Hit roll.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'Storm Shield',
      description: 'The bearer has a Wounds characteristic of 4.'
    },
    {
      title: 'Watcher in the Dark',
      description:
        'Once per battle, at any time, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds.'
    }
  ],
  rangedWeapons: [
    [rangedWeapons.assaultCannon],
    [
      rangedWeapons.cycloneMissileLauncherFrag,
      rangedWeapons.cycloneMissileLauncherKrak
    ],
    [rangedWeapons.heavyFlamer],
    [
      { ...rangedWeapons.plasmaCannonStandard, ballisticSkill: 3 },
      { ...rangedWeapons.plasmaCannonSupercharge, ballisticSkill: 3 }
    ],
    [rangedWeapons.stormBolter]
  ],
  meleeWeapons: [
    [{ ...meleeWeapons.chainFist, fixedAttacks: 3, weaponSkill: 4 }],
    [{ ...meleeWeapons.powerFist, fixedAttacks: 3, weaponSkill: 3 }],
    [{ ...meleeWeapons.powerWeapon, fixedAttacks: 4, weaponSkill: 3 }],
    [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }],
    [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 5, weaponSkill: 3 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TERMINATOR,
    `DEATHWING TERMINATOR SQUAD`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 5, cost: 205 },
  possibleCompositions: [
    { modelCount: 5, cost: 205 },
    { modelCount: 10, cost: 410 }
  ],
  possibleLeaders: [
    {
      character: characters.captain_in_terminator_armour,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    { character: characters.librarian_in_terminator_armour },
    { character: characters.chaplain_in_terminator_armour },
    {
      character: characters.ancient_in_terminator_armour,
      secondLeader: [
        characters.captain_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.belial,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.deathwing_strikemaster
      ]
    },
    {
      character: characters.deathwing_strikemaster,
      secondLeader: [
        characters.ancient_in_terminator_armour,
        characters.captain_in_terminator_armour,
        characters.belial
      ]
    }
  ]
};

troops.nephilim_jetfighter = {
  name: 'NEPHILIM JETFIGHTER',
  move: 20,
  minimumMovement: true,
  toughness: 8,
  save: 3,
  wounds: 11,
  leadership: 6,
  objectiveControl: 0,
  invulnerable: 5,
  abilities: {
    core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Lightning-fast Manoeuvres',
        description: `Each time a ranged attack targets this model, subtract 1 from the Hit roll. If that attack was made by a model that can Fly, subtract 1 from the Wound roll as well.`
      }
    ]
  },
  rangedWeapons: [
    [rangedWeapons.avengerMegaBolter],
    [rangedWeapons.blackswordMissiles],
    [rangedWeapons.nephilimLascannons],
    [rangedWeapons.twinHeavyBolter]
  ],
  meleeWeapons: [
    [
      {
        ...meleeWeapons.armouredHull,
        fixedAttacks: 3,
        strength: 6
      }
    ]
  ],
  keywords: [
    KEYWORDS.VEHICLE,
    KEYWORDS.AIRCRAFT,
    KEYWORDS.FLY,
    KEYWORDS.IMPERIUM,
    `NEPHILIM JETFIGHTER`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 195 },
  damaged: {
    range: '1-3',
    description:
      'While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
  }
};

troops.ravenwing_black_knights = {
  name: 'RAVENWING BLACK KNIGHTS',
  move: 12,
  toughness: 5,
  save: 3,
  wounds: 3,
  leadership: 6,
  objectiveControl: 2,
  invulnerable: 5,
  abilities: {
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Knights of Caliban',
        description: `Each time this unit is selected to fight, if it made a Charge move this turn, until the end of the phase, melee weapons equipped by models in this unit have the [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+] abilities.`
      }
    ]
  },
  rangedWeapons: [
    [
      rangedWeapons.astartesGrenadeLauncherFrag,
      rangedWeapons.astartesGrenadeLauncherKrak
    ],
    [rangedWeapons.boltPistol],
    [rangedWeapons.plasmaTalonStandard, rangedWeapons.plasmaTalonSupercharge]
  ],
  meleeWeapons: [
    [meleeWeapons.blackKnightCombatWeapon],
    [
      {
        ...meleeWeapons.masterCraftedPowerWeapon,
        fixedAttacks: 6
      }
    ]
  ],
  keywords: [
    KEYWORDS.MOUNTED,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    `RAVENWING BLACK KNIGHTS`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 3, cost: 115 },
  possibleCompositions: [
    { modelCount: 3, cost: 115 },
    { modelCount: 6, cost: 230 }
  ],
  possibleLeaders: [
    ...(troops.outrider_squad.possibleLeaders
      ? troops.outrider_squad.possibleLeaders
      : []),
    { character: characters.sammael }
  ]
};

troops.ravenwing_command_squad = {
  name: 'RAVENWING COMMAND SQUAD',
  move: 12,
  toughness: 5,
  save: 3,
  wounds: 3,
  leadership: 6,
  objectiveControl: 2,
  invulnerable: 5,
  abilities: {
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Narthecium',
        description: `While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to this unit.`
      },
      {
        title: 'Astartes Banner',
        description: `While this unit contains an ancient, add 1 to the Objective Control characteristic of its models.`
      },
      {
        title: 'Honour or Death',
        description: `While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP.`
      }
    ]
  },
  rangedWeapons: [
    [
      rangedWeapons.astartesGrenadeLauncherFrag,
      rangedWeapons.astartesGrenadeLauncherKrak
    ],
    [rangedWeapons.boltPistol],
    [rangedWeapons.plasmaTalonStandard, rangedWeapons.plasmaTalonSupercharge]
  ],
  meleeWeapons: [
    [meleeWeapons.blackKnightCombatWeapon],
    [
      {
        ...meleeWeapons.masterCraftedPowerWeapon,
        fixedAttacks: 6
      }
    ]
  ],
  keywords: [
    KEYWORDS.MOUNTED,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    `RAVENWING COMMAND SQUAD`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 3, cost: 145 },
  possibleCompositions: [
    { modelCount: 3, cost: 145 },
    { modelCount: 6, cost: 290 }
  ],
  possibleLeaders: [
    ...(troops.outrider_squad.possibleLeaders
      ? troops.outrider_squad.possibleLeaders
      : []),
    { character: characters.sammael }
  ]
};

troops.ravenwing_darkshroud = {
  name: 'RAVENWING DARKSHROUD',
  move: 14,
  toughness: 8,
  save: 3,
  wounds: 10,
  leadership: 6,
  objectiveControl: 3,
  invulnerable: 5,
  abilities: {
    core: [ABILITIES.DEADLY_DEMISE_D3],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Icon of Old Caliban (Aura)',
        description: `While a friendly Adeptus Astartes unit is within 6" of this model, models in that unit have the Stealth ability and each time a ranged attack targets that unit, that unit has the Benefit of Cover against that attack.`
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
    ]
  ],
  meleeWeapons: [
    [
      {
        ...meleeWeapons.closeCombatWeapon,
        fixedAttacks: 4
      }
    ]
  ],
  keywords: [
    KEYWORDS.VEHICLE,
    KEYWORDS.FLY,
    KEYWORDS.IMPERIUM,
    `RAVENWING DARKSHROUD`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 125 }
};

troops.ravenwing_darktalon = {
  name: 'RAVENWING DARKTALON',
  move: 20,
  minimumMovement: true,
  toughness: 8,
  save: 3,
  wounds: 11,
  leadership: 6,
  objectiveControl: 0,
  invulnerable: 5,
  abilities: {
    core: [ABILITIES.DEADLY_DEMISE_D3, ABILITIES.HOVER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Stasis Bomb',
        description: `Once per battle, after this model ends a Normal move, you can select one enemy unit (excluding Aircraft) it moved over this phase. That unit suffers D3 mortal wounds and you must roll one D6: on a 1-3, that unit cannot Advance or Fall Back in your opponent’s next Movement phase; on a 4-6, that unit must Remain Stationary in your opponent’s next Movement phase.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.hurricaneBolter], [rangedWeapons.riftCannon]],
  meleeWeapons: [
    [
      {
        ...meleeWeapons.armouredHull,
        fixedAttacks: 3,
        strength: 6
      }
    ]
  ],
  keywords: [
    KEYWORDS.VEHICLE,
    KEYWORDS.AIRCRAFT,
    KEYWORDS.FLY,
    KEYWORDS.IMPERIUM,
    `RAVENWING DARK TALON`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 210 },
  damaged: {
    range: '1-3',
    description:
      'While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.'
  }
};

troops.ravenwing_land_speeder_vengeance = {
  name: 'RAVENWING LAND SPEEDER VENGEANCE',
  move: 14,
  toughness: 8,
  save: 3,
  wounds: 10,
  leadership: 6,
  objectiveControl: 3,
  invulnerable: 5,
  abilities: {
    core: [ABILITIES.DEADLY_DEMISE_D3],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Storm of Vengeance',
        description: `Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes unit within 6" of this model is destroyed, this model can use this ability (it cannot use this ability when it is itself destroyed). If it does, after the attacking unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).`
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
    [
      rangedWeapons.plasmaStormBatteryStandard,
      rangedWeapons.plasmaStormBatterySupercharge
    ]
  ],
  meleeWeapons: [
    [
      {
        ...meleeWeapons.closeCombatWeapon,
        fixedAttacks: 4
      }
    ]
  ],
  keywords: [
    KEYWORDS.VEHICLE,
    KEYWORDS.FLY,
    KEYWORDS.IMPERIUM,
    `RAVENWING LAND SPEEDER VENGEANCE`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 160 }
};

/////////////////////////////

troops.assault_intercessor_squad.possibleLeaders = [
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
      characters.primaris_ancient,
      characters.azrael,
      characters.lazarus
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
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  },
  {
    character: characters.lazarus,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  }
];

troops.assault_squad.possibleLeaders = [
  ...(troops.assault_squad.possibleLeaders
    ? troops.assault_squad.possibleLeaders
    : []),
  { character: characters.ezekiel },
  { character: characters.asmodai }
];

troops.bike_squad.possibleLeaders = [
  ...(troops.bike_squad.possibleLeaders
    ? troops.bike_squad.possibleLeaders
    : []),
  { character: characters.sammael }
];

troops.bladeguard_veteran_squad.possibleLeaders = [
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
      characters.bladeguard_ancient,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.primaris_company_champion },
  { character: characters.primaris_chaplain },
  {
    character: characters.bladeguard_ancient,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.bladeguard_ancient
    ]
  },
  {
    character: characters.lazarus,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.bladeguard_ancient
    ]
  }
];

troops.command_squad.possibleLeaders = [
  ...(troops.command_squad.possibleLeaders
    ? troops.command_squad.possibleLeaders
    : []),
  { character: characters.ezekiel },
  { character: characters.asmodai }
];

troops.hellblasters.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.azrael
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.azrael
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
      characters.primaris_lieutenant,
      characters.azrael
    ]
  },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  }
];

troops.infernus_squad.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.azrael,
      characters.lazarus
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.azrael,
      characters.lazarus
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
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  },
  {
    character: characters.lazarus,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  }
];

troops.intercessor_squad.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.azrael,
      characters.lazarus
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.azrael,
      characters.lazarus
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
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  },
  {
    character: characters.lazarus,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  }
];

troops.outrider_squad.possibleLeaders = [
  ...(troops.outrider_squad.possibleLeaders
    ? troops.outrider_squad.possibleLeaders
    : []),
  { character: characters.sammael }
];

troops.relic_terminator_squad.possibleLeaders = [
  {
    character: characters.captain_in_terminator_armour,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  { character: characters.librarian_in_terminator_armour },
  { character: characters.chaplain_in_terminator_armour },
  {
    character: characters.ancient_in_terminator_armour,
    secondLeader: [
      characters.captain_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.belial,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.deathwing_strikemaster,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.captain_in_terminator_armour,
      characters.belial
    ]
  }
];

troops.sternguard_veteran_squad.possibleLeaders = [
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
      characters.primaris_ancient,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.primaris_librarian },
  { character: characters.primaris_chaplain },
  { character: characters.primaris_company_champion },
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael,
      characters.lazarus
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  },
  {
    character: characters.lazarus,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  }
];

troops.tactical_squad.possibleLeaders = [
  ...(troops.tactical_squad.possibleLeaders
    ? troops.tactical_squad.possibleLeaders
    : []),
  { character: characters.ezekiel },
  { character: characters.asmodai }
];

troops.terminator_squad.possibleLeaders = [
  {
    character: characters.captain_in_terminator_armour,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  { character: characters.librarian_in_terminator_armour },
  { character: characters.chaplain_in_terminator_armour },
  {
    character: characters.ancient_in_terminator_armour,
    secondLeader: [
      characters.captain_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.belial,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.deathwing_strikemaster,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.captain_in_terminator_armour,
      characters.belial
    ]
  }
];

troops.terminator_assault_squad.possibleLeaders = [
  {
    character: characters.captain_in_terminator_armour,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  { character: characters.librarian_in_terminator_armour },
  { character: characters.chaplain_in_terminator_armour },
  {
    character: characters.ancient_in_terminator_armour,
    secondLeader: [
      characters.captain_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.belial,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.deathwing_strikemaster
    ]
  },
  {
    character: characters.deathwing_strikemaster,
    secondLeader: [
      characters.ancient_in_terminator_armour,
      characters.captain_in_terminator_armour,
      characters.belial
    ]
  }
];

troops.vanguard_veteran_squad.possibleLeaders = [
  ...(troops.vanguard_veteran_squad.possibleLeaders
    ? troops.vanguard_veteran_squad.possibleLeaders
    : []),
  { character: characters.ezekiel },
  { character: characters.asmodai }
];

export { troops };
