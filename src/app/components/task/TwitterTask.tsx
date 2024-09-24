import React, { useState, useEffect } from 'react';
import { FaTwitter, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Task {
  id: number;
  text: string;
  linkText: string;
  link: string;
  buttonText: string;
  extraContent?: string;
}

interface TaskData {
  lastModified: number;
  tasks: Task[];
}

interface TaskProps extends Task {
  isCompleted: boolean;
  isDisabled: boolean;
  onComplete: () => void;
  isFirstTask?: boolean;
}

const Task: React.FC<TaskProps> = ({
  text,
  linkText,
  link,
  buttonText,
  extraContent,
  isCompleted,
  isDisabled,
  onComplete,
  isFirstTask = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isCompleted && !isDisabled) {
      onComplete();
      window.open(link, '_blank');
    }
  };

  return (
    <div className={`border-b last:border-b-0 py-2 px-3 ${isDisabled ? 'opacity-50' : ''} ${isFirstTask ? 'rounded-t-[12px]' : ''}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FaTwitter className="text-[#1DA1F2] flex-shrink-0 text-sm" />
          <span className="text-sm font-medium">
            {text}{' '}
            <a
              href={isDisabled ? undefined : link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#1DA1F2] hover:text-[#0c85d0] font-bold ${isDisabled ? 'pointer-events-none' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (isDisabled) e.preventDefault();
              }}
            >
              {linkText}
            </a>
            {' '}on Twitter
          </span>
        </div>
        <button
          onClick={handleClick}
          className={`bg-[#1DA1F2] hover:bg-[#0c85d0] text-white font-bold px-3 py-1 rounded text-xs transition-colors duration-200 min-w-[80px] ${isDisabled || isCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isDisabled || isCompleted}
        >
          {buttonText}
        </button>
      </div>
      {extraContent && (
        <div className="text-xs mt-1">{extraContent}</div>
      )}
    </div>
  );
};

interface TaskListProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ isOpen, toggleOpen }) => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [lastModified, setLastModified] = useState<number>(0);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/TaskTwitter.txt');
      const data: TaskData = await response.json();
      
      if (data.lastModified > lastModified) {
        setTasks(data.tasks);
        setLastModified(data.lastModified);
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    const intervalId = setInterval(fetchTasks, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [lastModified]);

  const handleComplete = (id: number) => {
    setCompletedTasks([...completedTasks, id]);
  };

  return (
    <div className="bg-white overflow-hidden w-full flex flex-col border 4 border-blue-500 rounded-[12px]">
      <div 
        className="bg-blue-500 text-white p-3 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center space-x-2">
          <FaTwitter className="text-lg" />
          <span className="font-bold text-lg">Twitter</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{completedTasks.length}/{tasks.length} Tasks</span>
          {isOpen ? <FaChevronUp className="md:hidden" /> : <FaChevronDown className="md:hidden" />}
        </div>
      </div>
      <div className={`bg-white flex-grow overflow-hidden ${isOpen ? 'block' : 'hidden md:block'}`}>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            {...task}
            isCompleted={completedTasks.includes(task.id)}
            isDisabled={task.id > completedTasks.length}
            onComplete={() => handleComplete(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;