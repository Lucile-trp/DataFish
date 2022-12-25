import prisma from "@/lib/prisma";
// import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Props = {
//   data: User;
// };

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  // TODO: Vérification des informations

  if (method == "POST") {
    try {
      const _data = await prisma.user.create({
        data: req.body,
      });
      res.status(200).json("Nouvel utilisateur : " + _data.id);
    } catch (err) {
      res.status(400).json("error : " + err);
    }
  }
}
