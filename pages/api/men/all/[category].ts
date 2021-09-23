import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../../db/init-db';

export default async function getMensProductsByCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();
  const { category } = req.query;
  const result = await db.query(
    'SELECT id,"name",price, gender, img, category FROM shop.products WHERE (category = $1 AND gender = $2)',
    [category, 'men']
  );
  res.status(200).json(result);
}
