import { client } from "...";

let connection = null;
let connecting = null; // prevents race conditions

export async function getDb() {
  // already connected
  if (connection) return connection;

  // connection in progress (important!)
  if (connecting) return connecting;

  // create connection
  connecting = client().then((conn) => {
    connection = conn;
    connecting = null;
    return conn;
  });

  return connecting;
}
