
import type { Meta, StoryObj } from '@storybook/angular';

import { ProductCardComponent } from './product-card.component';
import { fn } from '@storybook/test';

const meta: Meta<ProductCardComponent> = {
  title: 'Product Card',
  component: ProductCardComponent,
  tags: ['autodocs'],
  args: {
    onOpen: fn(),
  },
};

export default meta;
type Story = StoryObj<ProductCardComponent>;

export const Default: Story = {
  args: {
    product: {
      image: 'https://source.unsplash.com/random/200x200',
      name: 'Example Product',
      description: 'This is an example product',
      price: 100,
    },
  },
};

export const Expensive: Story = {
  args: {
    product: {
      image: 'https://source.unsplash.com/random/200x200',
      name: 'Expensive Product',
      description: 'This is an expensive product',
      price: 1000,
    },
  },
};

export const Cheap: Story = {
  args: {
    product: {
      image: 'https://source.unsplash.com/random/200x200',
      name: 'Cheap Product',
      description: 'This is a cheap product',
      price: 10,
    },
  },
};