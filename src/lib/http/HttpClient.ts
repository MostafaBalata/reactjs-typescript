import * as queryString from "query-string";
import * as urlJoin from "url-join";

import { compact } from 'lodash';

import { HttpMethod, IHttpClient, IHttpRequestCommon, IHttpResponse, IHttpGetRequest } from "./IHttpClient";

import { toSnakeCase } from "../../utils";

export class HttpClient implements IHttpClient {

  private async makeRequest(url: string, method: HttpMethod, config: IHttpRequestCommon): Promise<IHttpResponse<any>> {
    let response;
    try {
      const body: string | FormData | undefined = config.body
        ? JSON.stringify(config.disableManglingRequestBody ? config.body : toSnakeCase(config.body))
        : undefined;

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer sdfsdfsdfsdf",
      }; // @TODO: prepare it after the auth

      response = await fetch(url, {
        headers,
        method,
        body
      });

      if (!response.ok) {
        throw new Error(`${response.statusText}: ${response.status}`);
      }

    } catch (error) {
      throw new Error(`${error}`);
    }
    return { body: await response.json(), statusCode: response.status };
  }

  // tslint:disable-next-line
  public async get<T>(config: IHttpGetRequest): Promise<IHttpResponse<T>> {
    const qs = config.queryParams ? "?" + queryString.stringify(config.queryParams) : null;
    // we need to remove falsy values because urlJoin is retarded and ads trailing slashes otherwise
    const urlParts = compact([config.baseUrl, config.url, qs]);
    const fullUrl = urlJoin(...urlParts);
    // Normal utility call
    return this.makeRequest(fullUrl, "GET", config);

  }

  // tslint:disable-next-line
  public async delete<T>(config: IHttpGetRequest): Promise<IHttpResponse<T>> {
    const qs = config.queryParams ? "?" + queryString.stringify(config.queryParams) : null;
    // we need to remove falsy values because urlJoin is retarded and ads trailing slashes otherwise
    const urlParts = compact([config.baseUrl, config.url, qs]);
    const fullUrl = urlJoin(...urlParts);
    // Normal utility call
    return this.makeRequest(fullUrl, "DELETE", config);
  }

  // tslint:disable-next-line
  public async post<T>(config: IHttpGetRequest): Promise<IHttpResponse<T>> {
    const qs = config.queryParams ? "?" + queryString.stringify(config.queryParams) : null;
    // we need to remove falsy values because urlJoin is retarded and ads trailing slashes otherwise
    const urlParts = compact([config.baseUrl, config.url, qs]);
    const fullUrl = urlJoin(...urlParts);
    // Normal utility call
    return this.makeRequest(fullUrl, "POST", config);
  }


}