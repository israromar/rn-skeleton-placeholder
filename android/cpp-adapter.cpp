#include <jni.h>
#include "rn-skeleton-placeholder.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rnskeletonplaceholder_RnSkeletonPlaceholderModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rnskeletonplaceholder::multiply(a, b);
}
