# @gumlet/react-native-embed-player

> Gumlet Embed player in react native


## Installation

#### setup react native webview

```sh
$ npm install react-native-webview
$ cd ios/
$ pod install 
```

```sh
npm install @gumlet/react-native-embed-player
```




## Usage


```js
import { ReactNativeEmbedPlayerView } from "@gumlet/react-native-embed-player";

// ...

<ReactNativeEmbedPlayerView video_id="" style={styles.box} />
```

## Props
| Prop          | Description   | Default       |
| ------------- | ------------- | ------------- |
| videoID `String` `Required`   | Video ID which is generated after processing the video on gumlet  | |
| style `Object`  `Required`    | Style tag passed on to the iframe container |  |
| autoplay `Boolean`            | Should the video autoplay | Default set in collection settings |
| preload `Boolean`             | Should the video preload  | Default set in collection settings |
| muted `Boolean`               | Should the video player be muted  | Default set in collection settings |
| gm_user_id `String`           | User ID passed to gumlet insights object | null |
| gm_user_name `String`         | User name passed to gumlet insights object | null |
| gm_user_email `String`        | User email passed to gumlet insights object | null |
| gm_custom_data_1 `String`     | Custom data 1 passed to gumlet insights object | null |
| loop `Boolean`                | Should the video play in a loop | Default set in collection settings |
| thumbnail `String`            | URL Encoded value of the Poster/Thumbnail URL which should be shown | Default set in asset details |
| drm_token `String`            | Token generated on backend for DRM Protected content | null |
| expires `Integer`             | Token expiry time from epoch in millis for DRM protected content | null |
| vast_tag_url `String`         | URL Encoded VAST tag URL | null |
| start_high_res `Boolean`      | Start the video in the highest resolution  available | false |
| disable_seek `Boolean`        | Disable the seek bar and removes forward and rewind buttons | false |
| disable_player_controls `Boolean` | Removes all player controls from the player | false |
| watermark_text `String`       | Watermark text to be shown in the player | null |
| facebook_pixel_id `String`    | Facebook pixel ID to be used to send data about playback | null |
| ga_tracking_id `String`       | Google pixel ID to be used to send data about playback | null |
| t `Integer`                   | The playback instant in seconds to start the video at | null |


## Maintainer

This library is maintained by [gumlet](https://github.com/gumlet)

