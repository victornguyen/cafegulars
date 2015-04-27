'use strict';

let React = require('react');

let AddRegular = React.createClass({
    render() {
        return (
            <div>
                <h2>Add New Regular</h2>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Name field
                        </h3>

                    </div>
                    <div className="panel-body">
                        Add form goes here man
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddRegular;
