import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <SkeletonPlaceholder
        itemCount={6}
        itemHeight={20}
        itemWidth={136}
        containerStyle={styles.container}
        itemStyle={styles.item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { marginTop: 8 },
  item: {
    borderRadius: 8,
    marginVertical: 4,
  },
});
