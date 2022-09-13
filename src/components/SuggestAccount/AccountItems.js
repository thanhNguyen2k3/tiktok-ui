import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} render={renderPreview} placement="bottom" offset={[-22, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b821a6da0904f89ac0857158cd6112ee~c5_100x100.jpeg?x-expires=1663250400&x-signature=cdJUaFlzmgLNb16Y3%2BeJagmNgxg%3D"
                        alt="MTM"
                    />

                    <div className={cx('item-info')}>
                        <strong>
                            <p className={cx('nickname')}>
                                mtm_2o
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                        </strong>
                        <p className={cx('name')}>Mai Trà Mi</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {};

export default AccountItems;
