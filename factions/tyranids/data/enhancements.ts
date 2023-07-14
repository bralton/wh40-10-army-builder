import { STATSBLOCK } from '@/enums';
import { Enhancement, Unit } from '@/types';

const alien_cunning = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'ALIEN CUNNING',
      description:
        'Tyranids model only. After both players have deployed their armies, select up to three Tyranids units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units were already in Strategic Reserves.'
    }
  ];

  return unit;
};

const perfectly_adapted = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'PERFECTLY ADAPTED',
      description:
        'Tyranids model only. Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.'
    }
  ];

  return unit;
};

const synaptic_linchpin = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'SYNAPTIC LINCHPIN',
      description:
        'Tyranids model only. Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.'
    }
  ];

  return unit;
};

const adaptive_biology = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'ADAPTIVE BIOLOGY',
      description:
        'Tyranids model only. The bearer has the Feel No Pain 5+ ability. At the start of any turn, if the bearer has fewer than its starting number of wounds remaining, until the end of the battle, it has the Feel No Pain 4+ ability instead.'
    }
  ];

  unit.enhancementStats.fnp = '5(4)';
  return unit;
};

export const INVASION_FLEET_ENHANCEMENTS: Enhancement[] = [
  {
    name: 'ALIEN CUNNING',
    description:
      'Tyranids model only. After both players have deployed their armies, select up to three Tyranids units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units were already in Strategic Reserves.',
    cost: 30,
    change: alien_cunning
  },
  {
    name: 'PERFECTLY ADAPTED',
    description:
      'Tyranids model only. Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.',
    cost: 15,
    change: perfectly_adapted
  },
  {
    name: 'SYNAPTIC LINCHPIN',
    description:
      'Tyranids model only. While a friendly Tyranids unit is within 9" of the bearer, that unit is within Synapse Range of your army.',
    cost: 10,
    change: synaptic_linchpin
  },
  {
    name: 'ADAPTIVE BIOLOGY',
    description:
      'Tyranids model only. The bearer has the Feel No Pain 5+ ability. At the start of any turn, if the bearer has fewer than its starting number of wounds remaining, until the end of the battle, it has the Feel No Pain 4+ ability instead.',
    cost: 25,
    change: adaptive_biology
  }
];
