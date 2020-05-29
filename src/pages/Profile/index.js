import React, { useState, useContext } from "react";
import { TouchableNativeFeedback, ToastAndroid } from "react-native";
import UserContext from "../../services/context";
import {
  Container,
  Title,
  TextThin,
  TextBold,
  Form,
  Label,
  Input,
  Select,
  SubmitButton,
} from "./styles";
import { PRIMARY_COLOR } from "../../assets/colors";
import messages from "../../misc/messages";

const Profile = () => {
  const { storeUserInformation } = useContext(UserContext);
  const options = [
    { label: "Áries", value: "arian@" },
    { label: "Touro", value: "taurin@" },
    { label: "Gêmeos", value: "geminian@" },
    { label: "Câncer", value: "cancerian@" },
    { label: "Leão", value: "leonin@" },
    { label: "Virgem", value: "virginian@" },
    { label: "Libra", value: "librian@" },
    { label: "Escorpião", value: "escorpinian@" },
    { label: "Sagitário", value: "sagitarian@" },
    { label: "Capricórnio", value: "capricornian@" },
    { label: "Aquário", value: "aquarian@" },
    { label: "Peixes", value: "piscian@" },
  ];
  const [name, setName] = useState("");
  const [selectedSign, setSelectedSign] = useState("arianx");

  function handleSubmit() {
    if (!name) {
      ToastAndroid.show(messages.profile.error.empty_name, ToastAndroid.SHORT);
      return;
    }
    storeUserInformation({ userName: name, userSign: selectedSign });
  }

  return (
    <Container behavior="padding">
      <Title>Receitas do Horóscopo</Title>
      <TextThin>me diga seu nome</TextThin>
      <TextThin>e seu signo, que </TextThin>
      <TextThin>te direi qual receita</TextThin>
      <TextBold>combina mais com o seu dia</TextBold>
      <Form>
        <Label>Qual o seu nome?</Label>
        <Input onChangeText={(value) => setName(value)} />
        <Label>Qual o seu signo?</Label>
        <Select
          onValueChange={(value) => setSelectedSign(value)}
          selectedValue={selectedSign}
        >
          {options.map((sign) => (
            <Select.Item
              key={sign.value}
              label={sign.label}
              value={sign.value}
            />
          ))}
        </Select>
        <TouchableNativeFeedback>
          <SubmitButton
            icon="arrow-right"
            mode="contained"
            color={PRIMARY_COLOR}
            onPress={handleSubmit}
          >
            Avançar
          </SubmitButton>
        </TouchableNativeFeedback>
      </Form>
    </Container>
  );
};

export default Profile;
