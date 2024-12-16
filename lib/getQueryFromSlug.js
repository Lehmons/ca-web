import groq from "groq";

export default function getQueryFromSlug({ slug: slugArray = [] }) {
	const docQuery = {
		home: groq`
      {
        "general": *[_type == "general"][0]{
          ...,
        },
        "logos": *[_type == "logos"][0]{
          ...,
          logoset[]{
            ...
          }
        } 
      }
    `,
		portfolio: groq`*[_type == "general"][0]{
      password,
			...,
			video{
				asset->
			},
			portfolio {
				asset->{
					originalFilename,
					url
				}
			}
    }`,
	};

	if (slugArray?.length === 0) {
		return {
			docType: "home",
			queryParams: {},
			query: docQuery.home,
		};
	}

	const queryParams = { slug: `/${slugArray.join("/")}` };

	const slugStart = slugArray?.[0];

	if (slugStart == 'test') {
		return {
			docType: "test",
			queryParams,
			query: docQuery.test,
		}
	}

	return {
		docType: "portfolio",
		queryParams,
		query: docQuery.portfolio,
	};
}
