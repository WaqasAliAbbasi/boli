use crate::boli::translate_server::Translate;
use crate::boli::{Translation, TranslationRecorded};
use tonic::{Request, Response, Status};

#[derive(Debug, Default)]
pub struct TranslaterService {}

#[tonic::async_trait]
impl Translate for TranslaterService {
    async fn translate_text(
        &self,
        request: Request<Translation>,
    ) -> Result<Response<TranslationRecorded>, Status> {
        let translation = request.into_inner();
        println!(
            "Received a {} translation: {}",
            translation.destination_language, translation.destination_text
        );

        Ok(Response::new(TranslationRecorded {}))
    }
}
