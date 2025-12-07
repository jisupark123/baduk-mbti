import { Routes, Route } from 'react-router';

import Layout from '@/components/layouts/Layout';
import AllTypes from '@/pages/allTypes';
import Home from '@/pages/home';
import MbtiTest from '@/pages/mbti-test';
import Result from '@/pages/result';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/mbti-test' element={<MbtiTest />} />
        <Route path='/result' element={<Result />} />
        <Route path='/all-types' element={<AllTypes />} />
      </Route>
    </Routes>
  );
}

export default App;
