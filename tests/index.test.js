const { app } = require("../src");
const { getData } = require("../src/utils/get-data");

jest.mock("../src/utils/get-data.js");

describe("app", () => {
  it("should return data successfully", async () => {
    const result = await app();

    expect(result).toStrictEqual({ id: 3, user: "mock" });
  });

  it("should rejected", async () => {
    getData.mockResolvedValue({ id: 5, user: "new mock" });

    console.log(getData);

    const result = await app();

    expect(result).toStrictEqual({ id: 5, user: "new mock" });
  });
});
