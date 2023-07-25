import { DetachmentRule, Unit } from '@/types';

export const PLAGUE_COMPANY_DETACHMENT_RULES: {
  [key: string]: DetachmentRule;
} = {
  SPREAD_THE_SICKNESS: {
    name: 'SPREAD THE SICKNESS',
    description: `If you control an objective marker at the end of your Command phase and a Death Guard unit from your army is within range of that objective marker, that objective marker is said to be Infected and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Infected and under your control, it has the Nurgle’s Gift ability as if it were a unit from your army (so enemy units within Contagion Range of it will have their Toughness characteristic modified).`,
    change: (unit: Unit) => unit
  }
};
