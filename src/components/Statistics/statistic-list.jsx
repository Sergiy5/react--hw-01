import PropTypes from "prop-types";
import getRandomHexColor from "../../utils/colorpiker";
import { Section, Title, StatsList, Label, Item } from "./statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            className="lable"
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <Label className="label">{label}</Label>
            <Label className="percentage">{percentage}%</Label>
          </Item>
        ))}
      </StatsList>
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
