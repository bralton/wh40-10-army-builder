import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';

const troops: { [key: string]: Unit } = { ...core_troops };

troops.terminator_squad.possibleLeaders = [
  ...(troops.terminator_squad.possibleLeaders
    ? troops.terminator_squad.possibleLeaders
    : []),
  { character: characters.darnath_lysander }
];

troops.terminator_assault_squad.possibleLeaders = [
  ...(troops.terminator_assault_squad.possibleLeaders
    ? troops.terminator_assault_squad.possibleLeaders
    : []),
  { character: characters.darnath_lysander }
];

troops.relic_terminator_squad.possibleLeaders = [
  ...(troops.relic_terminator_squad.possibleLeaders
    ? troops.relic_terminator_squad.possibleLeaders
    : []),
  { character: characters.darnath_lysander }
];

troops.aggressor_squad.possibleLeaders = [
  {
    character: characters.captain_in_gravis_armour,
    secondLeader: [characters.apothecary_biologis]
  },
  {
    character: characters.apothecary_biologis,
    secondLeader: [characters.captain_in_gravis_armour, characters.tor_garadon]
  },
  {
    character: characters.tor_garadon,
    secondLeader: [characters.apothecary_biologis]
  }
];

troops.eradicator_squad.possibleLeaders = [
  {
    character: characters.captain_in_gravis_armour,
    secondLeader: [characters.apothecary_biologis]
  },
  {
    character: characters.apothecary_biologis,
    secondLeader: [characters.captain_in_gravis_armour, characters.tor_garadon]
  },
  {
    character: characters.tor_garadon,
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
    secondLeader: [characters.captain_in_gravis_armour, characters.tor_garadon]
  },
  {
    character: characters.tor_garadon,
    secondLeader: [characters.apothecary_biologis]
  }
];

export { troops };
