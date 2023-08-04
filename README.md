# rn-skeleton-placeholder

SkeletonPlaceholder is a React Native library designed to effortlessly generate a captivating loading effect.

![skeleton-placehplder-gif](https://i.ibb.co/cwP7twz/Simulator-Screen-Recording-i-Phone-14-Pro-2023-08-04-at-12-52-47.gif)

## Installation

```sh
npm install rn-skeleton-placeholder
```

## Usage

```js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';

const SkeletonPlaceHolderExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.iosStatusBarStyle} />
      <>
        <View style={styles.header}>
          <SkeletonPlaceholder
            itemWidth={128}
            itemHeight={14}
            itemStyle={{
              borderRadius: 4,
            }}
          />
          <SkeletonPlaceholder
            itemWidth={52}
            itemHeight={52}
            itemStyle={{
              borderRadius: 100,
            }}
          />
        </View>
        <SkeletonPlaceholder
          itemCount={8}
          itemWidth={160}
          itemHeight={160}
          containerStyle={styles.listContainer}
          itemStyle={styles.itemStyle}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#04a8f4',
    paddingBottom: 10,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  iosStatusBarStyle: {
    paddingTop: 10,
    backgroundColor: '#04a8f4',
  },
  listContainer: {
    marginTop: 22,
    paddingBottom: 100,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  itemStyle: {
    marginBottom: 8,
    borderRadius: 22,
  },
  innerContainer: {
    marginBottom: 62,
  },
});

export default SkeletonPlaceHolderExample;

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
