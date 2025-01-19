mod db;
mod models;
mod schema;
mod service;

use boli::translate_server::TranslateServer;
use tonic::transport::Server;

pub mod boli {
    tonic::include_proto!("boli"); // The string specified here must match the proto package name
    pub(crate) const FILE_DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("myservice_descriptor");
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50051".parse()?;
    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(boli::FILE_DESCRIPTOR_SET)
        .build_v1()
        .unwrap();

    let translation_service = service::TranslaterService::default();

    Server::builder()
        .add_service(reflection_service)
        .add_service(TranslateServer::new(translation_service))
        .serve(addr)
        .await?;

    Ok(())
}
