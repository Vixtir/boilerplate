import _ from 'lodash';
import css from './index.css';

const component = () => {
  const elem = document.createElement('div');
  elem.innerHTML = _.join(['Start', 'here'], ' ');

  return elem;
};

document.body.appendChild(component());
