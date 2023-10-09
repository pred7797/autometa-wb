import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the session token (or any other relevant data) from cookies
    Cookies.remove('Session');

    // Redirect the user to the login page or any other desired location
    router.push('/login'); // Change this path to match your login page URL
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
