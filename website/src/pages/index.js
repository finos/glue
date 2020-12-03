/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import HomeScreen from './home';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <HomeScreen siteConfig={this.props.siteConfig} language={this.props.language} />
    );
  }
};

export default Index;