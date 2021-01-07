import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Home({ data }) {
  // console.log(data);
  // if (data.message) {
  //   return <h1>{data.message}</h1>;
  // } else {
  return (
    <>
      {/* <Head>
          <title>{`${data[0]?.name} store`}</title>
        </Head> */}
      <MessengerCustomerChat appId="" pageId="101433091549607" />
      {/* <div className="container">
          {data[0]?.products.map((product) => (
            <h1>{product.name}</h1>
          ))}
        </div> */}
    </>
  );
  // }
}

// export async function getServerSideProps(context) {
//   const host = context.req.headers.host.split(".");
//   const subdomain = host.length === 2 ? host[0] : "";
//   console.log(subdomain);
//   let data = null;
//   try {
//     const res = await axios.get(
//       `http://localhost:1337/stores?name=${subdomain}`
//     );
//     data = res.data;
//   } catch (err) {
//     console.log(err);
//   }
//   if (data.length === 0) {
//     data = { message: "No Store Found" };
//   }
//   console.log(data);
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
