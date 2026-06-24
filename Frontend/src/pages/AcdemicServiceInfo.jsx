import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Spinner } from "react-bootstrap";
import { usersApiActions } from "../store/useMiddleware";

import { useParams } from "react-router";

function AcademicServiceInfo() {
  const dispatch = useDispatch();
  let params = useParams();
  const { academicFindOne, isLoading, error } = useSelector(
    (state) => state.academicList,
  );

  console.log(academicFindOne);

  useEffect(() => {
    dispatch({
      type: usersApiActions.fetchFindOneAcademic,
      payload: params.id,
    });
  }, [dispatch]);

  const refresh = () =>
    dispatch({
      type: usersApiActions.fetchFindOneAcademic,
      payload: params.id,
    });

  return (
    <>
      <section className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">รายละเอียดกิจกรรมบริการวิชาการ</h1>
        </div>
      </section>

      {error && (
        <Alert variant="danger" onClose={() => refresh()} dismissible>
          {error}
        </Alert>
      )}
      <p className="lead text-muted mb-0">รายละเอียดข้อมูลบริการวิชาการ</p>
      <div>{academicFindOne}</div>
    </>
  );
}

export default AcademicServiceInfo;
