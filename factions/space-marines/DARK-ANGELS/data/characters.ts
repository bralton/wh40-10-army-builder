import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';

const characters = cloneDeep(core_characters);

characters.asmodai = {
  name: `ASMODAI`,
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 4,
  leadership: 5,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Exemplar of Hate',
        description: `While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll.`
      },
      {
        title: 'Feared Interrogator',
        description: `At the start of the Fight phase, each enemy CHARACTER unit within 6" of this model must take a Battle-shock test, subtracting 1 from that test when they do. In addition, each time this model destroys an enemy CHARACTER model with a melee attack, you gain 1CP.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.boltPistol]],
  meleeWeapons: [[meleeWeapons.bladesOfReason], [meleeWeapons.croziusArcanum]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CHAPLAIN,
    `ASMODAI`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 70 }
};

characters.azrael = {
  name: `AZRAEL`,
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 6,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Supreme Grand Master',
        description: `While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.`
      },
      {
        title: 'Masterful Tactician',
        description: `At the start of your Command phase, if this model is on the battlefield, you gain 1CP.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'The Lion Helm',
      description:
        'Models in the bearer’s unit have a 4+ invulnerable save. In addition, once per battle, at any time, the bearer can summon a Watcher in the Dark. When it does, until the end of the phase, models in the bearer’s unit have the Feel No Pain 4+ ability against mortal wounds.'
    }
  ],
  rangedWeapons: [[rangedWeapons.lionsWrath]],
  meleeWeapons: [[meleeWeapons.theSwordOfSecrets]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TACTICUS,
    KEYWORDS.CHAPTER_MASTER,
    `AZRAEL`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 120 }
};

characters.belial = {
  name: `BELIAL`,
  move: 5,
  toughness: 5,
  save: 2,
  wounds: 6,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Grand Master of the Deathwing',
        description: `While this model is leading a unit, each time a model in that unit makes an attack, if a Critical Hit is scored, that attack has the [PRECISION] ability.`
      },
      {
        title: 'Strikes of Retribution',
        description: `Each time a melee attack is allocated to this model, after the attacking model's unit has finished making its attacks, roll one D6 (to a maximum of six D6 per attacking unit): for each 2+, the attacking unit suffers 1 mortal wound.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.masterCraftedStormBolter]],
  meleeWeapons: [[meleeWeapons.theSwordOfSilence]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TERMINATOR,
    KEYWORDS.CAPTAIN,
    `BELIAL`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 100 }
};

characters.ezekiel = {
  name: `EZEKIEL`,
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 4,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Psychic Hood',
        description: `While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.`
      },
      {
        title: 'Engulfing Fear (Psychic)',
        description: `In your Shooting phase, you can select one enemy unit within 18" of this model. That enemy unit must take a Battle-shock test.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'Book of Salvation',
      description:
        'WHile this model is leading a unit, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. When this model is destroyed, each friendly ADEPTUS ASTARTES unit within 6" of this model must take a Battle-shock test.'
    }
  ],
  rangedWeapons: [
    [rangedWeapons.theDeliverer],
    [rangedWeapons.mindWipeWitchfire, rangedWeapons.mindWipeFocusedWitchfire]
  ],
  meleeWeapons: [[meleeWeapons.traitorsBane]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.PSYKER,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    `EZEKIEL`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 80 }
};

characters.deathwing_strikemaster = {
  name: `DEATHWING STRIKEMASTER`,
  move: 5,
  toughness: 5,
  save: 2,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.DEEP_STRIKE, ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Tactical Precision',
        description: `While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.`
      },
      {
        title: 'Vanquish the Foe',
        description: `Each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll.`
      }
    ]
  },
  wargearAbilities: [
    {
      title: 'Storm Shield',
      description: 'The bearer has a Wounds characteristic of 6.'
    }
  ],
  rangedWeapons: [[{ ...rangedWeapons.stormBolter, ballisticSkill: 2 }]],
  meleeWeapons: [
    [{ ...meleeWeapons.chainFist, fixedAttacks: 4 }],
    [meleeWeapons.maceOfAbsolution],
    [meleeWeapons.masterCraftedPowerWeapon],
    [meleeWeapons.powerFist],
    [{ ...meleeWeapons.thunderHammer, fixedAttacks: 4 }],
    [{ ...meleeWeapons.twinLightningClaws, fixedAttacks: 6 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TERMINATOR,
    KEYWORDS.LIEUTENANT,
    `DEATHWING STRIKEMASTER`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 90 }
};

characters.lazarus = {
  name: `LAZARUS`,
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Intractable Will',
        description: `While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.`
      },
      {
        title: 'The Spiritshield Helm',
        description: `This model has the Feel No Pain 3+ ability against Psychic Attacks and mortal wounds.`
      }
    ]
  },

  rangedWeapons: [[{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }]],
  meleeWeapons: [[meleeWeapons.enmitysEdge]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.TACTICUS,
    KEYWORDS.CAPTAIN,
    `LAZARUS`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 80 }
};

characters.lionElJonson = {
  name: `LION EL'JONSON`,
  move: 8,
  toughness: 9,
  save: 2,
  wounds: 10,
  leadership: 5,
  objectiveControl: 4,
  invulnerable: 3,
  abilities: {
    core: [ABILITIES.DEEP_STRIKE, ABILITIES.FIGHTS_FIRST],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Primarch of the First Legion',
        description: `In your Command phase, select one Primarch of the First Legion abilities. Until the start of your next Command phase, this model has that ability.`
      },
      {
        title: `The Emperor's Shield`,
        description: `Each time an attack targets this model, subtract 1 from the Wound roll. In addition, each time a melee attack is allocated to this model, on an unmodified saving throw of 6, the attacking unit suffers 1 mortal wound after it has finished making its attacks.`
      },
      {
        title: 'Dark Angels Bodyguard',
        description: `While this model is within 3" of one or more friendly Adeptus Astartes Infantry units, this model has the Lone Operative ability.`
      },
      {
        title: 'SUPREME COMMANDER',
        description: 'If this model is in your army, it must be your WARLORD.'
      }
    ],
    special: {
      'PRIMARCH OF THE FIRST LEGION': [
        {
          title: 'All Secrets Revealed',
          description: ` Once per turn, when your opponent targets a unit from their army with a Stratagem but before that Stratagem’s effects are resolved, if that unit is within 12" of this model, you gain 1CP and that enemy unit must take a Battle-shock test. If that test is failed, in addition to that unit being Battle-shocked, that Stratagem’s effects are not resolved (that Stratagem still counts as having been used this phase).`
        },
        {
          title: 'Martial Exemplar (Aura)',
          description: `While a friendly Adeptus Astartes unit is within 6" of this model , each time a model in that unit makes a melee attack, add 1 to the Hit roll.`
        },
        {
          title: 'No Hiding From the Watchers (Aura)',
          description: `While a friendly Adeptus Astartes unit is within 6" of this model, models in that unit have the Feel No Pain 4+ ability against mortal wounds.`
        }
      ]
    }
  },

  rangedWeapons: [
    [rangedWeapons.armaLuminisBolt, rangedWeapons.armaLuminisPlasma]
  ],
  meleeWeapons: [[meleeWeapons.fealtyStrike, meleeWeapons.fealtySweep]],
  keywords: [
    KEYWORDS.MONSTER,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.PRIMARCH,
    `LION El'JONSON`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 380 }
};

characters.ravenwing_talonmaster = {
  name: `RAVENWING TALONMASTER`,
  move: 16,
  toughness: 7,
  save: 3,
  wounds: 6,
  leadership: 6,
  objectiveControl: 2,
  invulnerable: 5,
  abilities: {
    core: [ABILITIES.DEADLY_DEMISE_1, ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Talonmaster',
        description: `While this model is within 3" of one or more other friendly ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE units, this model has the Lone Operative ability.`
      },
      {
        title: 'Nowhere to Hide',
        description: `While a friendly ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE unit is within 6" of this model, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability.`
      },
      {
        title: 'Master of Manoeuvre',
        description: `Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9" of this model, if this model is not within Engagement Range of one or more enemy units, this model can make a Normal move of up to 6".`
      }
    ]
  },
  rangedWeapons: [
    [rangedWeapons.twinAssaultCannon],
    [rangedWeapons.twinHeavyBolter]
  ],
  meleeWeapons: [[{ ...meleeWeapons.powerWeapon, weaponSkill: 3 }]],
  keywords: [
    KEYWORDS.VEHICLE,
    KEYWORDS.CHARACTER,
    KEYWORDS.FLY,
    KEYWORDS.IMPERIUM,
    `RAVENWING TALONMASTER`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 115 }
};

characters.sammael = {
  name: `SAMMAEL`,
  move: 12,
  toughness: 5,
  save: 3,
  wounds: 7,
  leadership: 6,
  objectiveControl: 2,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Grand Master of the Ravenwing',
        description: `While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced`
      },
      {
        title: 'Cut Off their Escape',
        description: `Each time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range of this model's unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests.`
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.mastercraftedPlasmaCannon],
    [{ ...rangedWeapons.twinStormBolter, ballisticSkill: 2 }]
  ],
  meleeWeapons: [[meleeWeapons.theRavenSword]],
  keywords: [
    KEYWORDS.MOUNTED,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.FLY,
    KEYWORDS.GRENADES,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    `SAMMAEL`
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 145 }
};

export { characters };
