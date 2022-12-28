import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

import Champion from "../../OOP/Models/Champion";
import * as CollectionConstants from "../../OOP/CollectionConstants";
import Cors from 'cors';
import { runMiddleware } from "./middleware";

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

/**
 * @swagger
 * /api/Firebase/Endpoints/GetAllChampions:
 *   get:
 *     summary: List Champions
 *     description: Returns all Champion documents
 *     responses:
 *       200:
 *         description: Champion object list
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<Champion[]>) => {
  //await runMiddleware(req, res, cors);
  const collectionRef = collection(firestore, CollectionConstants.Champions);
  const data = await getDocs(
    collection(firestore, CollectionConstants.Champions)
  );
  let response: Champion[] = [];
  data.forEach((doc) => {
    response.push(
      new Champion({
        Name: doc.data().Name,
        Description: doc.data().Description,
        Image: doc.data().Image,
        //need role
        DocumentID: doc.id,
      })
    );
  });

  res.status(200).json(response);
};

export default handler;
