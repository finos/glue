/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import styles from '../../src/css/scss/styles.module.scss';
import HomeScreen from './home';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.mainWrapper}>
        <HomeScreen/>
      </div>
    );
  }
};

export default Index;