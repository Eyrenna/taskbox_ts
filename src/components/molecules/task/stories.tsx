import { Task } from './Task';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default {
    title: "Molecules/Task",
    component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const defaultTask = Template.bind({});
defaultTask.args = {
    checked : false,
    value: 'To do Task',
    icon : FaRegStar
}

export const priorityTask = Template.bind({});
priorityTask.args = {
    ...defaultTask.args,
    icon : FaStar
}

export const checkedTask = Template.bind({});
checkedTask.args = {
    ...defaultTask.args,
    checked : true
}