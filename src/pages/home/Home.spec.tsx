import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, it, expect, beforeEach } from 'vitest';

import Home from '@/pages/home/Home';

describe('Home Page', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it('시작 버튼을 클릭하면 난이도 선택 모달이 열린다', async () => {
    // 시작하기 버튼 클릭
    const startButton = screen.getByTestId('start-button');
    await user.click(startButton);

    // 모달이 열리고 난이도 버튼들이 보이는지 확인 (data-testid 사용)
    expect(screen.getByTestId('level-beginner')).toBeInTheDocument();
    expect(screen.getByTestId('level-intermediate')).toBeInTheDocument();
    expect(screen.getByTestId('level-advanced')).toBeInTheDocument();
  });
});
