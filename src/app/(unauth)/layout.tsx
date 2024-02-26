import NavBar from '@/components/NavBar/NavBar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-full w-full bg-white md:mx-35">
      <NavBar />
      {children}
    </div>
  );
}
