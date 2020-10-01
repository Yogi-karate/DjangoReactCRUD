# DjangoReactCrud
Crud operations using Django Rest Framework and React JS.

Clone the project.
install react.js n your local
then run both frontend and backend.

open command prompt,
run .\env\scripts\activate

go to E:\DjangoReactCrud\booksApi
then python manage.py makemigrations
then python manage.py migrate
then python manage.py runserver

if
it throws frozen library error, then 
 
install django,django-rest-framework in your local 
pip install django
pip install django-rest-framework
pip install django-cors-headers



open other command prompt,
go to E:\DjangoReactCrud\my-app
then yarn start.

localhost:3000 will display web application
localhost:8000 will show our api.

if your want to change your database,
install your correseponding database and configure those in settings.py file.

both sqlite and postgres code is written.
