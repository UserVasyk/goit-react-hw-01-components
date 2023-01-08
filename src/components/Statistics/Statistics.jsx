import PropTypes from 'prop-types';
import { Title, Section, ItemStat, ListStats } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title.length > 0 && <Title>{title}</Title>}

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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
