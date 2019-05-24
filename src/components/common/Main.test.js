import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('Main component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new Adapter() });

describe('ExampleComponent', () => {
  it('fetches data from server when server returns a successful response', done => { // 1
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

    const wrapper = shallow(<Main />); // 5

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products", {"headers": {"x-api-key": "zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4"}, "method": "GET", "mode": "cors"});

    process.nextTick(() => { // 6
      expect(wrapper.state()).toEqual({
        "count": 0,
        "featuredProduct": "",
        "filteredProducts": [],
        "products": []
      })

      global.fetch.mockClear(); // 7
      done(); // 8
    });
  });
});