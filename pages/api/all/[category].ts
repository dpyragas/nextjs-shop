import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../db/init-db';

export default async function getProductsByCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();
  const { category } = req.query;
  const result = await db.query(
    'SELECT id,"name",price, gender, img, category FROM shop.products WHERE category = $1 ',
    category
  );
  res.status(200).json(result);
}
