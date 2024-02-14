import Pagination from "react-bootstrap/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "store/index";

const CharactersPagination = () => {
  const { state } = useStore();
  const { id = 1 } = useParams();
  const { people } = state;
  const navigate = useNavigate();

  const onPage = (url?: string | null) => {
    if (url) {
      const urlObj: URL = new URL(url);
      const page = new URLSearchParams(urlObj.search).get("page");
      if (page) {
        navigate("/" + page);
      }
    }
  };

  return (
    <Pagination className="d-flex justify-content-center mt-2">
      <Pagination.Prev
        disabled={!people.previous}
        onClick={() => onPage(people.previous)}
      />
      <Pagination.Item active>{id}</Pagination.Item>
      <Pagination.Next
        disabled={!people.next}
        onClick={() => onPage(people.next)}
      />
    </Pagination>
  );
};

export default CharactersPagination;

// {/* {showModal ? <WhenHomeModal handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} showModal={showModal} {...props} /> : null} */}
