// src/components/app-sidebar.tsx
import * as React from 'react';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <SidebarTrigger className="-ml-1" />
        {/* Add your sidebar content here */}
      </SidebarInset>
    </SidebarProvider>
  );
}
