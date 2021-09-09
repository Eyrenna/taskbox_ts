import react from 'react';
import { Task } from './Task';

interface TaskListProps {
    loading: boolean,
    tasks: [],
    onArchiveTask : () => void,
    onPinTask: () => void
}

export const TaskList = ({loading, tasks, onArchiveTask, onPinTask} : TaskListProps) => {
    
    const events = {
        onArchiveTask,
        onPinTask
    }

    if (loading) {
        return (
            <div>
                loading
            </div>
        )
    }

    if (tasks.length === 0) {
        return (
            <div>
                empty
            </div>
        )
    }

    return (
            tasks.map(task =>(
                <Task {...task} />
            ))
    )
};