# MozFest2014 music expression workshop

Hello, you've made it to my Github repo for "music expression on the open web", a workshop held at the 2014 Mozilla Festival in London.  Here you will find everything you need to get started on the workshop challenges, creative inspiration, and helpful tools/utilities when working with the web audio api.

**Workshop audience:** This workshop is targeted at beginner/intermediate coders/designers/musicians.  I'm assuming participants have worked in javascript before, but not necessarily with the web audio api.  It also helps to have a basic understanding of audio signal routing (inputs and outputs).  If you're feeling overwhelmed but are still excited to create some novel experiences usging the web audio api, please reach out to either myself, one of the facilitators, or a buddy participant in the workshop!

Shortlink to this repo:  [bit.ly/indefinit-mozfest2014](http://bit.ly/indefinit-mozfest2014)

## Workshop Structure
### Introduction (5-10 min)
- About me / [Studio Indefinit](http://studioindefinit.com)
- Short history and review of current inspirations using web audio

### Introduction To Workshop Themes (10 min)
1.  Buffers and samples
2.  Spatialization and convolution

### Breakout Sessions / Challenges (45 min)

- **Group 1 - Buffers and samples** (EXAMPLE LINK TBD)
    + Create a simple sound sampler that takes in audio streams from the local filesystem or spotify 30s preview api, and plays them back in unique ways. 
- **Group 2 - Spatialization and convolution** (EXAMPLE LINK TBD)
    + Using a balloon and your mobile phone, find a quiet space to record your own impulse response and convolve it with a sound file of your choosing.

----------

## Resources For Workshop Themes
Code snippets and helpful utilities can be found in their respective subdirectories.  If you're comfortable with local servers, go ahead and roll your own.  Otherwise, you can run any of the Tone.js examples in the Tone-composer live development environment [HERE](http://indefinit.github.io/tone-composer/).

#### <i class="icon-folder-open"></i> Buffers and samples

 - [Media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats) supported by the HTML audio and video elements (best practice: .ogg, or .mp3s have the most cross compatibility).
 - Free / Creative Commons licensed sound files
     + [Free Info Society](http://www.freeinfosociety.com/media_index.php?cat=8)
     + [Free Music Archive](http://freemusicarchive.org/)
   
 - [Spotify web api console](https://developer.spotify.com/web-api/console/get-track/#complete): Helpful for accessing the 30s preview api.
 - [Deep dive](https://developer.spotify.com/web-api/tutorial/) into the Spotify developers site.
 - (Advanced) [What is base64 encoding used for?](http://stackoverflow.com/questions/201479/what-is-base-64-encoding-used-for) StackOverflow article.
   

#### <i class="icon-folder-open"></i> Spatialization and convolution

 - [Openairlib](http://www.openairlib.net/): Free impulse responses.
 - @TODO need to find a good video link on recording impulse responses with a balloon and your mobile phone. 



----------


## References & Inspiration
> **Note:**
> This is not an exhaustive list of the interactive music experiences and production tools available on the web.  If I've missed anything you think NEEDS to be here, send me a message or tweet [@Studioindefinit](https://twitter.com/studioindefinit) 

### Experiences:

 - [Plink](http://labs.dinahmoe.com/plink/): A multiplayer musical experience for the web. 
 - [ToneCraft](http://labs.dinahmoe.com/ToneCraft/#): 
 - [PollySynth](http://pollysynth.com/): a multiplayer musical game.  Users can control their synthesizer/avatar with their mobile device and a websocket. Created by Secret Future.
 - [Over The Tiny Hills](http://www.overthetinyhills.com/):  An interactive music experience by Ultranoir
 - [US Open Sessions](http://www.usopen.org/en_US/sessions/): A data sonification project by IBM and James Murphy using the web audio api.
 - [Web Audio Demo List](http://webaudio.github.io/demo-list/#): a running list of demos using the web audio api.
 - [Pouet.net](http://www.pouet.net/prodlist.php?platform%5B%5D=JavaScript&page=1): javascript demos (not all audio).
 - [Sine City](http://www.nocternity.net/misc/Sine_City_by_TheT%28ourist%29_-_Unpacked_version.html): 1st place demo from this year's DemoJS in Paris. Sourcecode and info [HERE](https://github.com/tseeker/demoscene-stuff/tree/master/201410_-_Sine_City).
 - [Floradrift](http://whitevinyldesign.com/floradrift/):
 - [Soundscaper](http://soundscaper.co.uk/): Soundscaper is an online ambient soundscape / drone toy. (webkit only)

### Tools: 

 - [Tone.js](https://github.com/TONEnoTONE/Tone.js/):  A web audio framework for creating interactive music in the browser.
 - [P5.sound](https://github.com/therewasaguy/p5.sound): The web audio api module for P5.js
 - [LiveCoder](http://livecoder.net/):  A browser environment for coding live javascript.  Works
   with web audio and graphics programming.
 - [Gibber](http://gibber.mat.ucsb.edu/):  A live coding environment for web audio and GLSL. 
   [Gibber.p5.js](http://charlie-roberts.com/gibber/p5-gibber/): A Gibber plugin for P5.js
 - [ChucK js](http://chuckdemos.com/):  A javascript port of the ChucK audio programming framework
 - [Wavepot:](http://wavepot.com/)  An audio programming environment for the web.
 - [Lissajous](http://lissajousjs.com/):  A web audio library that relies heavily on sample buffers.  I really love the simplicity of this library and how easy it is to build beautiful pieces of music in a short period of time.  Hereâ€™s a [demo video](https://www.youtube.com/watch?v=jBRqOp5ws58) using just a web console.
 - [Teoria.js:](https://github.com/saebekassebil/teoria)  A web audio library for music theory and composition.