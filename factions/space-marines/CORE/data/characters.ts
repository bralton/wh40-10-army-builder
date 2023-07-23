import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { tactical_precision } from './leader-modifiers';
import { WEAPON_ABILITIES } from '@/enums';

export const characters: { [key: string]: Unit } = {
  ancient_in_terminator_armour: {
    name: 'ANCIENT IN TERMINATOR ARMOUR',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        ABILITIES.ASTARTES_BANNER,
        {
          title: 'Keep the Banner High',
          description: `While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Terminator Storm Shield',
        description: 'The bearer has a wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [[rangedWeapons.stormBolter]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.chainFist,
          fixedAttacks: 4
        }
      ],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 }],
      [meleeWeapons.powerFist],
      [meleeWeapons.powerWeapon],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 4 }],
      [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 6 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      'ANCIENT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 90 }
  },
  apothecary_biologis: {
    name: 'APOTHECARY BIOLOGIS',
    move: 5,
    toughness: 6,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 3,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Surgical Precision',
          description:
            'While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.'
        },
        {
          title: 'Vivispectrum',
          description: `If this model's unit destroys an enemy as the result of a melee attack, until the end of the battle, this model has the Objective Control characteristic of 9.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.absolverBoltPistol]],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      'APOTHECARY BIOLOGIS'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  captain: {
    name: 'CAPTAIN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.RITES_OF_BATTLE, ABILITIES.FINEST_HOUR]
    },
    wargearAbilities: [
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [{ ...rangedWeapons.infernoPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltgun],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ]
    ],
    meleeWeapons: [
      [meleeWeapons.astartesChainsword],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 6, weaponSkill: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }],
      [meleeWeapons.relicWeapon],
      [meleeWeapons.thunderHammer],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  chaplain: {
    name: 'CHAPLAIN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 5,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.LITANY_OF_HATE, ABILITIES.SPIRITUAL_LEADER]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.combiWeapon],
      [rangedWeapons.gravPistol],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [[meleeWeapons.croziusArcanum], [meleeWeapons.powerFist]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CHAPLAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 70 }
  },
  captain_in_gravis_armour: {
    name: 'CAPTAIN IN GRAVIS ARMOUR',
    move: 6,
    toughness: 6,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.RITES_OF_BATTLE,
        {
          title: 'Refuse to Yield',
          description: `Each time an attack is allocated to this model, halve the Damage characteristic of that attack.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltstormGauntlet],
      [rangedWeapons.masterCraftedHeavyBoltRifle]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.masterCraftedPowerWeapon, fixedAttacks: 6 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }],
      [meleeWeapons.relicBlade],
      [meleeWeapons.relicChainsword],
      [meleeWeapons.relicFist]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.GRAVIS,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 95 }
  },
  captain_in_phobos_armour: {
    name: 'CAPTAIN IN PHOBOS ARMOUR',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.INFILTRATORS, ABILITIES.LEADER, ABILITIES.STEALTH],
      other: [
        ABILITIES.RITES_OF_BATTLE,
        {
          title: 'Master of Deceit',
          description: `After both players have deployed their armies and determined who has the first turn, if your army includes one or more models with this ability, you can select up to three friendly Adeptus Astartes Phobos, Adeptus Astartes Scout Squad or Adeptus Astartes Scout Sniper Squad units and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves.`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [rangedWeapons.instigatorBoltCarbine]
    ],
    meleeWeapons: [[meleeWeapons.combatKnife]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  captain_in_terminator_armour: {
    name: 'CAPTAIN IN TERMINATOR ARMOUR',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        ABILITIES.RITES_OF_BATTLE,
        {
          title: `The Imperium's Sword`,
          description: `You can re-roll Charge rolls made for this model’s unit.`
        }
      ]
    },
    wargearAbilities: [
      {
        title: 'Auxiliary Grenade Launcher',
        description: 'The bearer has the Grenades keyword.'
      },
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 7.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.combiWeapon, ballisticSkill: 3 }],
      [{ ...rangedWeapons.stormBolter, ballisticSkill: 2 }]
    ],
    meleeWeapons: [
      [meleeWeapons.chainFist],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }],
      [meleeWeapons.relicWeapon],
      [meleeWeapons.thunderHammer],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 95 }
  },
  chaplain_in_terminator_armour: {
    name: 'CHAPLAIN IN TERMINATOR ARMOUR',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 5,
    leadership: 5,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        ABILITIES.LITANY_OF_HATE,
        {
          title: `Recitation of Faith`,
          description: `While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.combiWeapon], [rangedWeapons.stormBolter]],
    meleeWeapons: [[meleeWeapons.croziusArcanum]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      KEYWORDS.CHAPLAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 90 }
  },
  captain_on_bike: {
    name: 'CAPTAIN ON BIKE',
    move: 12,
    toughness: 5,
    save: 3,
    wounds: 6,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: `Swift Assault`,
          description: `While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability.`
        },
        ABILITIES.RITES_OF_BATTLE
      ]
    },
    wargearAbilities: [
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [{ ...rangedWeapons.infernoPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltgun],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ],
      [rangedWeapons.twinBoltgun]
    ],
    meleeWeapons: [
      [meleeWeapons.astartesChainsword],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 6, weaponSkill: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }],
      [meleeWeapons.relicWeapon],
      [meleeWeapons.thunderHammer],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 95 }
  },
  chaplain_on_bike: {
    name: 'CHAPLAIN ON BIKE',
    move: 12,
    toughness: 5,
    save: 3,
    wounds: 5,
    leadership: 5,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.LITANY_OF_HATE,
        {
          title: `Catechism of Fire`,
          description: `Each time this model's unit is selected to shoot, you can select one enemy unit within 12" of and visible to this model. Until the end of the phase, ranged weapons equipped by models in this model's unit have the [DEVASTATING WOUNDS] ability when targeting that enemy unit.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.absolverBoltPistol],
      [rangedWeapons.twinBoltRifle]
    ],
    meleeWeapons: [[meleeWeapons.croziusArcanum]],
    keywords: [
      KEYWORDS.MOUNTED,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CHAPLAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  captain_with_jump_pack: {
    name: 'CAPTAIN WITH JUMP PACK',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        {
          title: `Angel's Wrath`,
          description: `While this model is leading a unit, each time that unit ends a Charge move, until the end of the turn, add 1 to the Strength characteristic of melee weapons equipped by models in that unit.`
        },
        ABILITIES.RITES_OF_BATTLE
      ]
    },
    wargearAbilities: [
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [{ ...rangedWeapons.infernoPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltgun],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ]
    ],
    meleeWeapons: [
      [meleeWeapons.astartesChainsword],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 6, weaponSkill: 2 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }],
      [meleeWeapons.relicWeapon],
      [meleeWeapons.thunderHammer],
      [meleeWeapons.twinLightningClaws]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 100 }
  },
  chaplain_with_jump_pack: {
    name: 'CHAPLAIN WITH JUMP PACK',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        ABILITIES.LITANY_OF_HATE,
        {
          title: `Exhortation of Rage`,
          description: `Each time this model's unit is selected to fight, you can select one enemy unit within Engagement Range of this model's unit and roll one D6: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.combiWeapon],
      [rangedWeapons.gravPistol],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [[meleeWeapons.croziusArcanum], [meleeWeapons.powerFist]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.IMPERIUM,
      KEYWORDS.CHAPLAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 85 }
  },
  bladeguard_ancient: {
    name: 'BLADEGUARD ANCIENT',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    invulnerableMelee: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.ASTARTES_BANNER,
        {
          title: `Deeds of Heroism`,
          description: `Once per battle, when this model is selected to fight, it can use this ability. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in this model's unit.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.heavyBoltPistol]],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'BLADEGUARD ANCIENT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 50 }
  },
  judiciar: {
    name: 'JUDICIAR',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 5,
    objectiveControl: 1,
    invulnerableMelee: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: `Tempormortis`,
          description: `While this model is leading a unit, that unit has the Fights First ability.`
        },
        {
          title: `Silent Fury`,
          description: `Each time this model destroys an enemy CHARACTER model, until the end of the battle, add 1 to the Attacks characteristic of its executioner relic blade.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.absolverBoltPistol]],
    meleeWeapons: [[meleeWeapons.executionerRelicBlade]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'JUDICIAR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  librarian: {
    name: 'LIBRARIAN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.PSYCHIC_HOOD, ABILITIES.MENTAL_FORTRESS]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.combiWeapon],
      [{ ...rangedWeapons.gravPistol, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [rangedWeapons.smiteWitchfire, rangedWeapons.smiteFocusedWitchfire],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [[meleeWeapons.forceWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.PSYKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.LIBRARIAN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  librarian_in_terminator_armour: {
    name: 'LIBRARIAN IN TERMINATOR ARMOUR',
    move: 5,
    toughness: 5,
    save: 2,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
      other: [
        ABILITIES.PSYCHIC_HOOD,
        {
          title: 'Veil of Time (Psychic)',
          description:
            'While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.combiWeapon],
      [rangedWeapons.smiteWitchfire, rangedWeapons.smiteFocusedWitchfire],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [[meleeWeapons.forceWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.PSYKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TERMINATOR,
      KEYWORDS.LIBRARIAN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 90 }
  },
  librarian_in_phobos_armour: {
    name: 'LIBRARIAN IN PHOBOS ARMOUR',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.INFILTRATORS, ABILITIES.LEADER],
      other: [
        ABILITIES.PSYCHIC_HOOD,
        {
          title: 'Shrouding (Psychic)',
          description:
            'While this model is leading a unit, models in that unit have the Stealth ability and that unit cannot be targeted by ranged attacks unless the attacking model is within 12".'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.smiteWitchfire, rangedWeapons.smiteFocusedWitchfire]
    ],
    meleeWeapons: [[meleeWeapons.forceWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.PSYKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      KEYWORDS.LIBRARIAN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  librarian_with_jump_pack: {
    name: 'LIBRARIAN WITH JUMP PACK',
    move: 12,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.PSYCHIC_HOOD,
        {
          title: 'Might of Heroes (Psychic)',
          description:
            'While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1.'
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.boltgun],
      [rangedWeapons.combiWeapon],
      [{ ...rangedWeapons.gravPistol, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [rangedWeapons.infernoPistol],
      [
        rangedWeapons.plasmaPistolStandard,
        rangedWeapons.plasmaPistolSupercharge
      ],
      [rangedWeapons.smiteWitchfire, rangedWeapons.smiteFocusedWitchfire],
      [rangedWeapons.stormBolter]
    ],
    meleeWeapons: [[meleeWeapons.forceWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.JUMP_PACK,
      KEYWORDS.FLY,
      KEYWORDS.PSYKER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.LIBRARIAN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 }
  },
  lieutenant: {
    name: 'LIEUTENANT',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.TACTICAL_PRECISION, ABILITIES.TARGET_PRIORITY]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [{ ...rangedWeapons.infernoPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltgun],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ],
      [{ ...rangedWeapons.stormBolter, ballisticSkill: 2 }]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 6 }],
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 }],
      [meleeWeapons.powerFist],
      [meleeWeapons.powerWeapon],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 4 }],
      [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 6 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.LIEUTENANT
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  lieutenant_in_phobos_armour: {
    name: 'LIEUTENANT IN PHOBOS ARMOUR',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [
        ABILITIES.DEEP_STRIKE,
        ABILITIES.INFILTRATORS,
        ABILITIES.LEADER,
        ABILITIES.SCOUTS_6
      ],
      other: [
        ABILITIES.TACTICAL_PRECISION,
        {
          title: 'Shoot and Fade',
          description: `In your Shooting phase, after this model's unit has shot, if it not within Engagement Range of any enemy models, it can make a Normal move of up to D6".`
        }
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedScopedBoltCarbine]
    ],
    meleeWeapons: [[meleeWeapons.pairedCombatBlades]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      KEYWORDS.LIEUTENANT
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 60 }
  },
  lieutenant_in_reiver_armour: {
    name: 'LIEUTENANT IN REIVER ARMOUR',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER, ABILITIES.SCOUTS_6],
      other: [
        ABILITIES.TACTICAL_PRECISION,
        {
          title: 'Deadly Terror',
          description: `While this model is leading a unit, increase the range of that unit's Terror Troops ability by 3".`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.masterCraftedSpecialIssueBoltPistol]],
    meleeWeapons: [
      [{ ...meleeWeapons.combatKnife, abilities: [WEAPON_ABILITIES.PRECISION] }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.SMOKE,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      KEYWORDS.LIEUTENANT + ' IN REIVER ARMOUR'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 65 }
  },
  lieutenant_with_combi_weapon: {
    name: 'LIEUTENANT WITH COMBI-WEAPON',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    fnp: 5,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [
        ABILITIES.INFILTRATORS,
        ABILITIES.LONE_OPERATIVE,
        ABILITIES.STEALTH
      ],
      other: [
        {
          title: 'Priority Objective Identified (Aura)',
          description: `At the start of the first battle round, if your army contains one or more models with this ability, you can select one objective marker on the battlefield to be the Priority Objective. Until the end of the battle, while a friendly ADEPTUS ASTARTES unit is within 6" of this model, each time a model in that unit makes an attack that targets an enemy unit that is within range of the Priority Target, re-roll a Wound roll of 1.`
        },
        {
          title: 'Evade and Survive',
          description:
            'Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move.'
        }
      ]
    },
    rangedWeapons: [[{ ...rangedWeapons.combiWeapon, ballisticSkill: 3 }]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.pairedCombatBlades,
          abilities: [
            WEAPON_ABILITIES.ANTI_TYRANIDS_4,
            WEAPON_ABILITIES.SUSTAINED_HITS_1
          ]
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.SMOKE,
      KEYWORDS.IMPERIUM,
      KEYWORDS.PHOBOS,
      KEYWORDS.LIEUTENANT + ' WITH COMBI-WEAPON'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  primaris_ancient: {
    name: 'PRIMARIS ANCIENT',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.ASTARTES_BANNER,
        {
          title: 'Unbreakable Duty',
          description: `While this model is within range of an objective marker and/or within 6" of the centre of the battlefield, this model has the Feel No Pain 4+ ability.`
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.boltPistol], [rangedWeapons.boltRifle]],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 }],
      [meleeWeapons.powerWeapon]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      KEYWORDS.PRIMARIS + ' ANCIENT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  primaris_apothecary: {
    name: 'PRIMARIS APOTHECARY',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Narthecium',
          description:
            'While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to that unit.'
        },
        {
          title: 'Gene-seed Recovery',
          description: `When this model's Bodyguard unit is destroyed, roll one D6: on a 2+ you gain 1CP.`
        }
      ]
    },
    rangedWeapons: [
      [rangedWeapons.absolverBoltPistol],
      [rangedWeapons.reductorPistol]
    ],
    meleeWeapons: [[{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 4 }]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS APOTHECARY'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  primaris_captain: {
    name: 'PRIMARIS CAPTAIN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 5,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.RITES_OF_BATTLE, ABILITIES.FINEST_HOUR]
    },
    wargearAbilities: [
      {
        title: 'Relic Shield',
        description: 'The bearer has a Wounds characteristic of 6.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.heavyBoltPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltRifle],
      [rangedWeapons.neoVolkitePistol],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 6, weaponSkill: 2 }],
      [{ ...meleeWeapons.masterCraftedPowerWeapon, fixedAttacks: 6 }],
      [{ ...meleeWeapons.powerFist, fixedAttacks: 5 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      KEYWORDS.PRIMARIS,
      KEYWORDS.CAPTAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 80 }
  },
  primaris_chaplain: {
    name: 'PRIMARIS CHAPLAIN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 5,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.LITANY_OF_HATE, ABILITIES.SPIRITUAL_LEADER]
    },
    rangedWeapons: [[rangedWeapons.absolverBoltPistol]],
    meleeWeapons: [[meleeWeapons.croziusArcanum]],
    keywords: [
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      KEYWORDS.PRIMARIS + ' ' + KEYWORDS.CHAPLAIN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 65 }
  },
  primaris_company_champion: {
    name: 'PRIMARIS COMPANY CHAMPION',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        {
          title: 'Honour or Death',
          description: `While this model is leading a unit, add 1 to Advance or Charge rolls made for that unit and you can target that unit with the Heroic Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase.`
        },
        {
          title: 'Martial Superiority',
          description:
            'Each time this model makes a melee attack that targets a CHARACTER unit, you can re-roll the Hit roll and you can re-roll the Wound roll.'
        }
      ]
    },
    rangedWeapons: [[rangedWeapons.boltPistol]],
    meleeWeapons: [
      [
        {
          ...meleeWeapons.masterCraftedPowerWeapon,
          abilities: [WEAPON_ABILITIES.PRECISION]
        }
      ]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      KEYWORDS.PRIMARIS + ' COMPANY CHAMPION'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 55 }
  },
  primaris_librarian: {
    name: 'PRIMARIS LIBRARIAN',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.PSYCHIC_HOOD, ABILITIES.MENTAL_FORTRESS]
    },
    rangedWeapons: [
      [rangedWeapons.boltPistol],
      [rangedWeapons.smiteWitchfire, rangedWeapons.smiteFocusedWitchfire]
    ],
    meleeWeapons: [[meleeWeapons.forceWeapon]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.PSYKER,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      KEYWORDS.PRIMARIS + ' ' + KEYWORDS.LIBRARIAN
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 70 }
  },
  primaris_lieutenant: {
    name: 'PRIMARIS LIEUTENANT',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [ABILITIES.TACTICAL_PRECISION, ABILITIES.TARGET_PRIORITY]
    },
    wargearAbilities: [
      {
        title: 'Storm Shield',
        description: 'The bearer has a 4+ invulnerable save.'
      }
    ],
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.heavyBoltPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltRifle],
      [rangedWeapons.neoVolkitePistol],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.closeCombatWeapon, fixedAttacks: 5, weaponSkill: 2 }],
      [meleeWeapons.masterCraftedPowerWeapon],
      [meleeWeapons.powerFist]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS LIEUTENANT'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 75 },
    leadEffect: tactical_precision
  },
  primaris_techmarine: {
    name: 'PRIMARIS TECHMARINE',
    move: 6,
    toughness: 4,
    save: 2,
    wounds: 4,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.TECHMARINE,
        ABILITIES.BLESSING_OF_THE_OMNISSIAH,
        ABILITIES.VENGEANCE_OF_THE_OMNISSIAH
      ]
    },
    rangedWeapons: [
      [rangedWeapons.forgeBolter],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }]
    ],
    meleeWeapons: [[meleeWeapons.omnissianPowerAxe], [meleeWeapons.servoArm]],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'PRIMARIS TECHMARINE'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 65 }
  },
  techmarine: {
    name: 'TECHMARINE',
    move: 6,
    toughness: 4,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      core: [ABILITIES.LEADER],
      other: [
        ABILITIES.TECHMARINE,
        ABILITIES.BLESSING_OF_THE_OMNISSIAH,
        ABILITIES.VENGEANCE_OF_THE_OMNISSIAH
      ]
    },
    rangedWeapons: [
      [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
      [{ ...rangedWeapons.boltgun, ballisticSkill: 2 }],
      [rangedWeapons.flamer],
      [{ ...rangedWeapons.gravPistol, ballisticSkill: 2, fixedDamage: 2 }],
      [rangedWeapons.handFlamer],
      [{ ...rangedWeapons.infernoPistol, ballisticSkill: 2 }],
      [rangedWeapons.masterCraftedBoltgun],
      [
        { ...rangedWeapons.plasmaPistolStandard, ballisticSkill: 2 },
        { ...rangedWeapons.plasmaPistolSupercharge, ballisticSkill: 2 }
      ]
    ],
    meleeWeapons: [
      [{ ...meleeWeapons.astartesChainsword, fixedAttacks: 5, weaponSkill: 3 }],
      [meleeWeapons.omnissianPowerAxe],
      [meleeWeapons.plasmaCutter],
      [{ ...meleeWeapons.powerFist, weaponSkill: 3 }],
      [meleeWeapons.servoArm],
      [{ ...meleeWeapons.thunderHammer, fixedAttacks: 3, weaponSkill: 4 }]
    ],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.CHARACTER,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      'TECHMARINE'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 1, cost: 70 }
  }
};
