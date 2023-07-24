import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

troops.command_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.pedro_kantor]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.pedro_kantor, secondLeader: [characters.lieutenant] }
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
      characters.pedro_kantor
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
      characters.pedro_kantor
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.pedro_kantor
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.pedro_kantor,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
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
    secondLeader: [characters.captain, characters.pedro_kantor]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.techmarine },
  { character: characters.pedro_kantor, secondLeader: [characters.lieutenant] }
];
export { troops };
