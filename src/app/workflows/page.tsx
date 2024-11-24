import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

import Header from '@/components/app-header';
import ExpandableDivList from '@/components/app-webhooks';

const workflows = [
  { title: 'Tasks Allotted', value: 22000 },
  { title: 'Tasks Consumed', value: 18000 },
  { title: 'Tasks Remaining', value: 4000 },
  { title: 'Free Tasks Consumed', value: 200 },
];

interface HeaderProps {
  pageName: string;
}

interface WorkflowCardProps {
  title: string;
  icon: React.ReactNode;
}

const Page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header pageName={'Workflows'} />
        <ExpandableDivList />
      </SidebarInset>
    </SidebarProvider>
  );
};
export default Page;
