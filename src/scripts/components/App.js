'use strict';

import React, { Component } from 'react';
import Header         from 'components/Header';
import RegularList    from 'components/RegularList';
import RegularStore   from 'stores/RegularStore';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peeps: RegularStore.getPeeps()
        };
    }

    componentWillMount() {
        RegularStore.addChangeListener(this._onStoreChange);
    }

    componentWillUnmount() {
        RegularStore.removeChangeListener(this._onStoreChange);
    }

    _onStoreChange = () => {
        this.setState({
            peeps: RegularStore.getPeeps()
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <RegularList peeps={this.state.peeps} />
            </div>
        );
    }
}

export default App;
