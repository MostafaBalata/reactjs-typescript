import { ACCOUNT_DELETION_SOURCE_NAME } from "../modules/AccountDeletion/constants";
import { AccountDeletionSercviceProvider } from "../modules/AccountDeletion/ApiServiceProvider";
import { IHttpResponse } from "./IHttpClient";

export interface IServiceProvider {
  get: (id: string) => Promise<IHttpResponse<any>>;
  delete: (id: string) => Promise<IHttpResponse<any>>;
  getList: (pageNumber: number, limit?: number) => Promise<IHttpResponse<any>>;
}


/**
 * Service provider is a factory deisgn pattern to load the correct module dynamiclly.
 */
export class ServiceProviderFactory {
  public static load(moduleName: string): IServiceProvider {
    switch (moduleName) {
      case ACCOUNT_DELETION_SOURCE_NAME:
        return new AccountDeletionSercviceProvider();
      default:
        throw new Error(`${moduleName} is not supported`);
    }
  }
}
