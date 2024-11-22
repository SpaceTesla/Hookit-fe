export type Workflow = {
  id: string;
  status: 'completed' | 'in-progress' | 'failed';
  date: Date;
  application: string;
  workflowName: string;
  taskConsumption: number;
};

export const mockData: Workflow[] = [
  {
    id: '1',
    status: 'completed',
    date: new Date('2023-05-01'),
    application: 'CRM System',
    workflowName: 'Customer Onboarding',
    taskConsumption: 15,
  },
  {
    id: '2',
    status: 'in-progress',
    date: new Date('2023-05-02'),
    application: 'Email Marketing',
    workflowName: 'Newsletter Campaign',
    taskConsumption: 8,
  },
  {
    id: '3',
    status: 'failed',
    date: new Date('2023-05-03'),
    application: 'Inventory Management',
    workflowName: 'Stock Reorder',
    taskConsumption: 5,
  },
  {
    id: '4',
    status: 'completed',
    date: new Date('2023-05-04'),
    application: 'HR Portal',
    workflowName: 'Employee Evaluation',
    taskConsumption: 12,
  },
  {
    id: '5',
    status: 'in-progress',
    date: new Date('2023-05-05'),
    application: 'Project Management',
    workflowName: 'Sprint Planning',
    taskConsumption: 10,
  },
  // Add more mock data as needed
];
