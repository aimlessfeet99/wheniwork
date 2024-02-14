import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Popover,
  PopoverBody,
  PopoverHeader,
  Row,
} from "reactstrap";
import { Character } from "interfaces/index";
import { useStore } from "store/index";
import { fetchCharacter } from "store/actions";
import { dateFormatter } from "helpers/index";

const CharacterCard: React.FC<Character & {color: any}> = ({ name, height, birth_year, mass, created, url, color, species }) => {
  const { dispatch } = useStore();
  const [pophover, setPophover] = useState(false);
  const [speciesId, setSpeciesId] = useState<string>("");
  const id = url?.split("")[url.length - 2];

  useEffect(() => {
    if(species?.length) {
      setSpeciesId(species[0].split("")[species[0].length - 2]);
    }
  },[species])

  const onClick = async () => {
    if (url) {
      dispatch(await fetchCharacter(url));
    }
  };

  console.log("speciesId ==> ", speciesId)

  return (
    <>
      {id && (
        <Popover
          isOpen={pophover}
          target={"character" + id}
          toggle={() => {
            setPophover(!pophover);
          }}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody style={{ width: "350px" }}>
            <Row>
              <Col xs={4}>
                <b>Height</b>
              </Col>
              <Col xs={8}>{Number(height)/100}m</Col>
            </Row>
            <Row>
              <Col xs={4}>
                <b>Mass</b>
              </Col>
              <Col xs={8}>{mass}kg</Col>
            </Row>
            <Row>
              <Col xs={4}>
                <b>Joining Date</b>
              </Col>
              <Col xs={8}>{created && dateFormatter(created)}</Col>
            </Row>
            <Row>
              <Col xs={4}>
                <b>Year Of Birth</b>
              </Col>
              <Col xs={8}>{birth_year}</Col>
            </Row>
          </PopoverBody>
        </Popover>
      )}
      <Card
        id={"character" + id}
        style={{ border: "1px solid black", margin: "3px", background: color(String(speciesId)) }}
        onMouseEnter={() => {
          setPophover(true);
        }}
        onMouseLeave={() => {
          setPophover(false);
        }}
        onClick={onClick}
      >
        <CardBody>
          <h6>{name}</h6>
        </CardBody>
      </Card>
    </>
  );
};

export default CharacterCard;
