import React, { useState, useEffect } from "react";
import { TouchableNativeFeedback } from "react-native";
import {
  getUserName,
  getUserSign,
  destroyUserName,
  destroyUserSign,
} from "../../services/storage";
import { Container, Title, TextThin, TextBold, SubmitButton } from "./styles";
import { PRIMARY_COLOR } from "../../assets/colors";

const Recipe = () => {
  const [name, setName] = useState("");
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    async function bootstrap() {
      const userName = await getUserName();
      const userSign = await getUserSign();
      setName(userName);
      setSign(userSign);
    }
    bootstrap();
  }, []);

  async function handleLoadRecipe() {
    const response = await fetch("http://babi.hefesto.io/signo/libra/dia");
    const { texto } = await response.json();
    setHoroscope(texto);
  }

  return (
    <Container
      contentContainerStyle={{
        alignItems: "baseline",
        justifyContent: "flex-start",
      }}
    >
      <Title>Oi, {name}.</Title>
      <TextThin>Quer descobrir qual receita combina mais com uma</TextThin>
      <TextThin>
        <TextBold>{sign}</TextBold> hoje?
      </TextThin>
      <TouchableNativeFeedback>
        <SubmitButton
          mode="contained"
          color={PRIMARY_COLOR}
          onPress={handleLoadRecipe}
        >
          Ver minha indicação de receita
        </SubmitButton>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <SubmitButton
          mode="contained"
          color={PRIMARY_COLOR}
          onPress={async () => {
            await destroyUserName();
            await destroyUserSign();
          }}
        >
          Limpar tudo
        </SubmitButton>
      </TouchableNativeFeedback>
      <TextThin>{horoscope}</TextThin>
    </Container>
  );
};

export default Recipe;
