import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'ui';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button title="Confirmar" variant="primary" />
);
// export const Danger: ComponentStory<typeof Button> = (args) => (
//   <Button {...args} />
// );

// Danger.args = {
//   variant: 'danger',
// }


// export const Primary: ComponentStory<typeof Button> = {}

// export const Secondary: ComponentStory<typeof Button> = {
//   args: {
//     variant: 'danger',
//   },
// }

// storiesOf('Button', module)
//   .add('color primary', () => (
//     <Button variant="primary" title={text('Button text', 'Hello Button')} onPress={action('clicked-emoji')}/>
//   ))
//   .add('color danger', () => (
//     <Button variant="danger" title={text('Button text', 'Hello Button')} onPress={action('clicked-emoji')}/>
//   ));
