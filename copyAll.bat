@echo off
set amberHome=..\amber
xcopy /S /-Y st %amberHome%\st
xcopy /S /-Y js %amberHome%\js
xcopy /S /-Y game-img %amberHome%\game-img\
xcopy /S /-Y *.html %amberHome%\

