import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../../db/init-db';

export default async function getWomenProductsByCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();
  const { category } = req.query;
  const result = await db.query(
    'SELECT id,"name",price,gender, category,img FROM shop.products WHERE (category = $1 AND gender = $2)',
    [category, 'women']
  );
  res.status(200).json(result);
}
