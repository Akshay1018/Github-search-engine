
import React, { useState } from "react";
import PropTypes from 'prop-types';


function Search({ searchUsers, clearUsers, chkbtn }) {
  const [text, setText] = useState('');
  const [chkStyle, setChkStyle] = useState(false);
  const onChange = (e) => {
    setText(e.target.value);
    setChkStyle(false);

  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {

      setChkStyle(true);
      setTimeout(() => {
        setChkStyle(false);
      }, 5000);


    } else {
      setChkStyle(false);
      searchUsers(text);
      setText('');
    }

  }
  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <div className='tooltip'> <input type="text" id="searchBar" placeholder="Search Github Users"
          style={chkStyle ? Errorstyle : (null)}
          value={text}
          onChange={onChange} />
          {chkStyle ? (<span class="tooltiptext">Please Enter Something to Search!</span>) : (null)}</div>

        <div>
          <input type="submit" value="Search" />
          {chkbtn ? (<input type="button" value="Clear"
            onClick={clearUsers} />)
            : (null)}
        </div>
      </form>

    </>
  )
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  chkbtn: PropTypes.bool.isRequired,

}
const Errorstyle = {
  border: '3px maroon solid',
  boxShadow: '2px 2px 2px red'
}
export default Search;
