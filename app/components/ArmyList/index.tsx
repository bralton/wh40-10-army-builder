import React, { FC, useEffect, useState } from 'react';

import styles from './armylist.module.scss';
import { Detachment, DetachmentRule, Enhancement, Unit } from '@/types';
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from 'reactstrap';
import { DataCard } from '../DataCard';

export const ArmyList: FC<{
  detachment: Detachment;
  selectedDetachmentRule: DetachmentRule;
}> = ({ detachment, selectedDetachmentRule }) => {
  const [detachmentName, setDetachmentName] = useState<string>();
  const [detachmentRule, setDetachmentRule] = useState<DetachmentRule>();
  const [fullArmyList, setFullArmyList] = useState<{
    [x: string]: Unit;
  }>();
  const [availableEnhancements, setAvailableEnhancements] = useState<
    Enhancement[]
  >([]);
  const [unitsInArmy, setUnitsInArmy] = useState<Unit[]>([]);
  const [unitToBeAdded, setUnitToBeAdded] = useState<Unit>();
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  if (!detachmentName || detachment.name !== detachmentName) {
    setDetachmentName(detachment.name);
    setUnitsInArmy([]);
    setUnitDropdownOpen(false);
    setUnitToBeAdded(undefined);
    setFullArmyList({ ...detachment.units });
    setAvailableEnhancements([...detachment.enhancements]);
  }
  if (detachmentRule?.name !== selectedDetachmentRule.name) {
    setDetachmentRule(selectedDetachmentRule);
  }

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

        if (unit.secondLeader) {
          pointCount = pointCount + unit.secondLeader.unitComposition.cost;
          if (unit.secondLeader.enhancement) {
            pointCount = pointCount + unit.secondLeader.enhancement.cost;
          }
        }
      }
      setTotalPoints(pointCount);
    } else {
      setTotalPoints(0);
    }
  }, [unitsInArmy]);

  useEffect(() => {
    if (detachmentRule && unitToBeAdded) {
      setUnitToBeAdded(detachmentRule.change(unitToBeAdded));
    }
  }, [unitToBeAdded, detachmentRule]);

  useEffect(() => {
    if (detachmentRule && unitsInArmy) {
      const units = unitsInArmy.map((unit) => detachmentRule.change(unit));
      setUnitsInArmy(units);
    }
  }, [detachmentRule, unitsInArmy]);

  const toggleUnitDropdown = () =>
    setUnitDropdownOpen((prevState) => !prevState);

  const addUnitToArmy = (unit: Unit) => {
    if (unit) {
      const newUnitsInArmy = [...unitsInArmy, unit];
      setUnitToBeAdded(undefined);
      setUnitsInArmy(newUnitsInArmy);
    }
  };

  const changeUnitToBeAdded = (unit: Unit) => {
    if (unitToBeAdded?.enhancement) {
      setAvailableEnhancements([
        ...availableEnhancements,
        unitToBeAdded.enhancement
      ]);
    }
    if (unitToBeAdded?.leader?.enhancement) {
      setAvailableEnhancements([
        ...availableEnhancements,
        unitToBeAdded.leader.enhancement
      ]);
    }
    setUnitToBeAdded(unit);
  };

  const updateUnitPreview = (unit: Unit) => {
    setUnitToBeAdded(unit);
  };

  const updateUnitInRoster = (unit: Unit | undefined, index: number) => {
    const tempRoster = [...unitsInArmy];
    if (unit) {
      tempRoster[index] = unit;
    } else {
      const tempUnit = { ...tempRoster[index] };

      const enhancementsToReturn = [...availableEnhancements];
      if (tempUnit.enhancement) {
        enhancementsToReturn.push(tempUnit.enhancement);
      }
      if (tempUnit?.leader?.enhancement) {
        enhancementsToReturn.push(tempUnit.leader.enhancement);
      }
      if (tempUnit?.secondLeader?.enhancement) {
        enhancementsToReturn.push(tempUnit.secondLeader.enhancement);
      }
      setAvailableEnhancements(enhancementsToReturn);

      tempRoster.splice(index, 1);
    }
    setUnitsInArmy(tempRoster);
  };

  const updateEnhancements = (newEnhancements: Enhancement[]) => {
    setAvailableEnhancements([...newEnhancements]);
  };

  return (
    <div>
      <Row>
        <Col>
          <Dropdown isOpen={unitDropdownOpen} toggle={toggleUnitDropdown}>
            <DropdownToggle caret>Units</DropdownToggle>
            <DropdownMenu>
              {fullArmyList
                ? Object.keys(fullArmyList).map((key, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => changeUnitToBeAdded(fullArmyList[key])}>
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
                removeUnit={(unit) => setUnitToBeAdded(undefined)}
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
              updateEnhancements={updateEnhancements}
              removeUnit={(unit) => {
                updateUnitInRoster(undefined, index);
              }}></DataCard>
          </Col>
        </Row>
      ))}
    </div>
  );
};
