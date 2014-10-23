/*                ___           ___           ___           ___                       ___                       ___     
      ___        /\__\         /\  \         /\  \         /\  \          ___        /\__\          ___        /\  \    
     /\  \      /::|  |       /::\  \       /::\  \       /::\  \        /\  \      /::|  |        /\  \       \:\  \   
     \:\  \    /:|:|  |      /:/\:\  \     /:/\:\  \     /:/\:\  \       \:\  \    /:|:|  |        \:\  \       \:\  \  
     /::\__\  /:/|:|  |__   /:/  \:\__\   /::\~\:\  \   /::\~\:\  \      /::\__\  /:/|:|  |__      /::\__\      /::\  \ 
  __/:/\/__/ /:/ |:| /\__\ /:/__/ \:|__| /:/\:\ \:\__\ /:/\:\ \:\__\  __/:/\/__/ /:/ |:| /\__\  __/:/\/__/     /:/\:\__\
 /\/:/  /    \/__|:|/:/  / \:\  \ /:/  / \:\~\:\ \/__/ \/__\:\ \/__/ /\/:/  /    \/__|:|/:/  / /\/:/  /       /:/  \/__/
 \::/__/         |:/:/  /   \:\  /:/  /   \:\ \:\__\        \:\__\   \::/__/         |:/:/  /  \::/__/       /:/  /     
  \:\__\         |::/  /     \:\/:/  /     \:\ \/__/         \/__/    \:\__\         |::/  /    \:\__\       \/__/      
   \/__/         /:/  /       \::/__/       \:\__\                     \/__/         /:/  /      \/__/                  
                 \/__/         ~~            \/__/                                   \/__/                              
* http://studioindefinit.com
* dragdrop.js simple script for handling drag and dropped files in the browser.
* deps, Modernizr
*/
var DragDrop = function(callback){
  var self = this;
  if (Modernizr.draganddrop && FileReader !== undefined) {
    var container = document.getElementById('Container');
    container.ondragover = function(){ this.className = 'drag-hover'; return false;};
    container.ondragend = function(){ this.className = ''; return false; };
    container.ondrop = function(e){
      this.className = '';
      e.preventDefault();

      var file = e.dataTransfer.files[0];
      var reader = new FileReader();

      reader.onload = function(event){
        if(callback){
          callback(event.target.result);
        }
      };
      // console.log(file);
      reader.readAsDataURL(file);
      return false;
    };
  } else {
    console.log('your browser does not support drag&drop nor filereader');
  }
};
//End drag and drop