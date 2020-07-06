import userSchema from "./userSchema";

const deepCopy = (object) => JSON.parse(JSON.stringify(object));

describe("userSchema", () => {
  const validUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  it("validates a perfectly valid user", async () => {
    const result = await userSchema.isValid(validUser);
    expect(result).toBe(true);
  });

  it("fails to validate due to bad user namer", async () => {
    const testUser = deepCopy(validUser);
    testUser.username = "thisUserNameIsNotValidBecauseItIsTooLong";
    const result = await userSchema.isValid(testUser);
    expect(result).toBe(false);
    // TODO validate the actual error being thrown instead of just checking global status
  });

  // TODO add more validations for form data, specially edge cases.
});
