Smalltalk current createPackage: 'Enchant-Core'!
Object subclass: #EcEnchant
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcEnchant methodsFor: 'accessing'!

game
	^EcCore current
! !

!EcEnchant methodsFor: 'actions'!

newGame: anExtentPoint
	^ EcCore extent: anExtentPoint
! !

!EcEnchant methodsFor: 'initialize-release'!

init
	window enchant
! !

EcEnchant class instanceVariableNames: 'default'!

!EcEnchant class methodsFor: 'accessing'!

default
	^default ifNil: [default := self new init]
! !

!EcEnchant class methodsFor: 'class initialization'!

initialize
	"SnEnchant initialize"
	default := nil
! !

Object subclass: #EcGameProgram
	instanceVariableNames: 'game'
	package: 'Enchant-Core'!

!EcGameProgram methodsFor: 'accessing'!

game
	^game := EcCore current
!

gameExtent
	self game ifNil: [^self defaultGameExtent].
	^ self game extent
!

gameHeight
	self game ifNil: [^self defaultGameExtent y].
	^ self game height
!

gameWidth
	self game ifNil: [^self defaultGameExtent x].
	^ self game width
! !

!EcGameProgram methodsFor: 'actions'!

main
	"template method"
	self init.
	self prepareBeforeLoad.
	self setOnLoad.
	self start
! !

!EcGameProgram methodsFor: 'hooks'!

defaultGameExtent
	"override"
	^320@320
!

init
	EcEnchant default newGame: self gameExtent
!

prepareBeforeLoad
	"override"
!

prepareOnLoad
	"override"
! !

!EcGameProgram methodsFor: 'private'!

setOnLoad
	self game setOnLoad: [self prepareOnLoad]
!

start
	self game start.
	console log: '##Game started'
!

stop
	self game stop.
	console log: '##Game stopped'
! !

!EcGameProgram class methodsFor: 'actions'!

main
	^self new main
! !

JSObjectProxy subclass: #EcProxy
	instanceVariableNames: 'className'
	package: 'Enchant-Core'!

!EcProxy methodsFor: 'accessing'!

className
	^className
!

className: aString
	className := aString
!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	variables at: '#className' put: self className.
	anInspector setLabel: self printString.
	self addObjectVariablesTo: variables.
	anInspector setVariables: variables
!

printOn: aStream
	aStream nextPutAll: 'a ', self className asString
! !

!EcProxy class methodsFor: 'instance creation'!

classNamed: className protoProxy: protoProxy
	| inst |
	inst := self basicNew.
	inst className: className.
	inst jsObject: protoProxy jsObject.
	inst initialize.
	^inst
!

new
	^self protoProxy: self protoNew
!

protoNew
	self subclassResponsibility.
	^nil
!

protoProxy: protoProxy
	^self classNamed: self asString protoProxy: protoProxy
! !

EcProxy subclass: #EcAction
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcAction class methodsFor: 'instance creation'!

protoSettings: settingParamters
	<return new enchant.Action(settingParameters)>
!

settings: settingParamters
	^self protoProxy: (self protoSettings: settingParamters)
! !

EcAction subclass: #EcParallelAction
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcParallelAction methodsFor: 'accessing'!

actions
	<return self['@jsObject']['actions']>
!

actions: arg
	<return self['@jsObject']['actions']=arg>
!

endedActions
	<return self['@jsObject']['endedActions']>
!

endedActions: arg
	<return self['@jsObject']['endedActions']=arg>
! !

!EcParallelAction class methodsFor: 'instance creation'!

protoNew
	<return new enchant.ParallelAction()>
! !

EcProxy subclass: #EcCanvasLayer
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcCanvasLayer class methodsFor: 'instance creation'!

protoNew
	<return new enchant.ParallelAction()>
! !

EcProxy subclass: #EcClass
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcClass class methodsFor: 'instance creation'!

basicGetInheritanceTree: aConstructor 
	<return enchant.Class.getInheritanceTree(aConstructor)>
!

getInheritanceTreeOf: anEntity
	^self basicGetInheritanceTree: anEntity getConstructor
!

protoSuperclass: aClass definition: definition
	<return new enchant.Class(aClass, definition)>
!

superclass: aClass definition: definition
	^ self protoProxy: (self protoSuperclass: aClass definition: definition)
! !

EcProxy subclass: #EcDOMSound
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcDOMSound methodsFor: 'accessing'!

currentTime
	<return self['@jsObject']['currentTime']>
!

currentTime: arg
	<return self['@jsObject']['currentTime']=arg>
!

duration
	<return self['@jsObject']['duration']>
!

duration: arg
	<return self['@jsObject']['duration']=arg>
!

volume
	<return self['@jsObject']['volume']>
!

volume: arg
	<return self['@jsObject']['volume']=arg>
! !

!EcDOMSound class methodsFor: 'instance creation'!

protoNew
	<return new enchant.DomSound()>
! !

EcProxy subclass: #EcEasing
	instanceVariableNames: ''
	package: 'Enchant-Core'!

EcProxy subclass: #EcEnv
	instanceVariableNames: ''
	package: 'Enchant-Core'!

EcProxy subclass: #EcEvent
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcEvent methodsFor: 'accessing'!

localX
	<return self['@jsObject']['localX']>
!

localX: arg
	<return self['@jsObject']['localX']=arg>
!

localY
	<return self['@jsObject']['localY']>
!

localY: arg
	<return self['@jsObject']['localY']=arg>
!

target
	<return self['@jsObject']['target']>
!

target: arg
	<return self['@jsObject']['target']=arg>
!

type
	<return self['@jsObject']['type']>
!

type: arg
	<return self['@jsObject']['type']=arg>
!

x
	<return self['@jsObject']['x']>
!

x: arg
	<return self['@jsObject']['x']=arg>
!

y
	<return self['@jsObject']['y']>
!

y: arg
	<return self['@jsObject']['y']=arg>
! !

EcProxy subclass: #EcEventTarget
	instanceVariableNames: ''
	package: 'Enchant-Core'!
!EcEventTarget commentStamp!
[js API link](http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.EventTarget.html)!

!EcEventTarget class methodsFor: 'instance creation'!

protoNew
	<return new enchant.EventTarget()>
! !

EcEventTarget subclass: #EcActionEventTarget
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcActionEventTarget class methodsFor: 'not yet classified'!

protoNew
	<return new enchant.ActionEventTarget()>
! !

EcEventTarget subclass: #EcCore
	instanceVariableNames: 'assetsBasePath'
	package: 'Enchant-Core'!

!EcCore methodsFor: 'accessing'!

assetAt: fileName
	| assetKey |
	assetKey := self assetsBasePath, fileName.
	^self assets at: assetKey
!

assets
	<return self['@jsObject']['assets']>
!

assets: arg
	<return self['@jsObject']['assets']=arg>
!

assetsBasePath
	^assetsBasePath ifNil: [assetsBasePath := '']
!

assetsBasePath: aString
	| str |
	aString ifNil: [^ assetsBasePath := nil].
	str := aString.
	(str notEmpty and: [str last ~= '/']) ifTrue: [str := str, '/'].
	assetsBasePath := str
!

basicLoadingScene: arg
	<return self['@jsObject']['loadingScene']=arg>
!

currentScene
	^ EcScene protoProxy: (self at: #currentScene)
!

extent
	^self width @ self height
!

extent: aPoint
	self width: aPoint x.
	self height: aPoint y
!

fps
	<return self['@jsObject']['fps']>
!

fps: fps
	<return self['@jsObject']['fps'] = fps>
!

height
	<return self['@jsObject']['height']>
!

height: arg
	<return self['@jsObject']['height']=arg>
!

input
	<return self['@jsObject']['input']>
!

input: arg
	<return self['@jsObject']['input']=arg>
!

loadingScene
	^ EcScene protoProxy: (self at: #loadingScene)
!

ready
	<return self['@jsObject']['ready']>
!

ready: arg
	<return self['@jsObject']['ready']=arg>
!

rootScene
	^ EcScene protoProxy: (self at: #rootScene)
!

running
	<return self['@jsObject']['running']>
!

running: arg
	<return self['@jsObject']['running']=arg>
!

scale
	<return self['@jsObject']['scale']>
!

scale: arg
	<return self['@jsObject']['scale']=arg>
!

width
	<return self['@jsObject']['width']>
!

width: arg
	<return self['@jsObject']['width']=arg>
! !

!EcCore methodsFor: 'actions'!

preloadAssets: fileNames
	| fnames |
	fnames := fileNames collect: [:each | self assetsBasePath, each].
	self preload: fnames
!

prepareStart
	self prepareAttributes.
	self prepareOnLoad
!

setOnLoad: block
	self at: #onload put: block
! !

!EcCore methodsFor: 'callback'!

onLoaded
	"override - implement game here"
! !

!EcCore methodsFor: 'events'!

onBButtonDown: eventBlock
	self on: 'bbuttondown' do: eventBlock
!

onBButtonUp: eventBlock
	self on: 'bbuttonup' do: eventBlock
!

onCoreResize: eventBlock
	self on: 'coreresize' do: eventBlock
!

onDownButtonDown: eventBlock
	self on: 'downbuttondown' do: eventBlock
!

onDownButtonUp: eventBlock
	self on: 'downbuttonup' do: eventBlock
!

onEnterFrame: eventBlock
	self on: 'enterframe' do: eventBlock
!

onError: eventBlock
	self on: 'error' do: eventBlock
!

onExitFrame: eventBlock
	self on: 'exitframe' do: eventBlock
!

onInputChange: eventBlock
	self on: 'inputchange' do: eventBlock
!

onInputEnd: eventBlock
	self on: 'inputend' do: eventBlock
!

onInputStart: eventBlock
	self on: 'inputstart' do: eventBlock
!

onLeftButtonDown: eventBlock
	self on: 'leftbuttondown' do: eventBlock
!

onLeftButtonUp: eventBlock
	self on: 'leftbuttonup' do: eventBlock
!

onRightButtonDown: eventBlock
	self on: 'rightbuttondown' do: eventBlock
!

onRightButtonUp: eventBlock
	self on: 'rightbuttonup' do: eventBlock
!

onUpButtonDown: eventBlock
	self on: 'upbuttondown' do: eventBlock
!

onUpButtonUp: eventBlock
	self on: 'upbuttonup' do: eventBlock
! !

!EcCore methodsFor: 'preparing'!

prepareAttributes
	"override - preload assets, set fps, etc"
!

prepareOnLoad
	self onload: [ self onLoaded]
! !

EcCore class instanceVariableNames: 'current'!

!EcCore class methodsFor: 'accessing'!

current
	^current
!

current: anEcCore
	current := anEcCore
! !

!EcCore class methodsFor: 'instance creation'!

extent: aPoint
	^self width: aPoint x height: aPoint y
!

protoProxy: jsProxy
	| inst |
	inst := super protoProxy: jsProxy.
	current := inst.
	^inst
!

protoWidth: x height: y
	<
	if(typeof enchant.Core === "undefined") {
		return new enchant.Game(x, y)
	} else {
		return new enchant.Core(x, y)
	}
	>
!

width: x height: y
	^self protoProxy: (self protoWidth: x height: y)
! !

EcEventTarget subclass: #EcNode
	instanceVariableNames: 'parent'
	package: 'Enchant-Core'!

!EcNode methodsFor: 'accessing'!

age
	<return self['@jsObject']['age']>
!

age: arg
	<return self['@jsObject']['age']=arg>
!

basicTl
	<return self['@jsObject']['tl']>
!

parent
	^parent
!

parent: aNode
	parent := aNode
!

tl
	^ EcTimeline protoProxy: (self basicTl)
!

x
	<return self['@jsObject']['x']>
!

x: arg
	<return self['@jsObject']['x']=arg>
!

y
	<return self['@jsObject']['y']>
!

y: arg
	<return self['@jsObject']['y']=arg>
! !

!EcNode methodsFor: 'actions'!

moveBy: aPoint
	^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y}
!

moveTo: aPoint
	^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y}
! !

!EcNode methodsFor: 'events'!

onAdded: eventBlock
	self on: 'added' do: eventBlock
!

onAddedToScene: eventBlock
	self on: 'addedtoscene' do: eventBlock
!

onEnterFrame: eventBlock
	self on: 'enterframe' do: eventBlock
!

onRemoved: eventBlock
	self on: 'removed' do: eventBlock
!

onRemovedFromScene: eventBlock
	self on: 'removedfromscene' do: eventBlock
!

onTouchEnd: eventBlock
	self on: 'touchendt' do: eventBlock
!

onTouchMove: eventBlock
	self on: 'touchmove' do: eventBlock
!

onTouchStart: eventBlock
	self on: 'touchstart' do: eventBlock
! !

EcNode subclass: #EcEntity
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcEntity methodsFor: 'accessing'!

backgroundColor
	<return self['@jsObject']['backgroundColor']>
!

backgroundColor: arg
	<return self['@jsObject']['backgroundColor']=arg>
!

basicConstructor
	<return self['@jsObject']['constructor']>
!

buttonMode
	<return self['@jsObject']['buttonMode']>
!

buttonMode: arg
	<return self['@jsObject']['buttonMode']=arg>
!

buttonPressed
	<return self['@jsObject']['buttonPressed']>
!

buttonPressed: arg
	<return self['@jsObject']['buttonPressed']=arg>
!

compositeOperation
	<return self['@jsObject']['compositeOperation']>
!

compositeOperation: arg
	<return self['@jsObject']['compositeOperation']=arg>
!

height
	<return self['@jsObject']['height']>
!

height: arg
	<return self['@jsObject']['height']=arg>
!

opacity
	<return self['@jsObject']['opacity']>
!

opacity: arg
	<return self['@jsObject']['opacity']=arg>
!

originX
	<return self['@jsObject']['originX']>
!

originX: arg
	<return self['@jsObject']['originX']=arg>
!

originY
	<return self['@jsObject']['originY']>
!

originY: arg
	<return self['@jsObject']['originY']=arg>
!

parent
	^parent
!

parent: aScene
	parent := aScene
!

rotation
	<return self['@jsObject']['rotation']>
!

rotation: arg
	<return self['@jsObject']['rotation']=arg>
!

scaleX
	<return self['@jsObject']['scaleX']>
!

scaleX: arg
	<return self['@jsObject']['scaleX']=arg>
!

scaleY
	<return self['@jsObject']['scaleY']>
!

scaleY: arg
	<return self['@jsObject']['scaleY']=arg>
!

touchEnabled
	<return self['@jsObject']['touchEnabled']>
!

touchEnabled: arg
	<return self['@jsObject']['touchEnabled']=arg>
!

visible
	<return self['@jsObject']['visible']>
!

visible: arg
	<return self['@jsObject']['visible']=arg>
!

width
	<return self['@jsObject']['width']>
!

width: arg
	<return self['@jsObject']['width']=arg>
! !

!EcEntity methodsFor: 'actions'!

intersectAnyInstanceOf: otherClass
	^ self basicIntersectAnyInstanceOf: otherClass getConstructor
!

rotate: deg
	^ self forwardMessage: 'rotate' withArguments: {deg}
!

scale: aPoint
	^ self forwardMessage: 'scale' withArguments: {aPoint x. aPoint y}
! !

!EcEntity methodsFor: 'testing'!

basicIntersectAnyInstanceOf: otherConstructor
	<return self['@jsObject']._staticIntersect(otherConstructor)>
!

collide: other within: distance
	^ self forwardMessage: 'within' withArguments: {other. distance}
!

intersect: other
	^ self forwardMessage: 'intersect' withArguments: {other jsObject}
!

intersectAnyOf: otherEntityCollection
	^ otherEntityCollection anySatisfy: [:each | each intersect: self]
!

intersectAnyOf: otherEntityCollection ifTrue: intersectedBlock
	otherEntityCollection do: [:each |
		(each intersect: self) ifTrue: [^intersectedBlock value: each]
	]
! !

!EcEntity class methodsFor: 'accessing'!

getConstructor
	^self protoNew getConstructor
! !

EcEntity subclass: #EcLabel
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcLabel methodsFor: 'accessing'!

color
	<return self['@jsObject']['color']>
!

color: arg
	<return self['@jsObject']['color']=arg>
!

font
	<return self['@jsObject']['font']>
!

font: arg
	<return self['@jsObject']['font']=arg>
!

text
	<return st.callJavaScriptMethod(self, 'text')>
!

text: arg
	<return self['@jsObject']['text']=arg>
!

textAlign
	<return self['@jsObject']['textAlign']>
!

textAlign: arg
	<return self['@jsObject']['textAlign']=arg>
! !

!EcLabel class methodsFor: 'instance creation'!

protoNew
	<return new enchant.Label()>
!

text: aString
	| inst |
	inst := self new.
	inst text: aString.
	^inst
! !

EcEntity subclass: #EcMap
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcMap methodsFor: 'accessing'!

collisionData
	<return self['@jsObject']['collisionData']>
!

collisionData: arg
	<return self['@jsObject']['collisionData']=arg>
!

image
	<return self['@jsObject']['image']>
!

image: arg
	<return self['@jsObject']['image']=arg>
!

tileHeight
	<return self['@jsObject']['tileHeight']>
!

tileHeight: arg
	<return self['@jsObject']['tileHeight']=arg>
!

tileWidth
	<return self['@jsObject']['tileWidth']>
!

tileWidth: arg
	<return self['@jsObject']['tileWidth']=arg>
! !

!EcMap class methodsFor: 'instance creation'!

protoNew
	<return new enchant.Map()>
!

protoTileWidth: width tileHeight: height
	<return new enchant.Map(width. height)>
!

tileWidth: width tileHeight: height
	^ self protoProxy: (self protoTileWidth: width tileHeight: height)
! !

EcEntity subclass: #EcSprite
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcSprite methodsFor: 'accessing'!

extent
	^self width @ self height
!

extent: aPoint
	self width: aPoint x.
	self height: aPoint y
!

frame
	<return self['@jsObject']['frame']>
!

frame: frameArg
	<return self['@jsObject']['frame'] = frameArg>
!

height
	<return self['@jsObject']['height']>
!

height: arg
	<return self['@jsObject']['height']=arg>
!

image
	<return self['@jsObject']['image']>
!

image: anImage
	<return self['@jsObject']['image'] = anImage>
!

imageName: imageName
	| core |
	core := EcCore current.
	core ifNil: [^self].
	self image: (core assetAt: imageName)
!

width
	<return self['@jsObject']['width']>
!

width: arg
	<return self['@jsObject']['width']=arg>
! !

!EcSprite class methodsFor: 'instance creation'!

extent: aPoint
	^self width: aPoint x height: aPoint y
!

new
	^self width: 1 height: 1
!

protoNew
	<return new enchant.Sprite()>
!

protoWidth: width height: height
	<return new enchant.Sprite(width, height)>
!

width: width height: height
	^ self protoProxy: (self protoWidth: width height: height)
! !

EcNode subclass: #EcGroup
	instanceVariableNames: 'children'
	package: 'Enchant-Core'!

!EcGroup methodsFor: 'accessing'!

backgroundColor
	<return self['@jsObject']['backgroundColor']>
!

backgroundColor: arg
	<return self['@jsObject']['backgroundColor']=arg>
!

childNodes
	<return self['@jsObject']['childNodes']>
!

children
	^children ifNil: [children := Array new]
!

children: anOrderedCollection
	children := anOrderedCollection
!

firstChild
	^self children first
!

lastChild
	^self children last
!

originX
	<return self['@jsObject']['originX']>
!

originX: arg
	<return self['@jsObject']['originX']=arg>
!

originY
	<return self['@jsObject']['originY']>
!

originY: arg
	<return self['@jsObject']['originY']=arg>
!

rotation
	<return self['@jsObject']['rotation']>
!

rotation: arg
	<return self['@jsObject']['rotation']=arg>
!

scaleX
	<return self['@jsObject']['scaleX']>
!

scaleX: arg
	<return self['@jsObject']['scaleX']=arg>
!

scaleY
	<return self['@jsObject']['scaleY']>
!

scaleY: arg
	<return self['@jsObject']['scaleY']=arg>
! !

!EcGroup methodsFor: 'initialization'!

initChildren
	children := nil
! !

!EcGroup class methodsFor: 'instance creation'!

protoNew
	<return new enchant.Group()>
! !

EcGroup subclass: #EcScene
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcScene methodsFor: 'accessing'!

entitiesKindOf: entityClass
	^ self children select: [:each | each isKindOf: entityClass]
!

entitiesOf: entityClass
	^ self children select: [:each | each class = entityClass]
! !

!EcScene methodsFor: 'actions'!

add: aNode
	self children add: (aNode parent: self).
	self addChild: aNode jsObject
!

addLabel: text 
	^self addLabel: text  color: nil font: nil align: nil
!

addLabel: text  color: color
	^self addLabel: text  color: color font: nil align: nil
!

addLabel: text  color: color font: font
	^self addLabel: text  color: color font: font align: nil
!

addLabel: text  color: color font: font align: align
	| label |
	label := EcLabel text: text asString.
	color ifNotNil: [label color: color].
	font ifNotNil: [label font: font].
	align ifNotNil: [label align: align].
	self add: label.
	^label
!

addSprite: extentPoint  image: anImage frame: frame
	^self addSprite: extentPoint  image: anImage frame: frame  at: 0@0
!

addSprite: extentPoint  image: anImage frame: frame  at: initialPoint
	| sprite |
	sprite := EcSprite extent: extentPoint.
	sprite image: anImage.
	sprite frame: frame.
	sprite x: initialPoint x.
	sprite y: initialPoint y.
	self add: sprite.
	^sprite
!

addSprite: extentPoint  imageName: imageName frame: frame
	^self addSprite: extentPoint  imageName: imageName frame: frame at: 0@0
!

addSprite: extentPoint  imageName: imageName frame: frame  at: initialPoint
	| image |
	image := EcCore current assetAt: imageName.
	^self addSprite: extentPoint  image: image frame: frame  at: initialPoint
!

remove: aNode
	self children remove: aNode ifAbsent:[^self].
	aNode parent: nil.
	self removeChild: aNode jsObject
! !

!EcScene methodsFor: 'events'!

onAButtonDown: eventBlock
	self on: 'abuttondown' do: eventBlock
!

onAButtonUp: eventBlock
	self on: 'abuttonup' do: eventBlock
!

onBButtonDown: eventBlock
	self on: 'bbuttondown' do: eventBlock
!

onBButtonUp: eventBlock
	self on: 'bbuttonup' do: eventBlock
!

onCoreResize: eventBlock
	self on: 'coreresize' do: eventBlock
!

onDownButtonDown: eventBlock
	self on: 'downbuttondown' do: eventBlock
!

onDownButtonUp: eventBlock
	self on: 'downbuttonup' do: eventBlock
!

onLeftButtonDown: eventBlock
	self on: 'leftbuttondown' do: eventBlock
!

onLeftButtonUp: eventBlock
	self on: 'leftbuttonup' do: eventBlock
!

onRightButtonDown: eventBlock
	self on: 'rightbuttondown' do: eventBlock
!

onRightButtonUp: eventBlock
	self on: 'rightbuttonup' do: eventBlock
!

onUpButtonDown: eventBlock
	self on: 'upbuttondown' do: eventBlock
!

onUpButtonUp: eventBlock
	self on: 'upbuttonup' do: eventBlock
! !

!EcScene class methodsFor: 'instance creation'!

protoNew
	<return new enchant.Scene()>
! !

EcScene subclass: #EcLoadingScene
	instanceVariableNames: ''
	package: 'Enchant-Core'!

EcProxy subclass: #EcSound
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcSound class methodsFor: 'instance creation'!

protoNew
	<return new enchant.Sound()>
! !

EcProxy subclass: #EcSurface
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcSurface methodsFor: 'accessing'!

context
	<return self['@jsObject']['context']>
!

context: arg
	<return self['@jsObject']['context']=arg>
!

height
	<return self['@jsObject']['height']>
!

height: arg
	<return self['@jsObject']['height']=arg>
!

width
	<return self['@jsObject']['width']>
!

width: arg
	<return self['@jsObject']['width']=arg>
! !

!EcSurface class methodsFor: 'instance creation'!

protoWidth: width height: height
	<return new enchant.Surface(width, height)>
!

width: width height: height
	^ self protoProxy: (self protoWidth: width height: height)
! !

EcProxy subclass: #EcTimeline
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcTimeline methodsFor: 'actions'!

moveBy: aPoint time: time
	^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y. time}
!

moveBy: aPoint time: time easing: easing
	^ self forwardMessage: 'moveBy' withArguments: {aPoint x. aPoint y. time. easing}
!

moveTo: aPoint time: time
	^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y. time}
!

moveTo: aPoint time: time easing: easing
	^ self forwardMessage: 'moveTo' withArguments: {aPoint x. aPoint y. time. easing}
!

rotateBy: deg time: time
	^ self forwardMessage: 'rotateBy' withArguments: {deg. time}
!

rotateBy: deg time: time easing: easing
	^ self forwardMessage: 'rotateBy' withArguments: {deg. time. easing}
!

rotateTo: deg time: time
	^ self forwardMessage: 'rotateTo' withArguments: {deg. time}
!

rotateTo: deg time: time easing: easing
	^ self forwardMessage: 'rotateTo' withArguments: {deg. time. easing}
!

scaleBy: scale time: time
	^ self forwardMessage: 'scaleBy' withArguments: {scale. time}
!

scaleBy: scale time: time easing: easing
	^ self forwardMessage: 'scaleBy' withArguments: {scale. time. easing}
!

scaleTo: scale time: time
	^ self forwardMessage: 'scaleTo' withArguments: {scale. time}
!

scaleTo: scale time: time easing: easing
	^ self forwardMessage: 'scaleTo' withArguments: {scale. time. easing}
! !

EcProxy subclass: #EcTween
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcTween class methodsFor: 'instance creation'!

protoSettings: settingParamters
	<return new enchant.Tween(settingParameters)>
!

settings: settingParamters
	^self protoProxy: (self protoSettings: settingParamters)
! !

EcProxy subclass: #EcWebAudioSound
	instanceVariableNames: ''
	package: 'Enchant-Core'!

!EcWebAudioSound class methodsFor: 'not yet classified'!

protoNew
	<return new enchant.WebAudioSound()>
! !

