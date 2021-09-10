import { Check } from "./Check";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Atoms/Check",
    component: Check,
    argTypes: {
        /*checked : {              //It's not necessary declare this control because is autogenerated by Componenet Interface description
            control : {
                type : 'boolean'
            } 
        }*/
    }
} as ComponentMeta<typeof Check>;

// ArgTypes -- we can add handle controls

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const Archived = Template.bind({});
Archived.args = {
    checked : false               // Here we can inizialize an arg
}