smalltalk.addPackage('Enchant-DevUtil');
smalltalk.addClass('EcMethodDefiner', smalltalk.Object, [], 'Enchant-DevUtil');

smalltalk.addMethod(
smalltalk.method({
selector: "batchCreateAccessors",
category: 'actions',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $EcDevUtil(){return smalltalk.EcDevUtil||(typeof EcDevUtil=="undefined"?nil:EcDevUtil)}
function $EcProxy(){return smalltalk.EcProxy||(typeof EcProxy=="undefined"?nil:EcProxy)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($EcProxy())._allSubclasses())._collect_((function(each){
var attribs;
return smalltalk.withContext(function($ctx2) {
attribs=_st($Array())._new();
attribs;
_st(_st(_st(_st(each)._methodsInProtocol_("accessing"))._collect_((function(ea){
return smalltalk.withContext(function($ctx3) {
return _st(ea)._selector();
}, function($ctx3) {$ctx3.fillBlock({ea:ea},$ctx1)})})))._reject_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(e)._includes_(":");
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx1)})})))._do_((function(attr){
return smalltalk.withContext(function($ctx3) {
return _st(attribs)._add_(attr);
}, function($ctx3) {$ctx3.fillBlock({attr:attr},$ctx1)})}));
return _st($EcDevUtil())._createAccessors_for_(attribs,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,attribs:attribs},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"batchCreateAccessors",{},smalltalk.EcDevUtil.klass)})},
args: [],
source: "batchCreateAccessors\x0a\x09EcProxy allSubclasses collect: [:each | | attribs |\x0a\x09\x09attribs := Array new.\x0a\x09\x09(((each methodsInProtocol: 'accessing') collect: [:ea | ea selector]) reject: [:e | e includes: ':'])\x0a\x09\x09\x09do: [:attr | attribs add: attr].\x0a\x09\x09EcDevUtil createAccessors: attribs for: each\x0a\x09]",
messageSends: ["collect:", "new", "do:", "add:", "reject:", "includes:", "selector", "methodsInProtocol:", "createAccessors:for:", "allSubclasses"],
referencedClasses: ["Array", "EcDevUtil", "EcProxy"]
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createAccessors:for:",
category: 'actions',
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createAccessors_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createAccessors:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass"],
source: "createAccessors: names for: aClass \x0a\x09self createAccessors: names for:aClass force: false",
messageSends: ["createAccessors:for:force:"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createAccessors:for:force:",
category: 'actions',
fn: function (names,aClass,isForced){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(names)._do_((function(each){
var getter,getterString,setter,setterString;
return smalltalk.withContext(function($ctx2) {
getter=each;
getter;
$1=_st(_st(isForced)._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aClass)._includesSelector_(getter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
getterString=_st(self)._getterStringFor_(getter);
getterString;
_st(aClass)._compile_category_(getterString,"accessing");
};
setter=_st(each).__comma(":");
setter;
$2=_st(_st(isForced)._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aClass)._includesSelector_(setter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($2)){
setterString=_st(self)._setterStringFor_(getter);
setterString;
return _st(aClass)._compile_category_(setterString,"accessing");
};
}, function($ctx2) {$ctx2.fillBlock({each:each,getter:getter,getterString:getterString,setter:setter,setterString:setterString},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createAccessors:for:force:",{names:names,aClass:aClass,isForced:isForced},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass", "isForced"],
source: "createAccessors: names for: aClass force: isForced\x0a\x09names do: [:each | | getter getterString setter setterString |\x0a\x09\x09getter := each.\x0a\x09\x09(isForced not and: [aClass includesSelector: getter]) ifFalse: [\x0a\x09\x09\x09getterString := self getterStringFor: getter.\x0a\x09\x09\x09aClass compile: getterString category: 'accessing'.\x0a\x09\x09].\x0a\x09\x09setter := each, ':'.\x0a\x09\x09(isForced not and: [aClass includesSelector: setter]) ifFalse: [\x0a\x09\x09\x09setterString := self setterStringFor: getter.\x0a\x09\x09\x09aClass compile: setterString category: 'accessing'.\x0a\x09\x09].\x0a\x09]",
messageSends: ["do:", "ifFalse:", "getterStringFor:", "compile:category:", "and:", "includesSelector:", "not", ",", "setterStringFor:"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createEventHandlers:for:",
category: 'actions',
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createEventHandlers_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createEventHandlers:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass"],
source: "createEventHandlers: names for: aClass\x0a\x09self createEventHandlers: names for: aClass force: false",
messageSends: ["createEventHandlers:for:force:"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createEventHandlers:for:force:",
category: 'actions',
fn: function (names,aClass,isForced){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(names)._do_((function(each){
var sele,methodString;
return smalltalk.withContext(function($ctx2) {
sele=_st(_st("on").__comma(_st(_st(_st(each)._first())._asUppercase()).__comma(_st(each)._copyFrom_to_((2),_st(each)._size())))).__comma(":");
sele;
$1=_st(_st(isForced)._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aClass)._includesSelector_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
methodString=_st(self)._eventHandlerStringFor_event_(sele,each);
methodString;
return _st(aClass)._compile_category_(methodString,"events");
};
}, function($ctx2) {$ctx2.fillBlock({each:each,sele:sele,methodString:methodString},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createEventHandlers:for:force:",{names:names,aClass:aClass,isForced:isForced},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass", "isForced"],
source: "createEventHandlers: names for:aClass force: isForced\x0a\x09names do: [:each | | sele methodString |\x0a\x09\x09sele := 'on', (each first asUppercase, (each copyFrom: 2 to: each size)), ':'.\x0a\x09\x09(isForced not and: [aClass includesSelector: each]) ifFalse: [\x0a\x09\x09\x09methodString := self eventHandlerStringFor: sele event: each.\x0a\x09\x09\x09aClass compile: methodString category: 'events'.\x0a\x09\x09].\x0a\x09]",
messageSends: ["do:", ",", "copyFrom:to:", "size", "asUppercase", "first", "ifFalse:", "eventHandlerStringFor:event:", "compile:category:", "and:", "includesSelector:", "not"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createForwarders:for:",
category: 'actions',
fn: function (namesDic,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createForwarders_for_force_(namesDic,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createForwarders:for:",{namesDic:namesDic,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
args: ["namesDic", "aClass"],
source: "createForwarders: namesDic for: aClass\x0a\x09self createForwarders: namesDic for: aClass force: false",
messageSends: ["createForwarders:for:force:"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createForwarders:for:force:",
category: 'actions',
fn: function (namesDic,aClass,isForced){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(namesDic)._keysAndValuesDo_((function(sele,argNames){
var methodString;
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(isForced)._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aClass)._includesSelector_(sele);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
methodString=_st(self)._forwarderStringFor_args_(sele,argNames);
methodString;
return _st(aClass)._compile_category_(methodString,"actions");
};
}, function($ctx2) {$ctx2.fillBlock({sele:sele,argNames:argNames,methodString:methodString},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createForwarders:for:force:",{namesDic:namesDic,aClass:aClass,isForced:isForced},smalltalk.EcMethodDefiner.klass)})},
args: ["namesDic", "aClass", "isForced"],
source: "createForwarders: namesDic for: aClass force: isForced\x0a\x09namesDic keysAndValuesDo: [:sele :argNames | | methodString |\x0a\x09\x09(isForced not and: [aClass includesSelector: sele]) ifFalse: [\x0a\x09\x09\x09methodString := self forwarderStringFor: sele args: argNames.\x0a\x09\x09\x09aClass compile: methodString category: 'actions'.\x0a\x09\x09].\x0a\x09]",
messageSends: ["keysAndValuesDo:", "ifFalse:", "forwarderStringFor:args:", "compile:category:", "and:", "includesSelector:", "not"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createNoArgForwarders:for:",
category: 'actions',
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createNoArgForwarders_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createNoArgForwarders:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass"],
source: "createNoArgForwarders: names for: aClass\x0a\x09self createNoArgForwarders: names for: aClass force: false",
messageSends: ["createNoArgForwarders:for:force:"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createNoArgForwarders:for:force:",
category: 'actions',
fn: function (names,aClass,isForced){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(names)._do_((function(each){
var sele,methodString;
return smalltalk.withContext(function($ctx2) {
sele=each;
sele;
$1=_st(_st(isForced)._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aClass)._includesSelector_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
methodString=_st(self)._noArgForwarderStringFor_(sele);
methodString;
return _st(aClass)._compile_category_(methodString,"actions");
};
}, function($ctx2) {$ctx2.fillBlock({each:each,sele:sele,methodString:methodString},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createNoArgForwarders:for:force:",{names:names,aClass:aClass,isForced:isForced},smalltalk.EcMethodDefiner.klass)})},
args: ["names", "aClass", "isForced"],
source: "createNoArgForwarders: names for: aClass force: isForced\x0a\x09names do: [:each | | sele methodString |\x0a\x09\x09sele := each.\x0a\x09\x09(isForced not and: [aClass includesSelector: each]) ifFalse: [\x0a\x09\x09\x09methodString := self noArgForwarderStringFor: sele.\x0a\x09\x09\x09aClass compile: methodString category: 'actions'.\x0a\x09\x09].\x0a\x09]",
messageSends: ["do:", "ifFalse:", "noArgForwarderStringFor:", "compile:category:", "and:", "includesSelector:", "not"],
referencedClasses: []
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "eventHandlerStringFor:event:",
category: 'private',
fn: function (aSelector,eventName){
var self=this;
var str;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
str=_st(_st($String())._new())._writeStream();
$1=str;
_st($1)._nextPutAll_(_st(aSelector).__comma(" eventBlock"));
$2=_st($1)._cr();
$3=str;
_st($3)._tab();
$4=_st($3)._nextPutAll_(_st(_st("self on: '").__comma(eventName)).__comma("' do: eventBlock"));
$5=_st(str)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"eventHandlerStringFor:event:",{aSelector:aSelector,eventName:eventName,str:str},smalltalk.EcMethodDefiner.klass)})},
args: ["aSelector", "eventName"],
source: "eventHandlerStringFor: aSelector event: eventName\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09str nextPutAll: (aSelector, ' eventBlock'); cr.\x0a\x09str tab; nextPutAll: 'self on: ''', eventName, ''' do: eventBlock'.\x0a\x09^ str contents",
messageSends: ["writeStream", "new", "nextPutAll:", ",", "cr", "tab", "contents"],
referencedClasses: ["String"]
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forwarderStringFor:args:",
category: 'private',
fn: function (aSelector,argNames){
var self=this;
var str,strm,args;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
str=_st(_st($String())._new())._writeStream();
strm=_st(aSelector)._newStream();
$1=strm;
_st($1)._nextPutAll_(aSelector);
$2=_st($1)._space();
_st(argNames)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(strm)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(strm)._nextPutAll_(" with: ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=str;
_st($3)._nextPutAll_(_st(strm)._contents());
$4=_st($3)._cr();
$5=str;
_st($5)._tab();
$6=_st($5)._nextPutAll_(_st(_st("^ self forwardMessage: '").__comma(_st(aSelector)._copyFrom_to_((1),_st(_st(aSelector)._size()).__minus((1))))).__comma("' withArguments: {"));
_st(argNames)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(str)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(str)._nextPutAll_(". ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(str)._nextPutAll_("}");
$7=_st(str)._contents();
return $7;
}, function($ctx1) {$ctx1.fill(self,"forwarderStringFor:args:",{aSelector:aSelector,argNames:argNames,str:str,strm:strm,args:args},smalltalk.EcMethodDefiner.klass)})},
args: ["aSelector", "argNames"],
source: "forwarderStringFor: aSelector args: argNames\x0a\x09| str strm args |\x0a\x09str := String new writeStream.\x0a\x09strm := aSelector newStream.\x0a\x09strm nextPutAll: aSelector; space.\x0a\x09argNames do: [:each | strm nextPutAll: each] separatedBy: [ strm nextPutAll: ' with: '].\x0a\x09str nextPutAll: (strm contents); cr.\x0a\x09str tab; nextPutAll: '^ self forwardMessage: ''', (aSelector copyFrom: 1 to: aSelector size -1), ''' withArguments: {'.\x0a\x09argNames do: [:each | str nextPutAll: each] separatedBy: [str nextPutAll: '. '].\x0a\x09str nextPutAll: '}'.\x0a\x09^ str contents",
messageSends: ["writeStream", "new", "newStream", "nextPutAll:", "space", "do:separatedBy:", "contents", "cr", "tab", ",", "copyFrom:to:", "-", "size"],
referencedClasses: ["String"]
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getterStringFor:",
category: 'private',
fn: function (aSelector){
var self=this;
var str;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
str=_st(_st($String())._new())._writeStream();
$1=str;
_st($1)._nextPutAll_(aSelector);
$2=_st($1)._cr();
$3=str;
_st($3)._tab();
$4=_st($3)._nextPutAll_(_st(_st("<return self['@jsObject']['").__comma(aSelector)).__comma("']>"));
$5=_st(str)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"getterStringFor:",{aSelector:aSelector,str:str},smalltalk.EcDevUtil.klass)})},
args: ["aSelector"],
source: "getterStringFor: aSelector\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09str nextPutAll: aSelector; cr.\x0a\x09str tab; nextPutAll: '<return self[''@jsObject''][''', aSelector, ''']>'.\x0a\x09^ str contents",
messageSends: ["writeStream", "new", "nextPutAll:", "cr", "tab", ",", "contents"],
referencedClasses: ["String"]
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "noArgForwarderStringFor:",
category: 'private',
fn: function (aSelector){
var self=this;
var str;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
str=_st(_st($String())._new())._writeStream();
$1=str;
_st($1)._nextPutAll_(aSelector);
$2=_st($1)._cr();
$3=str;
_st($3)._tab();
$4=_st($3)._nextPutAll_(_st(_st("^ self forwardMessage: '").__comma(aSelector)).__comma("' withArguments: #()"));
$5=_st(str)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"noArgForwarderStringFor:",{aSelector:aSelector,str:str},smalltalk.EcMethodDefiner.klass)})},
args: ["aSelector"],
source: "noArgForwarderStringFor: aSelector\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09str nextPutAll: (aSelector); cr.\x0a\x09str tab; nextPutAll: '^ self forwardMessage: ''', aSelector, ''' withArguments: #()'.\x0a\x09^ str contents",
messageSends: ["writeStream", "new", "nextPutAll:", "cr", "tab", ",", "contents"],
referencedClasses: ["String"]
}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setterStringFor:",
category: 'private',
fn: function (getter){
var self=this;
var str,setter;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
str=_st(_st($String())._new())._writeStream();
setter=_st(getter).__comma(":");
$1=str;
_st($1)._nextPutAll_(setter);
_st($1)._space();
_st($1)._nextPutAll_("arg");
$2=_st($1)._cr();
$3=str;
_st($3)._tab();
$4=_st($3)._nextPutAll_(_st(_st("<return self['@jsObject']['").__comma(getter)).__comma("']=arg>"));
$5=_st(str)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"setterStringFor:",{getter:getter,str:str,setter:setter},smalltalk.EcDevUtil.klass)})},
args: ["getter"],
source: "setterStringFor: getter\x0a\x09| str setter |\x0a\x09str := String new writeStream.\x0a\x09setter := getter, ':'.\x0a\x09str nextPutAll: setter; space; nextPutAll: 'arg'; cr.\x0a\x09str tab; nextPutAll: '<return self[''@jsObject''][''', getter, ''']=arg>'.\x0a\x09^ str contents",
messageSends: ["writeStream", "new", ",", "nextPutAll:", "space", "cr", "tab", "contents"],
referencedClasses: ["String"]
}),
smalltalk.EcMethodDefiner.klass);


