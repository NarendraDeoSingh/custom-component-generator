import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Body from './Body';

export default {
    title: 'Components/Body',
    component: Body,
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add your default props here
};
