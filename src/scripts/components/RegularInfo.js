import { PropTypes } from 'react';
import RegularName from 'components/RegularName';
import RegularOrder from 'components/RegularOrder';
import RegularSugar from 'components/RegularSugar';
import RegularStrength from 'components/RegularStrength';
import RegularCounter from 'components/RegularCounter';

const RegularInfo = ({ regular, actions }) => {
  const { id } = regular
  const {
    updateName, markAsAdded, updateOrder, updateSugar,
    updateStrength, addCup, addFreeCup
  } = actions

  return (
    <div className="panel-body">
      <RegularName
        name={regular.name}
        updateName={name => updateName(id, name)}
        markAsAdded={() => markAsAdded(id)}
        justAdded={regular.justAdded}
      />
      <RegularOrder
        order={regular.order}
        updateOrder={order => updateOrder(id, order)}
      />
      <RegularSugar
        count={regular.sugar}
        updateSugar={sugar => updateSugar(id, sugar)}
      />
      <RegularStrength
        strength={regular.strength}
        updateStrength={strength => updateStrength(id, strength)}
      />
      <RegularCounter
        count={regular.count}
        free={regular.free}
        addCup={count => addCup(id, count)}
        addFreeCup={count => addFreeCup(id, count)}
      />
    </div>
  )
}

RegularInfo.propTypes = {
  regular: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default RegularInfo
