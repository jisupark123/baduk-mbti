import { useRef, useState } from 'react';
import { toast } from 'sonner';

import NameModal from '@/pages/result/components/NameModal';
import QR from '@/pages/result/components/QR';
import ShareImageTemplate from '@/pages/result/components/ShareImageTemplate';
import ShareOptionsModal from '@/pages/result/components/ShareOptionsModal';
import type { MbtiDetail } from '@/types/mbti';

export default function Share({
  open,
  onOpenChange,
  mbtiDetail,
  userName,
  onUserNameChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mbtiDetail: MbtiDetail;
  userName: string;
  onUserNameChange: (name: string) => void;
}) {
  // 이름이 이미 있으면 바로 공유 옵션 모달을 보여줌
  const [modal, setModal] = useState<'name' | 'shareOptions' | 'qr'>(userName ? 'shareOptions' : 'name');
  const userNameText = userName.trim().length ? userName.trim() : null;
  const resultRef = useRef<HTMLDivElement>(null);

  const shareLink = `${import.meta.env.PROD ? import.meta.env.VITE_APP_URL : 'http://192.168.200.114:5173'}/result?mbti=${mbtiDetail.id}&name=${userNameText ?? ''}&type=share`;

  function handleShare() {
    const shareText = userName
      ? `${userName}님의 바둑 MBTI는 ${mbtiDetail.id} (${mbtiDetail.name})입니다! 당신의 바둑 스타일은?`
      : `나의 바둑 MBTI는 ${mbtiDetail.id} (${mbtiDetail.name})입니다! 당신의 바둑 스타일은?`;

    // Web Share API 지원 확인
    if (navigator.share) {
      navigator
        .share({
          title: `바둑으로 알아보는 MBTI - ${userName ? userName + '님은' : '나는'} ${mbtiDetail.id}`,
          text: shareText,
          url: window.location.href,
        })
        .catch((error) => console.log('공유 취소:', error));
    } else {
      // Web Share API 미지원 시 URL 복사
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    }

    onOpenChange(false);
    onUserNameChange('');
  }

  function handleSnsShare() {}
  async function handleImgDownload() {
    if (resultRef?.current) {
      try {
        const { toPng } = await import('html-to-image');

        // // 이미지 생성 중임을 알리는 토스트 (선택 사항)
        // const toastId = toast.loading('이미지 생성 중...');

        // 폰트 임베딩 및 이미지 캡처 최적화 설정
        const dataUrl = await toPng(resultRef.current, {
          cacheBust: true,
          pixelRatio: 2, // 고해상도
          backgroundColor: '#f5f5f7', // 배경색 지정 (투명 방지)
          style: {
            margin: '0',
            padding: '20px', // 여백 추가
          },
        });

        // toast.dismiss(toastId);

        // Blob으로 변환
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], `바둑_MBTI_${mbtiDetail.id}.png`, { type: 'image/png' });

        // 모바일 공유하기 지원 시
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: `바둑 MBTI - ${mbtiDetail.id}`,
              text: `나의 바둑 MBTI는 ${mbtiDetail.id} (${mbtiDetail.name})입니다!`,
              files: [file],
            });
          } catch (error) {
            console.log('공유 취소:', error);
          }
        } else {
          // PC거나 공유하기 미지원 시 다운로드
          const link = document.createElement('a');
          link.download = `바둑_MBTI_${mbtiDetail.id}.png`;
          link.href = dataUrl;
          link.click();
          // toast.success('이미지가 저장되었습니다.');
        }
      } catch (error) {
        console.error('이미지 생성 실패:', error);
        toast.error('이미지 생성에 실패했습니다. 다시 시도해주세요.');
      }
    }
  }

  function handleCopyLink() {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        toast.success('링크 복사 완료!', {
          description: '클립보드에 링크가 복사되었습니다',
          duration: 3000,
          className: 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white border-0',
          style: {
            background: 'linear-gradient(to right, rgb(99, 102, 241), rgb(59, 130, 246), rgb(6, 182, 212))',
            color: 'white',
            border: 'none',
          },
        });
      })
      .catch(() => {
        toast.error('링크 복사 실패', {
          description: '다시 시도해주세요',
          duration: 3000,
        });
      });
  }

  return (
    <div>
      {/* 캡처할 영역 (히어로 배너 + 결과 카드) */}
      <ShareImageTemplate ref={resultRef} userName={userNameText} mbtiDetail={mbtiDetail} />
      {modal === 'name' && (
        <NameModal
          open={open}
          onOpenChange={onOpenChange}
          userName={userName}
          setUserName={onUserNameChange}
          handleSubmit={() => setModal('shareOptions')}
        />
      )}
      {modal === 'shareOptions' && (
        <ShareOptionsModal
          open={open}
          onOpenChange={onOpenChange}
          handleSnsShare={handleSnsShare}
          handleImgDownload={handleImgDownload}
          handleQrCodeShare={() => setModal('qr')}
          handleCopyLink={handleCopyLink}
        />
      )}
      {modal === 'qr' && (
        <QR open={open} onOpenChange={onOpenChange} link={shareLink} goBack={() => setModal('shareOptions')} />
      )}
    </div>
  );
}
