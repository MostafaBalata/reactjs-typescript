export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IDictionary<T> {
  [id: string]: T
}

export interface IHttpRequestCommon {
  url: string;
  baseUrl?: string;
  responseSchema?: any; // @TODO: define schema using Yup
  headers?: any; // @TODO: define headers
  body?: any;
  formData?: FormData;
  skipResponseParsing?: boolean;
  expectsNoResponse?: boolean;
  allowedStatusCodes?: number[]; // 20x are always allowed
  disableManglingRequestBody?: boolean; // by default we make body of the request snake cased since our backend expects this form
}

export interface IHttpGetRequest extends IHttpRequestCommon {
  queryParams?: IDictionary<string>;
}

export interface IHttpResponse<T> {
  body: T;
  statusCode: number;
}

export interface IHttpClient {
  get<T>(config: IHttpRequestCommon): Promise<IHttpResponse<T>>;
  post<T>(config: IHttpRequestCommon): Promise<IHttpResponse<T>>;
  // put<T>(config: IHttpRequestCommon): Promise<IHttpResponse<T>>;
  // patch<T>(config: IHttpRequestCommon): Promise<IHttpResponse<T>>;
  // delete<T>(config: IHttpRequestCommon): Promise<IHttpResponse<T>>;
}
