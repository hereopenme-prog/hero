import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const categories = ['All', 'Grocery', 'Restaurant', 'Medical', 'Salon', 'Retail', 'Other'];

const allShops = [
  { id: '1', name: 'Sharma General Store', status: 'OPEN', category: 'Grocery', distance: '0.5 km' },
  { id: '2', name: 'Kumar Electronics', status: 'CLOSED', category: 'Retail', distance: '1.2 km' },
  { id: '3', name: 'City Medical Store', status: 'OPEN', category: 'Medical', distance: '0.8 km' },
  { id: '4', name: 'Fresh Mart', status: 'OPEN', category: 'Grocery', distance: '1.5 km' },
  { id: '5', name: 'Style Studio Salon', status: 'CLOSED', category: 'Salon', distance: '2.0 km' },
  { id: '6', name: 'Pizza Palace', status: 'OPEN', category: 'Restaurant', distance: '1.8 km' },
];

export function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showOpenOnly, setShowOpenOnly] = useState(false);

  const filteredShops = allShops.filter(shop => {
    if (selectedCategory !== 'All' && shop.category !== selectedCategory) return false;
    if (showOpenOnly && shop.status !== 'OPEN') return false;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Shops</Text>
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity
          style={[styles.filterBtn, showOpenOnly && styles.filterBtnActive]}
          onPress={() => setShowOpenOnly(!showOpenOnly)}
        >
          <Text style={[styles.filterText, showOpenOnly && styles.filterTextActive]}>
            Open Now
          </Text>
        </TouchableOpacity>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryBtn, selectedCategory === cat && styles.categoryBtnActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.categoryText, selectedCategory === cat && styles.categoryTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Shop List */}
      <ScrollView style={styles.shopList}>
        {filteredShops.map(shop => (
          <TouchableOpacity key={shop.id} style={styles.shopCard}>
            <View style={styles.shopInfo}>
              <Text style={styles.shopName}>{shop.name}</Text>
              <Text style={styles.shopCategory}>{shop.category} • {shop.distance}</Text>
            </View>
            <View style={styles.shopRight}>
              <View style={[
                styles.statusBadge,
                { backgroundColor: shop.status === 'OPEN' ? '#dcfce7' : '#fee2e2' }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: shop.status === 'OPEN' ? '#16a34a' : '#dc2626' }
                ]}>
                  {shop.status}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  filters: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  filterBtnActive: {
    backgroundColor: '#16a34a',
  },
  filterText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  categoryBtnActive: {
    backgroundColor: '#16a34a',
  },
  categoryText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  shopList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  shopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  shopInfo: {
    flex: 1,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  shopCategory: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  shopRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
