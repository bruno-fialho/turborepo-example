import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "ui";

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    title: 'Send',
    variant: 'primary',
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {}


// export const Secondary: StoryObj<ButtonProps> = {
//   args: {
//     variant: 'danger',
//   },
// }

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