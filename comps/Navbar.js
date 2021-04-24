import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/russia.jpg" width={128} height={77} />
        {/* <img src="/russia.jpg"></img> */}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
