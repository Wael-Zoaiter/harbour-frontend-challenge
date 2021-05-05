import { SCHOLARSHIP_PAGE_URL } from 'Config';
import { useFetch } from 'Hooks';
import { ScholarshipPage } from 'Types';
import ScholarshipDetails from './ScholarshipDetails';

function ScholarshipDetailsPage() {
  const { status, data, error } = useFetch<ScholarshipPage>(SCHOLARSHIP_PAGE_URL);

  const render = () => {
    switch(status) {
      case 'init':
      case 'fetching':
        return <div>loading...</div>
      case 'error':
        return <div>{error}</div>
      case 'fetched':
        return <ScholarshipDetails data={data} />
    }
  };

  return (
    <div className="scholarship-details-page">
      {render()}
    </div>
  );
}

export default ScholarshipDetailsPage;
