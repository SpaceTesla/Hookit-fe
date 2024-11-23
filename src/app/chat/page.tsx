import React from 'react';
import { CardsChat } from '@/components/chat-card';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Header from '@/components/app-header';

const Page: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header pageName={'Chat'} />
        <CardsChat />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
