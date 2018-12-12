import { MODULE_NAME } from "./constants";

import { ApiServiceProvider } from "../../api/ApiServiceProvider";
import { convertModuleNameUrl } from "../../utils/services";

/**
 * Service Provider 
 */
export class AccountCloningSercviceProvider extends ApiServiceProvider {
  constructor() {
    super(convertModuleNameUrl(MODULE_NAME));
  }
}
