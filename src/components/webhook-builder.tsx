'use client';

import * as React from 'react';
import { Plus, MoreVertical, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const apps = [
  { name: 'Filter (Pabbly)', icon: '🔍' },
  { name: 'Router (Pabbly)', icon: '🔀' },
  { name: 'Iterator (Pabbly)', icon: '🔄' },
  { name: 'Delay (Pabbly)', icon: '⏲️' },
  { name: 'API (Pabbly)', icon: '🔌' },
  { name: 'Pabbly Email Marketing', icon: '📧' },
  { name: 'Mailchimp', icon: '📬' },
  { name: 'Trello', icon: '📋' },
  { name: 'SendFox', icon: '🦊' },
  { name: 'MailerLite Classic', icon: '✉️' },
  { name: 'Moosend', icon: '📨' },
  { name: 'Twilio', icon: '📱' },
];

export default function WebhookBuilder() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isExpanded, setIsExpanded] = React.useState(false);

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return <div> fddf </div>;
}
