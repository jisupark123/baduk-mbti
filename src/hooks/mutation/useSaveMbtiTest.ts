import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MBTI_STATS_KEY } from '@/hooks/query/useMbtiStats';
import { mbtiTestRepository } from '@/repositories/mbtiTest';
import type { Level } from '@/types/level';
import type { Mbti } from '@/types/mbti';

type SaveMbtiTestParams = {
  level: Level;
  result: Mbti;
};

export const useSaveMbtiTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ level, result }: SaveMbtiTestParams) => {
      await mbtiTestRepository.save(level, result);
    },
    onSuccess: () => {
      // Invalidate queries if needed, e.g., to refresh stats
      queryClient.invalidateQueries({ queryKey: [MBTI_STATS_KEY] });
    },
  });
};
