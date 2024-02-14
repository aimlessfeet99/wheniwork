import React from 'react';
import { Character } from "interfaces/index";
import Modal from "components/modal"
import { useStore } from 'store/index';
import { cleanCharacter } from 'store/actions';
import { Col, Container, Row } from 'reactstrap';

const Detail: React.FC<Character> = ({ name }) => {
  const { state, dispatch } = useStore();
  return (
    <Modal
      show={!!state.character.name}
      title={state.character.name}
      toggle={() => {
        dispatch(cleanCharacter());
      }}
    >
      <Container>
        <Row>
          <Col xs={4}><b>Homeworld</b></Col>
          <Col xs={8}>{state.character.homeworld?.name}</Col>
        </Row>
        <Row>
          <Col xs={4}><b>Terrain</b></Col>
          <Col xs={8}>{state.character.homeworld?.terrain}</Col>
        </Row>
        <Row>
          <Col xs={4}><b>Climate</b></Col>
          <Col xs={8}>{state.character.homeworld?.climate}</Col>
        </Row>
        <Row>
          <Col xs={4}><b>Residents</b></Col>
          <Col xs={8}>{state.character.homeworld?.residents.length}</Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default Detail
