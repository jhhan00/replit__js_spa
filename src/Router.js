/** 
*  App 컴포넌트의 mounted에서 라우팅 코드를 분리하기 위해 만듬
*  addRoute: 페이지 추가
*  checkRoutes: 현재 URL에 대응하는 컴포넌트 렌더링 & hashchange 이벤트 핸들러
*  start: 라우터 동작의 초기 설정
*/

import Component from './core/Component.js';

export default class Router extends Component {
  setup() {
    this.$state = {
      routes: [],
    };
  }

  addRoute(fragment, component) {
    this.$state.routes.push({ fragment, component });
  }

  checkRoutes() {
    const currentRoute = this.$state.routes.find((route) => {
      return route.fragment === window.location.hash;
    });

    if (!currentRoute) {  // 존재하지 않는 URL 이동일 경우
      // redirect to home
      window.location.href = './#';
      this.$state.routes[0].component();
      return;
    }

    currentRoute.component();
  }

  start() {
    window.addEventListener('hashchange', () => this.checkRoutes());

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    this.checkRoutes();
  }
}