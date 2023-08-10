// import {createClient} from "@sanity/client";

// const client = createClient({
//   projectId: "c6ki8epl",
//   dataset: "production",
//   apiVersion: "2021-10-21",
//   useCdn: false
// });

// export async function load({ params }) {
//   const data = await client.fetch(`*[_type == "pet"]`);

//   if (data) {
//     return {
//       pets: data
//     };
//   }
//   return {
//     status: 500,
//     body: new Error("Internal Server Error")
//   };
// }