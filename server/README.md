# Boli Server

Ensure you are in the server directory:

```sh
cd server
```

## Database

```sh
echo DATABASE_URL=$(pwd)/test_sqlite.db > .env
# Install disel cli https://diesel.rs/guides/getting-started
diesel migration run
```

## Launch Server

```bash
# One-time
sudo apt-get install protobuf-compiler
# Run locally
cargo run --bin boli-server 
```

## UI

```bash
# Install brew at https://brew.sh
brew install grpcui
grpcui -plaintext '[::1]:50051'
```

## Conventions

- Follow [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
