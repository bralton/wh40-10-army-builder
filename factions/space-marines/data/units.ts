import { Unit } from '@/types';
import { KEYWORDS } from './keywords';
import { meleeWeapons, rangedWeapons } from './weapons';
import { characters } from './characters';
import { WEAPON_ABILITIES } from '@/enums';
import { ABILITIES } from './abilities';

export const troops: { [key: string]: Unit } = {
  hellblasters: {
    name: 'HELLBLASTER SQUAD',
    move: 6,
    toughness: 4,
    save: 3,
    wounds: 2,
    leadership: 6,
    objectiveControl: 1,
    abilities: {
      faction: [ABILITIES.OATHS],
      other: [
        {
          title: 'For the Chapter!',
          description: `Each time a model in this unit is destroyed, roll one D6: on a 3+, do not remove it from play. The destroyed model can shoot after the attacking model's unit has finished making its attacks, and is then removed from play. When resolving these attacks, any Hazardous tests taken for that attack are automatically passed.`
        }
      ]
    },
    rangedWeapons: [
      rangedWeapons.plasmaIncineratorStandard,
      rangedWeapons.plasmaIncineratorSupercharge,
      rangedWeapons.boltPistol,
      rangedWeapons.plasmaPistolStandard,
      rangedWeapons.plasmaPistolSupercharge
    ],
    meleeWeapons: [meleeWeapons.closeCombatWeapon],
    keywords: [
      KEYWORDS.INFANTRY,
      KEYWORDS.GRENADES,
      KEYWORDS.IMPERIUM,
      KEYWORDS.TACTICUS,
      'HELLBLASTER SQUAD'
    ],
    factionKeywords: [KEYWORDS.FACTION.ADEPTUS_ASTARTES],
    unitComposition: { modelCount: 5, cost: 125 },
    possibleCompositions: [
      { modelCount: 5, cost: 125 },
      { modelCount: 10, cost: 250 }
    ],
    possibleLeaders: [
      {
        character: characters.primaris_apothecary,
        secondLeader: [characters.primaris_lieutenant]
      },
      {
        character: characters.primaris_lieutenant,
        secondLeader: [characters.primaris_apothecary]
      }
    ]
  }
};
