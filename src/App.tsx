import { Routes, Route } from 'react-router';

import Layout from '@/components/layouts/Layout';
import AllTypes from '@/pages/all-types/AllTypes';
import Home from '@/pages/home/Home';
import Intro from '@/pages/intro/Intro';
import MbtiTest from '@/pages/mbti-test/mbtiTest';
import Result from '@/pages/result/Result';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/mbti-test' element={<MbtiTest />} />
        <Route path='/result' element={<Result />} />
        <Route path='/all-types' element={<AllTypes />} />
      </Route>
    </Routes>
  );
}

export default App;
