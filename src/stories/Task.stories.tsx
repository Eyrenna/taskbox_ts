import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Task } from './Task';

export default {
    title: 'MyApp/Task',                         // Nombre de la ruta (url)
    component: Task                           // Nombre del archivo del componente referido
  } as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    id : '1',
    title: 'Test Task',
    state: 'TASK_INBOX'
};

export const Pinned = Template.bind({});      // Asume las props de Default y sobrescribe las que indicamos
Pinned.args = {
    state: 'TASK_PINNED',
};

export const Archieved = Template.bind({});
Archieved.args = {
    state: 'TASK_PINNED',
};