import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const savedShops = [
  { id: '1', name: 'Sharma General Store', status: 'OPEN', category: 'Grocery' },
  { id: '2', name: 'City Medical Store', status: 'OPEN', category: 'Medical' },
];

export function SavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Shops</Text>
      </View>

      {savedShops.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="heart-outline" size={64} color="#d1d5db" />
          <Text style={styles.emptyTitle}>No saved shops yet</Text>
          <Text style={styles.emptyDescription}>
            Follow shops to see them here
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.list}>
          {savedShops.map(shop => (
            <TouchableOpacity key={shop.id} style={styles.shopCard}>
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <Text style={styles.shopCategory}>{shop.category}</Text>
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
                <TouchableOpacity style={styles.unfollowBtn}>
                  <Ionicons name="heart" size={20} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
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
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 16,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
    textAlign: 'center',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
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
    marginRight: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  unfollowBtn: {
    padding: 8,
  },
});
