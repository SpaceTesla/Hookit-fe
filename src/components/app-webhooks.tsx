'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FileUpload } from '@/components/file-upload';

export const handleMongoDBClick = async (): Promise<string> => {
  return 'MongoDB connected!';
};

export const handleCreateWebhookClick = async (): Promise<string> => {
  return 'https://97a8-119-82-122-154.ngrok-free.app/webhook/FBliruHCIycbaE0Nx6TNCJK0fwrEbT9bLMh9WFnAEpE=';
};

interface App {
  name: string;
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ExpandableDivItem {
  title: string;
  type: 'webhook' | 'source' | 'filter' | 'destination';
  description: string;
  icon: string;
  apps?: App[];
  onClick?: () => Promise<string>;
}

interface ExpandableDivProps {
  item: ExpandableDivItem;
  isExpanded: boolean;
  onToggle: () => void;
}

const data: ExpandableDivItem[] = [
  {
    title: 'Create Webhook',
    type: 'webhook',
    icon: '🔍',
    description: 'Trigger: When this happens',
    onClick: handleCreateWebhookClick,
  },
  {
    title: 'Choose Source',
    type: 'source',
    icon: '🔍',
    description: 'Action: Do this',
    apps: [
      { name: 'MySQL', icon: '🔀' },
      { name: 'PostgresSQL', icon: '🔄' },
      { name: 'Firebase', icon: '⏲️' },
      {
        name: 'MongoDB',
        icon: '🔌',
        onClick: () => handleMongoDBClick(),
      },
      { name: 'Apache Kafka', icon: '📧' },
      { name: 'RabbitMQ', icon: '📬' },
      { name: 'HTTP(S) API', icon: '🔍' },
    ],
    onClick: async () => 'Source selected!',
  },
  {
    title: 'Choose Filter',
    type: 'filter',
    icon: '🔍',
    description: 'Action: Do this',
    onClick: async () => 'Filter applied!',
  },
  {
    title: 'Choose Destination',
    type: 'destination',
    icon: '🔍',
    description: 'Action: Do this',
    apps: [
      { name: 'MySQL', icon: '🔀' },
      { name: 'PostgresSQL', icon: '🔄' },
      { name: 'Firebase', icon: '⏲️' },
      {
        name: 'MongoDB',
        icon: '🔌',
        onClick: () => console.log('MongoDB clicked'),
      },
      { name: 'Apache Kafka', icon: '📧' },
      { name: 'RabbitMQ', icon: '📬' },
      { name: 'HTTP(S) API', icon: '🔍' },
    ],
    onClick: async () => 'Destination selected!',
  },
];

export default function ExpandableDivList() {
  const [expandedStates, setExpandedStates] = useState<Record<number, boolean>>(
    {},
  );

  const handleToggle = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      {data.map((item, index) => (
        <ExpandableDiv
          key={index}
          item={item}
          isExpanded={expandedStates[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

function ExpandableDiv({ item, isExpanded, onToggle }: ExpandableDivProps) {
  const [myLink, setMyLink] = useState<string>('');

  useEffect(() => {
    const fetchLink = async () => {
      if (isExpanded && item.onClick) {
        try {
          const link = await item.onClick();
          setMyLink(link);
        } catch (error) {
          console.error('Error in onClick handler:', error);
        }
      }
    };
    fetchLink().then(
      () => console.log('Link fetched!'),
      (error) => console.error('Error fetching link:', error),
    );
  }, [isExpanded, item]);

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file.name);
  };

  return (
    <div className="m-4 w-auto overflow-hidden rounded-lg border border-b">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="inline-block rounded-md bg-green-100 p-2">
            <span className="text-xl">{item.icon}</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-secondary-foreground/70">
              {item.description}
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[600px] border-t' : 'max-h-0'
        }`}
      >
        <div className="flex w-full flex-col p-4">
          {item.apps?.length && (
            <div className="flex">
              {item.apps.map((app) => (
                <Button
                  key={app.name}
                  variant="outline"
                  className="m-4 flex h-32 flex-1 flex-col items-center justify-center space-y-2"
                  onClick={app.onClick}
                >
                  <span className="text-2xl">{app.icon}</span>
                  <span className="text-center text-xs">{app.name}</span>
                </Button>
              ))}
            </div>
          )}

          {item.type === 'source' && (
            <FileUpload onFileSelectAction={handleFileSelect} />
          )}

          {item.type === 'webhook' && (
            <div className="flex w-full items-center">
              <div className="flex min-h-[100%] w-full flex-1 items-center rounded-lg rounded-r-none bg-secondary px-2 py-2">
                {myLink || 'No link available'}
              </div>
              <Button size="lg" className="rounded-l-none">
                Copy
              </Button>
            </div>
          )}

          {item.type === 'filter' && (
            <div className="flex w-full items-center">
              <p>{myLink || 'No filter applied yet.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
