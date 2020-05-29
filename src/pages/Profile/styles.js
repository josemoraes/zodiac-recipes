import styled from "styled-components";
import { KeyboardAvoidingView, Picker, TextInput } from "react-native";
import { Button } from "react-native-paper";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  GRAY_LIGHT,
  PURPLE_LIGHT,
} from "../../assets/colors";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: baseline;
  justify-content: center;
  background-color: ${SECONDARY_COLOR};
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

export const TextThin = styled.Text`
  font-size: 25px;
  color: ${PRIMARY_COLOR};
  font-weight: 300;
`;
export const TextBold = styled.Text`
  font-size: 25px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${SECONDARY_TEXT_COLOR};
  margin-bottom: 7px;
`;

export const Form = styled.View`
  flex: 1;
  align-self: stretch;
  align-items: baseline;
  flex-direction: column;
  padding-top: 25px;
`;

export const Input = styled(TextInput)`
  align-self: stretch;
  margin-bottom: 35px;
  background-color: ${SECONDARY_COLOR};
  border-bottom-width: 1px;
  border-color: ${PURPLE_LIGHT};
  padding: 10px 5px;
  height: 55px;
  background-color: ${GRAY_LIGHT};
`;

export const Select = styled(Picker)`
  align-self: stretch;
  background-color: ${GRAY_LIGHT};
  border-bottom-width: 1px;
  border-color: ${PURPLE_LIGHT};
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;
