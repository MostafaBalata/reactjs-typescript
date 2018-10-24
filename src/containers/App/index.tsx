// React & libs
import * as React from "react";
import { Route, Switch } from 'react-router-dom';
// componenets
import { Header } from "../../components/Header";

// Styles
import "react-table/react-table.css";
import "../../styles/main.scss";
import * as styles from "./styles.scss";

// utils
import { map } from 'lodash';
import { getRoutes } from "../../settings/routes"

// Components & Containers
import { LeftMenu } from "../LeftMenu/";
import ReduxToastr from "react-redux-toastr";


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
                  {map(getRoutes(), (route, index) => <Route key={index} path={route.link} component={route.component} exact />)}
                </Switch>
              </div>
            </div>
          </div>
        </div>


      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick={true} />

      </div>
    );
  }
}
