import { Route, Switch } from "react-router-dom";
import { Subscriptions } from "./Subscriptions";
import { NewSubscription } from "./NewSubscription";
import { Subscription } from "./Subscription";
import { UpdateSubscription } from "../components/UpdateSubscription";
import { Container } from "../styles/App";
import { ProtectedRoute } from './ProtectedRoute'
import { Login } from './Login'
import { SignUp } from './SignUp'

function App() {
  return (
    <Container>
      <Switch>
        <ProtectedRoute exact path={["/", "/subscriptions"]} component={Subscriptions} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/subscriptions/new" component={NewSubscription} />
        <ProtectedRoute exact path="/subscriptions/:id" component={Subscription} />
        <ProtectedRoute
          exact
          path="/subscriptions/:id/edit"
          component={UpdateSubscription}
        />
      </Switch>
    </Container>
  );
}

export default App;
