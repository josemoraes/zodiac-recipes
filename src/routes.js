import "react-native-gesture-handler";
import React, { useReducer, useMemo, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserContext from "./services/context";
import { Provider as PaperProvider } from "react-native-paper";
import {
  storeUserName,
  storeUserSign,
  getUserName,
  getUserSign,
} from "./services/storage";
import Profile from "./pages/Profile";
import Recipe from "./pages/Recipe";
const Stack = createStackNavigator();

function Routes() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      return {
        ...prevState,
        userName: action.userName,
        userSign: action.userSign,
        isLoading: false,
      };
    },
    {
      isLoading: true,
      userName: null,
      userSign: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      const userName = await getUserName();
      const userSign = await getUserSign();
      dispatch({
        type: "USER_INFORMATION",
        userName,
        userSign,
      });
    };
    bootstrapAsync();
  }, []);

  const userContext = useMemo(
    () => ({
      storeUserInformation: async ({ userName, userSign }) => {
        await storeUserName(userName);
        await storeUserSign(userSign);
        dispatch({
          type: "USER_INFORMATION",
          userName,
          userSign,
        });
      },
    }),
    []
  );
  return (
    <>
      <UserContext.Provider value={userContext}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {state.userName && state.userSign ? (
                <>
                  <Stack.Screen
                    name="recipe"
                    component={Recipe}
                    options={{
                      header: () => {},
                    }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{
                      header: () => {},
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </UserContext.Provider>
    </>
  );
}

export default Routes;
