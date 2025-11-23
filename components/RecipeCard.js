// components/RecipeCard.js
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: recipe.thumbnail }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{recipe.title}</Text>
        <View style={styles.row}>
          <Text style={styles.tag}>{recipe.tags.join(' • ')}</Text>
        </View>
        <Text style={styles.rating}>⭐ {recipe.rating.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  thumb: {
    width: 110,
    height: 90,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  tag: {
    fontSize: 12,
    color: '#666'
  },
  rating: {
    fontSize: 13,
    color: '#333'
  }
});
