import * as React from 'react';
import * as styles from "./styles.scss";

interface IProps {
    name: string
}
const Hello: React.SFC<IProps> = (props) => <div className={styles.header}>Hello {props.name} from the other live</div>

export {
    Hello
}