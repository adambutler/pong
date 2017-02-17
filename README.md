# Pong

Responds to HTTP requests with whatever status code you need.

## Usage

```
$ ngrok http 3000
$ node index.js
```

Then point your webhook to your ngrok host.

## Features

- Any request made to `/` will result in a `200: OK` response.
- Specific response codes can be defined by making your response point to `/:status`.

## HTTP Example

**Request**

```
POST /404 HTTP/1.1
Host: 127.0.0.1:3000
Connection: close
Content-Length: 0
```

**Response**

```
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: text/plain; charset=utf-8
Content-Length: 9
ETag: W/"9-nR6tc+Z4+i9RpwqTOwvwFw"
Date: Fri, 17 Feb 2017 11:31:55 GMT
Connection: close

Not Found
```

## Contributing

Contributions are welcome, please follow GitHub Flow
