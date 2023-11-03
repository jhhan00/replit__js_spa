import Component from "./core/Component.js";
// import CounterPage from "./pages/CounterPage.js";
import FetchPage from "./pages/FetchPage.js";

export default class App extends Component {
  template() {
    return `
            <main data-component="counter-app"></main>
        `;
  }

  mounted() {
    const $counterApp = this.$target.querySelector(
      '[data-component="counter-app"]'
    );
    // new CounterPage($counterApp);
    new FetchPage($counterApp);
  }
}