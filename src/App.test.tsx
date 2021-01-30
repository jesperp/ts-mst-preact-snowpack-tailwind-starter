import { h } from 'preact';
import { render } from '@testing-library/preact';
import { expect } from 'chai';
import App from './App';
import store from './store'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App store={store} />);
    const header = getByText(/My Foo/i);
    expect(document.body.contains(header));
  });
});
