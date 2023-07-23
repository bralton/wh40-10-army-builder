import { Stratagem } from '@/types';

export const GLADIUS_TASK_FORCE_STRATAGEMS: Stratagem[] = [
  {
    name: 'ONLY IN DEATH DOES DUTY END',
    cost: 2,
    when: 'Fight phase, just after an enemy unit has selected its targets.',
    target:
      'One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
    effect:
      'Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.'
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    when: 'Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
    target:
      'One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
    effect:
      'Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.'
  },
  {
    name: 'HONOUR THE CHAPTER',
    cost: 1,
    when: 'Fight phase.',
    target: 'One Adeptus Astartes unit from your army.',
    effect:
      'Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well. '
  },
  {
    name: 'ADAPTIVE STRATEGY',
    cost: 1,
    when: 'Your Command phase.',
    target: 'One Adeptus Astartes unit from your army.',
    effect:
      'Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for that unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that doctrine this battle.'
  },
  {
    name: 'SQUAD TACTICS',
    cost: 1,
    when: 'Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.',
    target:
      'One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 9" of the enemy unit that just ended that move.',
    effect:
      'Your unit can make a Normal move of up to D6", or a Normal move of up to 6" instead if it is under the effects of the Tactical Doctrine.',
    restrictions:
      'You cannot select a unit that is within Engagement Range of one or more enemy units.'
  },
  {
    name: 'STORM OF FIRE',
    cost: 1,
    when: 'Your Shooting phase.',
    target: 'One Adeptus Astartes unit from your army.',
    effect:
      'Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.'
  }
];
