import { ACCOUNT_DELETION_MODULE_URL } from "./constants";
// Mocks and helpers
import { find, slice } from 'lodash';
import { data } from './mocked';
import { IHttpResponse } from "../../api/IHttpClient";
import { ApiServiceProvider } from "../../api/ApiServiceProvider";


/**
 * Service Provider 
 */
export class AccountDeletionSercviceProvider extends ApiServiceProvider {
  constructor() {
    super(ACCOUNT_DELETION_MODULE_URL);
  }

  public async get(id: string): Promise<IHttpResponse<any>> {
    const form: any = find(data, (record) => id === record.jiraTrackId);
    return {
      body: form,
      statusCode: 200
    };
  }

  public async getList(pageNumber: number, limit: number = 20): Promise<IHttpResponse<any>> {
    const result = slice(data, pageNumber, pageNumber + limit).map((record) => {
      return record;
    }) as [];

    return {
      statusCode: 200,
      body: result
    };
  }
}
