import type { NextApiRequest, NextApiResponse } from "next";
import { members } from "../../data/members";

export type MembersData = {
  type: string;
  members: {
    name: string;
    role: string;
    image: string;
  }[];
}[];

export type MemberData = {
  name: string;
  role: string;
  image: string;
};

export default (_: NextApiRequest, res: NextApiResponse<MembersData>) => {
  return res.status(200).json(members);
};
