'use client';

import api from '@/api/api';
import { useMutation } from '@tanstack/react-query';

export default function Home() {
  const data = {
    meetingId: 19,
    content: '컨텐츠',
    place: '장소입니다!',
    address: '주소입니다.',
    time: '시간입니다.'
  };

  const { mutate: insert } = useMutation({ mutationFn: () => api.schedule.insertSchedule(data) });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">OURWHERE</h2>
        <p className="mt-4">소개 글</p>
        <button className="mt-4 px-4 py-2 bg-button-color text-white rounded-lg"> 새 모임 생성하기! </button>
        <button onClick={() => insert()}> test</button>
      </div>
    </div>
  );
}
