import { PropTypes } from 'react';
import Regular from 'components/Regular';

const RegularList = ({ regulars, actions }) => (
  <div>
    <h3>Regulars</h3>
    <div className="regulars_list">
      {
        regulars.map(regular =>
          <Regular
            key={regular.id}
            regular={regular}
            actions={actions}
          />
        )
      }
    </div>
  </div>
);

RegularList.propTypes = {
  regulars: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default RegularList;
