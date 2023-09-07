
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
jOiAp7bDAf4ok079E0yFDdKO1z+LBmuFOatj2bl1xwfWf2msQ+KGvALpM47CjeckKxnQo5giVhuchfy+BcamFQ==
