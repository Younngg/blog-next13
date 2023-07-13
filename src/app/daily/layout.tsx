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
      <PageTitle
        title={pageInfo['/daily'].title}
        description={pageInfo['/daily'].description}
      />
      {children}
      <PlayList />
    </>
  );
};

export default DailyLayout;
