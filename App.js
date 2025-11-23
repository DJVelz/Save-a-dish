// App.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import FavoritesScreen from './screens/FavoritesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import RecipeListScreen from './screens/RecipeListScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: (id) => {}
});

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e76f51',
      }}
    >
      <Tab.Screen name="Recipes" component={RecipeListScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('@savadish_favorites');
        if (raw) setFavorites(JSON.parse(raw));
      } catch (err) {
        console.warn('Failed to load favorites', err);
      }
    })();
  }, []);

  // Save favorites whenever they change
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@savadish_favorites', JSON.stringify(favorites));
      } catch (err) {
        console.warn('Failed to save favorites', err);
      }
    })();
  }, [favorites]);

  function toggleFavorite(id) {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={RecipeDetailsScreen} options={{ title: 'Recipe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContext.Provider>
  );
}
