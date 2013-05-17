EnchantFromAmber
==================
[enchant.js](http://enchantjs.com/) wrapper for [Amber Smalltalk](http://amber-lang.net/).

## Installation ##
Just copy and merge the whole directory to your Amber Smalltalk home. 
Use copyAll.sh or copyAll.bat, according to your platform.

## How to try ##
1. start amber server
2. open the demo page ([http://localhost:4000/enchantFromAmber.html](http://localhost:4000/enchantFromAmber.html)) with your favorite web browser.

## How to write your code ##
EcGameProgram is an abstract class for defining your game program.
There are some useful hook methods for override.

- init
  + for initializing game status (instance variables)  
- prepareBeforeLoad
  + pre-load common resources (icons, images, map data, etc) here
- prepareOnLoad
  + define main behavior of the game. Event handling, characters movement, etc.
- defaultGameExtent
  + return the extent of game screen - default is 320 x 320 px.

You can start the game by "YourProgramClass main".

## Examples ##
See the 'Enchant-Examples' package. There are HTMLs included for launching the examples (
timeline.html, touch-event.html, shooting.html).

Code excerpts:
[TimelineExample](https://gist.github.com/mumez/5584318#file-ectimelineexample1-st)
[TouchEventExample](https://gist.github.com/mumez/5585108#file-ectoucheventexample1-st)
[ShootingGameExample](https://gist.github.com/mumez/5597283#file-ecshootinggameexample-st)

## License ##
[MIT license](http://opensource.org/licenses/MIT)