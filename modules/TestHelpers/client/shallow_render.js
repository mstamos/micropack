import TestUtils from 'react-addons-test-utils';


export function createComponent (component, props){ // ...children) {
    const shallowRenderer = TestUtils.createRenderer();
    // We don't render our component into DOM but we make a shallow render which is more fast
    //Instead of rendering into a DOM the idea of shallow rendering is to instantiate a component
    // and get the result of its render method, which is a ReactElement.
    // From here you can do things like check its props and children and verify it works as expected.
    // based on this article http://simonsmith.io/unit-testing-react-components-without-a-dom/
    shallowRenderer.render(React.createElement(component, props));//, children.length > 1 ? children : children[0]));
    return shallowRenderer.getRenderOutput();
}

