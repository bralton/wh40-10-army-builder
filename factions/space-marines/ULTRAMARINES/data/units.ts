import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

troops.tyrannic_war_veterans = {
  name: 'TYRANNIC WAR VETERANS',
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
        title: 'Tyrannic War Veterans',
        description: `Weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability when targeting TYRANIDS units.`
      }
    ]
  },
  rangedWeapons: [
    [
      {
        ...rangedWeapons.boltPistol,
        abilities: [
          WEAPON_ABILITIES.ANTI_TYRANIDS_4,
          'TYRANIDS DEVASTATING WOUNDS'
        ]
      }
    ],
    [
      {
        ...rangedWeapons.boltgun,
        abilities: [
          WEAPON_ABILITIES.ANTI_TYRANIDS_4,
          'TYRANIDS DEVASTATING WOUNDS'
        ]
      }
    ]
  ],
  meleeWeapons: [
    [
      {
        ...meleeWeapons.closeCombatWeapon,
        abilities: [
          WEAPON_ABILITIES.ANTI_TYRANIDS_4,
          'TYRANIDS DEVASTATING WOUNDS'
        ]
      }
    ]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.GRENADS,
    KEYWORDS.IMPERIUM,
    'TYRANNIC WAR VETERANS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 5, cost: 85 },
  possibleLeaders: [{ character: characters.chaplain_cassius }]
};

troops.aggressor_squad.possibleLeaders = [
  {
    character: characters.captain_in_gravis_armour,
    secondLeader: [characters.apothecary_biologis]
  },
  {
    character: characters.apothecary_biologis,
    secondLeader: [
      characters.captain_in_gravis_armour,
      characters.marneus_calgar
    ]
  },
  {
    character: characters.marneus_calgar,
    secondLeader: [characters.apothecary_biologis]
  }
];

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
      characters.marneus_calgar,
      characters.uriel_ventris
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
      characters.marneus_calgar,
      characters.uriel_ventris
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.marneus_calgar,
      characters.uriel_ventris
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.marneus_calgar,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_apothecary,
      characters.primaris_lieutenant
    ]
  },
  { character: characters.chief_librarian_tigurius },
  {
    character: characters.uriel_ventris,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_apothecary,
      characters.primaris_lieutenant
    ]
  }
];

troops.assault_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.captain_sicarius]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.chaplain_cassius },
  {
    character: characters.captain_sicarius,
    secondLeader: [characters.lieutenant]
  }
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
      characters.marneus_calgar
    ]
  },
  { character: characters.primaris_company_champion },
  { character: characters.primaris_chaplain },
  {
    character: characters.bladeguard_ancient,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.marneus_calgar
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.marneus_calgar,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.bladeguard_ancient
    ]
  }
];

troops.command_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.captain_sicarius]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.chaplain_cassius },
  {
    character: characters.captain_sicarius,
    secondLeader: [characters.lieutenant]
  }
];

troops.eradicator_squad.possibleLeaders = [
  {
    character: characters.captain_in_gravis_armour,
    secondLeader: [characters.apothecary_biologis]
  },
  {
    character: characters.apothecary_biologis,
    secondLeader: [
      characters.captain_in_gravis_armour,
      characters.marneus_calgar
    ]
  },
  {
    character: characters.marneus_calgar,
    secondLeader: [characters.apothecary_biologis]
  }
];

troops.heavy_intercessor_squad.possibleLeaders = [
  {
    character: characters.captain_in_gravis_armour,
    secondLeader: [characters.apothecary_biologis]
  },
  {
    character: characters.apothecary_biologis,
    secondLeader: [
      characters.captain_in_gravis_armour,
      characters.marneus_calgar
    ]
  },
  {
    character: characters.marneus_calgar,
    secondLeader: [characters.apothecary_biologis]
  }
];

troops.infernus_squad.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.marneus_calgar
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.marneus_calgar
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
      characters.marneus_calgar
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.marneus_calgar,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_apothecary,
      characters.primaris_lieutenant
    ]
  }
];

troops.intercessor_squad.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.marneus_calgar,
      characters.uriel_ventris
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.marneus_calgar,
      characters.uriel_ventris
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
      characters.marneus_calgar,
      characters.uriel_ventris
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.marneus_calgar,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_apothecary,
      characters.primaris_lieutenant
    ]
  },
  { character: characters.chief_librarian_tigurius },
  {
    character: characters.uriel_ventris,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_apothecary,
      characters.primaris_lieutenant
    ]
  }
];

troops.scout_squad.possibleLeaders = [
  ...(troops.scout_squad.possibleLeaders
    ? troops.scout_squad.possibleLeaders
    : []),
  { character: characters.sergeant_telion }
];

troops.scout_sniper_squad.possibleLeaders = [
  ...(troops.scout_sniper_squad.possibleLeaders
    ? troops.scout_sniper_squad.possibleLeaders
    : []),
  { character: characters.sergeant_telion }
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
      characters.captain_sicarius,
      characters.uriel_ventris
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
      characters.captain_sicarius,
      characters.uriel_ventris
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.captain_sicarius,
      characters.uriel_ventris
    ]
  },
  { character: characters.judiciar },
  { character: characters.chaplain_cassius },
  { character: characters.chief_librarian_tigurius },
  {
    character: characters.captain_sicarius,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_lieutenant,
      characters.primaris_apothecary
    ]
  },
  {
    character: characters.uriel_ventris,
    secondLeader: [
      characters.primaris_ancient,
      characters.primaris_lieutenant,
      characters.primaris_apothecary
    ]
  }
];

troops.tactical_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.captain_sicarius]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.techmarine },
  { character: characters.chaplain_cassius },
  {
    character: characters.captain_sicarius,
    secondLeader: [characters.lieutenant]
  }
];

troops.vanguard_veteran_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.captain_sicarius]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.techmarine },
  { character: characters.chaplain_cassius },
  {
    character: characters.captain_sicarius,
    secondLeader: [characters.lieutenant]
  }
];

troops.hunter.possibleLeaders = [{ character: characters.sergeant_chronus }];

troops.land_raider.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.land_raider_crusader.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.land_raider_redeemer.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.predator_annihilator.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.predator_destructor.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.stalker.possibleLeaders = [{ character: characters.sergeant_chronus }];

troops.vindicator.possibleLeaders = [
  { character: characters.sergeant_chronus }
];

troops.whirlwind.possibleLeaders = [{ character: characters.sergeant_chronus }];

export { troops };
