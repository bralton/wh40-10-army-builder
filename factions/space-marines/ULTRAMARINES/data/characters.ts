import { Unit } from '@/types';
import { meleeWeapons, rangedWeapons } from './weapons';
import { KEYWORDS } from './keywords';
import { ABILITIES } from './abilities';
import { characters as core_characters } from '../../CORE/data/characters';
import { cloneDeep } from 'lodash';
import { troops } from '../../CORE/data/units';

const characters = cloneDeep(core_characters);

characters.sergeant_telion = {
  name: 'SERGEANT TELION',
  move: 6,
  toughness: 4,
  save: 4,
  wounds: 3,
  leadership: 6,
  objectiveControl: 1,
  abilities: {
    core: [
      ABILITIES.INFILTRATORS,
      ABILITIES.LEADER,
      ABILITIES.SCOUTS_6,
      ABILITIES.STEALTH
    ],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Voice of Experience',
        description: `While this model is leading a unit, improve the Objective Control characteristic of models in that unit by 1 and each time a model in that unit makes an attack, add 1 to the Hit roll.`
      },
      {
        title: 'Guiding Hand',
        description:
          'While this model is leading a unit, each time that unit is selected to shoot or fight, select one of the following abilities to apply to weapons equipped by models in that unit until the end of the Phase: [LETHAL HITS]; [PRECISION]; [SUSTAINED HITS 1]'
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.quietus]
  ],
  meleeWeapons: [
    [{ ...meleeWeapons.combatKnife, fixedAttacks: 4, weaponSkill: 3 }]
  ],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    'SERGEANT TELION'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 70 }
};

characters.chaplain_cassius = {
  name: 'CHAPLAIN CASSIUS',
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 4,
  leadership: 5,
  objectiveControl: 1,
  invulnerable: 4,
  fnp: 5,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Catechism of Death',
        description: `While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.`
      },
      {
        title: 'Inspired Retribution',
        description: `While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking mode;'s unit has finished making its attacks, and is then removed from play.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.infernus]],
  meleeWeapons: [[meleeWeapons.artificerCrozius]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    'CHAPLAIN CASSIUS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 80 }
};

characters.marneus_calgar = {
  name: 'MARNEUS CALGAR',
  individualName: 'MARNEUS CALGAR',
  secondUnit: {
    name: 'VICTRIX HONOUR GUARD',
    move: 6,
    toughness: 4,
    save: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    invulnerable: 4,
    abilities: {},
    unitComposition: { modelCount: 2, cost: 0 }
  },
  move: 6,
  toughness: 6,
  save: 2,
  wounds: 6,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  fnp: '*4',
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Inspiring Leader',
        description: `While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.`
      },
      {
        title: 'Master Tactician',
        description: `At the start of your Command phase, if this unit's Marneus Calgar model is on the battlefield, you gain 1CP.`
      },
      {
        title: 'Honour Guard of Macragge',
        description: `While this unit contains one or more Victrix Honour Guard models, this unit's Marneus Calgar model has the Feel No Pain 4+ ability.`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.gauntletsOfUltramar]],
  meleeWeapons: [
    [meleeWeapons.gauntletsOfUltramar],
    [meleeWeapons.victrixPowerSword]
  ],
  keywords: [
    'ALL MODELS: ',
    KEYWORDS.INFANTRY,
    KEYWORDS.IMPERIUM,
    ' | MARNEUS CALGAR: ',
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.GRAVIS,
    KEYWORDS.CHAPTER_MASTER,
    'MARNEUS CALGAR'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 205 }
};

characters.sergeant_chronus = {
  name: 'SERGEANT CHRONUS',
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 3,
  leadership: 6,
  objectiveControl: 1,
  abilities: {
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Tank Commander',
        description: `If your army includes one or more of the VEHICLE models this unit can be attached to, Sergeant Chronus MUST start the battle embarked within one of these models as if it were a TRANSPORT. Sergeant Chronus can only dissembark from that VEHICLE if it is destroyed.\n\nWhile this model is commanding a VEHICLE model:\n\n- Ranged weapons equipped by that VEHICLE model have a Ballistic Skill characteristic of 2+.\n- Each time that VEHICLE model is selected to shoot, you can re-roll one Wound roll when resolving those attacks.`
      },
      {
        title: 'Chronus',
        description: `When this model disembarks from a VEHICLE model it was commanding, it has the Lone Operative ability until the end of the battle.`
      }
    ]
  },
  rangedWeapons: [[{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }]],
  meleeWeapons: [[meleeWeapons.chronusServoArm]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    'SERGEANT CHRONUS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 75 },
  possibleLeaders: [
    { character: troops.hunter },
    { character: troops.land_raider },
    { character: troops.land_raider_crusader },
    { character: troops.land_raider_redeemer },
    { character: troops.predator_annihilator },
    { character: troops.predator_destructor },
    { character: troops.stalker },
    { character: troops.vindicator },
    { character: troops.whirlwind }
  ]
};

characters.chief_librarian_tigurius = {
  name: 'CHIEF LIBRARIAN TIGURIUS',
  move: 6,
  toughness: 4,
  save: 3,
  wounds: 4,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Hood of Hellfire',
        description: `While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds.`
      },
      {
        title: 'Master of Prescience (Psychic)',
        description: `While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll. In addition, once per battle round, you can target that unit with one of the following Stratagems for 0CP: Counter-offensive; Fire Overwatch; Go to Ground; Heroic Intervention`
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [
      rangedWeapons.stormOfTheEmpororsWrathWitchfire,
      rangedWeapons.stormOfTheEmpororsWrathFocusedWitchfire
    ]
  ],
  meleeWeapons: [[meleeWeapons.rodOfTigurius]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.PSYKER,
    KEYWORDS.IMPERIUM,
    'CHIEF LIBRARIAN TIGURIUS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 85 }
};

characters.captain_sicarius = {
  name: 'CAPTAIN SICARIUS',
  move: 6,
  toughness: 4,
  save: 2,
  wounds: 5,
  leadership: 6,
  objectiveControl: 1,
  invulnerable: 4,
  abilities: {
    core: [ABILITIES.LEADER],
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Lead From the Front',
        description: `While this model is leading a unit, models in that unit have the Scouts 6" ability and ranged weapons equipped by models in that unit have the [ASSAULT] ability.`
      },
      {
        title: 'Lightning Assault',
        description: `Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9" of this model, if this model's unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6".`
      }
    ]
  },
  rangedWeapons: [[rangedWeapons.artisanPlasmaPistol]],
  meleeWeapons: [[meleeWeapons.talassarianTempestBlade]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    'SICARIUS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 95 }
};

characters.uriel_ventris = {
  name: 'URIEL VENTRIS',
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
        title: 'Unorthodox Strategist',
        description: `While this model is leading a unit, you can target that unit with a Stratagem even if that Stratagem has already been used on another unit from your army this phase. In addition, this model's unit can still be selected as the target of a Stratagem while Battle-shocked.`
      },
      {
        title: 'Master of the Fleet',
        description: `During the Declare Battle Formations step, if your army includes this model, select one ADEPTUS ASTARTES INFANTRY unit from your army. That unit gains the Deep Strike ability.`
      }
    ]
  },
  rangedWeapons: [
    [{ ...rangedWeapons.boltPistol, ballisticSkill: 2 }],
    [rangedWeapons.invictus]
  ],
  meleeWeapons: [[meleeWeapons.swordOfIdaeus]],
  keywords: [
    KEYWORDS.INFANTRY,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.CAPTAIN,
    'URIEL VENTRIS'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 85 }
};

characters.roboute_guilliman = {
  name: 'ROBOUTE GUILLIMAN',
  move: 8,
  toughness: 9,
  save: 2,
  wounds: 10,
  leadership: 5,
  objectiveControl: 4,
  invulnerable: 4,
  abilities: {
    faction: [ABILITIES.OATHS],
    other: [
      {
        title: 'Author of the Codex',
        description: `In your Command phase, select one Author of the Codex ability. Until the start of your next Command phase, this model has that ability.`
      },
      {
        title: 'Ultramarines Bodyguard',
        description: `While this model is within 3" of one or more friendly ADEPTUS ASTARTES INFANTRY units, this model has the Lone Operative ability.`
      },
      {
        title: 'Armour of Fate',
        description:
          'The first time this model is destroyed, rolle one D6 at the end of the phase: on a 3+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with 6 wounds remaining.'
      }
    ],
    special: {
      'AUTHOR OF THE CODEX': [
        {
          title: 'Primarch of the XIII (Aura)',
          description:
            'While a friendly ADEPTUS ASTARTES unit is within 6" of this model, add 1 to the Objective Control characteristic of models in that unit and you can re-roll Battle-shock and Leadership tests taken for that unit.'
        },
        {
          title: 'Master of Battle',
          description:
            'After you have selected an enemy unit using the Oath of Moment ability, select a second enemy unit. Until the start of your next Command phase, if the first unit select has been destroyed, each time a friendly ADEPTUS ASTARTES model makes an attack that targets that second enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll.'
        },
        {
          title: 'Supreme Strategist',
          description:
            'Once per turn, you can target one friendly ADEPTUS ASTARTES unit within 12" of this model with a Stratagem for 0CP, and can do so even if another unit from your army has already been targeted with that Stratagem this phase.'
        }
      ]
    }
  },
  rangedWeapons: [[rangedWeapons.handOfDominion]],
  meleeWeapons: [[meleeWeapons.emperorsSword], [meleeWeapons.handOfDominion]],
  keywords: [
    KEYWORDS.MONSTER,
    KEYWORDS.CHARACTER,
    KEYWORDS.EPIC_HERO,
    KEYWORDS.IMPERIUM,
    KEYWORDS.PRIMARCH,
    'ROBOUTE GUILLIMAN'
  ],
  factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES, KEYWORDS.CHAPTER],
  unitComposition: { modelCount: 1, cost: 355 }
};

export { characters };
