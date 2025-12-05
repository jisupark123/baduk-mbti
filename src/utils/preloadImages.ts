import { QUESTIONS } from '@/data/questions';

export const preloadImages = () => {
  Object.values(QUESTIONS).forEach((levelQuestions) => {
    levelQuestions.forEach((question) => {
      const img = new Image();
      img.src = question.imagePath;
    });
  });
};
