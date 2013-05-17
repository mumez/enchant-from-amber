smalltalk.addPackage('Enchant-Core');
smalltalk.addClass('EcEnchant', smalltalk.Object, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "game",
fn: function (){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcCore())._instance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"game",{},smalltalk.EcEnchant)})},
messageSends: ["instance"]}),
smalltalk.EcEnchant);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._enchant();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.EcEnchant)})},
messageSends: ["enchant"]}),
smalltalk.EcEnchant);

smalltalk.addMethod(
smalltalk.method({
selector: "newGame:",
fn: function (anExtentPoint){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcCore())._extent_(anExtentPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGame:",{anExtentPoint:anExtentPoint},smalltalk.EcEnchant)})},
messageSends: ["extent:"]}),
smalltalk.EcEnchant);


smalltalk.EcEnchant.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(_st(self)._new())._init();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.EcEnchant.klass)})},
messageSends: ["ifNil:", "init", "new"]}),
smalltalk.EcEnchant.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EcEnchant.klass)})},
messageSends: []}),
smalltalk.EcEnchant.klass);


smalltalk.addClass('EcGameProgram', smalltalk.Object, ['game'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGameExtent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((320)).__at((320));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGameExtent",{},smalltalk.EcGameProgram)})},
messageSends: ["@"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "game",
fn: function (){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@game"]=_st($EcCore())._current();
$1=self["@game"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"game",{},smalltalk.EcGameProgram)})},
messageSends: ["current"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameExtent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._game();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._defaultGameExtent();
return $2;
} else {
$1;
};
$3=_st(_st(self)._game())._extent();
return $3;
}, function($ctx1) {$ctx1.fill(self,"gameExtent",{},smalltalk.EcGameProgram)})},
messageSends: ["ifNil:", "defaultGameExtent", "game", "extent"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._game();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(_st(self)._defaultGameExtent())._y();
return $2;
} else {
$1;
};
$3=_st(_st(self)._game())._height();
return $3;
}, function($ctx1) {$ctx1.fill(self,"gameHeight",{},smalltalk.EcGameProgram)})},
messageSends: ["ifNil:", "y", "defaultGameExtent", "game", "height"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._game();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(_st(self)._defaultGameExtent())._x();
return $2;
} else {
$1;
};
$3=_st(_st(self)._game())._width();
return $3;
}, function($ctx1) {$ctx1.fill(self,"gameWidth",{},smalltalk.EcGameProgram)})},
messageSends: ["ifNil:", "x", "defaultGameExtent", "game", "width"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
function $EcEnchant(){return smalltalk.EcEnchant||(typeof EcEnchant=="undefined"?nil:EcEnchant)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($EcEnchant())._default())._newGame_(_st(self)._gameExtent());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.EcGameProgram)})},
messageSends: ["newGame:", "gameExtent", "default"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._init();
_st(self)._prepareBeforeLoad();
_st(self)._setOnLoad();
_st(self)._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.EcGameProgram)})},
messageSends: ["init", "prepareBeforeLoad", "setOnLoad", "start"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareBeforeLoad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareBeforeLoad",{},smalltalk.EcGameProgram)})},
messageSends: []}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{},smalltalk.EcGameProgram)})},
messageSends: []}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "setOnLoad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._setOnLoad_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._prepareOnLoad();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setOnLoad",{},smalltalk.EcGameProgram)})},
messageSends: ["setOnLoad:", "prepareOnLoad", "game"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._start();
_st(console)._log_("##Game started");
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.EcGameProgram)})},
messageSends: ["start", "game", "log:"]}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._stop();
_st(console)._log_("##Game stopped");
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},smalltalk.EcGameProgram)})},
messageSends: ["stop", "game", "log:"]}),
smalltalk.EcGameProgram);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._main();
return $1;
}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.EcGameProgram.klass)})},
messageSends: ["main", "new"]}),
smalltalk.EcGameProgram.klass);


smalltalk.addClass('EcProxy', smalltalk.JSObjectProxy, ['className'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "className",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.EcProxy)})},
messageSends: []}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.EcProxy)})},
messageSends: []}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",_st(self)._jsObject());
_st(variables)._at_put_("#className",_st(self)._className());
_st(anInspector)._setLabel_(_st(self)._printString());
_st(self)._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.EcProxy)})},
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st("a ").__comma(_st(_st(self)._className())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.EcProxy)})},
messageSends: ["nextPutAll:", ",", "asString", "className"]}),
smalltalk.EcProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
fn: function (className,protoProxy){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1;
inst=_st(self)._basicNew();
_st(inst)._className_(className);
_st(inst)._jsObject_(_st(protoProxy)._jsObject());
_st(inst)._initialize();
$1=inst;
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:protoProxy:",{className:className,protoProxy:protoProxy,inst:inst},smalltalk.EcProxy.klass)})},
messageSends: ["basicNew", "className:", "jsObject:", "jsObject", "initialize"]}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.EcProxy.klass)})},
messageSends: ["protoProxy:", "protoNew"]}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcProxy.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.EcProxy.klass)})},
messageSends: ["classNamed:protoProxy:", "asString"]}),
smalltalk.EcProxy.klass);


smalltalk.addClass('EcAction', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoSettings:",
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Action(settingParameters);
return self}, function($ctx1) {$ctx1.fill(self,"protoSettings:",{settingParamters:settingParamters},smalltalk.EcAction.klass)})},
messageSends: []}),
smalltalk.EcAction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "settings:",
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSettings_(settingParamters));
return $1;
}, function($ctx1) {$ctx1.fill(self,"settings:",{settingParamters:settingParamters},smalltalk.EcAction.klass)})},
messageSends: ["protoProxy:", "protoSettings:"]}),
smalltalk.EcAction.klass);


smalltalk.addClass('EcParallelAction', smalltalk.EcAction, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['actions'];
return self}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.EcParallelAction)})},
messageSends: []}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "actions:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['actions']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"actions:",{arg:arg},smalltalk.EcParallelAction)})},
messageSends: []}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "endedActions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['endedActions'];
return self}, function($ctx1) {$ctx1.fill(self,"endedActions",{},smalltalk.EcParallelAction)})},
messageSends: []}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "endedActions:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['endedActions']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"endedActions:",{arg:arg},smalltalk.EcParallelAction)})},
messageSends: []}),
smalltalk.EcParallelAction);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ParallelAction();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcParallelAction.klass)})},
messageSends: []}),
smalltalk.EcParallelAction.klass);


smalltalk.addClass('EcCanvasLayer', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ParallelAction();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcCanvasLayer.klass)})},
messageSends: []}),
smalltalk.EcCanvasLayer.klass);


smalltalk.addClass('EcClass', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetInheritanceTree:",
fn: function (aConstructor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return enchant.Class.getInheritanceTree(aConstructor);
return self}, function($ctx1) {$ctx1.fill(self,"basicGetInheritanceTree:",{aConstructor:aConstructor},smalltalk.EcClass.klass)})},
messageSends: []}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getInheritanceTreeOf:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicGetInheritanceTree_(_st(anEntity)._getConstructor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getInheritanceTreeOf:",{anEntity:anEntity},smalltalk.EcClass.klass)})},
messageSends: ["basicGetInheritanceTree:", "getConstructor"]}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoSuperclass:definition:",
fn: function (aClass,definition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Class(aClass, definition);
return self}, function($ctx1) {$ctx1.fill(self,"protoSuperclass:definition:",{aClass:aClass,definition:definition},smalltalk.EcClass.klass)})},
messageSends: []}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:definition:",
fn: function (aClass,definition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSuperclass_definition_(aClass,definition));
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:definition:",{aClass:aClass,definition:definition},smalltalk.EcClass.klass)})},
messageSends: ["protoProxy:", "protoSuperclass:definition:"]}),
smalltalk.EcClass.klass);


smalltalk.addClass('EcDOMSound', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "currentTime",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['currentTime'];
return self}, function($ctx1) {$ctx1.fill(self,"currentTime",{},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "currentTime:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['currentTime']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"currentTime:",{arg:arg},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "duration",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['duration'];
return self}, function($ctx1) {$ctx1.fill(self,"duration",{},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "duration:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['duration']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"duration:",{arg:arg},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "volume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['volume'];
return self}, function($ctx1) {$ctx1.fill(self,"volume",{},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "volume:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['volume']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"volume:",{arg:arg},smalltalk.EcDOMSound)})},
messageSends: []}),
smalltalk.EcDOMSound);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.DomSound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcDOMSound.klass)})},
messageSends: []}),
smalltalk.EcDOMSound.klass);


smalltalk.addClass('EcEasing', smalltalk.EcProxy, [], 'Enchant-Core');


smalltalk.addClass('EcEnv', smalltalk.EcProxy, [], 'Enchant-Core');


smalltalk.addClass('EcEvent', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "localX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localX'];
return self}, function($ctx1) {$ctx1.fill(self,"localX",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localX:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"localX:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localY'];
return self}, function($ctx1) {$ctx1.fill(self,"localY",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localY:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"localY:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "target",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['target'];
return self}, function($ctx1) {$ctx1.fill(self,"target",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['target']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"target:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['type'];
return self}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['type']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x'];
return self}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y'];
return self}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{arg:arg},smalltalk.EcEvent)})},
messageSends: []}),
smalltalk.EcEvent);



smalltalk.addClass('EcEventTarget', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.EventTarget();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcEventTarget.klass)})},
messageSends: []}),
smalltalk.EcEventTarget.klass);


smalltalk.addClass('EcActionEventTarget', smalltalk.EcEventTarget, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ActionEventTarget();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcActionEventTarget.klass)})},
messageSends: []}),
smalltalk.EcActionEventTarget.klass);


smalltalk.addClass('EcCore', smalltalk.EcEventTarget, ['assetsBasePath'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "assetAt:",
fn: function (fileName){
var self=this;
var assetKey;
return smalltalk.withContext(function($ctx1) { 
var $1;
assetKey=_st(_st(self)._assetsBasePath()).__comma(fileName);
$1=_st(_st(self)._assets())._at_(assetKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"assetAt:",{fileName:fileName,assetKey:assetKey},smalltalk.EcCore)})},
messageSends: [",", "assetsBasePath", "at:", "assets"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assets",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['assets'];
return self}, function($ctx1) {$ctx1.fill(self,"assets",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assets:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['assets']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"assets:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assetsBasePath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@assetsBasePath"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@assetsBasePath"]="";
$1=self["@assetsBasePath"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assetsBasePath",{},smalltalk.EcCore)})},
messageSends: ["ifNil:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assetsBasePath:",
fn: function (aString){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=aString;
if(($receiver = $1) == nil || $receiver == undefined){
self["@assetsBasePath"]=nil;
$2=self["@assetsBasePath"];
return $2;
} else {
$1;
};
str=aString;
$3=_st(_st(str)._notEmpty())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(str)._last()).__tild_eq("/");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
str=_st(str).__comma("/");
str;
};
self["@assetsBasePath"]=str;
return self}, function($ctx1) {$ctx1.fill(self,"assetsBasePath:",{aString:aString,str:str},smalltalk.EcCore)})},
messageSends: ["ifNil:", "ifTrue:", ",", "and:", "~=", "last", "notEmpty"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "basicLoadingScene:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['loadingScene']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"basicLoadingScene:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "currentScene",
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("currentScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentScene",{},smalltalk.EcCore)})},
messageSends: ["protoProxy:", "at:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._width()).__at(_st(self)._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.EcCore)})},
messageSends: ["@", "height", "width"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._width_(_st(aPoint)._x());
_st(self)._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcCore)})},
messageSends: ["width:", "x", "height:", "y"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "fps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['fps'];
return self}, function($ctx1) {$ctx1.fill(self,"fps",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "fps:",
fn: function (fps){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['fps'] = fps;
return self}, function($ctx1) {$ctx1.fill(self,"fps:",{fps:fps},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['input'];
return self}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['input']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"input:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingScene",
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("loadingScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadingScene",{},smalltalk.EcCore)})},
messageSends: ["protoProxy:", "at:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onCoreResize:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("coreresize",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onCoreResize:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onEnterFrame:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("enterframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterFrame:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onExitFrame:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("exitframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onExitFrame:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputChange:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputchange",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputChange:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputEnd:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputend",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputEnd:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputStart:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputstart",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputStart:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoaded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onLoaded",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
messageSends: ["on:do:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadAssets:",
fn: function (fileNames){
var self=this;
var fnames;
return smalltalk.withContext(function($ctx1) { 
fnames=_st(fileNames)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._assetsBasePath()).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._preload_(fnames);
return self}, function($ctx1) {$ctx1.fill(self,"preloadAssets:",{fileNames:fileNames,fnames:fnames},smalltalk.EcCore)})},
messageSends: ["collect:", ",", "assetsBasePath", "preload:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareAttributes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareAttributes",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._onload_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onLoaded();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{},smalltalk.EcCore)})},
messageSends: ["onload:", "onLoaded"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._prepareAttributes();
_st(self)._prepareOnLoad();
return self}, function($ctx1) {$ctx1.fill(self,"prepareStart",{},smalltalk.EcCore)})},
messageSends: ["prepareAttributes", "prepareOnLoad"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "ready",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['ready'];
return self}, function($ctx1) {$ctx1.fill(self,"ready",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "ready:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['ready']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"ready:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "rootScene",
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("rootScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootScene",{},smalltalk.EcCore)})},
messageSends: ["protoProxy:", "at:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "running",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['running'];
return self}, function($ctx1) {$ctx1.fill(self,"running",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "running:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['running']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"running:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scale'];
return self}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scale']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "setOnLoad:",
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_("onload",block);
return self}, function($ctx1) {$ctx1.fill(self,"setOnLoad:",{block:block},smalltalk.EcCore)})},
messageSends: ["at:put:"]}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcCore)})},
messageSends: []}),
smalltalk.EcCore);


smalltalk.EcCore.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@current"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.EcCore.klass)})},
messageSends: []}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current:",
fn: function (anEcCore){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anEcCore;
return self}, function($ctx1) {$ctx1.fill(self,"current:",{anEcCore:anEcCore},smalltalk.EcCore.klass)})},
messageSends: []}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcCore.klass)})},
messageSends: ["width:height:", "x", "y"]}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
fn: function (jsProxy){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1;
inst=smalltalk.EcEventTarget.klass.fn.prototype._protoProxy_.apply(_st(self), [jsProxy]);
self["@current"]=inst;
$1=inst;
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{jsProxy:jsProxy,inst:inst},smalltalk.EcCore.klass)})},
messageSends: ["protoProxy:"]}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Core(x, y);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{x:x,y:y},smalltalk.EcCore.klass)})},
messageSends: []}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(x,y));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{x:x,y:y},smalltalk.EcCore.klass)})},
messageSends: ["protoProxy:", "protoWidth:height:"]}),
smalltalk.EcCore.klass);


smalltalk.addClass('EcNode', smalltalk.EcEventTarget, ['parent'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "age",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['age'];
return self}, function($ctx1) {$ctx1.fill(self,"age",{},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "age:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['age']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"age:",{arg:arg},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tl'];
return self}, function($ctx1) {$ctx1.fill(self,"basicTl",{},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:",{aPoint:aPoint},smalltalk.EcNode)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.EcNode)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onAdded:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("added",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAdded:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onAddedToScene:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("addedtoscene",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAddedToScene:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onEnterFrame:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("enterframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterFrame:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onRemoved:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("removed",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRemoved:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onRemovedFromScene:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("removedfromscene",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRemovedFromScene:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchEnd:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchendt",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchEnd:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchMove:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchmove",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchMove:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchStart:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchstart",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchStart:",{eventBlock:eventBlock},smalltalk.EcNode)})},
messageSends: ["on:do:"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aNode:aNode},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "tl",
fn: function (){
var self=this;
function $EcTimeline(){return smalltalk.EcTimeline||(typeof EcTimeline=="undefined"?nil:EcTimeline)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcTimeline())._protoProxy_(_st(self)._basicTl());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tl",{},smalltalk.EcNode)})},
messageSends: ["protoProxy:", "basicTl"]}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x'];
return self}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{arg:arg},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y'];
return self}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{arg:arg},smalltalk.EcNode)})},
messageSends: []}),
smalltalk.EcNode);



smalltalk.addClass('EcEntity', smalltalk.EcNode, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor'];
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "basicConstructor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['constructor'];
return self}, function($ctx1) {$ctx1.fill(self,"basicConstructor",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "basicIntersectAnyInstanceOf:",
fn: function (otherConstructor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']._staticIntersect(otherConstructor);
return self}, function($ctx1) {$ctx1.fill(self,"basicIntersectAnyInstanceOf:",{otherConstructor:otherConstructor},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonMode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonMode'];
return self}, function($ctx1) {$ctx1.fill(self,"buttonMode",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonMode:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonMode']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"buttonMode:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonPressed'];
return self}, function($ctx1) {$ctx1.fill(self,"buttonPressed",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonPressed:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonPressed']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"buttonPressed:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "collide:within:",
fn: function (other,distance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("within",[other,distance]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collide:within:",{other:other,distance:distance},smalltalk.EcEntity)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeOperation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['compositeOperation'];
return self}, function($ctx1) {$ctx1.fill(self,"compositeOperation",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeOperation:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['compositeOperation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"compositeOperation:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:",
fn: function (other){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("intersect",[_st(other)._jsObject()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersect:",{other:other},smalltalk.EcEntity)})},
messageSends: ["forwardMessage:withArguments:", "jsObject"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyInstanceOf:",
fn: function (otherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicIntersectAnyInstanceOf_(_st(otherClass)._getConstructor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersectAnyInstanceOf:",{otherClass:otherClass},smalltalk.EcEntity)})},
messageSends: ["basicIntersectAnyInstanceOf:", "getConstructor"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyOf:",
fn: function (otherEntityCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(otherEntityCollection)._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._intersect_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersectAnyOf:",{otherEntityCollection:otherEntityCollection},smalltalk.EcEntity)})},
messageSends: ["anySatisfy:", "intersect:"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyOf:ifTrue:",
fn: function (otherEntityCollection,intersectedBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(otherEntityCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._intersect_(self);
if(smalltalk.assert($1)){
$2=_st(intersectedBlock)._value_(each);
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"intersectAnyOf:ifTrue:",{otherEntityCollection:otherEntityCollection,intersectedBlock:intersectedBlock},smalltalk.EcEntity)})},
messageSends: ["do:", "ifTrue:", "value:", "intersect:"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "opacity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['opacity'];
return self}, function($ctx1) {$ctx1.fill(self,"opacity",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "opacity:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['opacity']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"opacity:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX'];
return self}, function($ctx1) {$ctx1.fill(self,"originX",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originX:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originX:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY'];
return self}, function($ctx1) {$ctx1.fill(self,"originY",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originY:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originY:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (aScene){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aScene;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aScene:aScene},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotate:",
fn: function (deg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotate",[deg]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotate:",{deg:deg},smalltalk.EcEntity)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation'];
return self}, function($ctx1) {$ctx1.fill(self,"rotation",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"rotation:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scale",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale:",{aPoint:aPoint},smalltalk.EcEntity)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleX",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleY",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleY:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "touchEnabled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['touchEnabled'];
return self}, function($ctx1) {$ctx1.fill(self,"touchEnabled",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "touchEnabled:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['touchEnabled']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"touchEnabled:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "visible",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['visible'];
return self}, function($ctx1) {$ctx1.fill(self,"visible",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "visible:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['visible']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"visible:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcEntity)})},
messageSends: []}),
smalltalk.EcEntity);


smalltalk.addMethod(
smalltalk.method({
selector: "getConstructor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._protoNew())._getConstructor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getConstructor",{},smalltalk.EcEntity.klass)})},
messageSends: ["getConstructor", "protoNew"]}),
smalltalk.EcEntity.klass);


smalltalk.addClass('EcLabel', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['color'];
return self}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['color']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{arg:arg},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "font",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['font'];
return self}, function($ctx1) {$ctx1.fill(self,"font",{},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['font']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"font:",{arg:arg},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return st.callJavaScriptMethod(self, 'text');
return self}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['text']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{arg:arg},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['textAlign'];
return self}, function($ctx1) {$ctx1.fill(self,"textAlign",{},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['textAlign']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{arg:arg},smalltalk.EcLabel)})},
messageSends: []}),
smalltalk.EcLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Label();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcLabel.klass)})},
messageSends: []}),
smalltalk.EcLabel.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1;
inst=_st(self)._new();
_st(inst)._text_(aString);
$1=inst;
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString,inst:inst},smalltalk.EcLabel.klass)})},
messageSends: ["new", "text:"]}),
smalltalk.EcLabel.klass);


smalltalk.addClass('EcMap', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "collisionData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['collisionData'];
return self}, function($ctx1) {$ctx1.fill(self,"collisionData",{},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "collisionData:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['collisionData']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"collisionData:",{arg:arg},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'];
return self}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{arg:arg},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileHeight'];
return self}, function($ctx1) {$ctx1.fill(self,"tileHeight",{},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileHeight:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileHeight']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"tileHeight:",{arg:arg},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileWidth'];
return self}, function($ctx1) {$ctx1.fill(self,"tileWidth",{},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileWidth']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"tileWidth:",{arg:arg},smalltalk.EcMap)})},
messageSends: []}),
smalltalk.EcMap);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Map();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcMap.klass)})},
messageSends: []}),
smalltalk.EcMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoTileWidth:tileHeight:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Map(width. height);
return self}, function($ctx1) {$ctx1.fill(self,"protoTileWidth:tileHeight:",{width:width,height:height},smalltalk.EcMap.klass)})},
messageSends: []}),
smalltalk.EcMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth:tileHeight:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoTileWidth_tileHeight_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileWidth:tileHeight:",{width:width,height:height},smalltalk.EcMap.klass)})},
messageSends: ["protoProxy:", "protoTileWidth:tileHeight:"]}),
smalltalk.EcMap.klass);


smalltalk.addClass('EcSprite', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._width()).__at(_st(self)._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.EcSprite)})},
messageSends: ["@", "height", "width"]}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._width_(_st(aPoint)._x());
_st(self)._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcSprite)})},
messageSends: ["width:", "x", "height:", "y"]}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "frame",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['frame'];
return self}, function($ctx1) {$ctx1.fill(self,"frame",{},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "frame:",
fn: function (frameArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['frame'] = frameArg;
return self}, function($ctx1) {$ctx1.fill(self,"frame:",{frameArg:frameArg},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'];
return self}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'] = anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "imageName:",
fn: function (imageName){
var self=this;
var core;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
core=_st($EcCore())._current();
$1=core;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._image_(_st(core)._assetAt_(imageName));
return self}, function($ctx1) {$ctx1.fill(self,"imageName:",{imageName:imageName,core:core},smalltalk.EcSprite)})},
messageSends: ["current", "ifNil:", "image:", "assetAt:"]}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcSprite)})},
messageSends: []}),
smalltalk.EcSprite);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcSprite.klass)})},
messageSends: ["width:height:", "x", "y"]}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_((1),(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.EcSprite.klass)})},
messageSends: ["width:height:"]}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sprite();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcSprite.klass)})},
messageSends: []}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sprite(width, height);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{width:width,height:height},smalltalk.EcSprite.klass)})},
messageSends: []}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{width:width,height:height},smalltalk.EcSprite.klass)})},
messageSends: ["protoProxy:", "protoWidth:height:"]}),
smalltalk.EcSprite.klass);


smalltalk.addClass('EcGroup', smalltalk.EcNode, ['children'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor'];
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "childNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['childNodes'];
return self}, function($ctx1) {$ctx1.fill(self,"childNodes",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@children"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@children"]=_st($Array())._new();
$1=self["@children"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.EcGroup)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "children:",
fn: function (anOrderedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=anOrderedCollection;
return self}, function($ctx1) {$ctx1.fill(self,"children:",{anOrderedCollection:anOrderedCollection},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "firstChild",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstChild",{},smalltalk.EcGroup)})},
messageSends: ["first", "children"]}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "initChildren",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initChildren",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "lastChild",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastChild",{},smalltalk.EcGroup)})},
messageSends: ["last", "children"]}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX'];
return self}, function($ctx1) {$ctx1.fill(self,"originX",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originX:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originX:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY'];
return self}, function($ctx1) {$ctx1.fill(self,"originY",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originY:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originY:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation'];
return self}, function($ctx1) {$ctx1.fill(self,"rotation",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"rotation:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleX",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleY",{},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleY:",{arg:arg},smalltalk.EcGroup)})},
messageSends: []}),
smalltalk.EcGroup);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Group();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcGroup.klass)})},
messageSends: []}),
smalltalk.EcGroup.klass);


smalltalk.addClass('EcScene', smalltalk.EcGroup, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._add_(_st(aNode)._parent_(self));
_st(self)._addChild_(_st(aNode)._jsObject());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aNode:aNode},smalltalk.EcScene)})},
messageSends: ["add:", "parent:", "children", "addChild:", "jsObject"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:",
fn: function (text){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,nil,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:",{text:text},smalltalk.EcScene)})},
messageSends: ["addLabel:color:font:align:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:",
fn: function (text,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,color,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:color:",{text:text,color:color},smalltalk.EcScene)})},
messageSends: ["addLabel:color:font:align:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:font:",
fn: function (text,color,font){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,color,font,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:color:font:",{text:text,color:color,font:font},smalltalk.EcScene)})},
messageSends: ["addLabel:color:font:align:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:font:align:",
fn: function (text,color,font,align){
var self=this;
var label;
function $EcLabel(){return smalltalk.EcLabel||(typeof EcLabel=="undefined"?nil:EcLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
label=_st($EcLabel())._text_(_st(text)._asString());
$1=color;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(label)._color_(color);
};
$2=font;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(label)._font_(font);
};
$3=align;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(label)._align_(align);
};
_st(self)._add_(label);
$4=label;
return $4;
}, function($ctx1) {$ctx1.fill(self,"addLabel:color:font:align:",{text:text,color:color,font:font,align:align,label:label},smalltalk.EcScene)})},
messageSends: ["text:", "asString", "ifNotNil:", "color:", "font:", "align:", "add:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:image:frame:",
fn: function (extentPoint,anImage,frame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSprite_image_frame_at_(extentPoint,anImage,frame,_st((0)).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:image:frame:",{extentPoint:extentPoint,anImage:anImage,frame:frame},smalltalk.EcScene)})},
messageSends: ["addSprite:image:frame:at:", "@"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:image:frame:at:",
fn: function (extentPoint,anImage,frame,initialPoint){
var self=this;
var sprite;
function $EcSprite(){return smalltalk.EcSprite||(typeof EcSprite=="undefined"?nil:EcSprite)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sprite=_st($EcSprite())._extent_(extentPoint);
_st(sprite)._image_(anImage);
_st(sprite)._frame_(frame);
_st(sprite)._x_(_st(initialPoint)._x());
_st(sprite)._y_(_st(initialPoint)._y());
_st(self)._add_(sprite);
$1=sprite;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:image:frame:at:",{extentPoint:extentPoint,anImage:anImage,frame:frame,initialPoint:initialPoint,sprite:sprite},smalltalk.EcScene)})},
messageSends: ["extent:", "image:", "frame:", "x:", "x", "y:", "y", "add:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:imageName:frame:",
fn: function (extentPoint,imageName,frame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSprite_imageName_frame_at_(extentPoint,imageName,frame,_st((0)).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:imageName:frame:",{extentPoint:extentPoint,imageName:imageName,frame:frame},smalltalk.EcScene)})},
messageSends: ["addSprite:imageName:frame:at:", "@"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:imageName:frame:at:",
fn: function (extentPoint,imageName,frame,initialPoint){
var self=this;
var image;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
image=_st(_st($EcCore())._current())._assetAt_(imageName);
$1=_st(self)._addSprite_image_frame_at_(extentPoint,image,frame,initialPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:imageName:frame:at:",{extentPoint:extentPoint,imageName:imageName,frame:frame,initialPoint:initialPoint,image:image},smalltalk.EcScene)})},
messageSends: ["assetAt:", "current", "addSprite:image:frame:at:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "entitiesKindOf:",
fn: function (entityClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isKindOf_(entityClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"entitiesKindOf:",{entityClass:entityClass},smalltalk.EcScene)})},
messageSends: ["select:", "isKindOf:", "children"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "entitiesOf:",
fn: function (entityClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._class()).__eq(entityClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"entitiesOf:",{entityClass:entityClass},smalltalk.EcScene)})},
messageSends: ["select:", "=", "class", "children"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onAButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("abuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onAButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("abuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onCoreResize:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("coreresize",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onCoreResize:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonDown:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonUp:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
messageSends: ["on:do:"]}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(_st(self)._children())._remove_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aNode)._parent_(nil);
_st(self)._removeChild_(_st(aNode)._jsObject());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"remove:",{aNode:aNode},smalltalk.EcScene)})},
messageSends: ["remove:ifAbsent:", "children", "parent:", "removeChild:", "jsObject"]}),
smalltalk.EcScene);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Scene();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcScene.klass)})},
messageSends: []}),
smalltalk.EcScene.klass);


smalltalk.addClass('EcLoadingScene', smalltalk.EcScene, [], 'Enchant-Core');


smalltalk.addClass('EcSound', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcSound.klass)})},
messageSends: []}),
smalltalk.EcSound.klass);


smalltalk.addClass('EcSurface', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['context'];
return self}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['context']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{arg:arg},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcSurface)})},
messageSends: []}),
smalltalk.EcSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Surface(width, height);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{width:width,height:height},smalltalk.EcSurface.klass)})},
messageSends: []}),
smalltalk.EcSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{width:width,height:height},smalltalk.EcSurface.klass)})},
messageSends: ["protoProxy:", "protoWidth:height:"]}),
smalltalk.EcSurface.klass);


smalltalk.addClass('EcTimeline', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:time:",
fn: function (aPoint,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y(),time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:time:",{aPoint:aPoint,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:time:easing:",
fn: function (aPoint,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y(),time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:time:easing:",{aPoint:aPoint,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:time:",
fn: function (aPoint,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y(),time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:time:",{aPoint:aPoint,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:time:easing:",
fn: function (aPoint,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y(),time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:time:easing:",{aPoint:aPoint,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:", "x", "y"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:time:",
fn: function (deg,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateBy",[deg,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:time:",{deg:deg,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:time:easing:",
fn: function (deg,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateBy",[deg,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:time:easing:",{deg:deg,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:time:",
fn: function (deg,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateTo",[deg,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:time:",{deg:deg,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:time:easing:",
fn: function (deg,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateTo",[deg,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:time:easing:",{deg:deg,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:time:",
fn: function (scale,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleBy",[scale,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:time:",{scale:scale,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:time:easing:",
fn: function (scale,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleBy",[scale,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:time:easing:",{scale:scale,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleTo:time:",
fn: function (scale,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleTo",[scale,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleTo:time:",{scale:scale,time:time},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleTo:time:easing:",
fn: function (scale,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleTo",[scale,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleTo:time:easing:",{scale:scale,time:time,easing:easing},smalltalk.EcTimeline)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.EcTimeline);



smalltalk.addClass('EcTween', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoSettings:",
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Tween(settingParameters);
return self}, function($ctx1) {$ctx1.fill(self,"protoSettings:",{settingParamters:settingParamters},smalltalk.EcTween.klass)})},
messageSends: []}),
smalltalk.EcTween.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "settings:",
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSettings_(settingParamters));
return $1;
}, function($ctx1) {$ctx1.fill(self,"settings:",{settingParamters:settingParamters},smalltalk.EcTween.klass)})},
messageSends: ["protoProxy:", "protoSettings:"]}),
smalltalk.EcTween.klass);


smalltalk.addClass('EcWebAudioSound', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.WebAudioSound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcWebAudioSound.klass)})},
messageSends: []}),
smalltalk.EcWebAudioSound.klass);


