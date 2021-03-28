import React from 'react';
import renderer from 'react-test-renderer';

import Main from './client/components/main/Main';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree: any = renderer.create(<Main />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
