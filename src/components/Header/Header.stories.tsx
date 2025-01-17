import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './Header';

export default {
    title: 'Components/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add your default props here
};
