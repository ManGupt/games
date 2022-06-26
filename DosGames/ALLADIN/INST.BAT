@echo off
if "%2"=="INS" goto newstart
if "%2"=="ins" goto newstart
:start
cls
Echo ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
echo ³       Aladdin Install Program     ³
echo ³ Program need  4M Hard Disk space. ³
echo ³    Press Ctrl+break to cancel     ³
Echo ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
mdir c:\Aladdin /m /f4101467
if errorlevel 5 goto driveE
if errorlevel 4 goto driveD
if errorlevel 3 goto driveC
if errorlevel 2 goto driveB
if errorlevel 1 goto driveA
goto help

:driveA
copy a:install.bat inst.bat
inst A: INS

:driveB
copy b:install.bat inst.bat
inst B: INS

:driveC
copy c:install.bat inst.bat
inst C: INS

:driveD
copy d:install.bat inst.bat
inst D: INS

:driveE
copy e:install.bat inst.bat
inst E: INS

:NewStart
cls
echo Loading....
%1DEARJ x -vv -jyc %1Alad.001

call Setup
cls
Echo Install Complete !!
ECHO Type Play to start.
goto end

:help
echo 
echo     Target path error, or not enough disk space !!!
echo ÿ
:end
