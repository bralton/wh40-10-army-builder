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
      characters.adrax_agatone
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
      characters.adrax_agatone
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.adrax_agatone
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.adrax_agatone,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
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
    secondLeader: [characters.captain, characters.vulkan_hestan]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.vulkan_hestan, secondLeader: [characters.lieutenant] }
];

troops.command_squad.possibleLeaders = [
  {
    character: characters.captain,
    secondLeader: [characters.lieutenant]
  },
  {
    character: characters.lieutenant,
    secondLeader: [characters.captain, characters.vulkan_hestan]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.vulkan_hestan, secondLeader: [characters.lieutenant] }
];

troops.infernus_squad.possibleLeaders = [
  {
    character: characters.primaris_apothecary,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_captain,
      characters.adrax_agatone,
      characters.vulkan_hestan
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.adrax_agatone,
      characters.vulkan_hestan
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
      characters.adrax_agatone,
      characters.vulkan_hestan
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.adrax_agatone,
    secondLeader: [
      characters.primaris_lieutenant,
      characters.primaris_apothecary,
      characters.primaris_ancient
    ]
  },
  {
    character: characters.vulkan_hestan,
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
      characters.adrax_agatone
    ]
  },
  {
    character: characters.primaris_lieutenant,
    secondLeader: [
      characters.primaris_apothecary,
      characters.primaris_captain,
      characters.primaris_ancient,
      characters.adrax_agatone
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
      characters.adrax_agatone
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.adrax_agatone,
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
      characters.adrax_agatone
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
      characters.adrax_agatone
    ]
  },
  {
    character: characters.primaris_ancient,
    secondLeader: [
      characters.primaris_captain,
      characters.primaris_lieutenant,
      characters.adrax_agatone
    ]
  },
  { character: characters.judiciar },
  {
    character: characters.adrax_agatone,
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
    secondLeader: [characters.captain, characters.vulkan_hestan]
  },
  { character: characters.librarian },
  { character: characters.chaplain },
  { character: characters.techmarine },
  { character: characters.vulkan_hestan, secondLeader: [characters.lieutenant] }
];

export { troops };
