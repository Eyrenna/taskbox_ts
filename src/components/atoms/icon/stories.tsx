import { Icon } from "./Icon";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaStar , FaRegStar } from 'react-icons/fa';
import { StyledStarFill, StyledStarReg } from "../../../styles/StyledIcon";

export default {
    title: "Atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconStarFill = Template.bind({});
IconStarFill.args = {
    icon : StyledStarFill
}

export const IconStarEmpty = Template.bind({});
IconStarEmpty.args = {
    icon : StyledStarReg
}