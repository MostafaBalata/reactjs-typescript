import { MODULE_NAME } from "./constants";
// Mocks and helpers
import { find, slice, size } from 'lodash';
import { data } from './mocked';
import { IHttpResponse } from "../../lib/http/IHttpClient";
import { ApiServiceProvider } from "../../api/ApiServiceProvider";
import { convertModuleNameUrl } from "../../utils/services";


/**
 * Service Provider 
 */
export class AccountDeletionSercviceProvider extends ApiServiceProvider {
  constructor() {
    super(convertModuleNameUrl(MODULE_NAME));
  }

  public async get(id: string): Promise<IHttpResponse<any>> {

    const form: any = find(data, (record) => id === record.jiraTrackId);

    if (!size(form)) {
      throw new Error(`${id} not found`);
    }

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
