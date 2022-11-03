import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { getRandomColor } from 'components/utils/getRandomColor';
import {
    CardTitle,
    StatItem,
    StatCaption,
    StatNumber,
} from 'components/Statistics/Statistics.styled';


export function Statistics({ title = '', stats }) {
    return (
        <Box
            width="cardBig"
            mt={4}
            mr="auto"
            ml="auto"
            textAlign="center"
            borderRadius="5px"
            overflow="hidden"
            boxShadow="medium"
            as="section"
        >

            {title ? <CardTitle>{title}</CardTitle> : null}

            <Box display="flex" m={0} p={0} as="ul">
                {stats.map(({ id, label, percentage }) => (
                    <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
                        <StatCaption>{label}</StatCaption>
                        <StatNumber>{percentage}%</StatNumber>
                    </StatItem>
                ))}
            </Box>
        </Box>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
       