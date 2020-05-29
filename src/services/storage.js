import AsyncStorage from "@react-native-community/async-storage";

export const storeUserName = async (name) => {
  try {
    await AsyncStorage.setItem("@userName", name);
  } catch (error) {
    console.log("storeUserName error > ", error.message);
  }
};

export const destroyUserName = async () => {
  try {
    await AsyncStorage.removeItem("@userName");
  } catch (error) {
    console.log("destroyUserName error > ", error.message);
  }
};

export const getUserName = async () => {
  try {
    let name = await AsyncStorage.getItem("@userName");
    return name;
  } catch (error) {
    console.log("getUserName error > ", error.message);
  }
};

export const storeUserSign = async (sign) => {
  try {
    await AsyncStorage.setItem("@userSign", sign);
  } catch (error) {
    console.log("storeUserSign error > ", error.message);
    return "";
  }
};

export const getUserSign = async () => {
  try {
    let sign = await AsyncStorage.getItem("@userSign");
    return sign;
  } catch (error) {
    console.log("getUserSign error > ", error.message);
    return "";
  }
};

export const destroyUserSign = async () => {
  try {
    await AsyncStorage.removeItem("@userSign");
  } catch (error) {
    console.log("destroyUserSign error > ", error.message);
  }
};
