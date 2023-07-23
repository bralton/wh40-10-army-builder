import { CORE_ABILITIES } from '@/enums';

export const ABILITIES = {
  ...CORE_ABILITIES,
  OATHS: 'Oath of Moment',
  RITES_OF_BATTLE: {
    title: 'Rites of Battle',
    description:
      'Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase.'
  },
  FINEST_HOUR: {
    title: 'Finest Hour',
    description: `Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability.`
  },
  LITANY_OF_HATE: {
    title: 'Litany of Hate',
    description:
      'While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll.'
  },
  SPIRITUAL_LEADER: {
    title: 'Spiritual Leader',
    description:
      'Once per battle, at the start of any phase, you can select one friendly Adeptus Astartes unit that is Battle-shocked and within 12" of this model. That unit is no longer Battle-shocked.'
  },
  ASTARTES_BANNER: {
    title: 'Astartes Banner',
    description:
      'While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.'
  },
  TACTICAL_PRECISION: {
    title: 'Tactical Precision',
    description:
      'While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.'
  },
  TARGET_PRIORITY: {
    title: 'Target Priority',
    description: `This model's unit is eligible to shoot and declare a charge in a turn in which it Fell Back.`
  },
  TECHMARINE: {
    title: 'Techmarine',
    description: `While this model is within 3" of one or more friendly ADEPTUS ASTARTES VEHICLE units, this model has the Lone Operative ability.`
  },
  BLESSING_OF_THE_OMNISSIAH: {
    title: 'Blessing of the Omnissiah',
    description:
      'In your Command phase, you can select one friendly ADEPTUS ASTARTES VEHICLE model within 3" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.'
  },
  VENGEANCE_OF_THE_OMNISSIAH: {
    title: 'Vengeance of the Omnissiah',
    description:
      'If a friendly ADEPTUS ASTARTES VEHICLE model is destroyed within 12" of this model, until the end of the battle, this models Omnissian power axe has an Attacks characteristic of 7.'
  },
  PSYCHIC_HOOD: {
    title: 'Psychic Hood',
    description:
      'While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks'
  },
  MENTAL_FORTRESS: {
    title: 'Mental Fortress (Psychic)',
    description:
      'While this model is leading a unit, models in that unit have a 4+ invulnerable save.'
  }
};
