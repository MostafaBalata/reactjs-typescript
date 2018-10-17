
enum Status {
  READY,
  COMPLETED
}

interface IAccount {
  status: string,
  trackId: string,
  jiraTrackId: string,
  jobId: string,
  creator: string,
  jobCreationTime: string,
  camundaId: string,
  message: string
}

