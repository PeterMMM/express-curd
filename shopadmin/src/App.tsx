import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { JuiceList, JuiceShow, JuiceEdit, JuiceCreate } from './juice';
import { dataProvider } from './dataProvider';

export const App = () => (
  <Admin layout={Layout} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="juices"
      list={JuiceList}
      edit={JuiceEdit}
      show={JuiceShow}
      create={JuiceCreate}
    />
  </Admin>
);
