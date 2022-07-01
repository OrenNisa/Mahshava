@echo off

echo.
echo Building Python...

:: Generate Python virtual environment
echo Generating Python virtual environment...
python -m venv .venv
echo Activating Python virtual environment...
call .venv\Scripts\activate.bat

echo Installing %PROJECT_NAME% Python dependencies...
python -m pip install -q -r %PROJECT_NAME%/code/server/requirements.txt

:: Export Python dependencies
echo Export %PROJECT_NAME% Python dependencies - generating requirements.txt file...
python -m pip freeze > output\resources\python_requirements\requirements.txt

:: Generate and copy Django static files
echo Generate and copy Django static files
python %PROJECT_NAME%\code\server\src\mahshava\manage.py collectstatic --no-input --clear
xcopy %PROJECT_NAME%\code\server\src\mahshava\static output\client\mahshava\static\ /eqv
xcopy %PROJECT_NAME%\code\server\src\mahshava\static output\client\surveys\static\ /eqv

echo Deactivating Python virtual environment...
call deactivate

echo Python cleanup...
if exist ".venv" rd /S /Q .venv

exit /B 1
