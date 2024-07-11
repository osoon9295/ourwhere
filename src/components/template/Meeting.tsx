'use client';

import MeetingAPI from '@/api/meeting.api';
import useModalStore from '@/stores/modal.store';
import { Tables } from '@/types/supabase';
import { useEffect, useState } from 'react';
import Schedule from '../molecules/Schedule';
import ScheduleModal from './ScheduleModal';

export default function Meeting() {
  const modal = useModalStore((state) => state.modal);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const [meeting, setMeeting] = useState<Tables<'meeting'>[]>([]);
  const [error, setError] = useState(null);

  const meetingAPI = new MeetingAPI();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const data = await meetingAPI.selectMeetings();
        if (!data) return;
        setMeeting(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeetings();
  }, []);

  console.log(meeting);

  console.log(modal);

  const handleToggleModal = () => {
    toggleModal();
  };

  return (
    <>
      <section className="bg-loginpage-color pt-16 pb-16 h-dvh overflow-auto">
        {meeting.map((data) => (
          <div key={data.id} className="flex flex-col items-center pt-10 relative">
            <div className="absolute right-4 top-4 flex flex-col items-center cursor-pointer">
              <span className="block w-2 h-2 bg-gray-500 rounded-full mb-1"></span>
              <span className="block w-2 h-2 bg-gray-500 rounded-full mb-1"></span>
              <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
            <h1 className="text-4xl mb-3 text-font-color ">🎈{data.title}🎈</h1>
            <div className="p-1 w-64 rounded-xl bg-white flex justify-center items-center drop-shadow-md">
              {data.date}
            </div>
            <Schedule />
            <button
              onClick={handleToggleModal}
              className="w-16 h-16 rounded-full bg-header-color text-loginpage-color text-4xl mt-5 "
            >
              +
            </button>
          </div>
        ))}
      </section>
      {modal && <ScheduleModal handleClose={handleToggleModal} />}
    </>
  );
}
