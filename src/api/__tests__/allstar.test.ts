import axios, { AxiosResponse } from "axios";
import { IAllStarPlayer } from "../../types/player.type";
import { getAllStar } from "../allstar";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("allstar", () => {
  let players: IAllStarPlayer[];

  beforeAll(() => {
    players = [
      {
        Name: "",
        PlayerID: 0,
        Position: "",
        StatID: 0,
        Team: "",
      },
      {
        Name: "",
        PlayerID: 1,
        Position: "",
        StatID: 1,
        Team: "",
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets allstar data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getAllStar();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(players);
  });

  it("fails getting allstar data", async () => {
    const mockedResponse: AxiosResponse = {
      data: players,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getAllStar();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
