// screens/FavoritesScreen.js
import { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { FavoritesContext } from '../App';
import RecipeCard from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  const favRecipes = RECIPES.filter(r => favorites.includes(r.id));

  if (favRecipes.length === 0) {
    return (
      <SafeAreaView style={styles.empty}>
        <Text style={{ fontSize: 16, color: '#666' }}>No favorites yet — tap the heart on a recipe to save it.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favRecipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('Details', { recipeId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff' },
});
