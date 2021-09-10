import { Text } from "./text";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Atoms/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextDefault = Template.bind({});
TextDefault.args = {
    value : 'To do Task'
}