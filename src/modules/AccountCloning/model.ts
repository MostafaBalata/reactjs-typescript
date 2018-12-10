import { JSONSchema6 } from "json-schema";

export const schema: JSONSchema6 = {
  title: 'Account Cloning',
  properties: {
    trackId: {
      type: "string",
      title: "Track Id"
    },
    name: {
      type: "string",
      title: "Name"
    },
    domain: {
      type: "string",
      title: "Account domain"
    }
  },
}
