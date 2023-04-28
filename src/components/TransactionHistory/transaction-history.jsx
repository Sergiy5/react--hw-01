import PropTypes from "prop-types";
import { Table, Thead, Tr, Th, Td } from "./transaction-history-styled"; 

const TransactionsHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
      {items.map(({ id, type, amount, currency }) => (
        
              <tbody key={id}>
              <Tr >
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          </tbody>
        
      ))}
          </Table>
  );
};

export default TransactionsHistory;

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};
