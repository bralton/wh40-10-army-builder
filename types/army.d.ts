export interface Enhancement {
  name: string;
  description: string;
  cost: number;
  change: (unit: Unit, primary?: boolean) => unit;
  restrictionKeywords?: string[];
  effectsParent?: boolean;
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
  enhancementAbilities?: string[];
  leaderEnhancementAbilities?: string[];
  secondLeaderEnhancementAbilities?: string[];
  secondLeaderAbilities?: string[];
  profile?: boolean;
}

export interface RangedWeapon extends Weapon {
  range: number;
  ballisticSkill: number;
}

export interface MeleeWeapon extends Weapon {
  weaponSkill: number;
}

export interface Unit extends UnitDetails {
  name: string;
  individualName?: string;
  secondUnit?: UnitDetails;
  wargearAbilities?: { title: string; description: string }[];
  rangedWeapons?: RangedWeapon[][];
  meleeWeapons?: MeleeWeapon[][];
  keywords: string[];
  factionKeywords: string[];
  enhancement?: Enhancement;
  leader?: Unit;
  secondLeader?: Unit;
  possibleLeaders?: { character: Unit; secondLeader?: Unit[] }[];
  leadEffect?: (unit: Unit, primary?: boolean) => Unit;
  damaged?: {
    range: string;
    description: string;
  };
  transportUnits?: string;
}

interface UnitDetails extends Stats {
  name: string;
  possibleCompositions?: {
    modelCount: number;
    cost: number;
    description?: string;
  }[];
  unitComposition: { modelCount: number; cost: number };
  leadStats?: Stats;
  secondLeadStats?: Stats;
  enhancementStats?: Stats;
}

export interface Stats {
  move: number;
  minimumMovement?: boolean;
  toughness: number;
  save: number;
  invulnerable?: number;
  invulnerableMelee?: number;
  invulnerableRange?: number;
  fnp?: number | string;
  fnpMortal?: number | string;
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
  armyRule: string;
  detachments: { [key: string]: Detachment };
}
