use diesel::prelude::*;

#[derive(Queryable, Selectable)]
#[diesel(table_name = crate::schema::translation)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct DbTranslation {
    #[allow(dead_code)]
    pub id: i32,
    pub source_language: String,
    pub source_text: String,
    pub destination_language: String,
    pub destination_text: String,
}

#[derive(Insertable)]
#[diesel(table_name = crate::schema::translation)]
pub struct DbNewTranslation<'a> {
    pub source_language: &'a str,
    pub source_text: &'a str,
    pub destination_language: &'a str,
    pub destination_text: &'a str,
}
