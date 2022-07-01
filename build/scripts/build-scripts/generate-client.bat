@echo off

echo.
echo Bundle %1 static content...
pushd %PROJECT_NAME%\code\client\%1
cmd /c npm install
cmd /c npm run build

echo Copying %1 static content...
xcopy build ..\..\..\..\output\client\%1\ /eqv
popd

exit /B 1
