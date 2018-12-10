import { MODULE_NAME } from "./constants";

import { ApiServiceProvider } from "../../api/ApiServiceProvider";
import { convertModuleNameUrl } from "../../utils/services";

/**
 * Service Provider 
 */
export class AccountDeletionSercviceProvider extends ApiServiceProvider {
  constructor() {
    super(convertModuleNameUrl(MODULE_NAME));
  }
}
