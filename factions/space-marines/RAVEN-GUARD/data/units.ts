import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';
import { troops as core_troops } from '../../CORE/data/units';
import { cloneDeep } from 'lodash';

const troops: { [key: string]: Unit } = cloneDeep(core_troops);

troops.assault_squad_with_jump_packs.possibleLeaders = [
  ...(troops.assault_squad_with_jump_packs.possibleLeaders
    ? troops.assault_squad_with_jump_packs.possibleLeaders
    : []),
  { character: characters.kayvaan_shrike }
];

troops.vanguard_veteran_squad_with_jump_packs.possibleLeaders = [
  ...(troops.vanguard_veteran_squad_with_jump_packs.possibleLeaders
    ? troops.vanguard_veteran_squad_with_jump_packs.possibleLeaders
    : []),
  { character: characters.kayvaan_shrike }
];

export { troops };
