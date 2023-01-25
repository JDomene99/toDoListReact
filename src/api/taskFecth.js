// const baseUrl = 'http://localhost:4000/tasks/';
const baseUrl = 'http://todolistjosedomene.com/tasks/';
export const createTask = async (task) => {
  try {
    const url = baseUrl;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
      };
    } else {
      return await response.json();
    }
  } catch (error) {}
};

export const getAllTasks = async () => {
  const url = baseUrl;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getTask = async (task) => {
  const url = baseUrl+ task;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const deleteTask = async (task) => {
  try {
    const url = baseUrl + task;
    console.log(url);
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
      };
    } else {
      return await response.json();
    }
  } catch (error) {}
};

export const editTask = async (id, values) => {
  try {
    const url = baseUrl + id;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
      };
    } else {
      return await response.json();
    }
  } catch (error) {}
};

export const getAllTasksByName = async (name) => {
  const url = baseUrl+"title/" + name;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
