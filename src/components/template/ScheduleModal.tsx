import React from 'react';
import { InputField } from '../atoms/InputField';
import { PlaceSearch } from '../atoms/PlaceSearch';
import ScheduleForm from '../molecules/ScheduleForm';

// interface ModalProps {
//   handleClose: () => void;
// }

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-10 rounded-lg shadow-lg ">
        <h2>1</h2>
        <ScheduleForm />
        {/* <div className="flex flex-col space-y-4 ">
          <PlaceSearch label="검색" type="text" placeholder="장소 검색" />
          <InputField label="장소" type="text" placeholder="장소" />
          <InputField label="주소" type="text" placeholder="주소" />
          <InputField label="시간" type="time" />
          <input
            type="text"
            placeholder="✍🏻 작성"
            className=" p-3 h-[100px] bg-postpage-listcolor rounded-tr-lg rounded-bl-lg"
          />
          <button className="bg-button-color text-loginpage-color p-1 rounded-xl" onClick={handleClose}>
            추가하기
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
