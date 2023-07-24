import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

troops.aggressor_squad.possibleLeaders = [
  ...(troops.aggressor_squad.possibleLeaders
    ? troops.aggressor_squad.possibleLeaders
    : []),
  { character: characters.iron_father_feirros }
];

troops.eradicator_squad.possibleLeaders = [
  ...(troops.eradicator_squad.possibleLeaders
    ? troops.eradicator_squad.possibleLeaders
    : []),
  { character: characters.iron_father_feirros }
];

troops.heavy_intercessor_squad.possibleLeaders = [
  ...(troops.heavy_intercessor_squad.possibleLeaders
    ? troops.heavy_intercessor_squad.possibleLeaders
    : []),
  { character: characters.iron_father_feirros }
];

export { troops };
