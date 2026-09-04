import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Demo data
const nearbyShops = [
  { id: '1', name: 'Sharma General Store', status: 'OPEN', distance: '0.5 km', category: 'Grocery' },
  { id: '2', name: 'Kumar Electronics', status: 'CLOSED', distance: '1.2 km', category: 'Retail' },
  { id: '3', name: 'City Medical Store', status: 'OPEN', distance: '0.8 km', category: 'Medical' },
  { id: '4', name: 'Fresh Mart', status: 'OPEN', distance: '1.5 km', category: 'Grocery' },
];

const offers = [
  { id: '1', title: '10% Off on Groceries', shop: 'Sharma General Store', validTill: '2 days' },
  { id: '2', title: 'Flat ₹500 Off', shop: 'Kumar Electronics', validTill: '5 days' },
  { id: '3', title: 'Free Health Checkup', shop: 'City Medical Store', validTill: '7 days' },
];

export function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning!</Text>
            <Text style={styles.title}>Find Nearby Shops</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#374151" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <Text style={styles.searchPlaceholder}>Search shops...</Text>
        </TouchableOpacity>

        {/* Open Shops */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Open Now</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {nearbyShops.filter(s => s.status === 'OPEN').map(shop => (
              <TouchableOpacity 
                key={shop.id} 
                style={styles.shopCard}
                onPress={() => navigation.navigate('ShopDetail', { shop })}
              >
                <View style={styles.shopCardHeader}>
                  <Text style={styles.shopName}>{shop.name}</Text>
                  <View style={styles.openBadge}>
                    <Text style={styles.openText}>OPEN</Text>
                  </View>
                </View>
                <Text style={styles.shopCategory}>{shop.category}</Text>
                <Text style={styles.shopDistance}>{shop.distance}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Offers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Offers Near You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {offers.map(offer => (
            <TouchableOpacity key={offer.id} style={styles.offerCard}>
              <View style={styles.offerContent}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <Text style={styles.offerShop}>{offer.shop}</Text>
                <Text style={styles.offerValid}>Valid for {offer.validTill}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Nearby Shops */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby Shops</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {nearbyShops.map(shop => (
            <TouchableOpacity 
              key={shop.id} 
              style={styles.nearbyShopCard}
              onPress={() => navigation.navigate('ShopDetail', { shop })}
            >
              <View style={styles.nearbyShopInfo}>
                <Text style={styles.nearbyShopName}>{shop.name}</Text>
                <Text style={styles.nearbyShopCategory}>{shop.category} • {shop.distance}</Text>
              </View>
              <View style={[
                styles.statusDot,
                { backgroundColor: shop.status === 'OPEN' ? '#22c55e' : '#ef4444' }
              ]} />
            </TouchableOpacity>
          ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#6b7280',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  notificationBtn: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: '#9CA3AF',
    fontSize: 16,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '500',
  },
  shopCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  shopCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  openBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  openText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#16a34a',
  },
  shopCategory: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  shopDistance: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  offerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  offerShop: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  offerValid: {
    fontSize: 12,
    color: '#16a34a',
    marginTop: 4,
  },
  nearbyShopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  nearbyShopInfo: {
    flex: 1,
  },
  nearbyShopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  nearbyShopCategory: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
