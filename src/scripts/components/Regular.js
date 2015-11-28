import React, { Component, PropTypes } from 'react';
import classNames          from 'classnames';
import RegularInfo         from 'components/RegularInfo';
import RegularFooter       from 'components/RegularFooter';
import { hasFreeCoffee }   from 'utils/RegularUtils';
import 'styles/regular';

class Regular extends Component {
    static propTypes = {
        regular: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { regular, actions } = this.props;
        const id = regular.id;
        const regularClasses = classNames(
            'regular panel panel-default',
            { 'regular--free': hasFreeCoffee(regular.count) }
        );

        return (
            <div className={regularClasses}>
                <RegularInfo
                  regular={regular}
                  actions={actions}
                />
                <RegularFooter
                  regular={regular}
                  removeRegular={() => actions.removeRegular(id)}
                />
            </div>
        );
    }
}

export default Regular;
