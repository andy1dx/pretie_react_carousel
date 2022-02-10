import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { RouterPathEnum } from '../../../enums/RouterPathEnum';

class Header extends React.Component {
  render() {
    return(
      <ul className='pretie_header-ul_container'>
        <li><Link to={ RouterPathEnum.HOME }>HOME</Link></li>
      </ul>
    );
  }
}

export default Header;