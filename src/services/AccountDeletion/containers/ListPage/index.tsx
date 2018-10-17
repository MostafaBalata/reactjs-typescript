// React & libs


// styles

// Utils & helpers
import * as faker from 'faker';
import { mergeTwoArrays, range } from "../../../../utils";
import { columns } from "./tableSchema";

// componets
import { ListPage } from '../../../../containers/ListPage';

interface IAccountDeletion {
  name: string,
  id: number
}

interface IStateAccountDeletion {
  rows: [IAccountDeletion]
}

export class AccountDeletionListPage extends ListPage {

  constructor(props: IStateAccountDeletion) {
    super(props);
  }

  public componentWillUnmount(): void {
    // tslint:disable-next-line
    const data: [] = []
    this.setState({ data })
  }

  public getPerson(): any {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.random.number(90),
      visits: 10,
      progress: 100,
      status: 'completed'
    }
  }

  public componentDidMount(): void {
    this.setState({ columns });
    
    setTimeout(() => {
      const people: any = range(500).map(() => {
        return {
          ...this.getPerson(),
        };
      });
      this.setState({
        data: mergeTwoArrays(this.state.data, people),
      });
    }, 1000)
  }
}
