import { Stratagem } from '@/types';

export const INVASION_FLEET_STRATAGEMS: Stratagem[] = [
  {
    name: 'RAPID REGENERATION',
    cost: 1,
    when: 'Your opponents Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
    target:
      'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
    effect:
      'Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, until the end of the phase, models in your unit have the Feel No Pain 5+ ability instead.'
  },
  {
    name: 'DEATH FRENZY',
    cost: 1,
    when: 'Fight phase, just after an enemy unit has selected its targets.',
    target:
      'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
    effect:
      'Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making attacks, and is then removed from play.'
  },
  {
    name: 'ADRENAL SURGE',
    cost: 2,
    when: 'Fight phase.',
    target:
      'Up to two Tyranids units from your army that are within Synapse Range of your army and are eligible to fight, or one other Tyranids unit from your army that is eligible to fight.',
    effect:
      'Until the end of the phase, each time a model in one of those selected units makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.'
  },
  {
    name: 'OVERRUN',
    cost: 1,
    when: 'Fight phase, just before a Tyranids unit from your army Consolidates.',
    target: 'That Tyranids unit.',
    effect:
      'Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6" instead of up to 3", provided your unit can end its Consolidation move in Unit Coherency and within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can instead make a Normal move of up to 6"'
  },
  {
    name: 'SYNAPTIC INSIGHT',
    cost: 1,
    when: 'Your Command phase.',
    target:
      'Up to two Tyranids units from your army that are within Synapse Range of your army, or one other Tyranids unit from your army.',
    effect:
      'Select one Hyper-adaptation. Until the end of the battle round, that hyper-adaptation is active for those selected units in addition to any other that may be active for your army.',
    restrictions:
      'You cannot select the same hyper-adaptation you selected at the start of the first battle round'
  },
  {
    name: 'ENDLESS SWARM',
    cost: 1,
    when: 'Your Command phase.',
    target:
      'Up to two Endless Multitude units from your army that are within Synapse Range of your army, or one other Endless Multitude unit from your army.',
    effect:
      'Up to D3+3 destroyed models are returned to each of the selected units'
  }
];
