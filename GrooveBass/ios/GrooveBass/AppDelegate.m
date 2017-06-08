/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface AppDelegate ()
@property (nonatomic, strong) SPTAuth *auth;
@property (nonatomic, strong) SPTAudioStreamingController *player;
@property (nonatomic, strong) UIViewController *authViewController;
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  self.auth = [SPTAuth defaultInstance];
  self.player = [SPTAudioStreamingController sharedInstance];
  // The client ID you got from the developer site
  self.auth.clientID = @"f98d8431ea1b46a4bc2c44f7a42c57f7";
  // The redirect URL as you entered it at the developer site
  self.auth.redirectURL = [NSURL URLWithString:@"groovebass://spotify/callback"];
  // Setting the `sessionUserDefaultsKey` enables SPTAuth to automatically store the session object for future use.
  self.auth.sessionUserDefaultsKey = @"current session";
  // Set the scopes you need the user to authorize. `SPTAuthStreamingScope` is required for playing audio.
  self.auth.requestedScopes = @[SPTAuthStreamingScope];
  
  // Become the streaming controller delegate
  self.player.delegate = self;
  
  // Start up the streaming controller.
  NSError *audioStreamingInitError;
  NSAssert([self.player startWithClientId:self.auth.clientID error:&audioStreamingInitError],
           @"There was a problem starting the Spotify SDK: %@", audioStreamingInitError.description);
  
  // Start authenticating when the app is finished launching
  dispatch_async(dispatch_get_main_queue(), ^{
    [self startAuthenticationFlow];
  });
  
  return YES;
  
  - (void)startAuthenticationFlow
  {
    // Check if we could use the access token we already have
    if ([self.auth.session isValid]) {
      // Use it to log in
      [self startLoginFlow];
    } else {
      // Get the URL to the Spotify authorization portal
      NSURL *authURL = [self.auth spotifyWebAuthenticationURL];
      // Present in a SafariViewController
      self.authViewController = [[SFSafariViewController alloc] initWithURL:authURL];
      [self.window.rootViewController presentViewController:self.authViewController animated:YES completion:nil];
    }
  }
  
  - (void)audioStreamingDidLogin:(SPTAudioStreamingController *)audioStreaming {
    [self.player playSpotifyURI:@"spotify:track:58s6EuEYJdlb0kO7awm3Vp" startingWithIndex:0 startingWithPosition:0 callback:^(NSError *error) {
      if (error != nil) {
        NSLog(@"*** failed to play: %@", error);
        return;
      }
    }];
  }
  
  @end
