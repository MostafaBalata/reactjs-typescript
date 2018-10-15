// React & libs
import * as React from "react";
import { Route, Switch } from 'react-router-dom';

// componenets
import { Header } from "../../components/Header";
import HomePage from '../HomePage';

// Styles
import "../../styles/main.scss";
import * as styles from "./styles.scss";

// Components & Containers
import { LeftMenu } from "../LeftMenu/";
import { NotFoundPage } from "../NotFoundPage";

export class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className={styles.app}>
          <div>
            <LeftMenu />

            <div className={styles.well} >
              <div className="container-fluid">

                <Switch>
                  <Route path="/" component={HomePage} exact />
                  <Route path="" component={NotFoundPage} exact />
                </Switch>

              </div>
            </div>
          </div>ےےے
        </div>
      </div>
    );
  }
}
