use crate::boli::translate_server::Translate;
use crate::boli::{Translation, TranslationRecorded, Translations};
use crate::db::establish_connection;
use crate::models::{DbNewTranslation, DbTranslation};
use crate::schema::translation::dsl::translation;
use diesel::prelude::*;
use tonic::{Request, Response, Status};

#[derive(Debug, Default)]
pub struct TranslaterService {}

#[tonic::async_trait]
impl Translate for TranslaterService {
    async fn translate_text(
        &self,
        request: Request<Translation>,
    ) -> Result<Response<TranslationRecorded>, Status> {
        let input = request.into_inner();
        println!("{:?}", input);

        let new_translation = DbNewTranslation {
            source_language: &input.source_language,
            source_text: &input.source_text,
            destination_language: &input.destination_language,
            destination_text: &input.destination_text,
        };

        let connection: &mut diesel::SqliteConnection = &mut establish_connection();
        diesel::insert_into(crate::schema::translation::table)
            .values(&new_translation)
            .returning(DbTranslation::as_returning())
            .get_result(connection)
            .expect("Error saving new translation");

        Ok(Response::new(TranslationRecorded {}))
    }

    async fn get_translations(&self, _: Request<()>) -> Result<Response<Translations>, Status> {
        let connection: &mut diesel::SqliteConnection = &mut establish_connection();
        let results = translation
            .select(DbTranslation::as_select())
            .load(connection)
            .expect("Error loading translations");

        let translations = results.iter().map(|t| Translation {
            source_language: t.source_language.clone(),
            source_text: t.source_text.clone(),
            destination_language: t.destination_language.clone(),
            destination_text: t.destination_text.clone(),
        });

        Ok(Response::new(Translations {
            translations: translations.collect(),
        }))
    }
}
