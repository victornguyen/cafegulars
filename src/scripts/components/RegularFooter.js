import moment from 'moment';

const RegularStat = ({ children }) => (
  <span className="small pull-right">
    {children}
  </span>
)

const RegularButton = ({ children, clickHandler }) => (
  <button
    type="button"
    className="btn btn-primary btn-xs"
    onClick={() => clickHandler()}
  >
    {children}
  </button>
)

const RegularFooter = ({ regular, removeRegular }) => (
  <div className="panel-footer">
    <RegularButton clickHandler={removeRegular}>
      Remove
    </RegularButton>
    <RegularStat>
      Added { moment(regular.dateAdded).fromNow() }
    </RegularStat>
    <RegularStat>
      Coffees purchased: {regular.purchased}
    </RegularStat>
  </div>
)

export default RegularFooter
