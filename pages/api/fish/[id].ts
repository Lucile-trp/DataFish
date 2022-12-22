import prisma from "@/lib/prisma";
import { Fish } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Props = {
    data: Fish
}

export default async function fish(req: NextApiRequest, res: NextApiResponse) {
    
    const method = req.method;

    switch(method) {
        case "GET" : 
            try{
                const result = await prisma.fish.findFirst({ where:{ id: req.query.id}});
                res.status(200).json(result);

            } catch(err){
                res.status(400).json(err);
            }
            break;
        case "PUT": 
            try{
                const _data = await prisma.fish.update({
                    where: { id: req.query.id },
                    data: req.body
                })
                res.status(200).json("Modification en BDD sur : " + _data.id);

            } catch(err){
                res.status(400).json("error : " + err)
            }

            break;
        default: 
            console.log("default")
            break;
    }
    
}
