import React, { type FC, useEffect, useRef } from 'react';
import { Animated, View, type ViewStyle } from 'react-native';

interface SkeletonPlaceholderProps {
  itemWidth: number;
  itemHeight: number;
  itemCount?: number;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
}

const SkeletonPlaceholder: FC<SkeletonPlaceholderProps> = ({
  itemWidth,
  itemHeight,
  itemCount = 1,
  containerStyle,
  itemStyle,
}) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    const animation = Animated.loop(
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
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity]);

  const renderSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < itemCount; i++) {
      skeletons.push(
        <React.Fragment key={i}>
          <Animated.View
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
          />
        </React.Fragment>
      );
    }

    return skeletons;
  };

  return <View style={[containerStyle]}>{renderSkeletons()}</View>;
};

export default SkeletonPlaceholder;
