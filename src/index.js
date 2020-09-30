const { getData } = require("./utils/get-data");

async function app() {
  console.log("CALL REAL APP");

  const data = await getData();

  return data;
}

exports.app = app;
