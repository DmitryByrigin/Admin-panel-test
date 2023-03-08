import React from 'react';
import { ShopContext } from '../Shop';

import styles from './NotFound.module.scss';

const NotFound = () => {
    const {searchValue} = React.useContext(ShopContext);
  return (
    <div className={styles.root}>
      <h1>
        <span>🤬</span><br />
        Not found
      </h1>
      <p>What's the fuck is <em>"{searchValue}"</em>? You can't buy <em>"{searchValue}"</em> in Admin-panel</p>
    </div>
  );
};
export default NotFound;