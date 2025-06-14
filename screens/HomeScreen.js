import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/homeStyles';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>LOGO <Text style={styles.appName}>App name</Text></Text>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ...existing code... */}
        {/* หัวข้อข่าว */}
        <View style={styles.newsHeader}>
          <Ionicons name="chevron-back" size={20} color="#000" />
          <Text style={styles.newsTitle}>ข่าวสาร</Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </View>
        {/* ...existing code... */}
        {/* แจ้งเตือนล่าสุด */}
        <View style={styles.alertSection}>
          <Text style={styles.sectionTitle}>แจ้งเตือนเหตุล่าสุด</Text>
          <TouchableOpacity><Text style={styles.viewAll}>ดูข่าวทั้งหมด</Text></TouchableOpacity>
        </View>
        {/* ...existing code... */}
        <View style={styles.alertBoxRed}>
          <Text style={styles.alertText}>
            🔴 [เตือนภัยจากสภ.เมืองนครราชสีมา] เหตุการณ์ใช้อาวุธบริเวณหน้าตลาดสุรนารี...
          </Text>
          <Text style={styles.alertTime}>12/06/68 12.06 น. ตำบลสุรนารี</Text>
        </View>
        <View style={styles.alertBoxYellow}>
          <Text style={styles.alertText}>
            🟡 [เตือนภัยจากสภ.เมืองนครราชสีมา] มีรถประสานงาอย่างแรง...
          </Text>
          <Text style={styles.alertTime}>12/06/68 12.06 น. ตำบลสุรนารี</Text>
        </View>
        {/* สถิติ */}
        <View style={styles.statSection}>
          <View style={styles.statHeader}>
            <Text style={styles.sectionTitle}>สถิติ</Text>
            <TouchableOpacity><Text style={styles.viewAll}>ดูสถิติอื่น ๆ</Text></TouchableOpacity>
          </View>
          <Text>จำนวนคดีอุบัติเหตุจราจรทางบก</Text>
          <Image source={require('C:\\Users\\Lenovo\\OneDrive\\Desktop\\Work\\Hackthon Test 2\\Hackathin\\assets\\images\\statgraph.png')} style={styles.chartImage} resizeMode="contain" />
        </View>
      </ScrollView>

      {/* Sidebar Overlay */}
      {sidebarVisible && (
        <SafeAreaView style={sidebarStyles.overlay}>
          <View style={sidebarStyles.sidebar}>
            <View style={sidebarStyles.sidebarHeader}>
              <Text style={sidebarStyles.logo}>Logo</Text>
              <TouchableOpacity onPress={() => setSidebarVisible(false)}>
                <Ionicons name="close" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={sidebarStyles.menu}>
              <View style={sidebarStyles.menuItem}>
                <Ionicons name="person" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>โปรไฟล์</Text>
              </View>
              <View style={sidebarStyles.menuItem}>
                <Ionicons name="stats-chart" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>สถิติ</Text>
              </View>
              <View style={sidebarStyles.menuItem}>
                <Ionicons name="newspaper" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>ข่าวสาร</Text>
              </View>
            </View>
            <TouchableOpacity style={sidebarStyles.logoutBtn}>
              <Text style={sidebarStyles.logoutText}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

const sidebarStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '110%',
    backgroundColor: 'rgba(0,0,0,0.15)',
    zIndex: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sidebar: {
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 10,
  },
  sidebarHeader: {
    backgroundColor: '#801313',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  logo: {
    color: '#fff',
    fontSize: 18,
  },
  menu: {
    marginTop: 32,
    marginLeft: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuText: {
    color: '#801313',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutBtn: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    backgroundColor: '#801313',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});