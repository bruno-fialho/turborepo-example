import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@turborepo/ui';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button title="Confirmar" variant="primary" />
);
