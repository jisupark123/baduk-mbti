import { NextApiRequest, NextApiResponse } from 'next';
import { MbtiTypes } from '../../components/demo/mbti';
import client from '../../lib/server/client';
import withHandler, { ResponseType } from '../../lib/server/withHandler';

export interface PostMbtiResponse extends ResponseType {
  myMbtiPercentage: number;
}
interface IMbti {
  badukMbti: MbtiTypes;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
  }
  if (req.method === 'POST') {
    const {
      body: { mbti: badukMbti, name, level, problems },
    } = req;
    const l = level === '초급' ? 'elementary' : '중급' ? 'middle' : 'hard';
    const tester = await client.tester.create({
      data: {
        name,
        level: l,
        badukMbti,
        problems: {
          connect: problems.map((problem: string) => ({
            id: problem,
          })),
        },
      },
    });

    console.log(tester);
    const mbtiList: IMbti[] = await client.tester.findMany({
      select: {
        badukMbti: true,
      },
    });

    const mbtis = mbtiList.map((obj) => obj.badukMbti);
    const sameMbtis = mbtis.filter((mbti) => mbti === tester.badukMbti).length;

    //
    // 1% ~ 99% -> 소수점 x
    // 0% ~ 1% -> 소수점 1자리
    let myMbtiPercentage = (sameMbtis / mbtis.length) * 100;
    myMbtiPercentage =
      myMbtiPercentage >= 1
        ? (myMbtiPercentage = Number(myMbtiPercentage.toFixed(0)))
        : (myMbtiPercentage = Number(myMbtiPercentage.toFixed(1)));
    return res.json({ ok: true, myMbtiPercentage });
  }
};

export default withHandler({ methods: ['GET', 'POST'], handler });
