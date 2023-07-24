import React, { FC, useState } from 'react';

import styles from './faction.module.scss';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Faction: FC<{
  factionName: string;
  route: string;
}> = ({ factionName, route }) => {
  return (
    <Row className="my-3">
      <Col sm="5" className={`${styles.faction} rounded-3 bg-info`}>
        <Link
          href={`${route}`}
          className="text-reset text-decoration-none pt-3">
          {factionName}
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Link>
      </Col>
      <Col xs="0" sm="7"></Col>
    </Row>
  );
};
