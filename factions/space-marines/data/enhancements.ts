import { STATSBLOCK, WEAPON_ABILITIES } from '@/enums';
import { Enhancement, Unit } from '@/types';

const artificer_armour = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'ARTIFICER ARMOUR',
      description:
        'Adeptus Astartes model only. The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.'
    }
  ];
  unit.enhancementStats.save = 2;
  unit.enhancementStats.fnp = 5;

  return unit;
};

const the_honour_vehement = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'THE HONOUR VEHEMENT',
      description:
        'Adeptus Astartes model only. Add 1 to the Attacks and Strength characteristics of the bearer’s melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer’s melee weapons instead.'
    }
  ];

  return unit;
};

const adept_of_the_codex = (unit: Unit): Unit => {
  unit.enhancementStats = { ...STATSBLOCK };

  unit.enhancementStats.abilities.other = [
    {
      title: 'ADEPT OF THE CODEX',
      description:
        'Captain model only. At the start of your Command phase, if the bearer is on the battlefield, instead of selecting a Combat Doctrine to be active for your army, you can select the Tactical Doctrine. If you do, until the start of your next Command phase, that doctrine is active for the bearer’s unit only, even if you have already selected that doctrine to be active for your army this battle.'
    }
  ];

  return unit;
};

const bolterDisciplineAbilityChange = (
  unit: Unit,
  primary: boolean,
  owner: boolean
): Unit => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons?.map((weapon) => {
      return {
        ...weapon,
        enhancementAbilities: owner
          ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
          : undefined,
        leaderEnhancementAbilities:
          !owner && primary
            ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
            : undefined,
        secondLeaderEnhancementAbilities:
          !owner && !primary
            ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
            : undefined
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons?.map((weapon) => {
      return {
        ...weapon,
        enhancementAbilities: owner
          ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
          : undefined,
        leaderEnhancementAbilities:
          !owner && primary
            ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
            : undefined,
        secondLeaderEnhancementAbilities:
          !owner && !primary
            ? [WEAPON_ABILITIES.SUSTAINED_HITS + ' 1']
            : undefined
      };
    });
  }

  return unit;
};

const bolter_discipline = (unit: Unit, primary = true): Unit => {
  if (unit.leader) {
    if (primary) {
      unit.leader.enhancementStats = { ...STATSBLOCK };
      unit.leader.enhancementStats.abilities.other = [
        {
          title: 'BOLTER DISCIPLINE',
          description:
            'Adeptus Astartes model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer’s unit is under the effects of the Devastator Doctrine, each time a model in that unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit. '
        }
      ];
    } else {
      if (unit.secondLeader) {
        unit.secondLeader.enhancementStats = { ...STATSBLOCK };
        unit.secondLeader.enhancementStats.abilities.other = [
          {
            title: 'BOLTER DISCIPLINE',
            description:
              'Adeptus Astartes model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer’s unit is under the effects of the Devastator Doctrine, each time a model in that unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit. '
          }
        ];
      }
    }

    const tempUnit = bolterDisciplineAbilityChange(unit, primary, false);
    if (tempUnit.leader) {
      tempUnit.leader = bolterDisciplineAbilityChange(
        tempUnit.leader,
        primary,
        primary
      );
    }
    if (tempUnit.secondLeader) {
      tempUnit.secondLeader = bolterDisciplineAbilityChange(
        tempUnit.secondLeader,
        primary,
        !primary
      );
    }
  } else {
    unit.enhancementStats = { ...STATSBLOCK };
    unit.enhancementStats.abilities.other = [
      {
        title: 'BOLTER DISCIPLINE',
        description:
          'Adeptus Astartes model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer’s unit is under the effects of the Devastator Doctrine, each time a model in that unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit. '
      }
    ];
  }

  return unit;
};

export const GLADIUS_TASK_FORCE_ENHANCEMENTS: Enhancement[] = [
  {
    name: 'ARTIFICER ARMOUR',
    description:
      'Adeptus Astartes model only. The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.',
    cost: 10,
    change: artificer_armour
  },
  {
    name: 'THE HONOUR VEHEMENT',
    description:
      'Adeptus Astartes model only. Add 1 to the Attacks and Strength characteristics of the bearer’s melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer’s melee weapons instead.',
    cost: 15,
    change: the_honour_vehement
  },
  {
    name: 'ADEPT OF THE CODEX',
    description:
      'Captain model only. At the start of your Command phase, if the bearer is on the battlefield, instead of selecting a Combat Doctrine to be active for your army, you can select the Tactical Doctrine. If you do, until the start of your next Command phase, that doctrine is active for the bearer’s unit only, even if you have already selected that doctrine to be active for your army this battle.',
    cost: 20,
    change: adept_of_the_codex,
    restrictionKeywords: ['CAPTAIN']
  },
  {
    name: 'BOLTER DISCIPLINE',
    description:
      'Adeptus Astartes model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer’s unit is under the effects of the Devastator Doctrine, each time a model in that unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit. ',
    cost: 25,
    change: bolter_discipline,
    effectsParent: true
  }
];
