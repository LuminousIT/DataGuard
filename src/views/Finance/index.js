import React, { useContext, useEffect, useState } from "react";
import { updateStatus } from "../../api";
import Card from "../../components/Card";
import { DataGuardContext } from "../../context/Context";
import { getTabPluginData } from "../../utilities/utils";

const Finance = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(DataGuardContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (state.data !== null) {
      const processedData = getTabPluginData(state, "tab2");
      setData(processedData);
    }
  }, [state]);

  const toggleState = async (id, status) => {
    await updateStatus("tab2", id, status);

    setData((prevData) => {
      const plugin = prevData.find((plugins) => id === plugins.id);
      plugin.status = status;
      return prevData.map((prev) => (prev.id === id ? plugin : prev));
    });
  };

  return (
    <div>
      <p className="page__title">Finance Plugins</p>
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

export default Finance;
