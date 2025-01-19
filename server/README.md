# Boli Server

## Database

Follow <https://diesel.rs/guides/getting-started> to setup Diesel CLI.

```sh
echo DATABASE_URL=$(pwd)/test_sqlite.db > .env
diesel migration run
```
