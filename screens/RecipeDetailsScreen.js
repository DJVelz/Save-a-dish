// screens/RecipeDetailsScreen.js
import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FavoritesContext } from '../App';
import { RECIPES } from '../data/recipes';

export default function RecipeDetailsScreen({ route }) {
  const { recipeId } = route.params;
  const recipe = RECIPES.find(r => r.id === recipeId);

  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFav = favorites.includes(recipeId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>{recipe.title}</Text>
        <TouchableOpacity style={styles.favBtn} onPress={() => toggleFavorite(recipeId)}>
          <Text style={{ fontSize: 18 }}>{isFav ? '💖' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ing, i) => (
          <Text key={i} style={styles.listItem}>• {ing}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Steps</Text>
        {recipe.steps.map((s, i) => (
          <Text key={i} style={styles.listItem}>{i + 1}. {s}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 220 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: '700', flex: 1 },
  favBtn: { padding: 8 },
  section: { paddingHorizontal: 16, paddingVertical: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  listItem: { fontSize: 14, marginBottom: 6, color: '#333' }
});
