import React, { useContext } from "react";
import { FaExternalLinkAlt, FaHistory } from "react-icons/fa";
import { FiLogOut, FiHome } from "react-icons/fi";
import { MdSubscriptions, MdPolicy } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import CustomLinks from "../../router/CustomLinks/CustomsLinks";

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
        <CustomLinks to="/" className="flex items-center gap-6 hover:text-sky-500">
          <p><FiHome></FiHome></p><p>Home</p>
        </CustomLinks>

        {
          user ?
            <>
              <CustomLinks to="/policies" className="flex items-center gap-6 hover:text-sky-500">
                <p><MdPolicy></MdPolicy></p><p>Airlines Policy</p>
              </CustomLinks>
              <CustomLinks to="/eligible_history" className="flex items-center gap-6 hover:text-sky-500">
                <p><FaHistory></FaHistory></p><p>Eligible History</p>
              </CustomLinks>
              <CustomLinks to="/letter_history" className="flex items-center gap-6 hover:text-sky-500">
                <p><SlEnvolopeLetter></SlEnvolopeLetter></p><p>Claim Letter History</p>
              </CustomLinks>
              <CustomLinks to="/subscription" className="flex items-center gap-6 hover:text-sky-500">
                <p><MdSubscriptions></MdSubscriptions></p><p>Subscriptions</p>
              </CustomLinks>
              <CustomLinks className="flex items-center gap-6 hover:text-sky-500" onClick={logout}>
                <p><FiLogOut></FiLogOut></p><p>Log Out</p>
              </CustomLinks>
            </>
            :
            <CustomLinks to="/login" className="flex items-center gap-6 hover:text-sky-500">
              <p><FiLogOut></FiLogOut></p><p>Log in</p>
            </CustomLinks>
        }
        <CustomLinks to="/feedback_contact" className="flex items-center gap-6 hover:text-sky-500">
          <p><FaExternalLinkAlt></FaExternalLinkAlt></p><p>Feedback & Contact</p>
        </CustomLinks>
      </div>
    </>

  );
};

export default Sidebar;
