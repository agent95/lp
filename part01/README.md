# Slider
Simple image Slider Proof of Concept

### Implementation
Solution has been build using VueJs, vue-cli

### Specifications Summary
- Paste images from clipboard into the slider (CTRL + V or CMD + V)
- On Pasting the image a Thumbnail is formed
- Click on thumbnail to render inactive from slideshow
- Click inactive thumbnail to make it active
- Double Click on the thumbnail to remove image
- Pasted images are not persisted on browser refresh
- Pause the slider by clicking once on the main image
- Active images will cycle every 2 seconds

### Limitations
The application is not responsive and works best in browsers that natively support the html5 clipboard API:
- Chrome 42+, 
- Opera 29+ and 
- Firefox 41+

Can only paste to slider using the "CTRL + V" or "CMD + V", 
No paste option when you right click on the App.

### Dependencies
- vue-interval mixin for timeout functionality

### For Demo
- /dist/index.html

### For Source Code
- /src

#### Run Code 
- npm install
- npm run serve

### TODO
- Refactor