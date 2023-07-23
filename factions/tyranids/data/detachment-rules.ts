import { DetachmentRule, Unit } from '@/types';

const swarming_instincts = (unit: Unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['INFANTRY/SWARM SUSTAINED-HITS 1']
        };
      });
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['INFANTRY/SWARM SUSTAINED-HITS 1']
        };
      });
    });
  }
  if (unit.leader) {
    unit.leader = swarming_instincts(unit.leader);
  }
  if (unit.secondLeader) {
    unit.secondLeader = swarming_instincts(unit.secondLeader);
  }

  return unit;
};

const hyper_agression = (unit: Unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['MONSTER/VEHICLE LETHAL HITS']
        };
      });
    });
  }
  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['MONSTER/VEHICLE LETHAL HITS']
        };
      });
    });
  }

  if (unit.leader) {
    unit.leader = hyper_agression(unit.leader);
  }
  if (unit.secondLeader) {
    unit.secondLeader = hyper_agression(unit.secondLeader);
  }

  return unit;
};

const hive_predators = (unit: Unit) => {
  if (unit.meleeWeapons) {
    unit.meleeWeapons = unit.meleeWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['CHARACTER PRECISION']
        };
      });
    });
  }

  if (unit.rangedWeapons) {
    unit.rangedWeapons = unit.rangedWeapons.map((weapons) => {
      return weapons.map((weapon) => {
        return {
          ...weapon,
          detachmentAbilities: ['CHARACTER PRECISION']
        };
      });
    });
  }

  if (unit.leader) {
    unit.leader = hive_predators(unit.leader);
  }
  if (unit.secondLeader) {
    unit.secondLeader = hive_predators(unit.secondLeader);
  }

  return unit;
};

export const INVASION_FLEET_DETACHMENT_RULES: {
  [key: string]: DetachmentRule;
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
