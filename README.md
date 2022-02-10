# Getting Started with socket-io-example-crypto-client

An example to understand how socket.io works.

In this example, we have 5 popular crypto-currency (with fake values). Server makes changes on data and send them to client. Client shows data and changes.

## Content
Client side of web-socket.

This section provide a simple front. The client listens to the server and gets data from server and shows them.

In client section, redux is used for state management.

Server side is in https://github.com/mortezadvlp/socket-io-example-crypto-server

Collected Server and Client is in https://github.com/mortezadvlp/socket-io-example-crypto

## Dependencies
For running without error, install following dependencies

`npm install redux`

`npm install @mui/material @emotion/react @emotion/styled`

`npm install socket.io-client`

and

`npm install -D tailwindcss postcss autoprefixer`

or follow https://tailwindcss.com/docs/guides/create-react-app instruction.
