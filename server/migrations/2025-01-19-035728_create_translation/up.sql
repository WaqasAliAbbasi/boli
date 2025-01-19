CREATE TABLE translation (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  source_language VARCHAR NOT NULL,
  source_text TEXT NOT NULL,
  destination_language VARCHAR NOT NULL,
  destination_text TEXT NOT NULL
)