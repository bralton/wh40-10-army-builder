import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

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
      characters.azrael
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
      characters.azrael
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael
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
      characters.azrael
    ]
  },
  { character: characters.primaris_company_champion },
  { character: characters.primaris_chaplain },
  {
    character: characters.bladeguard_ancient,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.azrael
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.azrael,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.bladeguard_ancient
    ]
  }
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
  { character: characters.primaris_company_champion },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael
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
  }
];

troops.intercessor_squad.possibleLeaders = [
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
  { character: characters.primaris_techmarine },
  { character: characters.primaris_company_champion },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael
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
      characters.azrael
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
      characters.azrael
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.azrael
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
  }
];

export { troops };
