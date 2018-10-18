import { JSONSchema6 } from "json-schema";

export const schema: JSONSchema6 = {
  properties: {
    status: {
      type: "string",
      title: "Status",
      default: "Ready"
    },
    trackId: {
      type: "string",
      title: "Track Id"
    },
    jiraTrackId: {
      type: "string",
      title: "Track Id"
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
  }
}
