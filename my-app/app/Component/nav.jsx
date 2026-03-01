import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NavbarComponent from "./navbarComponent";

const Nav = async () => {
  const session = await getServerSession(authOptions); // v4 function
  return <NavbarComponent session={session} />;
};

export default Nav;