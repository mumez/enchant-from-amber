smalltalk.addPackage('Enchant-Examples');
smalltalk.addClass('EcExampleApple', smalltalk.EcSprite, [], 'Enchant-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._extent_(_st((16)).__at((16)));
_st(self)._imageName_("icon0.png");
_st(self)._frame_((15));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EcExampleApple)})},
args: [],
source: "initialize\x0a\x09self extent: 16@16.\x0a\x09self imageName: 'icon0.png'.\x0a\x09self frame: 15.",
messageSends: ["extent:", "@", "imageName:", "frame:"],
referencedClasses: []
}),
smalltalk.EcExampleApple);



smalltalk.addClass('EcExampleEnemyBear', smalltalk.EcSprite, [], 'Enchant-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._extent_(_st((32)).__at((32)));
_st(self)._imageName_("chara1.png");
_st(self)._frame_((15));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EcExampleEnemyBear)})},
args: [],
source: "initialize\x0a\x09self extent: 32@32.\x0a\x09self imageName: 'chara1.png'.\x0a\x09self frame: 15.\x0a\x09",
messageSends: ["extent:", "@", "imageName:", "frame:"],
referencedClasses: []
}),
smalltalk.EcExampleEnemyBear);



smalltalk.addClass('EcExampleShooterBear', smalltalk.EcSprite, [], 'Enchant-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._extent_(_st((32)).__at((32)));
_st(self)._imageName_("chara1.png");
_st(self)._frame_((5));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EcExampleShooterBear)})},
args: [],
source: "initialize\x0a\x09self extent: 32@32.\x0a\x09self imageName: 'chara1.png'.\x0a\x09self frame: 5.",
messageSends: ["extent:", "@", "imageName:", "frame:"],
referencedClasses: []
}),
smalltalk.EcExampleShooterBear);



smalltalk.addClass('EcShootingGameExample', smalltalk.EcGameProgram, ['score'], 'Enchant-Examples');
smalltalk.EcShootingGameExample.comment="EcShootingGameExample main inspect."
smalltalk.addMethod(
smalltalk.method({
selector: "incrementScore",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@score"]=_st(self["@score"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"incrementScore",{},smalltalk.EcShootingGameExample)})},
args: [],
source: "incrementScore\x0a\x09score := score + 1\x0a\x09\x0a\x09",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.EcShootingGameExample);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.EcGameProgram.fn.prototype._init.apply(_st(self), []);
self["@score"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.EcShootingGameExample)})},
args: [],
source: "init\x0a\x09super init.\x0a\x09score := 0",
messageSends: ["init"],
referencedClasses: []
}),
smalltalk.EcShootingGameExample);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareBeforeLoad",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._assetsBasePath_("./game-img/");
_st(_st(self)._game())._preloadAssets_(["chara1.png", "icon0.png"]);
_st(_st(self)._game())._fps_((20));
return self}, function($ctx1) {$ctx1.fill(self,"prepareBeforeLoad",{},smalltalk.EcShootingGameExample)})},
args: [],
source: "prepareBeforeLoad\x0a\x09self game assetsBasePath: './game-img/'.\x0a\x09self game preloadAssets: #('chara1.png' 'icon0.png').\x0a\x09self game fps: 20.",
messageSends: ["assetsBasePath:", "game", "preloadAssets:", "fps:"],
referencedClasses: []
}),
smalltalk.EcShootingGameExample);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
category: 'actions',
fn: function (){
var self=this;
var scene,bear,enemy;
function $EcExampleShooterBear(){return smalltalk.EcExampleShooterBear||(typeof EcExampleShooterBear=="undefined"?nil:EcExampleShooterBear)}
function $EcExampleEnemyBear(){return smalltalk.EcExampleEnemyBear||(typeof EcExampleEnemyBear=="undefined"?nil:EcExampleEnemyBear)}
function $EcExampleApple(){return smalltalk.EcExampleApple||(typeof EcExampleApple=="undefined"?nil:EcExampleApple)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
scene=_st(_st(self)._game())._rootScene();
bear=_st($EcExampleShooterBear())._new();
_st(scene)._add_(bear);
$1=_st(bear)._tl();
_st($1)._delay_(_st(_st(_st(self)._game())._fps()).__star((20)));
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._stop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(scene)._onTouchMove_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(bear)._y_(_st(event)._localY());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
$3=_st(scene)._tl();
_st($3)._then_((function(){
return smalltalk.withContext(function($ctx2) {
enemy=_st($EcExampleEnemyBear())._new();
enemy;
_st(enemy)._scaleX_((-1));
_st(enemy)._moveTo_(_st(_st(self)._gameWidth()).__at(_st(_st(self)._gameHeight())._atRandom()));
_st(_st(enemy)._tl())._moveBy_time_(_st(_st(_st(_st(self)._gameWidth()).__plus((40)))._negated()).__at((0)),(160));
return _st(scene)._add_(enemy);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($3)._delay_((30));
$4=_st($3)._loop();
_st(scene)._onTouchStart_((function(event){
var apple;
return smalltalk.withContext(function($ctx2) {
_st(bear)._y_(_st(event)._localY());
apple=_st($EcExampleApple())._new();
apple;
_st(apple)._moveTo_(_st(_st(bear)._width()).__at(_st(_st(bear)._y()).__plus(_st(_st(bear)._height()).__slash((2)))));
_st(_st(apple)._tl())._moveBy_time_(_st(_st(self)._gameWidth()).__at((0)),(30));
_st(apple)._onEnterFrame_((function(){
var enemies;
return smalltalk.withContext(function($ctx3) {
enemies=_st(scene)._entitiesOf_($EcExampleEnemyBear());
enemies;
return _st(apple)._intersectAnyOf_ifTrue_(enemies,(function(enem){
return smalltalk.withContext(function($ctx4) {
$5=scene;
_st($5)._remove_(enem);
$6=_st($5)._remove_(apple);
$6;
return _st(self)._incrementScore();
}, function($ctx4) {$ctx4.fillBlock({enem:enem},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({enemies:enemies},$ctx1)})}));
return _st(scene)._add_(apple);
}, function($ctx2) {$ctx2.fillBlock({event:event,apple:apple},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{scene:scene,bear:bear,enemy:enemy},smalltalk.EcShootingGameExample)})},
args: [],
source: "prepareOnLoad\x0a\x09| scene bear enemy |\x0a\x09scene := self game rootScene.\x0a\x09\x0a\x09bear := EcExampleShooterBear new.\x0a\x09scene add: bear.\x0a\x09bear tl delay: (self game fps * 20); then: [self stop].\x0a\x09scene onTouchMove: [:event | bear y: event localY].\x0a\x09\x0a\x09scene tl \x0a\x09\x09then: [ \x0a\x09\x09\x09enemy := EcExampleEnemyBear new.\x0a\x09\x09\x09enemy scaleX: -1.\x0a\x09\x09\x09enemy moveTo: (self gameWidth@ self gameHeight atRandom).\x0a\x09\x09\x09enemy tl moveBy: ((self gameWidth + 40) negated@0) time: 160.\x0a\x09\x09\x09scene add: enemy\x0a\x09\x09]; delay: 30; loop.\x0a\x09\x0a\x09scene onTouchStart: [:event | | apple |\x0a\x09\x09bear y: event localY.\x0a\x09\x09apple := EcExampleApple new.\x0a\x09\x09apple moveTo: (bear width@ (bear y + (bear height / 2))).\x0a\x09\x09apple tl moveBy: (self gameWidth@0) time: 30.\x0a\x09\x09apple onEnterFrame: [ | enemies|\x0a\x09\x09\x09enemies := scene entitiesOf: EcExampleEnemyBear.\x0a\x09\x09\x09apple intersectAnyOf: enemies ifTrue: [:enem |\x0a\x09\x09\x09\x09scene remove: enem; remove: apple.\x0a\x09\x09\x09\x09self incrementScore\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09\x09scene add: apple\x0a\x09].\x0a\x09\x0a\x0a\x09",
messageSends: ["rootScene", "game", "new", "add:", "delay:", "*", "fps", "tl", "then:", "stop", "onTouchMove:", "y:", "localY", "scaleX:", "moveTo:", "@", "atRandom", "gameHeight", "gameWidth", "moveBy:time:", "negated", "+", "loop", "onTouchStart:", "/", "height", "y", "width", "onEnterFrame:", "entitiesOf:", "intersectAnyOf:ifTrue:", "remove:", "incrementScore"],
referencedClasses: ["EcExampleShooterBear", "EcExampleEnemyBear", "EcExampleApple"]
}),
smalltalk.EcShootingGameExample);

smalltalk.addMethod(
smalltalk.method({
selector: "score",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@score"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"score",{},smalltalk.EcShootingGameExample)})},
args: [],
source: "score\x0a\x09^score",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcShootingGameExample);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(_st("Game Over! Score: ").__comma(_st(self)._score()));
smalltalk.EcGameProgram.fn.prototype._stop.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},smalltalk.EcShootingGameExample)})},
args: [],
source: "stop\x0a\x09window alert: ('Game Over! Score: ', self score).\x0a\x09super stop",
messageSends: ["alert:", ",", "score", "stop"],
referencedClasses: []
}),
smalltalk.EcShootingGameExample);



smalltalk.addClass('EcTimelineExample', smalltalk.EcGameProgram, [], 'Enchant-Examples');
smalltalk.EcTimelineExample.comment="EcTimelineExample main inspect."
smalltalk.addMethod(
smalltalk.method({
selector: "prepareBeforeLoad",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._assetsBasePath_("./game-img/");
_st(_st(self)._game())._preloadAssets_(["chara1.png"]);
_st(_st(self)._game())._fps_((20));
return self}, function($ctx1) {$ctx1.fill(self,"prepareBeforeLoad",{},smalltalk.EcExample1)})},
args: [],
source: "prepareBeforeLoad\x0a\x09self game assetsBasePath: './game-img/'.\x0a\x09self game preloadAssets: #('chara1.png').\x0a\x09self game fps: 20.",
messageSends: ["assetsBasePath:", "game", "preloadAssets:", "fps:"],
referencedClasses: []
}),
smalltalk.EcTimelineExample);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
category: 'actions',
fn: function (){
var self=this;
var scene,bear;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
scene=_st(_st(self)._game())._rootScene();
bear=_st(scene)._addSprite_imageName_frame_at_(_st((32)).__at((32)),"chara1.png",[(6), (6), (7), (7)],_st((1)).__at((1)));
$1=_st(bear)._tl();
_st($1)._moveBy_time_(_st((288)).__at((0)),(90));
_st($1)._scaleTo_time_easing_((-1),(1),(10));
_st($1)._moveBy_time_(_st((-288)).__at((0)),(90));
_st($1)._scaleTo_time_easing_((1),(1),(10));
$2=_st($1)._loop();
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{scene:scene,bear:bear},smalltalk.EcExample1)})},
args: [],
source: "prepareOnLoad\x0a\x09| scene bear |\x0a\x09scene := self game rootScene.\x0a\x09bear := scene addSprite: (32@32) imageName: 'chara1.png' frame: #(6 6 7 7) at: 1@1.\x0a\x09\x0a\x09bear tl \x0a\x09\x09moveBy: 288@0 time: 90;\x0a\x09\x09scaleTo: -1 time: 1 easing: 10;\x0a\x09\x09moveBy: -288@0 time: 90;\x0a\x09\x09scaleTo: 1 time: 1 easing: 10;\x0a\x09\x09loop\x0a\x09\x09\x0a\x0a\x09",
messageSends: ["rootScene", "game", "addSprite:imageName:frame:at:", "@", "moveBy:time:", "tl", "scaleTo:time:easing:", "loop"],
referencedClasses: []
}),
smalltalk.EcTimelineExample);



smalltalk.addClass('EcTouchEventExample', smalltalk.EcGameProgram, [], 'Enchant-Examples');
smalltalk.EcTouchEventExample.comment="EcTouchEventExample main inspect."
smalltalk.addMethod(
smalltalk.method({
selector: "prepareBeforeLoad",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._assetsBasePath_("./game-img/");
_st(_st(self)._game())._preloadAssets_(["chara1.png", "icon0.png"]);
_st(_st(self)._game())._fps_((20));
return self}, function($ctx1) {$ctx1.fill(self,"prepareBeforeLoad",{},smalltalk.EcShootingExample1)})},
args: [],
source: "prepareBeforeLoad\x0a\x09self game assetsBasePath: './game-img/'.\x0a\x09self game preloadAssets: #('chara1.png' 'icon0.png').\x0a\x09self game fps: 20.",
messageSends: ["assetsBasePath:", "game", "preloadAssets:", "fps:"],
referencedClasses: []
}),
smalltalk.EcTouchEventExample);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
category: 'actions',
fn: function (){
var self=this;
var scene,bear;
function $EcSprite(){return smalltalk.EcSprite||(typeof EcSprite=="undefined"?nil:EcSprite)}
return smalltalk.withContext(function($ctx1) { 
scene=_st(_st(self)._game())._rootScene();
bear=_st(scene)._addSprite_imageName_frame_(_st((32)).__at((32)),"chara1.png",(5));
_st(scene)._onTouchStart_((function(event){
var apple;
return smalltalk.withContext(function($ctx2) {
apple=_st($EcSprite())._extent_(_st((16)).__at((16)));
apple;
_st(apple)._imageName_("icon0.png");
_st(apple)._moveTo_(_st((16)).__at(_st(_st(bear)._y()).__plus((8))));
_st(_st(apple)._tl())._moveBy_time_(_st((320)).__at((0)),(30));
_st(apple)._frame_((15));
return _st(scene)._add_(apple);
}, function($ctx2) {$ctx2.fillBlock({event:event,apple:apple},$ctx1)})}));
_st(scene)._onTouchMove_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(bear)._y_(_st(event)._localY());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{scene:scene,bear:bear},smalltalk.EcTouchMoveExample1)})},
args: [],
source: "prepareOnLoad\x0a\x09| scene bear |\x0a\x09scene := self game rootScene.\x0a\x09bear := scene addSprite: (32@32) imageName: 'chara1.png' frame: 5.\x0a\x09\x0a\x09scene onTouchStart: [:event | | apple |\x0a\x09\x09apple := EcSprite extent: 16@16.\x0a\x09\x09apple imageName: 'icon0.png'.\x0a\x09\x09apple moveTo: (16@ (bear y + 8)).\x0a\x09\x09apple tl moveBy: (320@0) time: 30.\x0a\x09\x09apple frame: 15.\x0a\x09\x09scene add: apple\x0a\x09].\x0a\x09\x0a\x09scene onTouchMove: [:event |\x0a\x09\x09bear y: event localY\x0a\x09].\x0a\x09\x0a\x09",
messageSends: ["rootScene", "game", "addSprite:imageName:frame:", "@", "onTouchStart:", "extent:", "imageName:", "moveTo:", "+", "y", "moveBy:time:", "tl", "frame:", "add:", "onTouchMove:", "y:", "localY"],
referencedClasses: ["EcSprite"]
}),
smalltalk.EcTouchEventExample);



