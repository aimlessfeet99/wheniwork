import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useStore } from "store/index";
import { fetchPeople } from "store/actions";
import { People } from "interfaces/index";
import { useParams } from "react-router-dom";
import Characters from "./characters";
import CharactersPagination from "./pagination";
import Detail from "./character/detail";

const Home = () => {
  const { state, dispatch } = useStore();
  const { id = 1 } = useParams();
  const { people } = state;
  const [filteredPeople, setFilteredPeople] = useState<People>(people);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(id) {
      onPeople(Number(id));
    }
  }, [id]);

  const onPeople = async (page: number) => {
    setLoading(true);
    try {
      const action = await fetchPeople(page);
      dispatch(action);
      setFilteredPeople(action.payload);
    } catch (error: any) {
      console.error("Error fetching character details:", error);
      setError(error.message);
    }
    setLoading(false);
  };

  const onSearch = (keyword: string) => {
    setFilteredPeople((prev) => {
      return {
        ...prev,
        results: keyword ? prev.results.filter(({ name }: any) => name.includes(keyword)) : people.results
      }
    })
  }

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-3">Star Wars Characters</h1>
      <Row className="justify-content-center mb-5">
        <Col sm={4}>
          <div className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </Col>
      </Row>
      {error && <div className="text-center">Error: {error}</div>}
      <Characters characters={filteredPeople.results} loading={loading} />
      <CharactersPagination />
      <Detail />
    </Container>
  );
};

export default Home;

// {/* {showModal ? <WhenHomeModal handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} showModal={showModal} {...props} /> : null} */}
