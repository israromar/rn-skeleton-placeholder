import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';

const App: React.FC = () => {
  const renderSkeletons = () => {
    const itemCount = 6;
    const itemHeight = 20;
    const itemWidth = 136;
    const containerStyle: ViewStyle = styles.container;
    const itemStyle: ViewStyle = styles.item;

    const skeletons = [];

    for (let i = 0; i < itemCount; i++) {
      skeletons.push(
        <SkeletonPlaceholder
          key={i}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          containerStyle={containerStyle}
          itemStyle={itemStyle}
        />
      );
    }

    return skeletons;
  };

  return <View style={styles.mainContainer}>{renderSkeletons()}</View>;
};

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

export default App;
