FROM python:3-slim
WORKDIR /usr/src/app
COPY http.reqs.txt amqp.reqs.txt ./
RUN python -m pip install --no-cache-dir -r http.reqs.txt -r amqp.reqs.txt
COPY ./amqp_lib.py ./invokes.py ./place_order.py ./
CMD [ "python", "./place_order.py" ]