const userQuery = {
  GET_ACADEMIC: `
    SELECT *
    FROM academic_service WHERE deleted_at is null
  `,

  GET_FINEONEACADEMIC: `
    SELECT *
    FROM academic_service WHERE Id = (?) AND deleted_at is null
  `,

  CREATE_NEWACADEMIC: `
    INSERT INTO academic_service (service_id, title, description, responsible_person,	service_year, created_at, updated_at, deleted_at)
    VALUES (?, ?, ?, ?, ?, NOW(),NOW(),NULL)
  `,
  UPDATE_ACADEMIC: `
  UPDATE academic_service SET service_id=?,title=?,description=?,responsible_person=?,service_year=?,status=?,created_at=?,updated_at=?,deleted_at=? WHERE id= ?`,

  SOFTDELETE_ACADEMIC: `
    UPDATE academic_service SET deleted_at = NOW() WHERE id = ?
  `,
};

module.exports = userQuery;
