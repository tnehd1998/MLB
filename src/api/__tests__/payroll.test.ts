import axios, { AxiosResponse } from "axios";
import { IPayroll } from "../../types/payroll.type";
import { getPayroll } from "../payroll";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Payroll", () => {
  let players: IPayroll[];

  beforeAll(() => {
    players = [
      {
        rank: 1,
        team: "New York Mets",
        payroll: "$235,599,999",
        bestPlayer: "Jacob deGrom",
        position: "SP",
        imageUrl:
          "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15662.jpg",
      },
      {
        rank: 2,
        team: "Los Angeles Dodgers",
        payroll: "$214,458,333",
        bestPlayer: "Mookie Betts",
        position: "RF",
        imageUrl:
          "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets payroll data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getPayroll();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(players);
  });

  it("fails getting payroll data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getPayroll();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
