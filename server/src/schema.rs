// @generated automatically by Diesel CLI.

diesel::table! {
    translation (id) {
        id -> Integer,
        source_language -> Text,
        source_text -> Text,
        destination_language -> Text,
        destination_text -> Text,
    }
}
