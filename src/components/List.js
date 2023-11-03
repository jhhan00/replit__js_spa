/** 
*  API 응답으로 받은 결과를 리스트로 출력하기 위한 컴포넌트
*  props로 받아서 활용 가능
*/

import Component from '../core/Component.js';

export default class List extends Component {
  template() {
    const { dummyList } = this.$props;

    return `
      <ul>
        ${dummyList
          .map(({ id, title }) => `<li key=${id}>${title}</li>`)
          .join('')}
      </ul>
    `;
  }
}