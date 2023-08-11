const { start_db, stop_db } = require('./src/db');
const { start_server, stop_server } = require('./src/server');

async function startup() {
  let db;
  let server;

  async function shutdown(signal) {
    console.log('\n' + `‘${signal}’ signal received`);

    await stop_server(server);
    console.log('server stopped');

    await stop_db(db);
    console.log('database closed');

    process.exit(0);
  }

  try {
    db = await start_db();
    server = await start_server(db);
  } catch (err) {
    console.error(err.message);
  }

  return shutdown;
}

(async function main() {
  const shutdown = await startup();
  process.on('SIGINT', (signal) => shutdown(signal)),
  process.on('SIGTERM', (signal) => shutdown(signal));
})();
