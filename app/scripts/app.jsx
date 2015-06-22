'use strict';

import React, { Component } from 'react';
import Header from './components/header.jsx';
import AddRegular from './components/add_regular.jsx';
import RegularList from './components/regular_list.jsx';
import RegularStore from './stores/regular_store';

export default class App extends Component {
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
