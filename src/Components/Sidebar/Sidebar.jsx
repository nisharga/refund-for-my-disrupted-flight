import React, { useContext } from "react";
import { FaExternalLinkAlt, FaHistory } from "react-icons/fa";
import { FiLogOut, FiHome } from "react-icons/fi";
import { MdSubscriptions, MdPolicy } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Sidebar = () => {
  const { logOut, user } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }
  return (
    <>
      <div className="text-white px-8 pb-5 text-lg space-y-3 h-full flex flex-col justify-end">
        <Link to="/" className="flex items-center gap-6 hover:text-sky-500">
          <p><FiHome></FiHome></p><p>Home</p>
        </Link>

        {
          user ?
            <>
              <Link to="/policies" className="flex items-center gap-6 hover:text-sky-500">
                <p><MdPolicy></MdPolicy></p><p>Airlines Policy</p>
              </Link>
              <Link to="/eligible_history" className="flex items-center gap-6 hover:text-sky-500">
                <p><FaHistory></FaHistory></p><p>Eligible History</p>
              </Link>
              <Link to="/letter_history" className="flex items-center gap-6 hover:text-sky-500">
                <p><SlEnvolopeLetter></SlEnvolopeLetter></p><p>Claim Letter History</p>
              </Link>
              <Link to="/subscription" className="flex items-center gap-6 hover:text-sky-500">
                <p><MdSubscriptions></MdSubscriptions></p><p>Subscriptions</p>
              </Link>
              <Link className="flex items-center gap-6 hover:text-sky-500" onClick={logout}>
                <p><FiLogOut></FiLogOut></p><p>Log Out</p>
              </Link>
            </>
            :
            <Link to="/login" className="flex items-center gap-6 hover:text-sky-500">
              <p><FiLogOut></FiLogOut></p><p>Log in</p>
            </Link>
        }
        <Link to="/feedback_contact" className="flex items-center gap-6 hover:text-sky-500">
          <p><FaExternalLinkAlt></FaExternalLinkAlt></p><p>Feedback & Contact</p>
        </Link>
      </div>
    </>

  );
};

export default Sidebar;
