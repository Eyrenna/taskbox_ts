import { Task } from './Task';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Molecules/Task",
    component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const DefaultTask = Template.bind({});
DefaultTask.args = {
    id : '1',
    title : 'Task to do',
    state: 'TASK_TO_DO'
}

export const PinnedTask = Template.bind({});
PinnedTask.args = {
    ...DefaultTask.args,
    state : 'TASK_PINNED'
}

export const ArchivedTask = Template.bind({});
ArchivedTask.args = {
    ...DefaultTask.args,
    state :  'TASK_ARCHIVED'
}