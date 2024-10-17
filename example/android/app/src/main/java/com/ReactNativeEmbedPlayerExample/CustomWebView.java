package com.gumlet.reactnativeembedplayer; // Replace with your actual package name

import android.content.Context;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class CustomWebView extends SimpleViewManager<WebView> {
    public static final String REACT_CLASS = "CustomWebView";

    private ReactApplicationContext reactContext;

    public CustomWebView(ReactApplicationContext reactContext) {
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView webView = new WebView(reactContext);
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                String[] resources = request.getResources();
                for (String resource : resources) {
                    if (PermissionRequest.RESOURCE_PROTECTED_MEDIA_ID.equals(resource)) {
                        request.grant(resources);
                        return;
                    }
                }
                super.onPermissionRequest(request);
            }
        });
        webView.setWebViewClient(new WebViewClient());
        return webView;
    }
}
