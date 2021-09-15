import { Task } from './Task';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default {
    title: "Molecules/Task",
    component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const DefaultTask = Template.bind({});
DefaultTask.args = {
    checked : false,
    value: 'To do Task',
    icon : FaRegStar
}

export const PriorityTask = Template.bind({});
PriorityTask.args = {
    ...DefaultTask.args,
    icon : FaStar
}

export const CheckedTask = Template.bind({});
CheckedTask.args = {
    ...DefaultTask.args,
    checked : true
}