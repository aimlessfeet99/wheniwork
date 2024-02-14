import React, { useCallback } from "react";
import { Col, Container, Row } from "reactstrap";
import { Character } from "interfaces/index";
import CharacterCard from "../character";
import { getColor } from "helpers/index";

const Characters: React.FC<{ characters: Character[]; loading: boolean }> = ({
  characters,
  loading,
}) => {
  const color = useCallback(getColor(), []);

  return (
    <Container style={{ height: "450px", overflow: "auto" }}>
      {!loading ? (
        <Row className="cards-container">
          {characters.map((character: Character, index: number) => (
            <Col key={index} xs={3} className="pb-4">
              <CharacterCard {...character} color={color} />
            </Col>
          ))}
        </Row>
      ) : (
        <h2 className="text-center ">Loading…</h2>
      )}
    </Container>
  );
};

export default Characters;
