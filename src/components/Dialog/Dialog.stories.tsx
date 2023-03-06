import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '.';
import Button from '../Button';
import Input from '../Input';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const triggerButton = <Button variant='primary'>Trigger</Button>;

const defaultContent = (
  <div className="flex flex-col gap-4 w-80">
    <h1>Dialog</h1>
    <Input title='test' placeholder='placeholder' />
    <Button variant='primary'>Submit</Button>
  </div>
);

export const Default: Story = {
  args: {
    trigger: triggerButton,
    accessibleTitle: 'title for screen reader',
    accessibleDescription: 'description for screen reader',
    content: defaultContent,
  },
};
