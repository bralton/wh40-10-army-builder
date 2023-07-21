import { DetachmentRule, Unit } from '@/types';

export const GLADIUS_TASK_FORCE_DETACHMENT_RULES: {
  [key: string]: DetachmentRule;
} = {
  combatDoctrines: {
    name: 'Combat Doctrines',
    description:
      'At the start of your Command phase, you can select one of the Combat Doctrines listed below. Until the start of your next Command phase, that Combat Doctrine is active and its effects apply to all Adeptus Astartes units from your army with this ability. You can only select each Combat Doctrine once per battle.\n\nDevastator Doctrine: This unit is eligible to shoot in a turn in which it Advanced.\nTactical Doctrine: This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n Assault Doctrine: This unit is eligible to declare a charge in a turn in which it Advanced.',
    change: (unit: Unit) => unit
  }
};
