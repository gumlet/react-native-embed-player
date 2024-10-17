import { Platform, type ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

const LINKING_ERROR =
  `The package '@gumlet/react-native-embed-player' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ReactNativeEmbedPlayerProps = {
  video_id: string;
  style: ViewStyle;
  enabled_player_control?: Array<String>;
  [key: string]: any;
};

export const ReactNativeEmbedPlayerView: React.FC<
  ReactNativeEmbedPlayerProps
> = ({ video_id, style, enabled_player_control, ...props }) => {
  if (!video_id) {
    throw new Error(LINKING_ERROR);
  }

  let srcURL = new URL(`https://play.gumlet.io/embed/${video_id}`);

  for (const [key, value] of Object.entries(props)) {
    srcURL.searchParams.append(key, String(value)); // Convert value to a string
  }

  if (enabled_player_control !== undefined) {
    for (const control of enabled_player_control) {
      srcURL.searchParams.append('enabled_player_control', String(control));
    }
  }

  return (
    <>
      <WebView
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
        source={{ uri: srcURL.toString() }}
        style={style}
      />
    </>
  );
};
