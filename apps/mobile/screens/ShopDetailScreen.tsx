import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export function ShopDetailScreen({ route, navigation }: any) {
  const { shop } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>
          <Text style={styles.title}>Shop Details</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Shop Info */}
        <View style={styles.shopInfo}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <View style={styles.statusRow}>
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
            <Text style={styles.lastUpdated}>Last updated: Just now</Text>
          </View>
          <Text style={styles.category}>{shop.category}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="navigate" size={24} color="#16a34a" />
            <Text style={styles.actionText}>Navigate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="heart-outline" size={24} color="#16a34a" />
            <Text style={styles.actionText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="share-social" size={24} color="#16a34a" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Offers</Text>
          <View style={styles.offerCard}>
            <Text style={styles.offerTitle}>10% Off on Groceries</Text>
            <Text style={styles.offerDesc}>Get 10% off on all items above ₹500</Text>
            <Text style={styles.offerValid}>Valid for 2 days</Text>
          </View>
        </View>

        {/* Announcements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.announcementCard}>
            <Text style={styles.announcementTitle}>New Organic Products Available</Text>
            <Text style={styles.announcementDesc}>We now stock a wide range of organic products</Text>
          </View>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  shopInfo: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  category: {
    fontSize: 14,
    color: '#6b7280',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionBtn: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    color: '#16a34a',
    marginTop: 4,
    fontWeight: '500',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  offerDesc: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  offerValid: {
    fontSize: 12,
    color: '#16a34a',
    marginTop: 8,
  },
  announcementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  announcementDesc: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});
