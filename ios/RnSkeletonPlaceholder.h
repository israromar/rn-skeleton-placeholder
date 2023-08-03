#ifdef __cplusplus
#import "rn-skeleton-placeholder.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnSkeletonPlaceholderSpec.h"

@interface RnSkeletonPlaceholder : NSObject <NativeRnSkeletonPlaceholderSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnSkeletonPlaceholder : NSObject <RCTBridgeModule>
#endif

@end
