const axios = require("axios");

async function getData() {
  console.log("CALL REAL GET-DATA");

  const { data } = await axios.get("https://reqres.in/api/users/1");

  return data;
}

exports.getData = getData;
