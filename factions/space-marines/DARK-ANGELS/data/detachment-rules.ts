import { DetachmentRule, Unit } from '@/types';

export const UNFORGIVEN_TASK_FORCE: {
  [key: string]: DetachmentRule;
} = {
  grimResolve: {
    name: 'Grim Resolve',
    description:
      'While an ADEPTUS ASTARTES unit from your army is Battle-shocked, change the Objective Control characteristic of models in that unit to 1, instead of 0.',
    change: (unit: Unit) => unit
  }
};
