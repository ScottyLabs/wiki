import Layout from "@theme/Layout";
import React from "react";
import { RedocStandalone } from "redoc";

export default function CourseAPIPage(): JSX.Element {
  return (
    <Layout title="Course API Docs" description="Course API Documentation">
      <main>
        <RedocStandalone specUrl="https://raw.githubusercontent.com/ScottyLabs/course-api-v2/master/swagger.json" />
      </main>
    </Layout>
  );
}
