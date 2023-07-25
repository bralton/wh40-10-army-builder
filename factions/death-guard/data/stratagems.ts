import { Stratagem } from '@/types';

export const PLAGUE_COMPANY_STRATAGEMS: Stratagem[] = [
  {
    name: 'FERRIC BLIGHT',
    cost: 1,
    when: ` Your Shooting phase or the Fight phase.`,
    target: `One Death Guard unit from your army that has not been selected to shoot or fight this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If the target of that attack is within Contagion Range of an Infected objective marker you control and a Critical Wound is scored for that attack, improve the Armour Penetration characteristic of that attack by 2 instead.`
  },
  {
    name: 'DISGUSTINGLY RESILIENT',
    cost: 2,
    when: `Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Death Guard unit from your army that was selected as the target of one or more of that enemy unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.`
  },
  {
    name: 'SANGUOUS FLUX',
    cost: 1,
    when: 'Fight phase.',
    target: `One Death Guard unit from your army that has not been selected to fight this phase.`,
    effect: `Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. While your unit is within range of an Infected objective marker you control, those weapons have the [SUSTAINED HITS 2] ability instead.`
  },
  {
    name: 'GIFTS OF DECAY',
    cost: 1,
    when: `Your Command phase.`,
    target: `One Death Guard model from your army.`,
    effect: `Your model regains up to D3 lost wounds. If your model’s unit is within Contagion Range of an Infected objective marker you control, your model regains up to 3 lost wounds instead.`
  },
  {
    name: 'BOILBLIGHT',
    cost: 1,
    when: `Your Shooting phase.`,
    target: `One Death Guard unit from your army, and one enemy unit within Contagion Range of that unit.`,
    effect: `Until the end of the phase, each time a weapon equipped by a Death Guard model from your army targets that enemy unit, that weapon has the [HEAVY] and [IGNORES COVER] abilities.`
  },
  {
    name: 'CLOUD OF FLIES',
    cost: 1,
    when: `Your opponent’s Shooting phase, just after an enemy unit has selected its targets.`,
    target: `One Death Guard unit from your army that was selected as the target of one or more of that enemy unit’s attacks.`,
    effect: `Until the end of the phase, your unit has the Stealth ability.`
  }
];
