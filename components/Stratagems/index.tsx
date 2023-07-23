import React, { FC, useState } from 'react';

import styles from './stratagems.module.scss';
import { Stratagem } from '@/types';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const Stratagems: FC<{
  stratagems: Stratagem[];
  hidden: boolean;
}> = ({ stratagems, hidden }) => {
  const [hideContent, setHideContent] = useState(hidden);

  return (
    <div
      className={`container ${styles.stratagems} border border-5 border-secondary m-2 rounded-3`}>
      <Row className="p-3">
        <Col sm="11">
          <h1>STRATAGEMS</h1>
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
      <Row
        className={`${styles.stratagemBody} ${hideContent ? 'collapse' : ''}`}>
        {stratagems
          ? stratagems.map((stratagem, index) => (
              <Col
                key={index}
                xs="12"
                sm="6"
                lg="3"
                className={`${styles.stratagem} border border-1 border-secondary`}>
                <div className="container">
                  <Row className="p-1">
                    <Col>
                      {stratagem.name} - <b>{stratagem.cost}CP</b>
                    </Col>
                  </Row>
                  <Row className="p-1">
                    <Col>
                      <b>WHEN:</b> {stratagem.when}
                    </Col>
                  </Row>
                  <Row className="p-1">
                    <Col>
                      <b>TARGET:</b> {stratagem.target}
                    </Col>
                  </Row>
                  <Row className="p-1">
                    <Col>
                      <b>EFFECT:</b> {stratagem.effect}
                    </Col>
                  </Row>
                  {stratagem.restrictions ? (
                    <Row className="p-1">
                      <Col>
                        <b>RESTRICTIONS:</b> {stratagem.restrictions}
                      </Col>
                    </Row>
                  ) : null}
                </div>
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};
