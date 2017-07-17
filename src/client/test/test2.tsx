import * as React from 'react';
import { Apis } from '../index'

interface myProps {
    name: string;
};
interface myState {
    value: number;
};

export class myTest extends React.Component<myProps, myState> {

    private theApi: any;

    constructor(props: myProps) {
        super(props);
        this.theApi = new Apis.DataApi();
        console.log('heyyy')
        console.log(this.theApi.get())
    }

    private renderDetails = () => {
        return <span>Hi from renderDetails()</span>
    }


    public renderOther = () => {
        return <div>Hellooo from renderOther</div>
    }

    render() {
        return (
            <div>
                Hi from test2.tsx: {this.renderDetails()}
            </div>
        );
    }
}