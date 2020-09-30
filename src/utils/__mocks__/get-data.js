exports.getData = jest.fn(async () => {
  console.log("mock value");

  return {
    id: 3,
    user: "mock"
  };
});
