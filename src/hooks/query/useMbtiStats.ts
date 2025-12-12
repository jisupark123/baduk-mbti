import { useQuery } from '@tanstack/react-query';

import { mbtiDetails } from '@/data/mbtiData';
import { mbtiTestRepository } from '@/repositories/mbtiTest';
import type { Mbti } from '@/types/mbti';

export const MBTI_STATS_KEY = 'mbtiStats';

/**
 * MBTI 테스트 결과 통계를 가져오는 Hook
 * 전체 테스트 결과를 조회하여 각 MBTI 유형별 비율(%)을 계산합니다.
 */
export const useMbtiStats = () =>
  useQuery({
    queryKey: [MBTI_STATS_KEY],
    queryFn: async () => {
      try {
        // 1. 전체 테스트 결과 조회
        const allTests = await mbtiTestRepository.findAll();
        const validTests = allTests.filter((test) => test.isDev === false);
        const total = validTests.length;

        // 2. 모든 MBTI 유형의 카운트를 0으로 초기화
        // (데이터가 없는 유형도 0%로 표시하기 위함)
        const initialCounts = mbtiDetails.reduce(
          (acc, mbti) => {
            acc[mbti.id] = 0;
            return acc;
          },
          {} as Record<Mbti, number>,
        );

        if (total === 0) {
          return initialCounts;
        }

        // 3. 각 MBTI 유형별 득표수 계산
        const counts = validTests.reduce((acc, test) => {
          const mbti = test.result;
          if (acc[mbti] !== undefined) {
            acc[mbti]++;
          }
          return acc;
        }, initialCounts);

        // 4. 백분율 계산
        const percentages = Object.entries(counts).reduce(
          (acc, [mbti, count]) => {
            acc[mbti as Mbti] = (count / total) * 100;
            return acc;
          },
          {} as Record<Mbti, number>,
        );

        return percentages;
      } catch (error) {
        console.error('Failed to fetch MBTI stats:', error);
        throw error;
      }
    },
  });
