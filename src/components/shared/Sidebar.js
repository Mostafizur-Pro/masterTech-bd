import Link from "next/link";

function Sidebar() {
  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Component</summary>
          <ul className="w-60 p-2  bg-white  z-40">
            <li>
              <Link href="/category/Processor">CPU/Processor</Link>
            </li>
            <hr />
            <li>
              <Link href="/category/Motherboard">Motherboard</Link>
            </li>
            <hr />
            <li>
              <Link href="/category/RAM">RAM</Link>
            </li>
            <hr />
            <li>
              <Link href="/category/Power%20Supply%20Unit">
                Power Supply Unit
              </Link>
            </li>
            <hr />
            <li>
              <Link href="/category/Storage%20Device">Storage Device</Link>
            </li>
            <hr />
            <li>
              <Link href="/category/Monitor">Monitor</Link>
            </li>
            <hr />
            <li>
              <Link href="/category/GPU">GPU</Link>
            </li>
            <li>
              <Link href="/category/Mouse">Mouse</Link>
            </li>
            <li>
              <Link href="/category/Keyboard">Keyboard</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar hidden lg:flex bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-2xl px-1">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
      <Link href="/login" className="btn">
        Login
      </Link>
    </div> */}
    </div>
  );
}

export default Sidebar;
