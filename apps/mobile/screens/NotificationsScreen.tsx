import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  { id: '1', type: 'offer', title: 'New Offer', message: '10% off at Sharma General Store', time: '2 min ago', read: false },
  { id: '2', type: 'update', title: 'Shop Update', message: 'City Medical Store is now open', time: '15 min ago', read: false },
  { id: '3', type: 'offer', title: 'New Offer', message: 'Flat ₹500 off at Kumar Electronics', time: '1 hour ago', read: true },
  { id: '4', type: 'update', title: 'Shop Update', message: 'Fresh Mart has new arrivals', time: '2 hours ago', read: true },
];

export function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {notifications.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="notifications-outline" size={64} color="#d1d5db" />
          <Text style={styles.emptyTitle}>No notifications</Text>
          <Text style={styles.emptyDescription}>
            You&apos;ll see offers and updates here
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.list}>
          {notifications.map(notif => (
            <TouchableOpacity 
              key={notif.id} 
              style={[styles.notifCard, !notif.read && styles.notifCardUnread]}
            >
              <View style={[
                styles.iconContainer,
                { backgroundColor: notif.type === 'offer' ? '#dbeafe' : '#dcfce7' }
              ]}>
                <Ionicons 
                  name={notif.type === 'offer' ? 'pricetag' : 'information-circle'} 
                  size={20} 
                  color={notif.type === 'offer' ? '#2563eb' : '#16a34a'} 
                />
              </View>
              <View style={styles.notifContent}>
                <Text style={styles.notifTitle}>{notif.title}</Text>
                <Text style={styles.notifMessage}>{notif.message}</Text>
                <Text style={styles.notifTime}>{notif.time}</Text>
              </View>
              {!notif.read && <View style={styles.unreadDot} />}
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
  notifCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  notifCardUnread: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notifContent: {
    flex: 1,
  },
  notifTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  notifMessage: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  notifTime: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16a34a',
    marginLeft: 8,
    marginTop: 4,
  },
});
