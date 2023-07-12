'use client';

import navLinks from '@/constants/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BgColorForPathType = {
  [key: string]: string;
};

const bgColorForPath: BgColorForPathType = {
  '/daily': 'bg-white',
  '/daily/[id]': 'bg-white',
  '/study': 'studyBg',
  '/study/[id]': 'studyBg',
  '/': 'bg-[#91c788]',
};

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`sticky top-0 z-50 ${bgColorForPath[pathname]}`}>
      <div className='container mx-auto flex flex-col items-center'>
        <h1 className='mt-8 mb-3 font-bold text-lg'>
          <Link href='/'>지영의 블로그</Link>
        </h1>
        <div className='menu mb-4'>
          <nav className='flex'>
            {navLinks.map(({ link, title }) => (
              <li key={link} className='list-none hover:text-[#595959]'>
                <Link href={link} legacyBehavior>
                  <a className='block p-4'>{title}</a>
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
