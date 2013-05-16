Smalltalk current createPackage: 'Enchant-Examples'!
EcSprite subclass: #EcExampleApple
	instanceVariableNames: ''
	package: 'Enchant-Examples'!

!EcExampleApple methodsFor: 'initialization'!

initialize
	console log: 'apple init'.
	self extent: 16@16.
	self imageName: 'icon0.png'.
	self frame: 15.
! !

EcSprite subclass: #EcExampleEnemyBear
	instanceVariableNames: ''
	package: 'Enchant-Examples'!

!EcExampleEnemyBear methodsFor: 'initialization'!

initialize
	console log: 'enemy init'.
	self extent: 32@32.
	self imageName: 'chara1.png'.
	self frame: 15.
! !

EcSprite subclass: #EcExampleShooterBear
	instanceVariableNames: ''
	package: 'Enchant-Examples'!

!EcExampleShooterBear methodsFor: 'initialization'!

initialize
	console log: 'bear init'.
	self extent: 32@32.
	self imageName: 'chara1.png'.
	self frame: 5.
! !

EcGameProgram subclass: #EcShootingGameExample
	instanceVariableNames: 'score'
	package: 'Enchant-Examples'!

!EcShootingGameExample methodsFor: 'accessing'!

score
	^score
! !

!EcShootingGameExample methodsFor: 'actions'!

init
	super init.
	score := 0
!

prepareBeforeLoad
	self game assetsBasePath: './game-img/'.
	self game preloadAssets: #('chara1.png' 'icon0.png').
	self game fps: 20.
!

prepareOnLoad
	| scene bear enemy |
	scene := self game rootScene.
	
	bear := EcExampleShooterBear new.
	scene add: bear.
	bear tl delay: (self game fps * 20); then: [self stop].
	scene onTouchMove: [:event | bear y: event localY].
	
	scene tl 
		then: [ 
			enemy := EcExampleEnemyBear new.
			enemy scaleX: -1.
			enemy moveTo: (self gameWidth@ self gameHeight atRandom).
			enemy tl moveBy: ((self gameWidth + 40) negated@0) time: 160.
			scene add: enemy
		]; delay: 30; loop.
	
	scene onTouchStart: [:event | | apple |
		bear y: event localY.
		apple := EcExampleApple new.
		apple moveTo: (bear width@ (bear y + (bear height / 2))).
		apple tl moveBy: (self gameWidth@0) time: 30.
		apple onEnterFrame: [ | enemies|
			enemies := scene entitiesOf: EcExampleEnemyBear.
			apple intersectAnyOf: enemies ifTrue: [:enem |
				scene remove: enem; remove: apple.
				self incrementScore
			]
		].
		scene add: apple
	].
! !

!EcShootingGameExample methodsFor: 'private'!

incrementScore
	score := score + 1
!

stop
	window alert: ('Game Over!! Score: ', self score).
	super stop
! !

EcGameProgram subclass: #EcTimelineExample
	instanceVariableNames: ''
	package: 'Enchant-Examples'!

!EcTimelineExample methodsFor: 'actions'!

prepareBeforeLoad
	self game assetsBasePath: './game-img/'.
	self game preloadAssets: #('chara1.png').
	self game fps: 20.
!

prepareOnLoad
	| scene bear |
	scene := self game rootScene.
	bear := scene addSprite: (32@32) imageName: 'chara1.png' frame: #(6 6 7 7) at: 1@1.
	
	bear tl 
		moveBy: 288@0 time: 90;
		scaleTo: -1 time: 1 easing: 10;
		moveBy: -288@0 time: 90;
		scaleTo: 1 time: 1 easing: 10;
		loop
! !

EcGameProgram subclass: #EcTouchEventExample
	instanceVariableNames: ''
	package: 'Enchant-Examples'!

!EcTouchEventExample methodsFor: 'actions'!

prepareBeforeLoad
	self game assetsBasePath: './game-img/'.
	self game preloadAssets: #('chara1.png' 'icon0.png').
	self game fps: 20.
!

prepareOnLoad
	| scene bear |
	scene := self game rootScene.
	bear := scene addSprite: (32@32) imageName: 'chara1.png' frame: 5.
	
	scene onTouchStart: [:event | | apple |
		apple := EcSprite extent: 16@16.
		apple imageName: 'icon0.png'.
		apple moveTo: (16@ (bear y + 8)).
		apple tl moveBy: (320@0) time: 30.
		apple frame: 15.
		scene add: apple
	].
	
	scene onTouchMove: [:event |
		bear y: event localY
	].
! !

