python manage.py makemigrations
python manage.py migrate
gunicorn music_controller.wsgi:application --bind 0.0.0.0:8000
