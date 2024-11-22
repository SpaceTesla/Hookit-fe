import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import { CircleCheckBig, ChartPie, Puzzle, Flame } from 'lucide-react';

import { DataTable } from '@/app/dashboard/data-table';
import { mockData } from '@/data/tasks';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

export default function Page() {
  const tasks = [
    { title: 'Tasks Allotted', value: 22000, icons: CircleCheckBig },
    { title: 'Tasks Consumed', value: 18000, icons: ChartPie },
    { title: 'Tasks Remaining', value: 4000, icons: Puzzle },
    { title: 'Free Tasks Consumed', value: 200, icons: Flame },
  ];
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-4 gap-4">
            {tasks.map((task) => {
              return (
                <Card
                  key={task.title}
                  className="flex items-center gap-1 rounded-xl border border-primary bg-primary/10 p-4 text-primary"
                >
                  <div
                    className={
                      'mx-1 flex aspect-square items-center justify-center rounded-full'
                    }
                  >
                    <task.icons />
                  </div>
                  <div
                    className={
                      'inline-flex flex-1 flex-col justify-center text-center'
                    }
                  >
                    <CardDescription className={'font-bold text-primary/80'}>
                      {task.title}
                    </CardDescription>
                    <CardTitle>{task.value}</CardTitle>
                  </div>
                </Card>
              );
            })}
          </div>
          <DataTable data={mockData} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
