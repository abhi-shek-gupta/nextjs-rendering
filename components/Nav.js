// components/Nav.js
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='p-2 bg-black text-white' >
      <ul className='flex gap-4 justify-center'>
        <li>
          <Link href="/ssg">Static Site Generation (SSG)</Link>
        </li>
        <li>
          <Link href="/ssr">Server-Side Rendering (SSR)</Link>
        </li>
        <li>
          <Link href="/csr">Client-Side Rendering (CSR)</Link>
        </li>
        <li>
          <Link href="/isr">Incremental Static Regeneration (ISR)</Link>
        </li>
        {/* <li>
          <Link href="/lazy-ssr">Lazy SSR</Link>
        </li>
        <li>
          <Link href="/lazy-ssg">Lazy SSG</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
