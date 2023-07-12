import PageTitle from '@/components/PageTitle';
import PlayList from '@/components/PlayList';
import pageInfo from '@/constants/pageInfo';

const DailyLayout = () => {
  return (
    <>
      <PlayList />
      <PageTitle
        title={pageInfo['/daily'].title}
        description={pageInfo['/daily'].description}
      />
    </>
  );
};

export default DailyLayout;
