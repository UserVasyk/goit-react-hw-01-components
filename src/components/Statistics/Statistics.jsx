import PropTypes from 'prop-types';
import { Title, Section, ItemStat, ListStats } from './Statistics.styled';
export const Statistics = ({ stats }) => {
  return (
    <Section>
      <Title>Upload stats</Title>

      <ListStats>
        {stats.map(({ id, label, percentage }) => (
          <ItemStat key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </ItemStat>
        ))}
      </ListStats>
    </Section>
  );
};
Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
