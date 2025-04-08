import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export default function IconWrapper({ icon, width = 24, height = 24 }) {
    return <Icon icon={icon} width={width} height={height} />;
}

IconWrapper.propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

IconWrapper.defaultProps = {
    width: 24,
    height: 24
};