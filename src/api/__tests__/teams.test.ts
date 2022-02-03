import axios, { AxiosResponse } from "axios";
import { ITeams } from "../../types/teams.type";
import { getTeams } from "../teams";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Team", () => {
  let team: ITeams[];

  beforeAll(() => {
    team = [
      {
        City: "",
        Key: "",
        PrimaryColor: "",
        TeamID: 0,
        WikipediaLogoUrl: "",
        Name: "",
      },
      {
        City: "",
        Key: "",
        PrimaryColor: "",
        TeamID: 1,
        WikipediaLogoUrl: "",
        Name: "",
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets all teams data", async () => {
    const mockedResponse: AxiosResponse = {
      data: team,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getTeams();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(team);
  });

  it("fails getting all teams data", async () => {
    const mockedResponse: AxiosResponse = {
      data: team,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getTeams();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
