import {
  fetchAcademicRequested,
  fetchAcademicSucceeded,
  fetchcademiAcFailed,
  createAcademicRequested,
  createAcademicSucceeded,
  createAcademicFailed,
} from "./usesSlice";

export const usersApiActions = {
  fetchAcademic: "getallacademic",
  fetchFindOneAcademic: "findoneacademic",
  createAcademic: "createacademic",
};

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const getErrorMessage = (error) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected error";
};

const requestJson = async (path, options = {}) => {
  const response = await fetch(`http://localhost:4000${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return data;
};

export const usersMiddleware = (store) => (next) => async (action) => {
  if (action.type === usersApiActions.fetchAcademic) {
    next(action);
    store.dispatch(fetchAcademicRequested());

    try {
      const academicList = await requestJson(
        "/academicservices/getallacademic",
        {},
      );
      store.dispatch(fetchAcademicSucceeded(academicList));
    } catch (error) {
      store.dispatch(fetchcademiAcFailed(getErrorMessage(error)));
    }

    return;
  }

  if (action.type === usersApiActions.fetchFindOneAcademic) {
    next(action);
    store.dispatch(fetchAcademicRequested());

    try {
      const academicList = await requestJson(
        `/academicservices/findoneacademic/id=${action.payload}`,
      );
      console.log(academicList);
      store.dispatch(fetchAcademicSucceeded(academicList));
    } catch (error) {
      store.dispatch(fetchcademiAcFailed(getErrorMessage(error)));
    }

    return;
  }

  if (action.type === usersApiActions.createAcademic) {
    next(action);
    store.dispatch(createAcademicRequested());

    try {
      await requestJson("/academicservices/createacademic", {
        method: "POST",
        body: JSON.stringify(action.payload),
      });
      store.dispatch(createAcademicSucceeded());
      store.dispatch({
        type: usersApiActions.fetchAcademic,
      });
    } catch (error) {
      store.dispatch(createAcademicFailed(getErrorMessage(error)));
    }

    return;
  }

  return next(action);
};
