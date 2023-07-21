import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faCircleXmark,
  faCrosshairs,
  faFlag,
  faHammer
} from '@fortawesome/free-solid-svg-icons';

import { Enhancement, Unit } from '@/types';
import styles from './dataCard.module.scss';
import { CORE_KEYWORDS } from '@/enums';

export const BuildCard: FC<{
  unit: Unit;
  hidden: boolean;
  enhancements: Enhancement[];
  setLeader: any;
  setUnitComposition: any;
  applyEnhancement: any;
  removeUnit: any;
}> = ({
  unit,
  hidden,
  enhancements,
  setLeader,
  setUnitComposition,
  applyEnhancement,
  removeUnit
}) => {
  const [hideContent, setHideContent] = useState(hidden);
  const [leaderDropdownOpen, setLeaderDropdownOpen] = useState(false);
  const [enhancementDropdownOpen, setEnhancementDropdownOpen] = useState(false);
  const [unitCompositionDropdownOpen, setUnitCompositionDropdownOpen] =
    useState(false);
  const [displayEnhancements, setDisplayEnhancement] = useState(false);
  const [availableEnhancements, setAvailableEnhancements] =
    useState<Enhancement[]>();

  useEffect(() => {
    const keywords = [...unit.keywords, ...unit.factionKeywords];
    if (
      keywords.includes(CORE_KEYWORDS.CHARACTER) &&
      !keywords.includes(CORE_KEYWORDS.EPIC_HERO)
    ) {
      setDisplayEnhancement(true);
    } else {
      setDisplayEnhancement(false);
    }

    const tempEnhancements = enhancements.filter((enhancement) => {
      return enhancement.restrictionKeywords
        ? enhancement.restrictionKeywords.every(
            (e) => keywords.includes(e) || unit.name.includes(e)
          )
        : true;
    });

    setAvailableEnhancements(tempEnhancements);
  });

  return (
    <div
      className={`data-card container ${styles.dataCard} border border-5 border-secondary m-2 rounded-3`}>
      <Row className="p-3">
        <Col xs="12" sm="12" md="5">
          <h1>{unit.name}</h1>
        </Col>
        <Col xs="12" sm="7" md="3">
          Unit Composition:{' '}
          {unit.possibleCompositions ? (
            <Dropdown
              isOpen={unitCompositionDropdownOpen}
              toggle={() =>
                setUnitCompositionDropdownOpen(!unitCompositionDropdownOpen)
              }
              className="d-inline">
              <DropdownToggle caret className="py-0">
                {unit.unitComposition.modelCount +
                  ' Model' +
                  (unit.unitComposition.modelCount > 1 ? 's' : '')}
              </DropdownToggle>
              <DropdownMenu>
                {unit.possibleCompositions.map((combo, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => setUnitComposition(combo)}>
                    {combo.modelCount} Model{combo.modelCount > 1 ? 's' : ''}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            unit.unitComposition.modelCount +
            ' Model' +
            (unit.unitComposition.modelCount > 1 ? 's' : '')
          )}
        </Col>
        <Col xs="10" sm="3" md="2">
          Cost:{' '}
          {unit.unitComposition.cost +
            (unit.enhancement ? unit.enhancement.cost : 0)}{' '}
          points
        </Col>
        <Col xs="1" sm="1" md="1">
          <Button onClick={() => removeUnit()}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </Button>
        </Col>
        <Col xs="1" sm="1" md="1">
          <Button onClick={() => setHideContent(!hideContent)}>
            {hideContent ? (
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
            )}
          </Button>
        </Col>
      </Row>
      <div className={hideContent ? 'collapse' : ''}>
        <Row
          className={`${styles.dataCardHeader} p-3 border-bottom border-2 border-success`}>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>M</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.move > 0
                ? unit.move + (unit.minimumMovement ? '+' : '') + '"'
                : '-'}
            </div>
          </Col>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>T</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.toughness}
            </div>
          </Col>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>SV</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.save + '+'}
            </div>
          </Col>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>W</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.wounds}
            </div>
          </Col>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>LD</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.leadership + '+'}
            </div>
          </Col>
          <Col
            className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
            sm="6"
            md="4"
            lg="2">
            <span className={styles.statHeader}>OC</span>
            <div className={`${styles.statBox} py-3 rounded-3`}>
              {unit.objectiveControl}
            </div>
          </Col>
          {unit.invulnerable ? (
            <Col
              className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
              sm="6"
              md="6">
              <span className={styles.statHeader}>INV</span>
              <div className={`${styles.statBox} py-3 rounded-3`}>
                {unit.invulnerable + '+'}
              </div>
            </Col>
          ) : null}
          {unit.fnp || unit?.leadStats?.fnp || unit?.enhancementStats?.fnp ? (
            <Col
              className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
              sm="6"
              md="6">
              <span className={styles.statHeader}>FNP</span>
              <div className={`${styles.statBox} py-3 rounded-3`}>
                {unit.fnp ? unit.fnp + '+' : ''}
                <span
                  className={`${styles.leaderStats} ${styles.leaderChange}`}>
                  {unit.leadStats?.fnp ? ' ' + unit.leadStats.fnp + '+' : ''}
                </span>
                <span
                  className={`${styles.leaderStats} ${styles.enhancementChange}`}>
                  {unit.enhancementStats?.fnp
                    ? ' ' + unit.enhancementStats.fnp + '+'
                    : ''}
                </span>
              </div>
            </Col>
          ) : null}
        </Row>
        <Row className={`${styles.dataCardBody} py-3`}>
          <Col
            sm="12"
            md="8"
            className="border-end border-3 border-black px-0 ">
            {unit.rangedWeapons ? (
              <Table className={`${styles.weaponTable} py-3`}>
                <thead>
                  <tr className={`${styles.weaponHeader}`}>
                    <th>
                      <FontAwesomeIcon icon={faCrosshairs} />
                    </th>
                    <th>RANGED WEAPONS</th>
                    <th>RANGE</th>
                    <th>A</th>
                    <th>BS</th>
                    <th>S</th>
                    <th>AP</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.rangedWeapons.map((weapon, index) => (
                    <tr key={index} className={`${styles.weaponRow}`}>
                      <td>
                        {weapon.profile ? (
                          <FontAwesomeIcon icon={faFlag} />
                        ) : null}
                      </td>
                      <td>
                        {weapon.name}
                        {weapon.abilities ? (
                          <span className={`${styles.weaponAbilities}`}>
                            [{weapon.abilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                        {weapon.detachmentAbilities ? (
                          <span
                            className={`${styles.weaponDetachmentAbilities} ${styles.detachmentChange}`}>
                            [{weapon.detachmentAbilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                        {weapon.leaderAbilities ? (
                          <span
                            className={`${styles.weaponLeaderAbilities} ${styles.leaderChange}`}>
                            [{weapon.leaderAbilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                      </td>
                      <td>{weapon.range + '"'}</td>
                      <td>
                        {weapon.variableAttacks ? weapon.variableAttacks : ''}
                        {weapon.variableAttacks && weapon.fixedAttacks > 0
                          ? '+'
                          : ''}
                        {weapon.fixedAttacks > 0 ? weapon.fixedAttacks : ''}
                      </td>
                      <td>
                        {weapon.ballisticSkill > 1
                          ? weapon.ballisticSkill + '+'
                          : 'N/A'}
                      </td>
                      <td>{weapon.strength}</td>
                      <td>{weapon.armourPiercing}</td>
                      <td>
                        {weapon.variableDamage ? weapon.variableDamage : ''}
                        {weapon.variableDamage && weapon.fixedDamage > 0
                          ? '+'
                          : ''}
                        {weapon.fixedDamage > 0 ? weapon.fixedDamage : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
            {unit.meleeWeapons ? (
              <Table className={`${styles.weaponTable} py-3`}>
                <thead>
                  <tr className={`${styles.weaponHeader}`}>
                    <th>
                      <FontAwesomeIcon icon={faHammer} />
                    </th>
                    <th>MELEE WEAPONS</th>
                    <th>RANGE</th>
                    <th>A</th>
                    <th>WS</th>
                    <th>S</th>
                    <th>AP</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.meleeWeapons.map((weapon, index) => (
                    <tr key={index} className={`${styles.weaponRow}`}>
                      <td>
                        {weapon.profile ? (
                          <FontAwesomeIcon icon={faFlag} />
                        ) : null}
                      </td>
                      <td>
                        {weapon.name}
                        {weapon.abilities ? (
                          <span className={`${styles.weaponAbilities}`}>
                            [{weapon.abilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                        {weapon.detachmentAbilities ? (
                          <span
                            className={`${styles.weaponDetachmentAbilities} ${styles.detachmentChange}`}>
                            [{weapon.detachmentAbilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                        {weapon.leaderAbilities ? (
                          <span
                            className={`${styles.weaponLeaderAbilities} ${styles.leaderChange}`}>
                            [{weapon.leaderAbilities.join(', ')}]
                          </span>
                        ) : (
                          ''
                        )}
                      </td>
                      <td>Melee</td>
                      <td>
                        {weapon.variableAttacks ? weapon.variableAttacks : ''}
                        {weapon.variableAttacks && weapon.fixedAttacks > 0
                          ? '+'
                          : ''}
                        {weapon.fixedAttacks > 0 ? weapon.fixedAttacks : ''}
                      </td>
                      <td>
                        {weapon.weaponSkill > 1
                          ? weapon.weaponSkill + '+'
                          : 'N/A'}
                      </td>
                      <td>{weapon.strength}</td>
                      <td>{weapon.armourPiercing}</td>
                      <td>
                        {weapon.variableDamage ? weapon.variableDamage : ''}
                        {weapon.variableDamage && weapon.fixedDamage > 0
                          ? '+'
                          : ''}
                        {weapon.fixedDamage > 0 ? weapon.fixedDamage : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </Col>
          <Col sm="12" md="4" className="px-4">
            <Table className={`${styles.abilityTable}`}>
              <thead>
                <tr className={`${styles.abilityHeader}`}>
                  <th>ABILITIES</th>
                </tr>
              </thead>
              <tbody>
                {unit.abilities.core ? (
                  <tr className={styles.abilityRow}>
                    <td>
                      CORE: <b>{unit.abilities.core.join(', ')}</b>
                    </td>
                  </tr>
                ) : null}
                {unit.abilities.faction ? (
                  <tr className={styles.abilityRow}>
                    <td>
                      FACTION: <b>{unit.abilities.faction.join(', ')}</b>
                    </td>
                  </tr>
                ) : null}
                {unit.abilities.other
                  ? unit.abilities.other.map((ability, index) => (
                      <tr key={index} className={styles.abilityRow}>
                        <td>
                          <b>{ability.title}:</b> {ability.description}
                        </td>
                      </tr>
                    ))
                  : null}
                {unit.enhancementStats?.abilities?.other
                  ? unit.enhancementStats.abilities.other.map(
                      (ability, index) => (
                        <tr key={index} className={styles.abilityRow}>
                          <td className={styles.enhancementChange}>
                            <b>{ability.title}:</b> {ability.description}
                          </td>
                        </tr>
                      )
                    )
                  : null}
              </tbody>
            </Table>
            {unit.wargearAbilities ? (
              <Table className={`${styles.abilityTable}`}>
                <thead>
                  <tr className={`${styles.abilityHeader}`}>
                    <th>WARGEAR ABILITIES</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.wargearAbilities.map((ability, index) => (
                    <tr key={index} className={styles.abilityRow}>
                      <td>
                        <b>{ability.title}:</b> {ability.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
            {unit.damaged ? (
              <Table className={`${styles.damagedTable}`}>
                <thead>
                  <tr className={`${styles.damagedHeader}`}>
                    <th>DAMAGED: {unit.damaged.range} WOUNDS REMAINING</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{unit.damaged.description}</td>
                  </tr>
                </tbody>
              </Table>
            ) : null}
            {unit.transportUnits ? (
              <Table className={`${styles.damagedTable}`}>
                <thead>
                  <tr className={`${styles.damagedHeader}`}>
                    <th>TRANSPORT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{unit.transportUnits}</td>
                  </tr>
                </tbody>
              </Table>
            ) : null}
            {unit.possibleLeaders ? (
              <div className={styles.leaderBox}>
                <p>
                  <b>Leader:</b> {unit.leader ? unit.leader.name : 'NONE'}
                </p>
                <Dropdown
                  isOpen={leaderDropdownOpen}
                  toggle={() => setLeaderDropdownOpen(!leaderDropdownOpen)}>
                  <DropdownToggle caret>Change Leader</DropdownToggle>
                  <DropdownMenu>
                    {unit.possibleLeaders.map((leader, index) => (
                      <DropdownItem
                        key={index}
                        onClick={() => setLeader(leader)}>
                        {leader.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
            {displayEnhancements ? (
              <div className={styles.leaderBox}>
                <p>
                  <b>Enhancement:</b>{' '}
                  {unit.enhancement ? unit.enhancement.name : 'NONE'}
                </p>
                <Dropdown
                  isOpen={enhancementDropdownOpen}
                  toggle={() =>
                    setEnhancementDropdownOpen(!enhancementDropdownOpen)
                  }>
                  <DropdownToggle caret>Change Enhancement</DropdownToggle>
                  <DropdownMenu>
                    {availableEnhancements
                      ? availableEnhancements.map((enhancement, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => applyEnhancement(enhancement)}>
                            {enhancement.name}
                          </DropdownItem>
                        ))
                      : null}
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
          </Col>
        </Row>
        <Row className={`${styles.keywordFooter} px-4`}>
          <Col sm="12" md="8" className={`${styles.keywords}`}>
            <div>
              KEYWORDS: <b>{unit.keywords.join(', ')}</b>
            </div>
          </Col>
          <Col sm="12" md="4" className={`${styles.factionKeywords}`}>
            <div>
              FACTION KEYWORDS: <b>{unit.factionKeywords.join(', ')}</b>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
