export const fetchAllData = async () => {
  return await fetch("http://localhost:8080/data")
    .then((res) => res.json())
    .then((response) => response);
};

export const fetchData = async (tab) => {
  return await fetch("http://localhost:8080/data")
    .then((res) => res.json())
    .then((response) => ({
      data: response.tabdata[tab],
      plugins: response.plugins,
    }));
};

export const updateStatus = async (tabid, id, status) => {
  const statusOpposite = status === "active" ? "inactive" : "active";
  const allData = await fetchAllData();
  const updatedData = {
    ...allData,
    tabdata: {
      ...allData.tabdata,
      [tabid]: {
        ...allData.tabdata[tabid],
        [status]: allData.tabdata[tabid][status].includes(id)
          ? [...allData.tabdata[tabid][status]]
          : [...allData.tabdata[tabid][status], id],
        [statusOpposite]: allData.tabdata[tabid][statusOpposite].filter(
          (item) => item !== id
        ),
      },
    },
  };

  return await fetch(`http://localhost:8080/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
};

export const toggleAllPlugin = async (status) => {
  const allData = await fetchAllData();
  const tabs = allData.tabs;
  const dbDataCopy = Object.assign({}, allData);

    tabs.forEach((tab) => {
      dbDataCopy.tabdata[tab] = {
        ...dbDataCopy.tabdata[tab],
        [status]: [
          ...allData.tabdata[tab]["inactive"],
          ...allData.tabdata[tab]["active"],
        ],
        [status === "inactive" ? "active" : "inactive"]: [],
      };
    });

    return await fetch(`http://localhost:8080/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dbDataCopy),
      });

};
