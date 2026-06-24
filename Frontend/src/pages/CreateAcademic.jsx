import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Badge,
  Button,
  Card,
  Form,
  ListGroup,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import { usersApiActions } from "../store/useMiddleware";
import { redirect, Route } from "react-router-dom";

function UsersPage() {
  const dispatch = useDispatch();
  const { isLoading, isCreating, error } = useSelector(
    (state) => state.academicList,
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    responsible_person: "",
    service_year: "",
    status: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    await dispatch({ type: usersApiActions.createAcademic, payload: formData });

    setFormData({
      title: "",
      description: "",
      responsible_person: "",
      service_year: "",
      status: "",
    });
    setValidated(false);

    await window.location.replace("/");
  };

  return (
    <>
      <section className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">สร้างกิจกรรม</h1>
        </div>
      </section>

      {error && (
        <Alert variant="danger" onClose={() => {}} dismissible>
          {error}
        </Alert>
      )}

      <section className="content-grid row g-4">
        <Card className="col-12 col-lg-4 h-100">
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>ชื่องานบริการ</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  disabled={isCreating}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a title.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>รายละเอียด</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  disabled={isCreating}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid description.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>ผู้รับผิดชอบ</Form.Label>
                <Form.Control
                  name="responsible_person"
                  type="text"
                  value={formData.responsible_person}
                  onChange={handleChange}
                  required
                  disabled={isCreating}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid responsible person.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>ปีงบประมาณ</Form.Label>
                <Form.Control
                  name="service_year"
                  type="text"
                  value={formData.service_year}
                  onChange={handleChange}
                  required
                  disabled={isCreating}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid service year.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>สถานะ</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  disabled={isCreating}
                >
                  <option value="">Select status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid status.
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary" disabled={isCreating}>
                {isCreating ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    กำลังบันทึก...
                  </>
                ) : (
                  "บันทึกข้อมูล"
                )}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

export default UsersPage;
