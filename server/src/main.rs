use boli::translate_server::{Translate, TranslateServer};
use boli::{Translation, TranslationRecorded};
use tonic::transport::Server;
use tonic::{Request, Response, Status};

pub mod boli {
    tonic::include_proto!("boli"); // The string specified here must match the proto package name
    pub(crate) const FILE_DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("myservice_descriptor");
}

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

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50051".parse()?;
    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(boli::FILE_DESCRIPTOR_SET)
        .build_v1()
        .unwrap();

    let translation_service = TranslaterService::default();

    Server::builder()
        .add_service(reflection_service)
        .add_service(TranslateServer::new(translation_service))
        .serve(addr)
        .await?;

    Ok(())
}
