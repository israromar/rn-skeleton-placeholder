import React, { FC, useEffect, useRef } from 'react';
import { Animated, View, ViewStyle } from 'react-native';

interface SkeletonPlaceholderProps {
  itemWidth: number | string;
  itemHeight: number | string;
  itemCount?: number;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  children?: React.ReactElement;
}

const SkeletonPlaceholder: FC<SkeletonPlaceholderProps> = ({
  itemWidth,
  itemHeight,
  itemCount = 1,
  containerStyle,
  itemStyle,
  children,
}) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  const renderSkeletons = (children: React.ReactElement) => {
    const skeletons = [];

    for (let i = 0; i < itemCount; i++) {
      skeletons.push(
        <Animated.View
          key={i}
          style={[
            {
              width: itemWidth,
              height: itemHeight,
              opacity: opacity.current,
              backgroundColor: '#EAEAEA',
              borderRadius: 4,
            },
            itemStyle,
          ]}
        >
          {children}
        </Animated.View>
      );
    }

    return skeletons;
  };

  return <View style={[containerStyle]}>{renderSkeletons(children)}</View>;
};

export default SkeletonPlaceholder;
