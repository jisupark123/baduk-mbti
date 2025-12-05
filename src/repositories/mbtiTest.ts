import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { firestoreDB } from '@/configs/firebaseConfig';
import type { Level } from '@/types/level';
import type { Mbti } from '@/types/mbti';
import DateString from '@/utils/date/dateString';

const COLLECTION_NAME = 'MBTI_TEST';

// mbti 테스트 결과 Entity
type MbtiTest = {
  id: string;
  level: Level;
  result: Mbti; // mbti 테스트 결과
  createdAt: string; // 테스트 날짜
};

class MbtiTestRepository {
  async findAll(): Promise<MbtiTest[]> {
    const querySnapshot = await getDocs(collection(firestoreDB, COLLECTION_NAME));
    const allMbtiTests = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      level: doc.data().level,
      result: doc.data().result,
      createdAt: doc.data().createdAt,
    }));
    return allMbtiTests;
  }

  async findByMbti(mbti: Mbti): Promise<MbtiTest[]> {
    const collectionRef = collection(firestoreDB, COLLECTION_NAME);
    const q = query(collectionRef, where('result', '==', mbti));
    const querySnapshot = await getDocs(q);
    const mbtiTests = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      level: doc.data().level,
      result: doc.data().result,
      createdAt: doc.data().createdAt,
    }));
    return mbtiTests;
  }

  async save(level: Level, result: Mbti): Promise<void> {
    const collectionRef = collection(firestoreDB, COLLECTION_NAME);
    await addDoc(collectionRef, { level, result, createdAt: DateString.nowString() });
  }
}

export const mbtiTestRepository = new MbtiTestRepository();
