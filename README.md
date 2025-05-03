install gitbash
install postman
install vscode
install python
install nodejs

git clone https://github.com/cramirezmendoza/SoftEng.git

open vscode
cd SMS
code .

--VScode will open
open terminal 
cd backend

# Make and Activate env in MSC 
before you cd into backend to install packages


# For backend
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install djangorestframework-simplejwt
pip install Django
pip install pusher

optional  for migration
python ./manage.py makemigration
python ./manage.py migrate

# create superuser
python manage.py createsuperuser

username - Welcome1
Password - Welcome1

# run backend server
python ./manage.py runserver


--open another terminal in VScode
# frontend

open new terminal
cd frontend
npm install

# Run the app
npm start
--once server is running then
localhost:3000/login

# Note
Need Separate Terminal in Vscode for Backend and Frontend to run locally

for execution error:
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser