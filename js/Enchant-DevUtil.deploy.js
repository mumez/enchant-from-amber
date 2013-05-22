smalltalk.addPackage('Enchant-DevUtil');
smalltalk.addClass('EcMethodDefiner', smalltalk.Object, [], 'Enchant-DevUtil');

smalltalk.addMethod(
smalltalk.method({
selector: "batchCreateAccessors",
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
messageSends: ["collect:", "new", "do:", "add:", "reject:", "includes:", "selector", "methodsInProtocol:", "createAccessors:for:", "allSubclasses"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createAccessors:for:",
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createAccessors_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createAccessors:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
messageSends: ["createAccessors:for:force:"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createAccessors:for:force:",
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
messageSends: ["do:", "ifFalse:", "getterStringFor:", "compile:category:", "and:", "includesSelector:", "not", ",", "setterStringFor:"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createEventHandlers:for:",
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createEventHandlers_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createEventHandlers:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
messageSends: ["createEventHandlers:for:force:"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createEventHandlers:for:force:",
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
messageSends: ["do:", ",", "copyFrom:to:", "size", "asUppercase", "first", "ifFalse:", "eventHandlerStringFor:event:", "compile:category:", "and:", "includesSelector:", "not"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createForwarders:for:",
fn: function (namesDic,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createForwarders_for_force_(namesDic,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createForwarders:for:",{namesDic:namesDic,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
messageSends: ["createForwarders:for:force:"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createForwarders:for:force:",
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
messageSends: ["keysAndValuesDo:", "ifFalse:", "forwarderStringFor:args:", "compile:category:", "and:", "includesSelector:", "not"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createNoArgForwarders:for:",
fn: function (names,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._createNoArgForwarders_for_force_(names,aClass,false);
return self}, function($ctx1) {$ctx1.fill(self,"createNoArgForwarders:for:",{names:names,aClass:aClass},smalltalk.EcMethodDefiner.klass)})},
messageSends: ["createNoArgForwarders:for:force:"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createNoArgForwarders:for:force:",
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
messageSends: ["do:", "ifFalse:", "noArgForwarderStringFor:", "compile:category:", "and:", "includesSelector:", "not"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "eventHandlerStringFor:event:",
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
messageSends: ["writeStream", "new", "nextPutAll:", ",", "cr", "tab", "contents"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forwarderStringFor:args:",
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
messageSends: ["writeStream", "new", "newStream", "nextPutAll:", "space", "do:separatedBy:", "contents", "cr", "tab", ",", "copyFrom:to:", "-", "size"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getterStringFor:",
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
messageSends: ["writeStream", "new", "nextPutAll:", "cr", "tab", ",", "contents"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "noArgForwarderStringFor:",
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
messageSends: ["writeStream", "new", "nextPutAll:", "cr", "tab", ",", "contents"]}),
smalltalk.EcMethodDefiner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setterStringFor:",
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
messageSends: ["writeStream", "new", ",", "nextPutAll:", "space", "cr", "tab", "contents"]}),
smalltalk.EcMethodDefiner.klass);


