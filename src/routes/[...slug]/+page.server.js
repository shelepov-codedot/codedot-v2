// const query = (slug) => `
// {
//   pageCollection(where: {
//     url: "${slug}"
//   } limit: 1) {
//     items {
//       seo {
//         titleTemplate
//         title
//         description
//         keywords
//         image {
//           url
//           fileName
//           description
//           width
//           height
//         }
//         ogype
//         twittercard
//       }
//       name
//       url
//       sectionsCollection (limit:90) {
//          items{
//           ${headerQuery}
//         }
//       }
//     }
//   }
// }
// `

// export async function load({ params }) {
//   const data = await client.fetch(`*[_type == "pet"]`);
//   const data = await client.fetch(query(`/${params.slug}`));

//   if (data) {
//     return data;
//   }
//   return {
//     status: 500,
//     body: new Error("Internal Server Error")
//   };
// }
