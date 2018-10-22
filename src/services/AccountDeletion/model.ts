import { JSONSchema6 } from "json-schema";

export const schema: JSONSchema6 = {
  title: 'Account Deletion',
  properties: {
    status: {
      type: "boolean",
      title: "Status",
      default: false
    },
    trackId: {
      type: "string",
      title: "Track Id"
    },
    jiraTrackId: {
      type: "string",
      title: "Jira Track Id"
    },
    creator: {
      type: "string",
      title: "Creator"
    },
    jobCreationTime: {
      type: "string",
      title: "Job creation time"
    },
    camundaId: {
      type: "string",
      title: "Camunda Id"
    }
  },
}
