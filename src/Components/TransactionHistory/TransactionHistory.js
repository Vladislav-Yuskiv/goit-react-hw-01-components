import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    < table className={s.table} >
        < thead className={s.head} > 
                  < tr > 
                    < th > Type </ th > 
                    < th > Amount </ th > 
                    < th > Currency </ th > 
                  </ tr > 
        </ thead >

        < tbody >
            {items.map(item => (
                  < tr key={item.id} className={s.line} >
                    < td >{item.type}</ td > 
                    < td >{item.amount}</ td > 
                    < td >{item.currency}</ td > 
                  </ tr >
            ))}
        </ tbody > 
  </ table >
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TransactionHistory;