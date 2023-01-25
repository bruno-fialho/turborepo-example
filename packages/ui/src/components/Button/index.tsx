import { Container, Text } from './styles';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  return (
    <Container variant={props.variant}>
      <Text>{props.title}</Text>
    </Container>
  )
}
// Button.displayName = 'Button'