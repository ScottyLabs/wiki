import Layout from "@theme/Layout";
import React from "react";
import { RedocStandalone } from "redoc";

export default function DiningAPIPage(): JSX.Element {
  return (
    <Layout title="Dining API Docs" description="Dining API Documentation">
      <main>
        <RedocStandalone specUrl="https://raw.githubusercontent.com/ScottyLabs/dining-api/master/swagger.json" />
      </main>
    </Layout>
  );
}
