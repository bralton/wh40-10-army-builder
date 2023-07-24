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

troops.assault_squad.possibleLeaders = [
  ...(troops.assault_squad.possibleLeaders
    ? troops.assault_squad.possibleLeaders
    : []),
  { character: characters.chaplain_cassius }
];

troops.command_squad.possibleLeaders = [
  ...(troops.command_squad.possibleLeaders
    ? troops.command_squad.possibleLeaders
    : []),
  { character: characters.chaplain_cassius }
];

troops.sternguard_veteran_squad.possibleLeaders = [
  ...(troops.sternguard_veteran_squad.possibleLeaders
    ? troops.sternguard_veteran_squad.possibleLeaders
    : []),
  { character: characters.chaplain_cassius }
];

troops.tactical_squad.possibleLeaders = [
  ...(troops.tactical_squad.possibleLeaders
    ? troops.tactical_squad.possibleLeaders
    : []),
  { character: characters.chaplain_cassius }
];

troops.vanguard_veteran_squad.possibleLeaders = [
  ...(troops.vanguard_veteran_squad.possibleLeaders
    ? troops.vanguard_veteran_squad.possibleLeaders
    : []),
  { character: characters.chaplain_cassius }
];

export { troops };
