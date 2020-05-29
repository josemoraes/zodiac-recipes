import styled from "styled-components";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";

export const Container = styled(ScrollView)`
  flex: 1;
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

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;
