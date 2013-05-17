smalltalk.addPackage('Enchant-Core');
smalltalk.addClass('EcEnchant', smalltalk.Object, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "game",
category: 'accessing',
fn: function (){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcCore())._instance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"game",{},smalltalk.EcEnchant)})},
args: [],
source: "game\x0a\x09^EcCore instance",
messageSends: ["instance"],
referencedClasses: ["EcCore"]
}),
smalltalk.EcEnchant);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._enchant();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.EcEnchant)})},
args: [],
source: "init\x0a\x09window enchant\x0a\x09",
messageSends: ["enchant"],
referencedClasses: []
}),
smalltalk.EcEnchant);

smalltalk.addMethod(
smalltalk.method({
selector: "newGame:",
category: 'actions',
fn: function (anExtentPoint){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcCore())._extent_(anExtentPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGame:",{anExtentPoint:anExtentPoint},smalltalk.EcEnchant)})},
args: ["anExtentPoint"],
source: "newGame: anExtentPoint\x0a\x09^ EcCore extent: anExtentPoint",
messageSends: ["extent:"],
referencedClasses: ["EcCore"]
}),
smalltalk.EcEnchant);


smalltalk.EcEnchant.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
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
args: [],
source: "default\x0a\x09^default ifNil: [default := self new init]",
messageSends: ["ifNil:", "init", "new"],
referencedClasses: []
}),
smalltalk.EcEnchant.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'class initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EcEnchant.klass)})},
args: [],
source: "initialize\x0a\x09\x22SnEnchant initialize\x22\x0a\x09default := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEnchant.klass);


smalltalk.addClass('EcGameProgram', smalltalk.Object, ['game'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGameExtent",
category: 'hooks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((320)).__at((320));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGameExtent",{},smalltalk.EcGameProgram)})},
args: [],
source: "defaultGameExtent\x0a\x09\x22override\x22\x0a\x09^320@320",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "game",
category: 'accessing',
fn: function (){
var self=this;
function $EcCore(){return smalltalk.EcCore||(typeof EcCore=="undefined"?nil:EcCore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@game"]=_st($EcCore())._current();
$1=self["@game"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"game",{},smalltalk.EcGameProgram)})},
args: [],
source: "game\x0a\x09^game := EcCore current\x0a\x09",
messageSends: ["current"],
referencedClasses: ["EcCore"]
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameExtent",
category: 'accessing',
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
args: [],
source: "gameExtent\x0a\x09self game ifNil: [^self defaultGameExtent].\x0a\x09^ self game extent",
messageSends: ["ifNil:", "defaultGameExtent", "game", "extent"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameHeight",
category: 'accessing',
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
args: [],
source: "gameHeight\x0a\x09self game ifNil: [^self defaultGameExtent y].\x0a\x09^ self game height",
messageSends: ["ifNil:", "y", "defaultGameExtent", "game", "height"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "gameWidth",
category: 'accessing',
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
args: [],
source: "gameWidth\x0a\x09self game ifNil: [^self defaultGameExtent x].\x0a\x09^ self game width",
messageSends: ["ifNil:", "x", "defaultGameExtent", "game", "width"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'hooks',
fn: function (){
var self=this;
function $EcEnchant(){return smalltalk.EcEnchant||(typeof EcEnchant=="undefined"?nil:EcEnchant)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($EcEnchant())._default())._newGame_(_st(self)._gameExtent());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.EcGameProgram)})},
args: [],
source: "init\x0a\x09EcEnchant default newGame: self gameExtent",
messageSends: ["newGame:", "gameExtent", "default"],
referencedClasses: ["EcEnchant"]
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._init();
_st(self)._prepareBeforeLoad();
_st(self)._setOnLoad();
_st(self)._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.EcGameProgram)})},
args: [],
source: "main\x0a\x09\x22template method\x22\x0a\x09self init.\x0a\x09self prepareBeforeLoad.\x0a\x09self setOnLoad.\x0a\x09self start",
messageSends: ["init", "prepareBeforeLoad", "setOnLoad", "start"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareBeforeLoad",
category: 'hooks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareBeforeLoad",{},smalltalk.EcGameProgram)})},
args: [],
source: "prepareBeforeLoad\x0a\x09\x22override\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
category: 'hooks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{},smalltalk.EcGameProgram)})},
args: [],
source: "prepareOnLoad\x0a\x09\x22override\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "setOnLoad",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._setOnLoad_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._prepareOnLoad();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setOnLoad",{},smalltalk.EcGameProgram)})},
args: [],
source: "setOnLoad\x0a\x09self game setOnLoad: [self prepareOnLoad]",
messageSends: ["setOnLoad:", "prepareOnLoad", "game"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._start();
_st(console)._log_("##Game started");
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.EcGameProgram)})},
args: [],
source: "start\x0a\x09self game start.\x0a\x09console log: '##Game started'",
messageSends: ["start", "game", "log:"],
referencedClasses: []
}),
smalltalk.EcGameProgram);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._game())._stop();
_st(console)._log_("##Game stopped");
return self}, function($ctx1) {$ctx1.fill(self,"stop",{},smalltalk.EcGameProgram)})},
args: [],
source: "stop\x0a\x09self game stop.\x0a\x09console log: '##Game stopped'",
messageSends: ["stop", "game", "log:"],
referencedClasses: []
}),
smalltalk.EcGameProgram);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._main();
return $1;
}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.EcGameProgram.klass)})},
args: [],
source: "main\x0a\x09^self new main",
messageSends: ["main", "new"],
referencedClasses: []
}),
smalltalk.EcGameProgram.klass);


smalltalk.addClass('EcProxy', smalltalk.JSObjectProxy, ['className'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "className",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.EcProxy)})},
args: [],
source: "className\x0a\x09^className",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.EcProxy)})},
args: ["aString"],
source: "className: aString\x0a\x09className := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'accessing',
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
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09variables at: '#className' put: self className.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables\x0a\x09",
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.EcProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'accessing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st("a ").__comma(_st(_st(self)._className())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.EcProxy)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a ', self className asString",
messageSends: ["nextPutAll:", ",", "asString", "className"],
referencedClasses: []
}),
smalltalk.EcProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
category: 'instance creation',
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
args: ["className", "protoProxy"],
source: "classNamed: className protoProxy: protoProxy\x0a\x09| inst |\x0a\x09inst := self basicNew.\x0a\x09inst className: className.\x0a\x09inst jsObject: protoProxy jsObject.\x0a\x09inst initialize.\x0a\x09^inst",
messageSends: ["basicNew", "className:", "jsObject:", "jsObject", "initialize"],
referencedClasses: []
}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.EcProxy.klass)})},
args: [],
source: "new\x0a\x09^self protoProxy: self protoNew",
messageSends: ["protoProxy:", "protoNew"],
referencedClasses: []
}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcProxy.klass)})},
args: [],
source: "protoNew\x0a\x09self subclassResponsibility.\x0a\x09^nil",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.EcProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
category: 'instance creation',
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.EcProxy.klass)})},
args: ["protoProxy"],
source: "protoProxy: protoProxy\x0a\x09^self classNamed: self asString protoProxy: protoProxy",
messageSends: ["classNamed:protoProxy:", "asString"],
referencedClasses: []
}),
smalltalk.EcProxy.klass);


smalltalk.addClass('EcAction', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoSettings:",
category: 'instance creation',
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Action(settingParameters);
return self}, function($ctx1) {$ctx1.fill(self,"protoSettings:",{settingParamters:settingParamters},smalltalk.EcAction.klass)})},
args: ["settingParamters"],
source: "protoSettings: settingParamters\x0a\x09<return new enchant.Action(settingParameters)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcAction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "settings:",
category: 'instance creation',
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSettings_(settingParamters));
return $1;
}, function($ctx1) {$ctx1.fill(self,"settings:",{settingParamters:settingParamters},smalltalk.EcAction.klass)})},
args: ["settingParamters"],
source: "settings: settingParamters\x0a\x09^self protoProxy: (self protoSettings: settingParamters)",
messageSends: ["protoProxy:", "protoSettings:"],
referencedClasses: []
}),
smalltalk.EcAction.klass);


smalltalk.addClass('EcParallelAction', smalltalk.EcAction, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['actions'];
return self}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.EcParallelAction)})},
args: [],
source: "actions\x0a\x09<return self['@jsObject']['actions']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "actions:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['actions']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"actions:",{arg:arg},smalltalk.EcParallelAction)})},
args: ["arg"],
source: "actions: arg\x0a\x09<return self['@jsObject']['actions']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "endedActions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['endedActions'];
return self}, function($ctx1) {$ctx1.fill(self,"endedActions",{},smalltalk.EcParallelAction)})},
args: [],
source: "endedActions\x0a\x09<return self['@jsObject']['endedActions']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcParallelAction);

smalltalk.addMethod(
smalltalk.method({
selector: "endedActions:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['endedActions']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"endedActions:",{arg:arg},smalltalk.EcParallelAction)})},
args: ["arg"],
source: "endedActions: arg\x0a\x09<return self['@jsObject']['endedActions']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcParallelAction);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ParallelAction();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcParallelAction.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.ParallelAction()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcParallelAction.klass);


smalltalk.addClass('EcCanvasLayer', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ParallelAction();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcCanvasLayer.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.ParallelAction()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCanvasLayer.klass);


smalltalk.addClass('EcClass', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetInheritanceTree:",
category: 'instance creation',
fn: function (aConstructor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return enchant.Class.getInheritanceTree(aConstructor);
return self}, function($ctx1) {$ctx1.fill(self,"basicGetInheritanceTree:",{aConstructor:aConstructor},smalltalk.EcClass.klass)})},
args: ["aConstructor"],
source: "basicGetInheritanceTree: aConstructor \x0a\x09<return enchant.Class.getInheritanceTree(aConstructor)>\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getInheritanceTreeOf:",
category: 'instance creation',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicGetInheritanceTree_(_st(anEntity)._getConstructor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getInheritanceTreeOf:",{anEntity:anEntity},smalltalk.EcClass.klass)})},
args: ["anEntity"],
source: "getInheritanceTreeOf: anEntity\x0a\x09^self basicGetInheritanceTree: anEntity getConstructor",
messageSends: ["basicGetInheritanceTree:", "getConstructor"],
referencedClasses: []
}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoSuperclass:definition:",
category: 'instance creation',
fn: function (aClass,definition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Class(aClass, definition);
return self}, function($ctx1) {$ctx1.fill(self,"protoSuperclass:definition:",{aClass:aClass,definition:definition},smalltalk.EcClass.klass)})},
args: ["aClass", "definition"],
source: "protoSuperclass: aClass definition: definition\x0a\x09<return new enchant.Class(aClass, definition)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:definition:",
category: 'instance creation',
fn: function (aClass,definition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSuperclass_definition_(aClass,definition));
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:definition:",{aClass:aClass,definition:definition},smalltalk.EcClass.klass)})},
args: ["aClass", "definition"],
source: "superclass: aClass definition: definition\x0a\x09^ self protoProxy: (self protoSuperclass: aClass definition: definition)",
messageSends: ["protoProxy:", "protoSuperclass:definition:"],
referencedClasses: []
}),
smalltalk.EcClass.klass);


smalltalk.addClass('EcDOMSound', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "currentTime",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['currentTime'];
return self}, function($ctx1) {$ctx1.fill(self,"currentTime",{},smalltalk.EcDOMSound)})},
args: [],
source: "currentTime\x0a\x09<return self['@jsObject']['currentTime']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "currentTime:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['currentTime']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"currentTime:",{arg:arg},smalltalk.EcDOMSound)})},
args: ["arg"],
source: "currentTime: arg\x0a\x09<return self['@jsObject']['currentTime']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "duration",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['duration'];
return self}, function($ctx1) {$ctx1.fill(self,"duration",{},smalltalk.EcDOMSound)})},
args: [],
source: "duration\x0a\x09<return self['@jsObject']['duration']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "duration:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['duration']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"duration:",{arg:arg},smalltalk.EcDOMSound)})},
args: ["arg"],
source: "duration: arg\x0a\x09<return self['@jsObject']['duration']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "volume",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['volume'];
return self}, function($ctx1) {$ctx1.fill(self,"volume",{},smalltalk.EcDOMSound)})},
args: [],
source: "volume\x0a\x09<return self['@jsObject']['volume']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);

smalltalk.addMethod(
smalltalk.method({
selector: "volume:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['volume']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"volume:",{arg:arg},smalltalk.EcDOMSound)})},
args: ["arg"],
source: "volume: arg\x0a\x09<return self['@jsObject']['volume']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.DomSound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcDOMSound.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.DomSound()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcDOMSound.klass);


smalltalk.addClass('EcEasing', smalltalk.EcProxy, [], 'Enchant-Core');


smalltalk.addClass('EcEnv', smalltalk.EcProxy, [], 'Enchant-Core');


smalltalk.addClass('EcEvent', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "localX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localX'];
return self}, function($ctx1) {$ctx1.fill(self,"localX",{},smalltalk.EcEvent)})},
args: [],
source: "localX\x0a\x09<return self['@jsObject']['localX']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localX:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"localX:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "localX: arg\x0a\x09<return self['@jsObject']['localX']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localY'];
return self}, function($ctx1) {$ctx1.fill(self,"localY",{},smalltalk.EcEvent)})},
args: [],
source: "localY\x0a\x09<return self['@jsObject']['localY']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "localY:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['localY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"localY:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "localY: arg\x0a\x09<return self['@jsObject']['localY']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "target",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['target'];
return self}, function($ctx1) {$ctx1.fill(self,"target",{},smalltalk.EcEvent)})},
args: [],
source: "target\x0a\x09<return self['@jsObject']['target']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['target']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"target:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "target: arg\x0a\x09<return self['@jsObject']['target']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['type'];
return self}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.EcEvent)})},
args: [],
source: "type\x0a\x09<return self['@jsObject']['type']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['type']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "type: arg\x0a\x09<return self['@jsObject']['type']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x'];
return self}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.EcEvent)})},
args: [],
source: "x\x0a\x09<return self['@jsObject']['x']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "x: arg\x0a\x09<return self['@jsObject']['x']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y'];
return self}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.EcEvent)})},
args: [],
source: "y\x0a\x09<return self['@jsObject']['y']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{arg:arg},smalltalk.EcEvent)})},
args: ["arg"],
source: "y: arg\x0a\x09<return self['@jsObject']['y']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEvent);



smalltalk.addClass('EcEventTarget', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.EcEventTarget.comment="[js API link](http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.EventTarget.html)"

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.EventTarget();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcEventTarget.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.EventTarget()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEventTarget.klass);


smalltalk.addClass('EcActionEventTarget', smalltalk.EcEventTarget, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.ActionEventTarget();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcActionEventTarget.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.ActionEventTarget()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcActionEventTarget.klass);


smalltalk.addClass('EcCore', smalltalk.EcEventTarget, ['assetsBasePath'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "assetAt:",
category: 'accessing',
fn: function (fileName){
var self=this;
var assetKey;
return smalltalk.withContext(function($ctx1) { 
var $1;
assetKey=_st(_st(self)._assetsBasePath()).__comma(fileName);
$1=_st(_st(self)._assets())._at_(assetKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"assetAt:",{fileName:fileName,assetKey:assetKey},smalltalk.EcCore)})},
args: ["fileName"],
source: "assetAt: fileName\x0a\x09| assetKey |\x0a\x09assetKey := self assetsBasePath, fileName.\x0a\x09^self assets at: assetKey",
messageSends: [",", "assetsBasePath", "at:", "assets"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assets",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['assets'];
return self}, function($ctx1) {$ctx1.fill(self,"assets",{},smalltalk.EcCore)})},
args: [],
source: "assets\x0a\x09<return self['@jsObject']['assets']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assets:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['assets']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"assets:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "assets: arg\x0a\x09<return self['@jsObject']['assets']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assetsBasePath",
category: 'accessing',
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
args: [],
source: "assetsBasePath\x0a\x09^assetsBasePath ifNil: [assetsBasePath := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "assetsBasePath:",
category: 'accessing',
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
args: ["aString"],
source: "assetsBasePath: aString\x0a\x09| str |\x0a\x09aString ifNil: [^ assetsBasePath := nil].\x0a\x09str := aString.\x0a\x09(str notEmpty and: [str last ~= '/']) ifTrue: [str := str, '/'].\x0a\x09assetsBasePath := str",
messageSends: ["ifNil:", "ifTrue:", ",", "and:", "~=", "last", "notEmpty"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "basicLoadingScene:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['loadingScene']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"basicLoadingScene:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "basicLoadingScene: arg\x0a\x09<return self['@jsObject']['loadingScene']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "currentScene",
category: 'accessing',
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("currentScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentScene",{},smalltalk.EcCore)})},
args: [],
source: "currentScene\x0a\x09^ EcScene protoProxy: (self at: #currentScene)",
messageSends: ["protoProxy:", "at:"],
referencedClasses: ["EcScene"]
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._width()).__at(_st(self)._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.EcCore)})},
args: [],
source: "extent\x0a\x09^self width @ self height",
messageSends: ["@", "height", "width"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._width_(_st(aPoint)._x());
_st(self)._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcCore)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09self width: aPoint x.\x0a\x09self height: aPoint y",
messageSends: ["width:", "x", "height:", "y"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "fps",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['fps'];
return self}, function($ctx1) {$ctx1.fill(self,"fps",{},smalltalk.EcCore)})},
args: [],
source: "fps\x0a\x09<return self['@jsObject']['fps']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "fps:",
category: 'accessing',
fn: function (fps){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['fps'] = fps;
return self}, function($ctx1) {$ctx1.fill(self,"fps:",{fps:fps},smalltalk.EcCore)})},
args: ["fps"],
source: "fps: fps\x0a\x09<return self['@jsObject']['fps'] = fps>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcCore)})},
args: [],
source: "height\x0a\x09<return self['@jsObject']['height']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "height: arg\x0a\x09<return self['@jsObject']['height']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['input'];
return self}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.EcCore)})},
args: [],
source: "input\x0a\x09<return self['@jsObject']['input']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['input']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"input:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "input: arg\x0a\x09<return self['@jsObject']['input']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingScene",
category: 'accessing',
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("loadingScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadingScene",{},smalltalk.EcCore)})},
args: [],
source: "loadingScene\x0a\x09^ EcScene protoProxy: (self at: #loadingScene)",
messageSends: ["protoProxy:", "at:"],
referencedClasses: ["EcScene"]
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onBButtonDown: eventBlock\x0a\x09self on: 'bbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onBButtonUp: eventBlock\x0a\x09self on: 'bbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onCoreResize:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("coreresize",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onCoreResize:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onCoreResize: eventBlock\x0a\x09self on: 'coreresize' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onDownButtonDown: eventBlock\x0a\x09self on: 'downbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onDownButtonUp: eventBlock\x0a\x09self on: 'downbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onEnterFrame:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("enterframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterFrame:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onEnterFrame: eventBlock\x0a\x09self on: 'enterframe' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onError: eventBlock\x0a\x09self on: 'error' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onExitFrame:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("exitframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onExitFrame:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onExitFrame: eventBlock\x0a\x09self on: 'exitframe' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputChange:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputchange",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputChange:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onInputChange: eventBlock\x0a\x09self on: 'inputchange' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputEnd:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputend",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputEnd:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onInputEnd: eventBlock\x0a\x09self on: 'inputend' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onInputStart:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("inputstart",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onInputStart:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onInputStart: eventBlock\x0a\x09self on: 'inputstart' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onLeftButtonDown: eventBlock\x0a\x09self on: 'leftbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onLeftButtonUp: eventBlock\x0a\x09self on: 'leftbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoaded",
category: 'callback',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onLoaded",{},smalltalk.EcCore)})},
args: [],
source: "onLoaded\x0a\x09\x22override - implement game here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onRightButtonDown: eventBlock\x0a\x09self on: 'rightbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onRightButtonUp: eventBlock\x0a\x09self on: 'rightbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonDown:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onUpButtonDown: eventBlock\x0a\x09self on: 'upbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonUp:",{eventBlock:eventBlock},smalltalk.EcCore)})},
args: ["eventBlock"],
source: "onUpButtonUp: eventBlock\x0a\x09self on: 'upbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadAssets:",
category: 'actions',
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
args: ["fileNames"],
source: "preloadAssets: fileNames\x0a\x09| fnames |\x0a\x09fnames := fileNames collect: [:each | self assetsBasePath, each].\x0a\x09self preload: fnames",
messageSends: ["collect:", ",", "assetsBasePath", "preload:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareAttributes",
category: 'preparing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prepareAttributes",{},smalltalk.EcCore)})},
args: [],
source: "prepareAttributes\x0a\x09\x22override - preload assets, set fps, etc\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareOnLoad",
category: 'preparing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._onload_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onLoaded();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prepareOnLoad",{},smalltalk.EcCore)})},
args: [],
source: "prepareOnLoad\x0a\x09self onload: [ self onLoaded]",
messageSends: ["onload:", "onLoaded"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareStart",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._prepareAttributes();
_st(self)._prepareOnLoad();
return self}, function($ctx1) {$ctx1.fill(self,"prepareStart",{},smalltalk.EcCore)})},
args: [],
source: "prepareStart\x0a\x09self prepareAttributes.\x0a\x09self prepareOnLoad",
messageSends: ["prepareAttributes", "prepareOnLoad"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "ready",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['ready'];
return self}, function($ctx1) {$ctx1.fill(self,"ready",{},smalltalk.EcCore)})},
args: [],
source: "ready\x0a\x09<return self['@jsObject']['ready']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "ready:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['ready']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"ready:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "ready: arg\x0a\x09<return self['@jsObject']['ready']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "rootScene",
category: 'accessing',
fn: function (){
var self=this;
function $EcScene(){return smalltalk.EcScene||(typeof EcScene=="undefined"?nil:EcScene)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcScene())._protoProxy_(_st(self)._at_("rootScene"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootScene",{},smalltalk.EcCore)})},
args: [],
source: "rootScene\x0a\x09^ EcScene protoProxy: (self at: #rootScene)",
messageSends: ["protoProxy:", "at:"],
referencedClasses: ["EcScene"]
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "running",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['running'];
return self}, function($ctx1) {$ctx1.fill(self,"running",{},smalltalk.EcCore)})},
args: [],
source: "running\x0a\x09<return self['@jsObject']['running']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "running:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['running']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"running:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "running: arg\x0a\x09<return self['@jsObject']['running']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scale'];
return self}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.EcCore)})},
args: [],
source: "scale\x0a\x09<return self['@jsObject']['scale']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scale']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "scale: arg\x0a\x09<return self['@jsObject']['scale']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "setOnLoad:",
category: 'actions',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_("onload",block);
return self}, function($ctx1) {$ctx1.fill(self,"setOnLoad:",{block:block},smalltalk.EcCore)})},
args: ["block"],
source: "setOnLoad: block\x0a\x09self at: #onload put: block",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcCore)})},
args: [],
source: "width\x0a\x09<return self['@jsObject']['width']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcCore)})},
args: ["arg"],
source: "width: arg\x0a\x09<return self['@jsObject']['width']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore);


smalltalk.EcCore.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@current"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.EcCore.klass)})},
args: [],
source: "current\x0a\x09^current",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current:",
category: 'accessing',
fn: function (anEcCore){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anEcCore;
return self}, function($ctx1) {$ctx1.fill(self,"current:",{anEcCore:anEcCore},smalltalk.EcCore.klass)})},
args: ["anEcCore"],
source: "current: anEcCore\x0a\x09current := anEcCore",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcCore.klass)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^self width: aPoint x height: aPoint y",
messageSends: ["width:height:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
category: 'instance creation',
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
args: ["jsProxy"],
source: "protoProxy: jsProxy\x0a\x09| inst |\x0a\x09inst := super protoProxy: jsProxy.\x0a\x09current := inst.\x0a\x09^inst",
messageSends: ["protoProxy:"],
referencedClasses: []
}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
category: 'instance creation',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Core(x, y);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{x:x,y:y},smalltalk.EcCore.klass)})},
args: ["x", "y"],
source: "protoWidth: x height: y\x0a\x09<return new enchant.Core(x, y)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcCore.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
category: 'instance creation',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(x,y));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{x:x,y:y},smalltalk.EcCore.klass)})},
args: ["x", "y"],
source: "width: x height: y\x0a\x09^self protoProxy: (self protoWidth: x height: y)",
messageSends: ["protoProxy:", "protoWidth:height:"],
referencedClasses: []
}),
smalltalk.EcCore.klass);


smalltalk.addClass('EcNode', smalltalk.EcEventTarget, ['parent'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "age",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['age'];
return self}, function($ctx1) {$ctx1.fill(self,"age",{},smalltalk.EcNode)})},
args: [],
source: "age\x0a\x09<return self['@jsObject']['age']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "age:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['age']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"age:",{arg:arg},smalltalk.EcNode)})},
args: ["arg"],
source: "age: arg\x0a\x09<return self['@jsObject']['age']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTl",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tl'];
return self}, function($ctx1) {$ctx1.fill(self,"basicTl",{},smalltalk.EcNode)})},
args: [],
source: "basicTl\x0a\x09<return self['@jsObject']['tl']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:",
category: 'actions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:",{aPoint:aPoint},smalltalk.EcNode)})},
args: ["aPoint"],
source: "moveBy: aPoint\x0a\x09^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'actions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.EcNode)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onAdded:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("added",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAdded:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onAdded: eventBlock\x0a\x09self on: 'added' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onAddedToScene:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("addedtoscene",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAddedToScene:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onAddedToScene: eventBlock\x0a\x09self on: 'addedtoscene' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onEnterFrame:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("enterframe",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterFrame:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onEnterFrame: eventBlock\x0a\x09self on: 'enterframe' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onRemoved:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("removed",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRemoved:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onRemoved: eventBlock\x0a\x09self on: 'removed' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onRemovedFromScene:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("removedfromscene",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRemovedFromScene:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onRemovedFromScene: eventBlock\x0a\x09self on: 'removedfromscene' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchEnd:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchendt",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchEnd:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onTouchEnd: eventBlock\x0a\x09self on: 'touchendt' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchMove:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchmove",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchMove:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onTouchMove: eventBlock\x0a\x09self on: 'touchmove' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "onTouchStart:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("touchstart",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onTouchStart:",{eventBlock:eventBlock},smalltalk.EcNode)})},
args: ["eventBlock"],
source: "onTouchStart: eventBlock\x0a\x09self on: 'touchstart' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.EcNode)})},
args: [],
source: "parent\x0a\x09^parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aNode:aNode},smalltalk.EcNode)})},
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "tl",
category: 'accessing',
fn: function (){
var self=this;
function $EcTimeline(){return smalltalk.EcTimeline||(typeof EcTimeline=="undefined"?nil:EcTimeline)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($EcTimeline())._protoProxy_(_st(self)._basicTl());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tl",{},smalltalk.EcNode)})},
args: [],
source: "tl\x0a\x09^ EcTimeline protoProxy: (self basicTl)",
messageSends: ["protoProxy:", "basicTl"],
referencedClasses: ["EcTimeline"]
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x'];
return self}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.EcNode)})},
args: [],
source: "x\x0a\x09<return self['@jsObject']['x']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['x']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{arg:arg},smalltalk.EcNode)})},
args: ["arg"],
source: "x: arg\x0a\x09<return self['@jsObject']['x']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y'];
return self}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.EcNode)})},
args: [],
source: "y\x0a\x09<return self['@jsObject']['y']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['y']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{arg:arg},smalltalk.EcNode)})},
args: ["arg"],
source: "y: arg\x0a\x09<return self['@jsObject']['y']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcNode);



smalltalk.addClass('EcEntity', smalltalk.EcNode, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor'];
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.EcEntity)})},
args: [],
source: "backgroundColor\x0a\x09<return self['@jsObject']['backgroundColor']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "backgroundColor: arg\x0a\x09<return self['@jsObject']['backgroundColor']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "basicConstructor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['constructor'];
return self}, function($ctx1) {$ctx1.fill(self,"basicConstructor",{},smalltalk.EcEntity)})},
args: [],
source: "basicConstructor\x0a\x09<return self['@jsObject']['constructor']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "basicIntersectAnyInstanceOf:",
category: 'testing',
fn: function (otherConstructor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']._staticIntersect(otherConstructor);
return self}, function($ctx1) {$ctx1.fill(self,"basicIntersectAnyInstanceOf:",{otherConstructor:otherConstructor},smalltalk.EcEntity)})},
args: ["otherConstructor"],
source: "basicIntersectAnyInstanceOf: otherConstructor\x0a\x09<return self['@jsObject']._staticIntersect(otherConstructor)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonMode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonMode'];
return self}, function($ctx1) {$ctx1.fill(self,"buttonMode",{},smalltalk.EcEntity)})},
args: [],
source: "buttonMode\x0a\x09<return self['@jsObject']['buttonMode']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonMode:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonMode']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"buttonMode:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "buttonMode: arg\x0a\x09<return self['@jsObject']['buttonMode']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonPressed'];
return self}, function($ctx1) {$ctx1.fill(self,"buttonPressed",{},smalltalk.EcEntity)})},
args: [],
source: "buttonPressed\x0a\x09<return self['@jsObject']['buttonPressed']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonPressed:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['buttonPressed']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"buttonPressed:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "buttonPressed: arg\x0a\x09<return self['@jsObject']['buttonPressed']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "collide:within:",
category: 'testing',
fn: function (other,distance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("within",[other,distance]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collide:within:",{other:other,distance:distance},smalltalk.EcEntity)})},
args: ["other", "distance"],
source: "collide: other within: distance\x0a\x09^ self forwardMessage: 'within' withArguments: {other. distance}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeOperation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['compositeOperation'];
return self}, function($ctx1) {$ctx1.fill(self,"compositeOperation",{},smalltalk.EcEntity)})},
args: [],
source: "compositeOperation\x0a\x09<return self['@jsObject']['compositeOperation']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeOperation:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['compositeOperation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"compositeOperation:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "compositeOperation: arg\x0a\x09<return self['@jsObject']['compositeOperation']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcEntity)})},
args: [],
source: "height\x0a\x09<return self['@jsObject']['height']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "height: arg\x0a\x09<return self['@jsObject']['height']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:",
category: 'testing',
fn: function (other){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("intersect",[_st(other)._jsObject()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersect:",{other:other},smalltalk.EcEntity)})},
args: ["other"],
source: "intersect: other\x0a\x09^ self forwardMessage: 'intersect' withArguments: {other jsObject}",
messageSends: ["forwardMessage:withArguments:", "jsObject"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyInstanceOf:",
category: 'actions',
fn: function (otherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicIntersectAnyInstanceOf_(_st(otherClass)._getConstructor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersectAnyInstanceOf:",{otherClass:otherClass},smalltalk.EcEntity)})},
args: ["otherClass"],
source: "intersectAnyInstanceOf: otherClass\x0a\x09^ self basicIntersectAnyInstanceOf: otherClass getConstructor",
messageSends: ["basicIntersectAnyInstanceOf:", "getConstructor"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyOf:",
category: 'testing',
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
args: ["otherEntityCollection"],
source: "intersectAnyOf: otherEntityCollection\x0a\x09^ otherEntityCollection anySatisfy: [:each | each intersect: self]",
messageSends: ["anySatisfy:", "intersect:"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectAnyOf:ifTrue:",
category: 'testing',
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
args: ["otherEntityCollection", "intersectedBlock"],
source: "intersectAnyOf: otherEntityCollection ifTrue: intersectedBlock\x0a\x09otherEntityCollection do: [:each |\x0a\x09\x09(each intersect: self) ifTrue: [^intersectedBlock value: each]\x0a\x09]",
messageSends: ["do:", "ifTrue:", "value:", "intersect:"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "opacity",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['opacity'];
return self}, function($ctx1) {$ctx1.fill(self,"opacity",{},smalltalk.EcEntity)})},
args: [],
source: "opacity\x0a\x09<return self['@jsObject']['opacity']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "opacity:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['opacity']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"opacity:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "opacity: arg\x0a\x09<return self['@jsObject']['opacity']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX'];
return self}, function($ctx1) {$ctx1.fill(self,"originX",{},smalltalk.EcEntity)})},
args: [],
source: "originX\x0a\x09<return self['@jsObject']['originX']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originX:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originX:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "originX: arg\x0a\x09<return self['@jsObject']['originX']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY'];
return self}, function($ctx1) {$ctx1.fill(self,"originY",{},smalltalk.EcEntity)})},
args: [],
source: "originY\x0a\x09<return self['@jsObject']['originY']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "originY:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originY:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "originY: arg\x0a\x09<return self['@jsObject']['originY']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.EcEntity)})},
args: [],
source: "parent\x0a\x09^parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (aScene){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aScene;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aScene:aScene},smalltalk.EcEntity)})},
args: ["aScene"],
source: "parent: aScene\x0a\x09parent := aScene",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotate:",
category: 'actions',
fn: function (deg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotate",[deg]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotate:",{deg:deg},smalltalk.EcEntity)})},
args: ["deg"],
source: "rotate: deg\x0a\x09^ self forwardMessage: 'rotate' withArguments: {deg}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation'];
return self}, function($ctx1) {$ctx1.fill(self,"rotation",{},smalltalk.EcEntity)})},
args: [],
source: "rotation\x0a\x09<return self['@jsObject']['rotation']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"rotation:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "rotation: arg\x0a\x09<return self['@jsObject']['rotation']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'actions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scale",[_st(aPoint)._x(),_st(aPoint)._y()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale:",{aPoint:aPoint},smalltalk.EcEntity)})},
args: ["aPoint"],
source: "scale: aPoint\x0a\x09^ self forwardMessage: 'scale' withArguments: {aPoint x. aPoint y}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleX",{},smalltalk.EcEntity)})},
args: [],
source: "scaleX\x0a\x09<return self['@jsObject']['scaleX']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "scaleX: arg\x0a\x09<return self['@jsObject']['scaleX']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleY",{},smalltalk.EcEntity)})},
args: [],
source: "scaleY\x0a\x09<return self['@jsObject']['scaleY']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleY:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "scaleY: arg\x0a\x09<return self['@jsObject']['scaleY']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "touchEnabled",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['touchEnabled'];
return self}, function($ctx1) {$ctx1.fill(self,"touchEnabled",{},smalltalk.EcEntity)})},
args: [],
source: "touchEnabled\x0a\x09<return self['@jsObject']['touchEnabled']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "touchEnabled:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['touchEnabled']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"touchEnabled:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "touchEnabled: arg\x0a\x09<return self['@jsObject']['touchEnabled']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "visible",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['visible'];
return self}, function($ctx1) {$ctx1.fill(self,"visible",{},smalltalk.EcEntity)})},
args: [],
source: "visible\x0a\x09<return self['@jsObject']['visible']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "visible:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['visible']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"visible:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "visible: arg\x0a\x09<return self['@jsObject']['visible']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcEntity)})},
args: [],
source: "width\x0a\x09<return self['@jsObject']['width']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcEntity)})},
args: ["arg"],
source: "width: arg\x0a\x09<return self['@jsObject']['width']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcEntity);


smalltalk.addMethod(
smalltalk.method({
selector: "getConstructor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._protoNew())._getConstructor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getConstructor",{},smalltalk.EcEntity.klass)})},
args: [],
source: "getConstructor\x0a\x09^self protoNew getConstructor",
messageSends: ["getConstructor", "protoNew"],
referencedClasses: []
}),
smalltalk.EcEntity.klass);


smalltalk.addClass('EcLabel', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['color'];
return self}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.EcLabel)})},
args: [],
source: "color\x0a\x09<return self['@jsObject']['color']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['color']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{arg:arg},smalltalk.EcLabel)})},
args: ["arg"],
source: "color: arg\x0a\x09<return self['@jsObject']['color']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "font",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['font'];
return self}, function($ctx1) {$ctx1.fill(self,"font",{},smalltalk.EcLabel)})},
args: [],
source: "font\x0a\x09<return self['@jsObject']['font']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['font']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"font:",{arg:arg},smalltalk.EcLabel)})},
args: ["arg"],
source: "font: arg\x0a\x09<return self['@jsObject']['font']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return st.callJavaScriptMethod(self, 'text');
return self}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.EcLabel)})},
args: [],
source: "text\x0a\x09<return st.callJavaScriptMethod(self, 'text')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['text']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{arg:arg},smalltalk.EcLabel)})},
args: ["arg"],
source: "text: arg\x0a\x09<return self['@jsObject']['text']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['textAlign'];
return self}, function($ctx1) {$ctx1.fill(self,"textAlign",{},smalltalk.EcLabel)})},
args: [],
source: "textAlign\x0a\x09<return self['@jsObject']['textAlign']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['textAlign']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{arg:arg},smalltalk.EcLabel)})},
args: ["arg"],
source: "textAlign: arg\x0a\x09<return self['@jsObject']['textAlign']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Label();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcLabel.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Label()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcLabel.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'instance creation',
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
args: ["aString"],
source: "text: aString\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst text: aString.\x0a\x09^inst",
messageSends: ["new", "text:"],
referencedClasses: []
}),
smalltalk.EcLabel.klass);


smalltalk.addClass('EcMap', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "collisionData",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['collisionData'];
return self}, function($ctx1) {$ctx1.fill(self,"collisionData",{},smalltalk.EcMap)})},
args: [],
source: "collisionData\x0a\x09<return self['@jsObject']['collisionData']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "collisionData:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['collisionData']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"collisionData:",{arg:arg},smalltalk.EcMap)})},
args: ["arg"],
source: "collisionData: arg\x0a\x09<return self['@jsObject']['collisionData']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'];
return self}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.EcMap)})},
args: [],
source: "image\x0a\x09<return self['@jsObject']['image']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{arg:arg},smalltalk.EcMap)})},
args: ["arg"],
source: "image: arg\x0a\x09<return self['@jsObject']['image']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileHeight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileHeight'];
return self}, function($ctx1) {$ctx1.fill(self,"tileHeight",{},smalltalk.EcMap)})},
args: [],
source: "tileHeight\x0a\x09<return self['@jsObject']['tileHeight']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileHeight:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileHeight']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"tileHeight:",{arg:arg},smalltalk.EcMap)})},
args: ["arg"],
source: "tileHeight: arg\x0a\x09<return self['@jsObject']['tileHeight']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileWidth'];
return self}, function($ctx1) {$ctx1.fill(self,"tileWidth",{},smalltalk.EcMap)})},
args: [],
source: "tileWidth\x0a\x09<return self['@jsObject']['tileWidth']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['tileWidth']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"tileWidth:",{arg:arg},smalltalk.EcMap)})},
args: ["arg"],
source: "tileWidth: arg\x0a\x09<return self['@jsObject']['tileWidth']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Map();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcMap.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Map()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoTileWidth:tileHeight:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Map(width. height);
return self}, function($ctx1) {$ctx1.fill(self,"protoTileWidth:tileHeight:",{width:width,height:height},smalltalk.EcMap.klass)})},
args: ["width", "height"],
source: "protoTileWidth: width tileHeight: height\x0a\x09<return new enchant.Map(width. height)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcMap.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWidth:tileHeight:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoTileWidth_tileHeight_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileWidth:tileHeight:",{width:width,height:height},smalltalk.EcMap.klass)})},
args: ["width", "height"],
source: "tileWidth: width tileHeight: height\x0a\x09^ self protoProxy: (self protoTileWidth: width tileHeight: height)",
messageSends: ["protoProxy:", "protoTileWidth:tileHeight:"],
referencedClasses: []
}),
smalltalk.EcMap.klass);


smalltalk.addClass('EcSprite', smalltalk.EcEntity, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._width()).__at(_st(self)._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.EcSprite)})},
args: [],
source: "extent\x0a\x09^self width @ self height",
messageSends: ["@", "height", "width"],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._width_(_st(aPoint)._x());
_st(self)._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcSprite)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09self width: aPoint x.\x0a\x09self height: aPoint y",
messageSends: ["width:", "x", "height:", "y"],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "frame",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['frame'];
return self}, function($ctx1) {$ctx1.fill(self,"frame",{},smalltalk.EcSprite)})},
args: [],
source: "frame\x0a\x09<return self['@jsObject']['frame']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "frame:",
category: 'accessing',
fn: function (frameArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['frame'] = frameArg;
return self}, function($ctx1) {$ctx1.fill(self,"frame:",{frameArg:frameArg},smalltalk.EcSprite)})},
args: ["frameArg"],
source: "frame: frameArg\x0a\x09<return self['@jsObject']['frame'] = frameArg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcSprite)})},
args: [],
source: "height\x0a\x09<return self['@jsObject']['height']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcSprite)})},
args: ["arg"],
source: "height: arg\x0a\x09<return self['@jsObject']['height']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'];
return self}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.EcSprite)})},
args: [],
source: "image\x0a\x09<return self['@jsObject']['image']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['image'] = anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.EcSprite)})},
args: ["anImage"],
source: "image: anImage\x0a\x09<return self['@jsObject']['image'] = anImage>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "imageName:",
category: 'accessing',
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
args: ["imageName"],
source: "imageName: imageName\x0a\x09| core |\x0a\x09core := EcCore current.\x0a\x09core ifNil: [^self].\x0a\x09self image: (core assetAt: imageName) ",
messageSends: ["current", "ifNil:", "image:", "assetAt:"],
referencedClasses: ["EcCore"]
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcSprite)})},
args: [],
source: "width\x0a\x09<return self['@jsObject']['width']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcSprite)})},
args: ["arg"],
source: "width: arg\x0a\x09<return self['@jsObject']['width']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.EcSprite.klass)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^self width: aPoint x height: aPoint y",
messageSends: ["width:height:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._width_height_((1),(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.EcSprite.klass)})},
args: [],
source: "new\x0a\x09^self width: 1 height: 1",
messageSends: ["width:height:"],
referencedClasses: []
}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sprite();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcSprite.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Sprite()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sprite(width, height);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{width:width,height:height},smalltalk.EcSprite.klass)})},
args: ["width", "height"],
source: "protoWidth: width height: height\x0a\x09<return new enchant.Sprite(width, height)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSprite.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{width:width,height:height},smalltalk.EcSprite.klass)})},
args: ["width", "height"],
source: "width: width height: height\x0a\x09^ self protoProxy: (self protoWidth: width height: height)",
messageSends: ["protoProxy:", "protoWidth:height:"],
referencedClasses: []
}),
smalltalk.EcSprite.klass);


smalltalk.addClass('EcGroup', smalltalk.EcNode, ['children'], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor'];
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.EcGroup)})},
args: [],
source: "backgroundColor\x0a\x09<return self['@jsObject']['backgroundColor']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['backgroundColor']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "backgroundColor: arg\x0a\x09<return self['@jsObject']['backgroundColor']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "childNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['childNodes'];
return self}, function($ctx1) {$ctx1.fill(self,"childNodes",{},smalltalk.EcGroup)})},
args: [],
source: "childNodes\x0a\x09<return self['@jsObject']['childNodes']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
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
args: [],
source: "children\x0a\x09^children ifNil: [children := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "children:",
category: 'accessing',
fn: function (anOrderedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=anOrderedCollection;
return self}, function($ctx1) {$ctx1.fill(self,"children:",{anOrderedCollection:anOrderedCollection},smalltalk.EcGroup)})},
args: ["anOrderedCollection"],
source: "children: anOrderedCollection\x0a\x09children := anOrderedCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "firstChild",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstChild",{},smalltalk.EcGroup)})},
args: [],
source: "firstChild\x0a\x09^self children first",
messageSends: ["first", "children"],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "initChildren",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@children"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initChildren",{},smalltalk.EcGroup)})},
args: [],
source: "initChildren\x0a\x09children := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "lastChild",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastChild",{},smalltalk.EcGroup)})},
args: [],
source: "lastChild\x0a\x09^self children last",
messageSends: ["last", "children"],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX'];
return self}, function($ctx1) {$ctx1.fill(self,"originX",{},smalltalk.EcGroup)})},
args: [],
source: "originX\x0a\x09<return self['@jsObject']['originX']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originX:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originX:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "originX: arg\x0a\x09<return self['@jsObject']['originX']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY'];
return self}, function($ctx1) {$ctx1.fill(self,"originY",{},smalltalk.EcGroup)})},
args: [],
source: "originY\x0a\x09<return self['@jsObject']['originY']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "originY:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['originY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"originY:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "originY: arg\x0a\x09<return self['@jsObject']['originY']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation'];
return self}, function($ctx1) {$ctx1.fill(self,"rotation",{},smalltalk.EcGroup)})},
args: [],
source: "rotation\x0a\x09<return self['@jsObject']['rotation']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['rotation']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"rotation:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "rotation: arg\x0a\x09<return self['@jsObject']['rotation']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleX",{},smalltalk.EcGroup)})},
args: [],
source: "scaleX\x0a\x09<return self['@jsObject']['scaleX']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleX']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "scaleX: arg\x0a\x09<return self['@jsObject']['scaleX']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY'];
return self}, function($ctx1) {$ctx1.fill(self,"scaleY",{},smalltalk.EcGroup)})},
args: [],
source: "scaleY\x0a\x09<return self['@jsObject']['scaleY']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleY:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['scaleY']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"scaleY:",{arg:arg},smalltalk.EcGroup)})},
args: ["arg"],
source: "scaleY: arg\x0a\x09<return self['@jsObject']['scaleY']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Group();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcGroup.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Group()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcGroup.klass);


smalltalk.addClass('EcScene', smalltalk.EcGroup, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'actions',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._add_(_st(aNode)._parent_(self));
_st(self)._addChild_(_st(aNode)._jsObject());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aNode:aNode},smalltalk.EcScene)})},
args: ["aNode"],
source: "add: aNode\x0a\x09self children add: (aNode parent: self).\x0a\x09self addChild: aNode jsObject",
messageSends: ["add:", "parent:", "children", "addChild:", "jsObject"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:",
category: 'actions',
fn: function (text){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,nil,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:",{text:text},smalltalk.EcScene)})},
args: ["text"],
source: "addLabel: text \x0a\x09^self addLabel: text  color: nil font: nil align: nil",
messageSends: ["addLabel:color:font:align:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:",
category: 'actions',
fn: function (text,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,color,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:color:",{text:text,color:color},smalltalk.EcScene)})},
args: ["text", "color"],
source: "addLabel: text  color: color\x0a\x09^self addLabel: text  color: color font: nil align: nil",
messageSends: ["addLabel:color:font:align:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:font:",
category: 'actions',
fn: function (text,color,font){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addLabel_color_font_align_(text,color,font,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addLabel:color:font:",{text:text,color:color,font:font},smalltalk.EcScene)})},
args: ["text", "color", "font"],
source: "addLabel: text  color: color font: font\x0a\x09^self addLabel: text  color: color font: font align: nil",
messageSends: ["addLabel:color:font:align:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addLabel:color:font:align:",
category: 'actions',
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
args: ["text", "color", "font", "align"],
source: "addLabel: text  color: color font: font align: align\x0a\x09| label |\x0a\x09label := EcLabel text: text asString.\x0a\x09color ifNotNil: [label color: color].\x0a\x09font ifNotNil: [label font: font].\x0a\x09align ifNotNil: [label align: align].\x0a\x09self add: label.\x0a\x09^label",
messageSends: ["text:", "asString", "ifNotNil:", "color:", "font:", "align:", "add:"],
referencedClasses: ["EcLabel"]
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:image:frame:",
category: 'actions',
fn: function (extentPoint,anImage,frame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSprite_image_frame_at_(extentPoint,anImage,frame,_st((0)).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:image:frame:",{extentPoint:extentPoint,anImage:anImage,frame:frame},smalltalk.EcScene)})},
args: ["extentPoint", "anImage", "frame"],
source: "addSprite: extentPoint  image: anImage frame: frame\x0a\x09^self addSprite: extentPoint  image: anImage frame: frame  at: 0@0",
messageSends: ["addSprite:image:frame:at:", "@"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:image:frame:at:",
category: 'actions',
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
args: ["extentPoint", "anImage", "frame", "initialPoint"],
source: "addSprite: extentPoint  image: anImage frame: frame  at: initialPoint\x0a\x09| sprite |\x0a\x09sprite := EcSprite extent: extentPoint.\x0a\x09sprite image: anImage.\x0a\x09sprite frame: frame.\x0a\x09sprite x: initialPoint x.\x0a\x09sprite y: initialPoint y.\x0a\x09self add: sprite.\x0a\x09^sprite\x0a\x09",
messageSends: ["extent:", "image:", "frame:", "x:", "x", "y:", "y", "add:"],
referencedClasses: ["EcSprite"]
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:imageName:frame:",
category: 'actions',
fn: function (extentPoint,imageName,frame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSprite_imageName_frame_at_(extentPoint,imageName,frame,_st((0)).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSprite:imageName:frame:",{extentPoint:extentPoint,imageName:imageName,frame:frame},smalltalk.EcScene)})},
args: ["extentPoint", "imageName", "frame"],
source: "addSprite: extentPoint  imageName: imageName frame: frame\x0a\x09^self addSprite: extentPoint  imageName: imageName frame: frame at: 0@0",
messageSends: ["addSprite:imageName:frame:at:", "@"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "addSprite:imageName:frame:at:",
category: 'actions',
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
args: ["extentPoint", "imageName", "frame", "initialPoint"],
source: "addSprite: extentPoint  imageName: imageName frame: frame  at: initialPoint\x0a\x09| image |\x0a\x09image := EcCore current assetAt: imageName.\x0a\x09^self addSprite: extentPoint  image: image frame: frame  at: initialPoint",
messageSends: ["assetAt:", "current", "addSprite:image:frame:at:"],
referencedClasses: ["EcCore"]
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "entitiesKindOf:",
category: 'accessing',
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
args: ["entityClass"],
source: "entitiesKindOf: entityClass\x0a\x09^ self children select: [:each | each isKindOf: entityClass]",
messageSends: ["select:", "isKindOf:", "children"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "entitiesOf:",
category: 'accessing',
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
args: ["entityClass"],
source: "entitiesOf: entityClass\x0a\x09^ self children select: [:each | each class = entityClass]",
messageSends: ["select:", "=", "class", "children"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onAButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("abuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onAButtonDown: eventBlock\x0a\x09self on: 'abuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onAButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("abuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onAButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onAButtonUp: eventBlock\x0a\x09self on: 'abuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onBButtonDown: eventBlock\x0a\x09self on: 'bbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onBButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("bbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onBButtonUp: eventBlock\x0a\x09self on: 'bbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onCoreResize:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("coreresize",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onCoreResize:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onCoreResize: eventBlock\x0a\x09self on: 'coreresize' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onDownButtonDown: eventBlock\x0a\x09self on: 'downbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onDownButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("downbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDownButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onDownButtonUp: eventBlock\x0a\x09self on: 'downbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onLeftButtonDown: eventBlock\x0a\x09self on: 'leftbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("leftbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onLeftButtonUp: eventBlock\x0a\x09self on: 'leftbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onRightButtonDown: eventBlock\x0a\x09self on: 'rightbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onRightButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("rightbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onRightButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onRightButtonUp: eventBlock\x0a\x09self on: 'rightbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonDown:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttondown",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonDown:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onUpButtonDown: eventBlock\x0a\x09self on: 'upbuttondown' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "onUpButtonUp:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("upbuttonup",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUpButtonUp:",{eventBlock:eventBlock},smalltalk.EcScene)})},
args: ["eventBlock"],
source: "onUpButtonUp: eventBlock\x0a\x09self on: 'upbuttonup' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.EcScene);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'actions',
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
args: ["aNode"],
source: "remove: aNode\x0a\x09self children remove: aNode ifAbsent:[^self].\x0a\x09aNode parent: nil.\x0a\x09self removeChild: aNode jsObject",
messageSends: ["remove:ifAbsent:", "children", "parent:", "removeChild:", "jsObject"],
referencedClasses: []
}),
smalltalk.EcScene);


smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Scene();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcScene.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Scene()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcScene.klass);


smalltalk.addClass('EcLoadingScene', smalltalk.EcScene, [], 'Enchant-Core');


smalltalk.addClass('EcSound', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Sound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcSound.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.Sound()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSound.klass);


smalltalk.addClass('EcSurface', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['context'];
return self}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.EcSurface)})},
args: [],
source: "context\x0a\x09<return self['@jsObject']['context']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['context']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{arg:arg},smalltalk.EcSurface)})},
args: ["arg"],
source: "context: arg\x0a\x09<return self['@jsObject']['context']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height'];
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.EcSurface)})},
args: [],
source: "height\x0a\x09<return self['@jsObject']['height']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['height']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{arg:arg},smalltalk.EcSurface)})},
args: ["arg"],
source: "height: arg\x0a\x09<return self['@jsObject']['height']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width'];
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.EcSurface)})},
args: [],
source: "width\x0a\x09<return self['@jsObject']['width']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['width']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{arg:arg},smalltalk.EcSurface)})},
args: ["arg"],
source: "width: arg\x0a\x09<return self['@jsObject']['width']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "protoWidth:height:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Surface(width, height);
return self}, function($ctx1) {$ctx1.fill(self,"protoWidth:height:",{width:width,height:height},smalltalk.EcSurface.klass)})},
args: ["width", "height"],
source: "protoWidth: width height: height\x0a\x09<return new enchant.Surface(width, height)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "width:height:",
category: 'instance creation',
fn: function (width,height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoWidth_height_(width,height));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width:height:",{width:width,height:height},smalltalk.EcSurface.klass)})},
args: ["width", "height"],
source: "width: width height: height\x0a\x09^ self protoProxy: (self protoWidth: width height: height)",
messageSends: ["protoProxy:", "protoWidth:height:"],
referencedClasses: []
}),
smalltalk.EcSurface.klass);


smalltalk.addClass('EcTimeline', smalltalk.EcProxy, [], 'Enchant-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:time:",
category: 'actions',
fn: function (aPoint,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y(),time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:time:",{aPoint:aPoint,time:time},smalltalk.EcTimeline)})},
args: ["aPoint", "time"],
source: "moveBy: aPoint time: time\x0a\x09^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y. time}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBy:time:easing:",
category: 'actions',
fn: function (aPoint,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveBy",[_st(aPoint)._x(),_st(aPoint)._y(),time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveBy:time:easing:",{aPoint:aPoint,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["aPoint", "time", "easing"],
source: "moveBy: aPoint time: time easing: easing\x0a\x09^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y. time. easing}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:time:",
category: 'actions',
fn: function (aPoint,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y(),time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:time:",{aPoint:aPoint,time:time},smalltalk.EcTimeline)})},
args: ["aPoint", "time"],
source: "moveTo: aPoint time: time\x0a\x09^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y. time}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:time:easing:",
category: 'actions',
fn: function (aPoint,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("moveTo",[_st(aPoint)._x(),_st(aPoint)._y(),time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:time:easing:",{aPoint:aPoint,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["aPoint", "time", "easing"],
source: "moveTo: aPoint time: time easing: easing\x0a\x09^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y. time. easing}",
messageSends: ["forwardMessage:withArguments:", "x", "y"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:time:",
category: 'actions',
fn: function (deg,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateBy",[deg,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:time:",{deg:deg,time:time},smalltalk.EcTimeline)})},
args: ["deg", "time"],
source: "rotateBy: deg time: time\x0a\x09^ self forwardMessage: 'rotateBy' withArguments: {deg. time}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:time:easing:",
category: 'actions',
fn: function (deg,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateBy",[deg,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:time:easing:",{deg:deg,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["deg", "time", "easing"],
source: "rotateBy: deg time: time easing: easing\x0a\x09^ self forwardMessage: 'rotateBy' withArguments: {deg. time. easing}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:time:",
category: 'actions',
fn: function (deg,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateTo",[deg,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:time:",{deg:deg,time:time},smalltalk.EcTimeline)})},
args: ["deg", "time"],
source: "rotateTo: deg time: time\x0a\x09^ self forwardMessage: 'rotateTo' withArguments: {deg. time}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:time:easing:",
category: 'actions',
fn: function (deg,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("rotateTo",[deg,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:time:easing:",{deg:deg,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["deg", "time", "easing"],
source: "rotateTo: deg time: time easing: easing\x0a\x09^ self forwardMessage: 'rotateTo' withArguments: {deg. time. easing}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:time:",
category: 'actions',
fn: function (scale,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleBy",[scale,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:time:",{scale:scale,time:time},smalltalk.EcTimeline)})},
args: ["scale", "time"],
source: "scaleBy: scale time: time\x0a\x09^ self forwardMessage: 'scaleBy' withArguments: {scale. time}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:time:easing:",
category: 'actions',
fn: function (scale,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleBy",[scale,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:time:easing:",{scale:scale,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["scale", "time", "easing"],
source: "scaleBy: scale time: time easing: easing\x0a\x09^ self forwardMessage: 'scaleBy' withArguments: {scale. time. easing}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleTo:time:",
category: 'actions',
fn: function (scale,time){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleTo",[scale,time]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleTo:time:",{scale:scale,time:time},smalltalk.EcTimeline)})},
args: ["scale", "time"],
source: "scaleTo: scale time: time\x0a\x09^ self forwardMessage: 'scaleTo' withArguments: {scale. time}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleTo:time:easing:",
category: 'actions',
fn: function (scale,time,easing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("scaleTo",[scale,time,easing]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleTo:time:easing:",{scale:scale,time:time,easing:easing},smalltalk.EcTimeline)})},
args: ["scale", "time", "easing"],
source: "scaleTo: scale time: time easing: easing\x0a\x09^ self forwardMessage: 'scaleTo' withArguments: {scale. time. easing}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.EcTimeline);



smalltalk.addClass('EcTween', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoSettings:",
category: 'instance creation',
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.Tween(settingParameters);
return self}, function($ctx1) {$ctx1.fill(self,"protoSettings:",{settingParamters:settingParamters},smalltalk.EcTween.klass)})},
args: ["settingParamters"],
source: "protoSettings: settingParamters\x0a\x09<return new enchant.Tween(settingParameters)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcTween.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "settings:",
category: 'instance creation',
fn: function (settingParamters){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoSettings_(settingParamters));
return $1;
}, function($ctx1) {$ctx1.fill(self,"settings:",{settingParamters:settingParamters},smalltalk.EcTween.klass)})},
args: ["settingParamters"],
source: "settings: settingParamters\x0a\x09^self protoProxy: (self protoSettings: settingParamters)",
messageSends: ["protoProxy:", "protoSettings:"],
referencedClasses: []
}),
smalltalk.EcTween.klass);


smalltalk.addClass('EcWebAudioSound', smalltalk.EcProxy, [], 'Enchant-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new enchant.WebAudioSound();
return self}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.EcWebAudioSound.klass)})},
args: [],
source: "protoNew\x0a\x09<return new enchant.WebAudioSound()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.EcWebAudioSound.klass);


