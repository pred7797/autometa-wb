import Link from 'next/link';
import { useSession } from "next-auth/react";

const TopBar = () => {

  const { data: session } = useSession();
  

  return (
    <div className="top-bar">
      <Link href="/" className="logo">Autometa</Link>
      <Link href="/login" className='login-button'>
      Login
      </Link>
    </div>
  );
};

export default TopBar;