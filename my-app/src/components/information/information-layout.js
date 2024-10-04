import PropTypes from 'prop-types';
import styles from './information.module.css';

export const InformationLayout = ({ information }) => {
	return <div className={styles.information}>{information}</div>;
};

InformationLayout.propTypes = {
	information: PropTypes.string,
};
