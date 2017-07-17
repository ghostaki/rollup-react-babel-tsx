import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Testing from './test/test';
import * as Testing2 from './test/test2';

interface HelloProps {
    compiler: string;
    framework: string;
}

const Hello = (props: HelloProps) => (<h1>Hello froooom {props.compiler} and {props.framework}!</h1>);

ReactDom.render(
    <div>
        <Hello compiler="typescript" framework="react" />
        <Testing.Test compiler="typescript" framework="react" />
        <Testing2.myTest name={'tetsss'} />
    </div>,
    document.getElementById('app'),
);
