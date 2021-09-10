import { Icon } from "./Icon";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaStar , FaRegStar } from 'react-icons/fa';

export default {
    title: "Atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconStarFill = Template.bind({});
IconStarFill.args = {
    icon : FaStar
}

export const IconStarEmpty = Template.bind({});
IconStarEmpty.args = {
    icon : FaRegStar
}