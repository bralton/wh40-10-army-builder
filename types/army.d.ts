export interface enhancement {
  name: string;
  description: string;
}

export interface stratagem {
  name: string;
  cost: number;
  when: string;
  target: string;
  effect: string;
  restrictions?: string;
}

export interface detachment {
  name: string;
  enhancements: { [key: string]: enhancement };
  stratagems: stratagem[];
  detachmentRule: { [key: string]: detachmentRule };
}

export interface detachmentRule {
  name: string;
  description: string;
  change: (unit) => unit;
}

export interface weapon {
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

export interface rangedWeapon extends weapon {
  range: number;
  ballisticSkill: number;
}

export interface meleeWeapon extends weapon {
  weaponSkill: number;
}

export interface unit extends stats {
  name: string;
  rangedWeapons?: rangedWeapon[];
  meleeWeapons?: meleeWeapon[];
  keywords: string[];
  factionKeywords: string[];
  unitComposition: { [key: number]: number };
  enhancements?: enhancement[];
  leader?: unit;
  possibleLeaders?: unit[];
  leadStats?: stats;
  leadEffect?: (unit: unit) => unit;
}

export interface stats {
  move: number;
  toughness: number;
  save: number;
  invulnerable?: number;
  fnp?: number;
  wounds: number;
  leadership: number;
  objectiveControl: number;
  abilities: {
    faction?: string[];
    core?: string[];
    other?: { title: string; description: string }[];
  };
}

export interface faction {
  factionName: string;
  armyRule: string[];
  detachment: detachment[];
  weapons: {
    ranged: rangedWeapon[];
    melee: meleeWeapon[];
  };
  units: unit[];
}
