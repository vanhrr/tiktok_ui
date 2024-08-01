import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { search } from "~/apiServices/searchServices";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useRef, useState, useEffect } from "react";
import { Wrapper as PopperWrapper } from "~/Components/Popper/Wrapper";
import AccountItem from "~/Components/AccountItem";
import useDebounce from "~/hooks/useDebounce";
const cx = classNames.bind(styles);

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounce = useDebounce(searchInput, 500);
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     debounce
    //   )}&type=less`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }, [debounce]);
  const handleOnChange = (e) => {
    return setSearchInput(e.target.value);
  };
  const handleOnDelete = () => {
    setSearchInput("");
    inputRef.current.focus();
  };
  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("searchResult")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => {
        setShowResult(false);
      }}
    >
      <div className={cx("searchBar")}>
        <input
          ref={inputRef}
          value={searchInput}
          type="text"
          className={cx("searchInput")}
          placeholder="vanhrr"
          onChange={handleOnChange}
          onFocus={() => {
            setShowResult(true);
          }}
        />
        {!!searchInput && !loading && (
          <button onClick={handleOnDelete} className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx("load")} icon={faSpinner} />}
        <button className={cx("searchIcon")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
