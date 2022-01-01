/**
 * /pages/api에 아래처럼 function을 생성하고 vercel에 연결한 repository에 프로젝트 코드를 push하면
 * 별다른 config 없이도 알아서 Serverless Function을 deploy하게 된다.
 * https://vercel.com/docs/concepts/functions/serverless-functions#deploying-serverless-functions
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const data = req.body;

    // database

    res.status(201).json({ message: data.todo + '가 저장 됐어요.' });
  }
}
