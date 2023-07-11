import { DataCard } from '@/app/components';
import { detachment, detachmentRule, enhancement, unit } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from 'reactstrap';
import { troops } from './data/units';
import { characters } from './data/characters';
import { DETACHMENTS } from './data/detachments';
import { Stratagems } from '@/app/components/Stratagems';
import { INVASION_FLEET_ENHANCEMENTS } from './data/enhancements';

export const ArmyBuilder: FC<{}> = () => {
  const [unitsInArmy, setUnitsInArmy] = useState<unit[]>([]);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [detachmenDropdownOpen, setDetachmentDropdownOpen] = useState(false);
  const [detachment, setDetachment] = useState<detachment>();
  const [detachmentRuleDropdownOpen, setDetachmentRuleDropdownOpen] =
    useState(false);
  const [detachmentRule, setDetachmentRule] = useState<detachmentRule>();
  const [unitToBeAdded, setUnitToBeAdded] = useState<unit>();
  const [fullArmyList, setFullArmyList] = useState<{
    [x: string]: unit;
  }>();
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [availableEnhancements, setAvailableEnhancements] = useState<
    enhancement[]
  >([]);

  useEffect(() => {
    if (unitsInArmy.length > 0) {
      let pointCount = 0;
      for (const unit of unitsInArmy) {
        pointCount = pointCount + unit.unitComposition.cost;
        if (unit.enhancement) {
          pointCount = pointCount + unit.enhancement.cost;
        }

        if (unit.leader) {
          pointCount = pointCount + unit.leader.unitComposition.cost;
          if (unit.leader.enhancement) {
            pointCount = pointCount + unit.leader.enhancement.cost;
          }
        }
      }
      setTotalPoints(pointCount);
    } else {
      setTotalPoints(0);
    }
  }, [unitsInArmy]);

  useEffect(() => {
    setFullArmyList({ ...characters, ...troops });
    setAvailableEnhancements([...INVASION_FLEET_ENHANCEMENTS]);
  }, []);

  useEffect(() => {
    if (detachmentRule && unitToBeAdded) {
      setUnitToBeAdded(detachmentRule.change(unitToBeAdded));
    }
  }, [unitToBeAdded, detachmentRule]);

  const toggleUnitDropdown = () =>
    setUnitDropdownOpen((prevState) => !prevState);
  const toggleDetachmentRuleDropdown = () =>
    setDetachmentRuleDropdownOpen((prevState) => !prevState);

  const addUnitToArmy = (unit: unit) => {
    if (unit) {
      const newUnitsInArmy = [...unitsInArmy, unit];
      setUnitToBeAdded(undefined);
      setUnitsInArmy(newUnitsInArmy);
    }
  };

  const changeDetachmentRule = (rule: detachmentRule) => {
    setDetachmentRule(rule);
    if (unitsInArmy) {
      setUnitsInArmy(unitsInArmy.map((unit) => rule.change(unit)));
    }
    if (unitToBeAdded) {
      setUnitToBeAdded(rule.change(unitToBeAdded));
    }
  };

  const updateUnitPreview = (unit: unit) => {
    setUnitToBeAdded(unit);
  };

  const updateUnitInRoster = (unit: unit, index: number) => {
    const tempRoster = unitsInArmy;

    tempRoster[index] = unit;

    setUnitsInArmy(tempRoster);
  };

  const updateEnhancements = (newEnhancements: enhancement[]) => {
    console.log('look here', newEnhancements);
    setAvailableEnhancements([...newEnhancements]);
  };

  return (
    <div className="container">
      <Row>
        <Col>
          Tyranids -{' '}
          <Dropdown
            isOpen={detachmenDropdownOpen}
            toggle={() => setDetachmentDropdownOpen(!detachmenDropdownOpen)}
            className="d-inline">
            <DropdownToggle caret>
              {detachment ? detachment.name : 'Detachment'}
            </DropdownToggle>
            <DropdownMenu>
              {DETACHMENTS
                ? Object.keys(DETACHMENTS).map((key, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => setDetachment(DETACHMENTS[key])}>
                      {DETACHMENTS[key].name}
                    </DropdownItem>
                  ))
                : null}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      {detachment ? (
        <Row>
          <Col sm="3">
            Detachment Rule:{' '}
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
          </Col>
          <Col sm="9">
            {detachmentRule ? (
              <>
                <p>
                  <b>{detachmentRule.name}</b>
                </p>
                <p>{detachmentRule.description}</p>
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
      <Row>
        <Col>
          <Dropdown isOpen={unitDropdownOpen} toggle={toggleUnitDropdown}>
            <DropdownToggle caret>Units</DropdownToggle>
            <DropdownMenu>
              {fullArmyList
                ? Object.keys(fullArmyList).map((key, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => setUnitToBeAdded(fullArmyList[key])}>
                      {fullArmyList[key].name}
                    </DropdownItem>
                  ))
                : null}
            </DropdownMenu>
          </Dropdown>
          {unitToBeAdded ? (
            <>
              <DataCard
                unit={unitToBeAdded}
                hidden={false}
                enhancements={availableEnhancements}
                updateUnit={updateUnitPreview}
                updateEnhancements={updateEnhancements}
              />
              <Button onClick={() => addUnitToArmy(unitToBeAdded)}>
                Add {unitToBeAdded.name} to Army Roster
              </Button>
            </>
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col xs="9">Army Roster:</Col>
        <Col xs="3">Total Points: {totalPoints}</Col>
      </Row>
      {unitsInArmy.map((unit, index) => (
        <Row key={index}>
          <Col>
            <DataCard
              unit={unit}
              hidden={true}
              enhancements={availableEnhancements}
              updateUnit={(unit) => updateUnitInRoster(unit, index)}
              updateEnhancements={updateEnhancements}></DataCard>
          </Col>
        </Row>
      ))}
    </div>
  );
};
