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
  is_live?: boolean;
  version?: string;
  [key: string]: any;
};

export const ReactNativeEmbedPlayerView: React.FC<
  ReactNativeEmbedPlayerProps
> = ({ video_id, style, enabled_player_control, is_live, ...props }) => {
  const userAgent = Platform.select({
    ios: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    android:
      'Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
  });

  if (!video_id) {
    throw new Error(LINKING_ERROR);
  }

  const version = props.version || 'play';

  let srcURL = new URL(`https://${version}.gumlet.io/embed${is_live ? '/live' : ''}/${video_id}`);

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
        allowsInlineMediaPlayback={true}
        userAgent={userAgent}
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
