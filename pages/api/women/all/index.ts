import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../../db/init-db';

export default async function getAllProductsByCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();

  const result = await db.query(
    'SELECT id,"name",gender,price, category, img FROM shop.products WHERE gender = $1',
    'women'
  );
  res.status(200).json(result);
}
