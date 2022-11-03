import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import {
  TableHead,
  TableHeadRow,
  TableHeadCaption,
  TableBody,
  TableBodyRow,
  TableData,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Box
      width="cardBig"
      mt={4}
      mr="auto"
      mb={4}
      ml="auto"
      borderRadius="5px"
      overflow="hidden"
      textAlign="center"
      boxShadow="small"
      as="table"
      borderCollapse="collapse"
    >
      <TableHead>
        <TableHeadRow>
          <TableHeadCaption>Type</TableHeadCaption>
          <TableHeadCaption>Amount</TableHeadCaption>
          <TableHeadCaption>Currency</TableHeadCaption>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};