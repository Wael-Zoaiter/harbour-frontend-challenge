import { SCHOLARSHIP_PAGE_URL } from 'Config';
import { useFetch } from 'Hooks';
import { ScholarshipPage } from 'Types';

function ScholarshipDetails() {
  const { status, data, error } = useFetch<ScholarshipPage>(SCHOLARSHIP_PAGE_URL);

  console.log({ status, data, error });
  
  return (
    <div className="scholarship-details">
      {status}
    </div>
  );
}

export default ScholarshipDetails;
