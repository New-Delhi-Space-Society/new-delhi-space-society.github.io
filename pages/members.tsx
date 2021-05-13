// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { server } from "../config";
import { members } from "../data/members";
import { MembersData } from "./api/members";
import MembersContent from "../components/members/MembersContent";

// export default function Members({
//   members,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <main style={{ minHeight: "calc(100vh - 150px)" }}>
//       <MembersContent members={members} />
//     </main>
//   );
// }
export default function Members() {
  return (
    <main style={{ minHeight: "calc(100vh - 150px)" }}>
      <MembersContent members={members} />
    </main>
  );
}

interface iProps {
  members?: MembersData;
}

// export const getStaticProps: GetStaticProps<iProps> = async () => {
//   console.log("RUNNING");
//   console.log(server);
//   const res = await fetch(`${server}/api/members`);
//   if (!res.ok) {
//     return {
//       props: {
//         members: [],
//       },
//     };
//   }
//   const members: MembersData = await res.json();

//   return {
//     props: {
//       members,
//     },
//   };
// };
