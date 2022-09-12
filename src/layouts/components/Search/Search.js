import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AcountItem';
import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 800);

    const inputRef = useRef();

    const handelClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handelHideResult = () => {
        setShowResult(false);
    };

    const handelChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            return setSearchResult([]);
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handelHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handelChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handelClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
