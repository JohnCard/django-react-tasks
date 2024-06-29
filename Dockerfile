FROM python:3.9
ENV PYTHONUNBUFFERED 1 
WORKDIR /react-crud-django
COPY requirements.txt /react-crud-django/requirements.txt
RUN pip install -r requirements.txt
COPY . /react-crud-django
EXPOSE 8000
CMD python manage.py runserver 0.0.0.0:8000