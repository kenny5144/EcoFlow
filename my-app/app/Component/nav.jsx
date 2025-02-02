import SignOut from "../Component/sign-out";
import { auth } from "../lib/auth";
import NavbarComponent from "./navbarComponent";
const Nav = async () => {
  const session = await auth();
  return (
    <>
      <NavbarComponent />
    </>
  );
};

export default Nav;
