import React, { FC, useState } from 'react';
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
  faCrosshairs,
  faHammer
} from '@fortawesome/free-solid-svg-icons';

import { unit } from '@/types';
import styles from './dataCard.module.scss';

export const BuildCard: FC<{ unit: unit; hidden: boolean; setLeader: any }> = ({
  unit,
  hidden,
  setLeader
}) => {
  const [hideContent, setHideContent] = useState(hidden);
  const [leaderDropdownOpen, setLeaderDropdownOpen] = useState(false);

  return (
    <div
      className={`data-card container ${styles.dataCard} border border-5 border-secondary m-2 rounded-3`}>
      <Row className="p-3">
        <Col sm="11">
          <h1>{unit.name}</h1>
        </Col>
        <Col sm="1">
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
              {unit.move + '"'}
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
          {unit.fnp || unit?.leadStats?.fnp ? (
            <Col
              className={`${styles.dataCardHeaderItem} d-flex justify-content-center align-items-center my-1`}
              sm="6"
              md="6">
              <span className={styles.statHeader}>FNP</span>
              <div className={`${styles.statBox} py-3 rounded-3`}>
                {unit.fnp ? unit.fnp + '+' : ''}
                <span
                  className={`${styles.leaderStats} ${styles.leaderChange}`}>
                  {unit.leadStats?.fnp ? unit.leadStats.fnp + '+' : ''}
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
                      <td></td>
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
                      <td></td>
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
                  <tr>
                    <td>
                      CORE: <b>{unit.abilities.core.join(', ')}</b>
                    </td>
                  </tr>
                ) : null}
                {unit.abilities.faction ? (
                  <tr>
                    <td>
                      FACTION: <b>{unit.abilities.faction.join(', ')}</b>
                    </td>
                  </tr>
                ) : null}
                {unit.abilities.other
                  ? unit.abilities.other.map((ability, index) => (
                      <tr key={index}>
                        <td>
                          <b>{ability.title}:</b> {ability.description}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
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
