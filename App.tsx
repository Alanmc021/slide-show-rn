import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated, Text } from "react-native";
import { slides } from "./assets/slides/Slides";

import Paginator from "./src/components/Paginator";
import OnboardingItem from "./src/components/OnboardingItem";
import NextButton from "./src/components/OnboardingItem";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last item");
    }
  };

  const data = slides;
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <FlatList
            data={data}
            renderItem={({ item }: any) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOfset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slides.length)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "f4338d",
    borderRadius: 100,
    padding: 20,
  },
});
 
