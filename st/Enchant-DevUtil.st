Smalltalk current createPackage: 'Enchant-DevUtil'!
Object subclass: #EcDevUtil
	instanceVariableNames: ''
	package: 'Enchant-DevUtil'!

!EcDevUtil class methodsFor: 'actions'!

batchCreateAccessors
	EcProxy allSubclasses collect: [:each | | attribs |
		attribs := Array new.
		(((each methodsInProtocol: 'accessing') collect: [:ea | ea selector]) reject: [:e | e includes: ':'])
			do: [:attr | attribs add: attr].
		EcDevUtil createAccessors: attribs for: each
	]
!

createAccessors: names for:aClass 
	self createAccessors: names for:aClass force: false
!

createAccessors: names for:aClass force: isForced
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
! !

!EcDevUtil class methodsFor: 'private'!

getterStringFor: aSelector
	| str |
	str := String new writeStream.
	str nextPutAll: aSelector; cr.
	str tab; nextPutAll: '<return self[''@jsObject''][''', aSelector, ''']>'.
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

