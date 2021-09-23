import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../db/init-db';

export default async function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();

  const result = await db.query(
    'SELECT id,"name",gender, img,price, category FROM shop.products'
  );
  res.status(200).json(result);
}
