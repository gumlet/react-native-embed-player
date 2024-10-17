import { StyleSheet, View } from 'react-native';
import { ReactNativeEmbedPlayerView } from '@gumlet/react-native-embed-player';

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeEmbedPlayerView
        video_id="669fa4a036c385892188c208"
        enabled_player_control={['play', 'play-large', 'fullscreen']}
        autoplay={true}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 400,
    height: 500,
    top: 0,
    backgroundColor: 'black',
  },
});
