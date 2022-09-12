import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';

import Menu, { MenuItems } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItems title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItems title="Live  " to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
