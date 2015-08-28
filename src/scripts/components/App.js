'use strict';

import React, { Component } from 'react';
import Header         from 'components/Header';
import AddRegular     from 'components/AddRegular';
import RegularList    from 'components/RegularList';
import RegularStore   from 'stores/RegularStore';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peeps:              RegularStore.getPeeps(),
            addPersonIsVisible: false
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

    _setAddPersonVisibility = (value) => {
        this.setState({
            addPersonIsVisible: value
        });
    }

    render() {
        return (
            <div className="container">
                <Header
                    addPersonIsVisible={this.state.addPersonIsVisible}
                    setAddPersonVisibility={this._setAddPersonVisibility}
                />
                {
                    this.state.addPersonIsVisible &&
                    <AddRegular
                        peeps={this.state.peeps}
                        setAddPersonVisibility={this._setAddPersonVisibility}
                    />
                }
                <RegularList peeps={this.state.peeps} />
            </div>
        );
    }
}

export default App;
