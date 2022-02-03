import axios, { AxiosResponse } from "axios";
import { IStanding } from "../../types/standing.type";
import { getStanding } from "../standing";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Standing", () => {
  let players: IStanding[];

  beforeAll(() => {
    players = [
      {
        City: "",
        Division: "",
        Key: "",
        League: "",
        Losses: 0,
        Name: "",
        TeamID: 0,
        Wins: 0,
      },
      {
        City: "",
        Division: "",
        Key: "",
        League: "",
        Losses: 0,
        Name: "",
        TeamID: 0,
        Wins: 0,
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets standing data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getStanding();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(players);
  });

  it("fails getting standing data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getStanding();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
