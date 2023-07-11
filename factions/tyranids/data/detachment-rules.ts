import { detachmentRule, unit } from '@/types';

const swarming_instincts = (unit: unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['INFANTRY/SWARM SUSTAINED-HITS 1']
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['INFANTRY/SWARM SUSTAINED-HITS 1']
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      swarming_instincts(leader)
    );
  }
  if (unit.leader) {
    unit.leader = swarming_instincts(unit.leader);
  }

  return unit;
};

const hyper_agression = (unit: unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['MONSTER/VEHICLE LETHAL HITS']
      };
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['MONSTER/VEHICLE LETHAL HITS']
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      hyper_agression(leader)
    );
  }
  if (unit.leader) {
    unit.leader = hyper_agression(unit.leader);
  }

  return unit;
};

const hive_predators = (unit: unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['CHARACTER PRECISION']
      };
    });
  }

  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapon) => {
      return {
        ...weapon,
        detachmentAbilities: ['CHARACTER PRECISION']
      };
    });
  }

  if (unit.possibleLeaders) {
    unit.possibleLeaders = unit.possibleLeaders.map((leader) =>
      hive_predators(leader)
    );
  }
  if (unit.leader) {
    unit.leader = hive_predators(unit.leader);
  }

  return unit;
};

export const INVASION_FLEET_DETACHMENT_RULES: {
  [key: string]: detachmentRule;
} = {
  SWARMING_INSTINCTS: {
    name: 'SWARMING INSTINCTS',
    description:
      'Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets an enemy INFANTRY or SWARM unit, that attack has the [SUSTAINED HITS 1] ability.',
    change: swarming_instincts
  },
  HYPER_AGRESSION: {
    name: 'HYPER-AGGRESSION',
    description:
      'Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets an enemy Monster or Vehicle unit, that attack has the [LETHAL HITS] ability.',
    change: hyper_agression
  },
  HIVE_PREDATORS: {
    name: 'HIVE PREDATORS',
    description:
      'Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets an enemy Character unit, if a Critical Hit is scored, that attack has the [PRECISION] ability.',
    change: hive_predators
  }
};
