import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b821a6da0904f89ac0857158cd6112ee~c5_100x100.jpeg?x-expires=1663250400&x-signature=cdJUaFlzmgLNb16Y3%2BeJagmNgxg%3D"
                    alt="Mtm"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <strong>
                        <p className={cx('nickname')}>
                            mtm_2o
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                    </strong>
                    <p className={cx('name')}>Mai Trà Mi</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>7.2M </strong>
                        <span className={cx('label')}>Followers</span>

                        <strong className={cx('value')}>476.9M</strong>
                        <span className={cx('label')}>Likes </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {};

export default AccountPreview;
