import React, { useEffect, useState } from "react";
import { fetchData, fetchDataDemo, updateStatus } from "../../api";
import Card from "../../components/Card";
const Marketing = () => {
  const [data, setData] = useState([]);

  console.log({data})
  useEffect(() => {
    fetchData("tab1").then((response) => {
      const processedData = getTabPluginData(response);
      setData(processedData);
    });
  }, []);

  const getTabPluginData = (tabData) => {
    let pluginData = Object.keys(tabData.data).reduce((prev, curr) => {
      if (curr === "active" || curr === "disabled" || curr === "inactive") {
        const items = tabData.data[curr].map((item) => ({
          item: tabData.plugins[item],
          id: item,
          status: curr,
        }));

        return [...prev, ...items];
      }
      return [];
    }, []);

    return pluginData;
  };

  const toggleState = async (id, status) => {
    updateStatus("tab1", id, status).then((res) => res.json()).then((res) => console.log({res}))

    setData((prevData) => {
      const plugin = prevData.find((plugins) => id === plugins.id);
      plugin.status = status;
      return prevData.map((prev) => (prev.id === id ? plugin : prev));
    });
  };

  return (
    <div>
      <p className="page__title">Marketing Plugins</p>
      <div className="boxes">
        {data.map(({ item, status, id }, index) => (
          <Card
            title={item.title}
            description={item.description}
            status={status}
            handleToggleStatus={toggleState}
            key={index}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
