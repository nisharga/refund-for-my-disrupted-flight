import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiLogOut, FiHome, FiLogIn } from "react-icons/fi";
import { MdPolicy } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl"; 
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
              <CustomLinks to="/letter_history" className="flex items-center gap-6 hover:text-sky-500">
                <p><SlEnvolopeLetter></SlEnvolopeLetter></p><p>Claim Letter History</p>
              </CustomLinks>
              <CustomLinks to="/feedback_contact" className="flex items-center gap-6 hover:text-sky-500">
              <p><FaExternalLinkAlt></FaExternalLinkAlt></p><p>Feedback & Contact</p>
            </CustomLinks>
              <CustomLinks className="flex items-center gap-6 hover:text-sky-500" onClick={logout}>
                <p><FiLogOut></FiLogOut></p><p>Log Out</p>
              </CustomLinks>
            </>
            :
            <CustomLinks to="/login" className="flex items-center gap-6 hover:text-sky-500">
              <p><FiLogIn></FiLogIn></p><p>Log in</p>
            </CustomLinks>
             }
         
      </div>
    </>

  );
};

export default Sidebar;
