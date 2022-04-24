export const getTabPluginData = (allData, tab) => {
    const tabData = {
      data: allData.data.tabdata[tab],
      plugins: allData.data.plugins,
    };
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
