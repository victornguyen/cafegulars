'use strict';

let React           = window.React = require('react'),
    Header          = require('./components/header.jsx'),
    AddRegular      = require('./components/add_regular.jsx'),
    RegularList     = require('./components/regular_list.jsx'),
    RegularStore    = require('./stores/regular_store');


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peeps:              RegularStore.getPeeps(),

            // TODO: to settings store
            freeCount:          8,
            maxSugar:           5,

            // doesn't need to be in a store...
            addPersonIsVisible: false,
            newPersonId:        null
        };

        this._onStoreChange              = this._onStoreChange.bind(this);
        this._setAddPersonVisibility     = this._setAddPersonVisibility.bind(this);
    }

    componentWillMount() {
        RegularStore.addChangeListener(this._onStoreChange);
    }

    componentDidUpdate() {
        this.state.newPersonId = null;
    }

    componentWillUnmount() {
        RegularStore.removeChangeListener(this._onStoreChange);
    }

    _onStoreChange() {
        this.setState({
            peeps: RegularStore.getPeeps()
        });
    }

    _setAddPersonVisibility(value) {
        this.setState({ addPersonIsVisible: value });
    }

    render() {
        let listProps = {
            peeps:              this.state.peeps,
            freeCount:          this.state.freeCount,
            newPersonId:        this.state.newPersonId
        };

        return (
            <div className="container">
                <Header
                    addPersonIsVisible={this.state.addPersonIsVisible}
                    setAddPersonVisibility={this._setAddPersonVisibility}
                />
                {
                    this.state.addPersonIsVisible &&
                    <AddRegular
                        {...listProps}
                        setAddPersonVisibility={this._setAddPersonVisibility}
                    />
                }
                <RegularList {...listProps} />
            </div>
        );
    }
}


React.render(<App />, document.getElementById("app"));
