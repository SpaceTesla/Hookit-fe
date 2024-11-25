// import { NEXT_PUBLIC_API_URL } from '@/config';
// import Cookies from 'js-cookie';

export const handleMongoDBClick = () => {
  console.log('MongoDB');
};

export const handleCreateWebhookClick = async () => {
  console.log('Create Webhook');

  const data = {
    name: 'Parse JSON to SQL Workflow',
    steps: [
      {
        name: 'Parse JSON to CSV',
        type: 'parse',
        payload: {
          inputType: 'json',
          outputType: 'csv',
          inputLocation: '/data/input.json',
          outputLocation: '/data/output.csv',
        },
        stepOrder: 1,
      },
      {
        name: 'Parse CSV to SQL',
        type: 'parse',
        payload: {
          inputType: 'csv',
          outputType: 'sql',
          inputLocation: '/data/output.csv',
          outputLocation: '/data/output.sql',
        },
        stepOrder: 2,
      },
    ],
  };

  console.log(JSON.stringify(data));

  // const response = await fetch(
  //   `${NEXT_PUBLIC_API_URL}/workflow/create?id=${parseInt(Cookies.get('uid'))}`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   },
  // );
  // const res = await response.json();
  // return res;
};
