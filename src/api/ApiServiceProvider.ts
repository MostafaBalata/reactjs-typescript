import { IServiceProvider } from "./ServiceFactory";
import { IHttpResponse } from "../lib/http/IHttpClient";
import { HttpClient } from "../lib/http/HttpClient";
import { baseUrlApi } from "../settings";

export class ApiServiceProvider implements IServiceProvider {
  protected moduleUrl: string;

  constructor(moduleUrl: string) {
    this.moduleUrl = moduleUrl;
  }

  public async get(id: string): Promise<IHttpResponse<any>> {
    const request = new HttpClient();
    const config = {
      baseUrl: `${baseUrlApi}/${this.moduleUrl}`,
      url: `${id}`
    }
    return request.get(config);
  }

  public async delete(id: string): Promise<IHttpResponse<any>> {
    const request = new HttpClient();
    const config = {
      baseUrl: `${baseUrlApi}/${this.moduleUrl}`,
      url: `${id}`
    }
    return request.delete(config);
  }

  public async post(id: string, formData: any): Promise<IHttpResponse<any>> {
    const request = new HttpClient();
    const config = {
      baseUrl: `${baseUrlApi}/${this.moduleUrl}`,
      url: `${id}`,
      body: formData
    }
    return request.post(config);
  }

  // tslint:disable-next-line
  public async getList(pageNumber: number, limit: number = 20, search: string = ""): Promise<IHttpResponse<any>> {
    const request = new HttpClient();
    const queryParams: any = {};
    queryParams.page = pageNumber.toString();

    if(search) {
      queryParams.search = search;
    }

    const config = {
      url: `${baseUrlApi}/${this.moduleUrl}/`,
      queryParams
    };

    const response = await request.get(config);
    return response
  }

}