import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DrinkCategoryList } from "./drinkCategory/DrinkCategoryList";
import { DrinkCategoryCreate } from "./drinkCategory/DrinkCategoryCreate";
import { DrinkCategoryEdit } from "./drinkCategory/DrinkCategoryEdit";
import { DrinkCategoryShow } from "./drinkCategory/DrinkCategoryShow";
import { DrinkList } from "./drink/DrinkList";
import { DrinkCreate } from "./drink/DrinkCreate";
import { DrinkEdit } from "./drink/DrinkEdit";
import { DrinkShow } from "./drink/DrinkShow";
import { EstablishmentList } from "./establishment/EstablishmentList";
import { EstablishmentCreate } from "./establishment/EstablishmentCreate";
import { EstablishmentEdit } from "./establishment/EstablishmentEdit";
import { EstablishmentShow } from "./establishment/EstablishmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BeverageService-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DrinkCategory"
          list={DrinkCategoryList}
          edit={DrinkCategoryEdit}
          create={DrinkCategoryCreate}
          show={DrinkCategoryShow}
        />
        <Resource
          name="Drink"
          list={DrinkList}
          edit={DrinkEdit}
          create={DrinkCreate}
          show={DrinkShow}
        />
        <Resource
          name="Establishment"
          list={EstablishmentList}
          edit={EstablishmentEdit}
          create={EstablishmentCreate}
          show={EstablishmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
