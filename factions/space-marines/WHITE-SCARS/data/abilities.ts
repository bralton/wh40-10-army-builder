import { cloneDeep } from 'lodash';
import { ABILITIES as CORE_ABILITIES } from '../../CORE/data/abilities';

const ABILITIES = cloneDeep(CORE_ABILITIES);

export { ABILITIES };
