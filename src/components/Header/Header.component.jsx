import React from "react";
import { Link } from "react-router-dom";

import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
  <div >
    {/* <Link  to="/">
      Contact
    </Link> */}
    {/* {console.log(currentUser)} */}
    {currentUser ? <div onClick={() => auth.signOut()}>Sign Out</div> : <Link to='signin'>Sign In</Link>}
  </div>
);

export default Header;
