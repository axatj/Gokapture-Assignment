import Toolbar from '@/components/Toolbar';
import Grid from '@/components/Grid';

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blueviolet mb-4">Spreadsheet Application</h1>
      <Toolbar />
      <Grid />
    </div>
  );
};

export default Page;