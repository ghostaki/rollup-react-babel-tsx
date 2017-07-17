import * as React from 'react';
import * as ReactDom from 'react-dom';

interface HelloProps {
    compiler: string;
    framework: string;
}

export const Test = (props: HelloProps) => (<h1>Hello froooom {props.compiler} and {props.framework}!</h1>);

ReactDom.render(
    <Test compiler="typescript" framework="react" />,
    document.getElementById('app'),
);
