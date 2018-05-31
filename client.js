// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Hello360_test', {
      photos: [
        {uri: './static_assets/bedroom.jpg', title: 'Bed Room', format: '2D'},
        {uri: './static_assets/pool.jpg', title: 'Swimming Pool', format: '2D'},
        {uri: './static_assets/cafe.jpg', title: 'Cafe', format: '2D'},
      ]
    }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  //r360.compositor.setBackground('./static_assets/360_world.jpg');
}

window.React360 = {init};
