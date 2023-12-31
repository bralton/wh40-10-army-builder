import React, { FC, useEffect, useState } from 'react';
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from 'reactstrap';
import { Detachment, DetachmentRule, Faction } from '@/types';
import { Stratagems } from '@/components/Stratagems';
import { ArmyList } from '@/components/ArmyList';

import styles from './armysheet.module.scss';

export const ArmySheet: FC<{ faction: Faction }> = ({ faction }) => {
  const [army, setArmy] = useState<Faction>();
  const [showDetachmentOptions, setShowDetachmentOptions] =
    useState<boolean>(false);
  const [detachmenDropdownOpen, setDetachmentDropdownOpen] = useState(false);
  const [detachment, setDetachment] = useState<Detachment>();
  const [detachmentRuleDropdownOpen, setDetachmentRuleDropdownOpen] =
    useState(false);
  const [detachmentRule, setDetachmentRule] = useState<DetachmentRule>();

  useEffect(() => {
    if (detachment) {
      if (Object.keys(detachment.detachmentRule).length > 1) {
        setShowDetachmentOptions(true);
      } else {
        setShowDetachmentOptions(false);
        setDetachmentRule(Object.values(detachment.detachmentRule)[0]);
      }
    }
  }, [detachment]);

  useEffect(() => {
    if (faction) {
      setArmy(faction);
    }
  }, [faction]);

  const toggleDetachmentRuleDropdown = () =>
    setDetachmentRuleDropdownOpen((prevState) => !prevState);

  const changeDetachmentRule = (rule: DetachmentRule) => {
    setDetachmentRule(rule);
  };

  return (
    <div className="container">
      <Row>
        <Col xs="7">
          <h1>{army?.factionName}</h1>
        </Col>
        <Col xs="5">
          <Dropdown
            isOpen={detachmenDropdownOpen}
            toggle={() => setDetachmentDropdownOpen(!detachmenDropdownOpen)}
            className="d-inline">
            <DropdownToggle caret>
              {detachment ? detachment.name : 'Detachment'}
            </DropdownToggle>
            <DropdownMenu>
              {army?.detachments
                ? Object.keys(army.detachments).map((key, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => setDetachment(army.detachments[key])}>
                      {army.detachments[key].name}
                    </DropdownItem>
                  ))
                : null}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      {detachment ? (
        <Row>
          <Col xs="12" lg="3">
            Detachment Rule:{' '}
            {showDetachmentOptions ? (
              <Dropdown
                isOpen={detachmentRuleDropdownOpen}
                toggle={toggleDetachmentRuleDropdown}
                className="d-inline">
                <DropdownToggle caret>Detachment Rule</DropdownToggle>
                <DropdownMenu>
                  {Object.keys(detachment.detachmentRule).map((key, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() =>
                        changeDetachmentRule(detachment.detachmentRule[key])
                      }>
                      {detachment.detachmentRule[key].name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : null}
          </Col>
          <Col xs="12" lg="9">
            {detachmentRule ? (
              <>
                <p>
                  <b>{detachmentRule.name}</b>
                </p>
                <p className={styles.detachmentRule}>
                  {detachmentRule.description}
                </p>
              </>
            ) : null}
          </Col>
        </Row>
      ) : null}
      {detachment ? (
        <Row>
          <Col>
            <Stratagems hidden={true} stratagems={detachment.stratagems} />
          </Col>
        </Row>
      ) : null}
      {detachment && detachmentRule ? (
        <ArmyList
          detachment={detachment}
          selectedDetachmentRule={detachmentRule}
        />
      ) : null}
    </div>
  );
};
