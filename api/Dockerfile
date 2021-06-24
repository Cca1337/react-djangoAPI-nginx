# pull official base image
FROM python:3.7.2-stretch
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/api

RUN pip install --upgrade pip

COPY ./requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000

# copy project
COPY . .

