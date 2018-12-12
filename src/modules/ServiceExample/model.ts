import { JSONSchema6 } from "json-schema";

export const schema: JSONSchema6 = {
  title: 'Account Deletion',
  properties: {
    id: {
      type: "string",
      title: "Id"
    },
    name: {
      type: "string",
      title: "Track Id"
    },
    created_time: {
      type: "string",
      title: "Created time"
    }
  },
}
