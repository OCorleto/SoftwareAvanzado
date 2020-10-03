ROM python

WORKDIR /usr/src/app
RUN pip install flask
RUN pip install pymongo
COPY . .
EXPOSE 8080
RUN mkdir -p /elemnts/procs
CMD ["python","app.py"]
