import { IHttpResponse } from "../lib/http/IHttpClient";
import { getServiceFactory } from "../settings";

export interface IServiceProvider {
  get: (id: string) => Promise<IHttpResponse<any>>;
  delete: (id: string) => Promise<IHttpResponse<any>>;
  post: (id: string, formData: any) => Promise<IHttpResponse<any>>;
  getList: (pageNumber: number, limit?: number, search ?: string) => Promise<IHttpResponse<any>>;
}


/**
 * Service provider is a factory deisgn pattern to load the correct module dynamiclly.
 */
export class ServiceProviderFactory {
  public static load(moduleName: string): IServiceProvider {
    return getServiceFactory(moduleName);
  }
}
