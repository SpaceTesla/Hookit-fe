import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

import Header from '@/components/app-header';

const workflows = [
  { title: 'Tasks Allotted', value: 22000 },
  { title: 'Tasks Consumed', value: 18000 },
  { title: 'Tasks Remaining', value: 4000 },
  { title: 'Free Tasks Consumed', value: 200 },
];

interface HeaderProps {
  pageName: string;
}

const Page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header pageName={'Workflows'} />
        Workflow Page
      </SidebarInset>
    </SidebarProvider>
  );
};
export default Page;
