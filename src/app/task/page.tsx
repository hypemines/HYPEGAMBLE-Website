'use client';

import React, { useState } from 'react';
import TaskList from '../components/task/TwitterTask';
import DiscordTaskList from '../components/task/DiscordTaskList';
import KickTask from '../components/task/KickTask';

type TaskType = 'twitter' | 'discord' | 'kick';

const TaskPage: React.FC = () => {
  const [openTask, setOpenTask] = useState<TaskType | null>(null);

  const toggleTask = (task: TaskType) => {
    if (openTask === task) {
      setOpenTask(null);
    } else {
      setOpenTask(task);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <TaskList 
            isOpen={openTask === 'twitter'} 
            toggleOpen={() => toggleTask('twitter')} 
          />
        </div>
        <div className="flex-1">
          <DiscordTaskList 
            isOpen={openTask === 'discord'} 
            toggleOpen={() => toggleTask('discord')} 
          />
        </div>
        <div className="flex-1">
          <KickTask 
            isOpen={openTask === 'kick'} 
            toggleOpen={() => toggleTask('kick')} 
          />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
