// componets
import { ListPage, listConnector } from '../../../containers/ListPage';
import { getColumnsFromModel, convertModuleNameUrl, convertModuleNameToUpperCase } from '../../../utils/services';
import { schema } from '../model';

// Constants and Selectors
import { MODULE_NAME } from "../constants";

class ComponentListPage extends ListPage {

  constructor(props: any) {
    super(props);
    this.columns = getColumnsFromModel(schema) as [];
    this.moduleUrl = convertModuleNameUrl(MODULE_NAME);
    this.moduleName = convertModuleNameToUpperCase(MODULE_NAME);
  }

}

export const ListPageConnector = (reducer: string) => listConnector(ComponentListPage)(reducer)