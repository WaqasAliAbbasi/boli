# boli

## Server

### One-time Server

```bash
sudo apt-get install protobuf-compiler
```

### Launch Server

```bash
cargo run --bin boli-server 
```

## UI

### One-time UI

```bash
# Install brew at https://brew.sh
brew install grpcui
```

### Launch UI

```bash
grpcui -plaintext '[::1]:50051'
```

## Development

- Follow [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)