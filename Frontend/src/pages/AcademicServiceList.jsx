import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Badge,
  Card,
  ListGroup,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import { usersApiActions } from "../store/useMiddleware";

import { useNavigate } from "react-router-dom";

function UsersPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { academicList, isLoading, error } = useSelector(
    (state) => state.academicList,
  );

  const handleRouteFineOne = (id) => {
    navigate(`/info/${id}`);
  };

  useEffect(() => {
    dispatch({ type: usersApiActions.fetchAcademic });
  }, [dispatch]);

  const refresh = () => dispatch({ type: usersApiActions.fetchAcademic });

  return (
    <>
      {error && (
        <Alert variant="danger" onClose={() => refresh()} dismissible>
          {error}
        </Alert>
      )}

      <Card className=" col-12 col-lg-8 h-100">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title as="h2" className="h5 mb-0">
              รายการกิจกรรมบริการวิชาการ
            </Card.Title>
            <small className="text-muted">
              {academicList?.length || 0} รายการ
            </small>
          </div>
          {isLoading && (
            <Badge pill bg="info" text="dark">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                className="me-1"
              />
              Loading
            </Badge>
          )}
        </Card.Header>

        <Card.Body className="p-0">
          {isLoading ? (
            <ListGroup variant="flush">
              {[1, 2, 3].map((key) => (
                <Placeholder key={key} as="li" animation="wave">
                  <ListGroup.Item className="d-flex align-items-center gap-3">
                    <Placeholder
                      xs={1}
                      as="div"
                      style={{ width: 40, height: 40 }}
                      className="rounded-circle"
                    />
                    <div className="flex-grow-1">
                      <Placeholder xs={4} as="div" />
                      <Placeholder xs={6} as="div" size="sm" />
                    </div>
                  </ListGroup.Item>
                </Placeholder>
              ))}
            </ListGroup>
          ) : (academicList || []).length === 0 ? (
            <div className="text-center text-muted py-5 px-3">
              <p className="mb-1 fw-semibold">No academic found</p>
              <p className="small mb-0">
                Try creating one or hit refresh to fetch again.
              </p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {(academicList || []).map((academic) => (
                <ListGroup.Item
                  key={academic.id}
                  className="d-flex align-items-center gap-3"
                  type="button"
                  onClick={() => handleRouteFineOne(academic.id)}
                >
                  <div
                    className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "100%", height: 40 }}
                    aria-hidden="true"
                  ></div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{academic.title}</div>
                    <small className="text-muted">{academic.description}</small>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default UsersPage;
