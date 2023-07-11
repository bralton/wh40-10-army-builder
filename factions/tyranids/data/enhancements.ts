import { enhancement } from '@/types';

export const INVASION_FLEET_ENHANCEMENTS: { [key: string]: enhancement } = {
  alienCunning: {
    name: 'ALIEN CUNNING',
    description:
      'Tyranids model only. After both players have deployed their armies, select up to three Tyranids units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units were already in Strategic Reserves.'
  },
  perfectlyAdapted: {
    name: 'PERFECTLY ADAPTED',
    description:
      'Tyranids model only. Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.'
  },
  synapticLinchpin: {
    name: 'SYNAPTIC LINCHPIN',
    description:
      'Tyranids model only. While a friendly Tyranids unit is within 9" of the bearer, that unit is within Synapse Range of your army.'
  },
  adaptiveBiology: {
    name: 'ADAPTIVE BIOLOGY',
    description:
      'Tyranids model only. The bearer has the Feel No Pain 5+ ability. At the start of any turn, if the bearer has fewer than its starting number of wounds remaining, until the end of the battle, it has the Feel No Pain 4+ ability instead.'
  }
};
