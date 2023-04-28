import PropTypes from "prop-types";
import { Table, Thead, Th, Td } from "./transaction-history-styled"; 

const TransactionsHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
          <Thead>
            <tr>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Currency</Th>
            </tr>
          </Thead>
      {items.map(({ id, type, amount, currency }) => (
        
              <tbody key={id}>
              <tr >
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          </tbody>
        
      ))}
          </Table>
  );
};

export default TransactionsHistory;

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })),
};
