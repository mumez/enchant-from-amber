Smalltalk current createPackage: 'Enchant-DevUtil'!
Object subclass: #EcMethodDefiner
	instanceVariableNames: ''
	package: 'Enchant-DevUtil'!

!EcMethodDefiner class methodsFor: 'actions'!

batchCreateAccessors
	EcProxy allSubclasses collect: [:each | | attribs |
		attribs := Array new.
		(((each methodsInProtocol: 'accessing') collect: [:ea | ea selector]) reject: [:e | e includes: ':'])
			do: [:attr | attribs add: attr].
		EcDevUtil createAccessors: attribs for: each
	]
!

createAccessors: names for: aClass 
	self createAccessors: names for:aClass force: false
!

createAccessors: names for: aClass force: isForced
	names do: [:each | | getter getterString setter setterString |
		getter := each.
		(isForced not and: [aClass includesSelector: getter]) ifFalse: [
			getterString := self getterStringFor: getter.
			aClass compile: getterString category: 'accessing'.
		].
		setter := each, ':'.
		(isForced not and: [aClass includesSelector: setter]) ifFalse: [
			setterString := self setterStringFor: getter.
			aClass compile: setterString category: 'accessing'.
		].
	]
!

createEventHandlers: names for: aClass
	self createEventHandlers: names for: aClass force: false
!

createEventHandlers: names for:aClass force: isForced
	names do: [:each | | sele methodString |
		sele := 'on', (each first asUppercase, (each copyFrom: 2 to: each size)), ':'.
		(isForced not and: [aClass includesSelector: each]) ifFalse: [
			methodString := self eventHandlerStringFor: sele event: each.
			aClass compile: methodString category: 'events'.
		].
	]
!

createForwarders: namesDic for: aClass
	self createForwarders: namesDic for: aClass force: false
!

createForwarders: namesDic for: aClass force: isForced
	namesDic keysAndValuesDo: [:sele :argNames | | methodString |
		(isForced not and: [aClass includesSelector: sele]) ifFalse: [
			methodString := self forwarderStringFor: sele args: argNames.
			aClass compile: methodString category: 'actions'.
		].
	]
!

createNoArgForwarders: names for: aClass
	self createNoArgForwarders: names for: aClass force: false
!

createNoArgForwarders: names for: aClass force: isForced
	names do: [:each | | sele methodString |
		sele := each.
		(isForced not and: [aClass includesSelector: each]) ifFalse: [
			methodString := self noArgForwarderStringFor: sele.
			aClass compile: methodString category: 'actions'.
		].
	]
! !

!EcMethodDefiner class methodsFor: 'private'!

eventHandlerStringFor: aSelector event: eventName
	| str |
	str := String new writeStream.
	str nextPutAll: (aSelector, ' eventBlock'); cr.
	str tab; nextPutAll: 'self on: ''', eventName, ''' do: eventBlock'.
	^ str contents
!

forwarderStringFor: aSelector args: argNames
	| str strm args |
	str := String new writeStream.
	strm := aSelector newStream.
	strm nextPutAll: aSelector; space.
	argNames do: [:each | strm nextPutAll: each] separatedBy: [ strm nextPutAll: ' with: '].
	str nextPutAll: (strm contents); cr.
	str tab; nextPutAll: '^ self forwardMessage: ''', (aSelector copyFrom: 1 to: aSelector size -1), ''' withArguments: {'.
	argNames do: [:each | str nextPutAll: each] separatedBy: [str nextPutAll: '. '].
	str nextPutAll: '}'.
	^ str contents
!

getterStringFor: aSelector
	| str |
	str := String new writeStream.
	str nextPutAll: aSelector; cr.
	str tab; nextPutAll: '<return self[''@jsObject''][''', aSelector, ''']>'.
	^ str contents
!

noArgForwarderStringFor: aSelector
	| str |
	str := String new writeStream.
	str nextPutAll: (aSelector); cr.
	str tab; nextPutAll: '^ self forwardMessage: ''', aSelector, ''' withArguments: #()'.
	^ str contents
!

setterStringFor: getter
	| str setter |
	str := String new writeStream.
	setter := getter, ':'.
	str nextPutAll: setter; space; nextPutAll: 'arg'; cr.
	str tab; nextPutAll: '<return self[''@jsObject''][''', getter, ''']=arg>'.
	^ str contents
! !

