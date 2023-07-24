import { cloneDeep } from 'lodash';
import { KEYWORDS as core_keywords } from '../../CORE/data/keywords';

const KEYWORDS: { [key: string]: any } = cloneDeep(core_keywords);

KEYWORDS.CHAPTER = 'IMPERIAL FISTS';

export { KEYWORDS };
