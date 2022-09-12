import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AcountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    <span className={cx('check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AcountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AcountItem;
