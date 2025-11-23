// screens/RecipeListScreen.js
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';

export default function RecipeListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={RECIPES}
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
  container: { flex: 1, backgroundColor: '#f3f4f6' }
});
