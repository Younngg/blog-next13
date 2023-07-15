'use client';

import navLinks from '@/constants/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

type BgColorForPathType = {
  [key: string]: string;
};

const bgColorForPath: BgColorForPathType = {
  '/velog': 'bg-white',
  '/velog/[id]': 'bg-white',
  '/posts': `bg-[url('/asset/studyBg.jpg')] bg-cover`,
  '/posts/[id]': `bg-[url('/asset/studyBg.jpg')] bg-cover`,
  '/': 'bg-[#91c788]',
};

const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const HEADER_HEIGHT = headerRef.current?.clientHeight || 0;
    if (window.scrollY >= HEADER_HEIGHT) {
      headerRef.current?.classList.add(
        'shadow-md',
        'h-20',
        'flex-row',
        'justify-around'
      );
      headerRef.current?.classList.remove('flex-col');
    } else {
      headerRef.current?.classList.remove(
        'shadow-md',
        'h-20',
        'flex-row',
        'justify-around'
      );
      headerRef.current?.classList.add('flex-col');
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 ${bgColorForPath[pathname]} mx-auto flex flex-col items-center p-8 gap-4`}
      ref={headerRef}
    >
      <h1 className='font-bold text-lg'>
        <Link href='/'>지영의 블로그</Link>
      </h1>
      <div className='menu'>
        <nav className='flex'>
          {navLinks.map(({ link, title }) => (
            <li key={link} className='list-none hover:text-[#595959]'>
              <Link href={link} className='block px-4'>
                {title}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
