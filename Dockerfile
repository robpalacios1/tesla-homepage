FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y --no install-recommends mysql-client
RUN rm -rf /var/lib/apt/lists/*
ENTRYPOINT [ "mysql" ]