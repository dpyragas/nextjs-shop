import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../db/init-db';

export default async function productById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = getDB();
  const { id } = req.query;

  const result = await db.query(
    'SELECT id,"name", "price","img","gender","desc","category" FROM shop.products WHERE id = $1',
    `${id}`
  );
  res.status(200).json(result);
}
