import { useEffect, useState } from 'react';

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUserAgent = /iphone|ipod|android|blackberry|windows phone/i.test(userAgent);
      const isTabletUserAgent = /ipad|android/i.test(userAgent) && !/mobile/i.test(userAgent);

      // 화면 너비 기준 (Tailwind CSS 브레이크포인트 참고)
      // sm: 640px, md: 768px, lg: 1024px
      const isMobileWidth = width < 768;
      const isTabletWidth = width >= 768 && width < 1024;

      // UserAgent와 화면 너비를 종합적으로 고려
      // 모바일: 모바일 UA이거나 화면이 768px 미만
      const isMobile = isMobileUserAgent || isMobileWidth;

      // 태블릿: 태블릿 UA이거나 (모바일이 아니면서 화면이 768px~1024px)
      const isTablet = !isMobile && (isTabletUserAgent || isTabletWidth);

      // 데스크탑: 나머지 경우
      const isDesktop = !isMobile && !isTablet;

      setDeviceType({ isMobile, isTablet, isDesktop });
    };

    // 초기 실행
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}
