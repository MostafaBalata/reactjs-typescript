export interface IRequest {
  get(id: string): void,
  delete(id: string): void,
  post(id: string): void,
}

export class Request implements IRequest {
  private endpointUrl: string;

  public constructor(endpointUrl: string) {
    this.endpointUrl = endpointUrl;
  }

  public get(id: string): void {
    //
  }

  public delete(id: string): void {
    this.request(`${this.endpointUrl}/${id}`, 'DELETE');
  }

  public post(id: string): void {
    //
  }

  private request(url: string, method: string, params: [] = []): any {
    console.log("Delete this", url, method, params);
  }

}