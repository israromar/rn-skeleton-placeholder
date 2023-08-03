# rn-skeleton-placeholder

SkeletonPlaceholder is a React Native library designed to effortlessly generate a captivating loading effect.

## Installation

```sh
npm install rn-skeleton-placeholder
```

## Usage

```js
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
