import prisma from "@/lib/prisma";
// import { Fish } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Props = {
//   data: Fish;
// };

export default async function fish(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  switch (method) {
    case "GET":
      const result = await prisma.fish.findMany({
        // include: {
        //   oceanLocalisation: true,
        // },
      });
      res.status(200).json(result);
      break;
    case "POST":
      try {
        const _data = await prisma.fish.create({
          data: req.body,
        });
        res.status(200).json("Nouveau poisson en BDD : " + _data.id);
      } catch (err) {
        res.status(400).json("error : " + err);
      }
      break;
    default:
      console.log("default");
      break;
  }
}
