import { colors } from "@turborepo/tokens";
import styled from "styled-components/native";
import { ButtonProps } from "./types";

export const Container = styled.TouchableHighlight<Pick<ButtonProps, 'variant'>>`
  background-color: ${p => p.variant === 'primary' ? colors.primary.dark : colors.danger.dark};
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  height: 60px;
`;

export const Text = styled.Text`
  color: ${colors.white.light};
  font-size: 18px;
`;
