import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { Enhancement, Unit } from '@/types';

const shroud_of_heroes = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'SHROUD OF HEROES',
      description:
        'ADEPTUS ASTARTES model only. The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining (if the bearer was Battle-shocked when it was destroyed, it is instead returned with its full wounds remaining).'
    }
  ];

  return unit;
};

const stubborn_tenacity = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'STUBBORN TENACITY',
      description:
        'ADEPTUS ASTARTES model only. While the bearer is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if the bearer’s unit is below its Starting Strength, and add 1 to the Wound roll as well if the bearer’s unit is Battle-shocked.'
    }
  ];

  return unit;
};

const heavenfall_blade = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'HEAVENFALL BLADE',
      description:
        'ADEPTUS ASTARTES model only. Add 1 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons. While the bearer is Battle-shocked, add 2 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons instead.'
    }
  ];

  return unit;
};

const pennant_of_remembrance = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'PENNANT OF REMEMBRANCE',
      description:
        'BLADEGUARD ANCIENT, PRIMARIS ANCIENT or TERMINATOR ANCIENT model only. While the bearer is leading a unit, models in that unit have the Feel No Pain 6+ ability. While that unit is Battle-shocked, models in that unit have the Feel No Pain 4+ ability instead.'
    }
  ];

  return unit;
};

export const UNFORGIVEN_TASK_FORCE_ENHANCEMENTS: Enhancement[] = [
  {
    name: 'SHROUD OF HEROES',
    description:
      'ADEPTUS ASTARTES model only. The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining (if the bearer was Battle-shocked when it was destroyed, it is instead returned with its full wounds remaining).',
    cost: 25,
    change: shroud_of_heroes
  },
  {
    name: 'STUBBORN TENACITY',
    description:
      'ADEPTUS ASTARTES model only. While the bearer is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if the bearer’s unit is below its Starting Strength, and add 1 to the Wound roll as well if the bearer’s unit is Battle-shocked.',
    cost: 15,
    change: stubborn_tenacity
  },
  {
    name: 'HEAVENFALL BLADE',
    description:
      'ADEPTUS ASTARTES model only. Add 1 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons. While the bearer is Battle-shocked, add 2 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons instead.',
    cost: 20,
    change: heavenfall_blade
  },
  {
    name: 'PENNANT OF REMEMBRANCE',
    description:
      'BLADEGUARD ANCIENT, PRIMARIS ANCIENT or TERMINATOR ANCIENT model only. While the bearer is leading a unit, models in that unit have the Feel No Pain 6+ ability. While that unit is Battle-shocked, models in that unit have the Feel No Pain 4+ ability instead.',
    cost: 10,
    change: pennant_of_remembrance,
    restrictionKeywords: [
      'BLADEGUARD ANCIENT',
      'PRIMARIS ANCIENT',
      'TERMINATOR ANCIENT'
    ]
  }
];
