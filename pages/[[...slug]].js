import getQueryFromSlug from "../lib/getQueryFromSlug";
import { getClient } from "../lib/sanity.server";
import { usePreviewSubscription } from "../lib/sanity";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/Home"));
const PortfolioComponent = dynamic(() => import("../components/Portfolio"));

export default function Page({
  data,
  pageStyle,
  pageTransition,
  pageVariants,
}) {
  const docType = data?.docType;

  // 3. Execute the query again but switch to preview mode if it's in preview mode (backend)
  const { data: previewData } = usePreviewSubscription(data?.query || null, {
    params: data?.queryParams ?? {},
    initialData: data?.pageData,
    enabled: data?.preview,
  });

  console.log(previewData);

  // 4. Return the correct component based on the docType
  return (
    <>
      {docType === "home" && (
        <Home
          pageStyle={pageStyle}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          {...previewData}
        />
      )}
      {docType === "portfolio" && (
        <PortfolioComponent
          pageStyle={pageStyle}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          {...previewData}
        />
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // 1 A helper function to work out what query we should run based on this slug
  const { query, queryParams, docType } = getQueryFromSlug({
    slug: params?.slug,
  });

  // 2. Get the initial data for this page, using the correct query
  const pageData = await getClient(preview).fetch(query, queryParams);

  return {
    props: {
      data: { query, queryParams, docType, pageData, preview },
    },
    revalidate: 1,
  };
}

export async function getStaticPaths({ params, preview = false }) {
  return { paths: [], fallback: "blocking" };
}
