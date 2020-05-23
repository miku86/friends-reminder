import { apiConfig } from "../../../src/config/api";

const mockResponse = [
  {
    friendName: "Max",
    lastTimeContacted: 1589977129,
  },
  {
    friendName: "Moritz",
    lastTimeContacted: 1589977130,
  },
];

describe("friends", () => {
  it("should show a list of all friends", () => {
    cy.server({ force404: true });
    cy.route({
      method: "GET",
      url: `*${apiConfig.routes.friends}`,
      response: mockResponse,
    });

    cy.visit("/");

    mockResponse.forEach(({ friendName }) => {
      cy.contains(friendName);
    });
  });
});
