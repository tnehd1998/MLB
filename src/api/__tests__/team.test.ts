import { getCertainTeam } from "./../team";
import axios, { AxiosResponse } from "axios";
import { ITeam } from "../../types/team.type";
import { QueryClient } from "react-query";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Team", () => {
  let team: ITeam[];

  beforeAll(() => {
    team = [
      {
        BatHand: "",
        BirthCountry: "",
        BirthDate: "",
        FirstName: "",
        LastName: "",
        MLBAMID: 0,
        PhotoUrl: "",
        PlayerID: 0,
        Position: "",
        ProDebut: "",
        ThrowHand: "",
        City: "",
        Key: "",
        PrimaryColor: "",
        TeamID: 0,
        WikipediaLogoUrl: "",
        Name: "",
      },
      {
        BatHand: "",
        BirthCountry: "",
        BirthDate: "",
        FirstName: "",
        LastName: "",
        MLBAMID: 0,
        PhotoUrl: "",
        PlayerID: 0,
        Position: "",
        ProDebut: "",
        ThrowHand: "",
        City: "",
        Key: "",
        PrimaryColor: "",
        TeamID: 0,
        WikipediaLogoUrl: "",
        Name: "",
      },
    ];
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("gets certain team data", async () => {
    const mockedResponse: AxiosResponse = {
      data: team,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getCertainTeam("LAD");
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(team);
  });

  it("fails getting certain team data", async () => {
    const mockedResponse: AxiosResponse = {
      data: team,
      status: 404,
      statusText: "FAIL",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();

    const data = await getCertainTeam("LAD");
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(null);
  });
});
