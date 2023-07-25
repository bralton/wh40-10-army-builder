import { STATSBLOCK } from '@/enums';
import { Enhancement, Unit } from '@/types';

const living_plague = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'LIVING PLAGUE',
      description: `Death Guard model only. Add 3" to the range of the bearer’s Aura abilities (including Nurgle’s Gift).`
    }
  ];

  return unit;
};

const the_droning = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'THE DRONING',
      description: `Death Guard model only. While an enemy unit is within Contagion Range of the bearer, each time that unit fails a Battle-shock test, roll one D6: on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds.`
    }
  ];

  return unit;
};

const deadly_pathogen = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'DEADLY PATHOGEN',
      description: `Death Guard model only. Add 1 to the Strength and Attacks characteristics of the bearer’s melee weapons. While the bearer is within range of an Infected objective marker you control, add 2 to the Strength and Attacks characteristics of the bearer’s melee weapons instead.`
    }
  ];

  return unit;
};

const shamblerot = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'SHAMBLEROT',
      description: `Death Guard model only. Each time the bearer’s unit is selected as a target of an enemy unit’s charge, until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.`
    }
  ];

  return unit;
};

export const PLAGUE_COMPANY_ENHANCEMENTS: Enhancement[] = [
  {
    name: 'LIVING PLAGUE',
    description: `Death Guard model only. Add 3" to the range of the bearer’s Aura abilities (including Nurgle’s Gift).`,
    cost: 20,
    change: living_plague
  },
  {
    name: 'THE DRONING (AURA)',
    description: `Death Guard model only. While an enemy unit is within Contagion Range of the bearer, each time that unit fails a Battle-shock test, roll one D6: on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds.`,
    cost: 10,
    change: the_droning
  },
  {
    name: 'DEADLY PATHOGEN',
    description: `Death Guard model only. Add 1 to the Strength and Attacks characteristics of the bearer’s melee weapons. While the bearer is within range of an Infected objective marker you control, add 2 to the Strength and Attacks characteristics of the bearer’s melee weapons instead.`,
    cost: 15,
    change: deadly_pathogen
  },
  {
    name: 'SHAMBLEROT',
    description: `Death Guard model only. Each time the bearer’s unit is selected as a target of an enemy unit’s charge, until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.`,
    cost: 20,
    change: shamblerot
  }
];
