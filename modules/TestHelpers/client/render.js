import TestUtils from 'react-addons-test-utils';

export function renderComponent (comp, props) {
    return TestUtils.renderIntoDocument(
        React.createElement(comp, props)
    );
};
