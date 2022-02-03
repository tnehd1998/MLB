import axios, { AxiosResponse } from "axios";
import { IRankingPlayerProps } from "../../types/player.type";
import { getRanking } from "../ranking";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Ranking", () => {
  let players: IRankingPlayerProps[];

  beforeEach(() => {
    players = [
      {
        ranking: 1,
        name: "",
        team: "",
        years: 1,
        SignedAge: 1,
        averageValue: "",
        totalValue: "",
        period: "",
        position: "",
        playerImg: "",
      },
      {
        ranking: 2,
        name: "",
        team: "",
        years: 2,
        SignedAge: 2,
        averageValue: "",
        totalValue: "",
        period: "",
        position: "",
        playerImg: "",
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets ranking data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getRanking();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(players);
  });

  it("fails getting ranking data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getRanking();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
