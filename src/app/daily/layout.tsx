import PageTitle from '@/components/PageTitle';
import PlayList from '@/components/PlayList';
import pageInfo from '@/constants/pageInfo';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const DailyLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <PlayList />
    </>
  );
};

export default DailyLayout;
