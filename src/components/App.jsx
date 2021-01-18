import { Route, Switch } from "react-router-dom";
import { Subscriptions } from "./Subscriptions";
import { NewSubscription } from "./NewSubscription";
import { Subscription } from "./Subscription";
import { Container, Nav, RouterLink } from "../styles/App";

function App() {
  return (
    <Container>
      <Nav>
        <RouterLink to="/subscriptions">Home</RouterLink>
        <RouterLink to="/subscriptions/new">New Subscription</RouterLink>
      </Nav>
      <Switch>
        <Route exact path={["/", "/subscriptions"]} component={Subscriptions} />
        <Route exact path="/subscriptions/new" component={NewSubscription} />
        <Route exact path="/subscriptions/:id" component={Subscription} />
      </Switch>
    </Container>
  );
}

export default App;
