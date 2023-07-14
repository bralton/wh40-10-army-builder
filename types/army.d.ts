export interface Enhancement {
  name: string;
  description: string;
  cost: number;
  change: (unit) => unit;
  restrictionKeywords?: string[];
}

export interface Stratagem {
  name: string;
  cost: number;
  when: string;
  target: string;
  effect: string;
  restrictions?: string;
}

export interface Detachment {
  name: string;
  enhancements: Enhancement[];
  stratagems: Stratagem[];
  detachmentRule: { [key: string]: DetachmentRule };
  units: {
    [key: string]: Unit;
  };
}

export interface DetachmentRule {
  name: string;
  description: string;
  change: (unit) => Unit;
}

export interface Weapon {
  name: string;
  variableAttacks?: string;
  fixedAttacks: number;
  strength: number;
  armourPiercing: number;
  variableDamage?: string;
  fixedDamage: number;
  abilities?: string[];
  detachmentAbilities?: string[];
  leaderAbilities?: string[];
}

export interface RangedWeapon extends Weapon {
  range: number;
  ballisticSkill: number;
}

export interface MeleeWeapon extends Weapon {
  weaponSkill: number;
}

export interface Unit extends Stats {
  name: string;
  rangedWeapons?: RangedWeapon[];
  meleeWeapons?: MeleeWeapon[];
  keywords: string[];
  factionKeywords: string[];
  possibleCompositions?: { modelCount: number; cost: number }[];
  unitComposition: { modelCount: number; cost: number };
  enhancement?: Enhancement;
  leader?: Unit;
  possibleLeaders?: Unit[];
  leadStats?: Stats;
  enhancementStats?: Stats;
  leadEffect?: (unit: Unit) => Unit;
  damaged?: {
    range: string;
    description: string;
  };
  transportUnits?: string;
}

export interface Stats {
  move: number;
  minimumMovement?: boolean;
  toughness: number;
  save: number;
  invulnerable?: number;
  fnp?: number | string;
  wounds: number;
  leadership: number;
  objectiveControl: number;
  abilities: {
    faction?: string[];
    core?: string[];
    other?: { title: string; description: string }[];
  };
}

export interface Faction {
  factionName: string;
  armyRule: string[];
  detachment: Detachment[];
  weapons: {
    ranged: RangedWeapon[];
    melee: MeleeWeapon[];
  };
  units: Unit[];
}
