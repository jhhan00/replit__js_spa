/** 
*  pages 폴더에서 생성된 컴포넌트들을 export
*  라우팅 시 필요한 페이지를 매번 import하지 않기 위한 작업
*/

import HomePage from './HomePage.js';
import CounterPage from './CounterPage.js';
import FetchPage from './FetchPage.js';

export default (main) => {
  const home = () => new HomePage(main);
  const counter = () => new CounterPage(main);
  const fetch = () => new FetchPage(main);

  return {
    home, counter, fetch,
  };
};