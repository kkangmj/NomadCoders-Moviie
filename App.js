import React, { useState } from "react";
import { Text, Image } from "react-native";
import Apploading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
  const loadImages = (images) =>
    images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.loadAsync(image);
      }
    });
  const startLoading = async () => {
    // count notification
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./me.jpg"),
      "https://i0.wp.com/st.quantrimang.com/photos/image/2021/03/10/Hinh-nen-dep-cute-2.jpg?resize=640%2C1140&ssl=1",
    ]);
    await Promise.all([...fonts, ...images]);
  };

  if (!ready) {
    return (
      <Apploading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return <Text>It's all done!</Text>;
}
