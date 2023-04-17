import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Label } from '../Label/Label';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="placeholder" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor="test input">Label</Label>
      <Input id="test input" placeholder="placeholder" />
    </div>
  ),
};

export const WithErrorMessage: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor="test input">Label</Label>
      <Input id="test input" error='There is an error message' placeholder="placeholder" />
    </div>
  ),
};

export const WithErrorNoMessage: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor="test input">Label</Label>
      <Input id="test input" error={true} placeholder="placeholder" />
    </div>
  ),
};