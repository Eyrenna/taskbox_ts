import { Star } from "./Star";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Atoms/Star",
    component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const StarIconButton = Template.bind({});