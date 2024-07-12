import { createClient } from '@/supabase/client';
import { Tables } from '@/types/supabase';

type MeetingType = Tables<'meeting'>;

class MeetingAPI {
  private supabase;

  constructor() {
    this.supabase = createClient();
  }

  /**
   *
   * @returns meeting 테이블 데이터 전부
   */
  // 타입 지정 잘못됨 - [] 추가
  async selectMeetings() {
    const { data } = await this.supabase.from('meeting').select().returns<Tables<'meeting'>[]>();

    return data;
  }

  // async selectMeeting(id: number)  {
  //   const { data } = await this.supabase.from('meeting').select().eq('id', id).returns<Tables<'meeting'>>().single();

  //   return data;
  // }

  async selectMeeting(id: number): Promise<Tables<'meeting'> | null> {
    const { data } = await this.supabase.from('meeting').select('*').eq('id', id).single();

    return data;
  }

  /**
   *
   * @param insertData  {MeetingType}
   * @returns data {MeetingType}
   */
  async insertMeeting(insertData: MeetingType) {
    const { date, password, title } = insertData;

    const { data } = await this.supabase.from('meeting').insert({ date, password, title }).select();
    return data;
  }

  /**
   *
   * @param id {number} 미팅 게시물 아이디
   * @returns 삭제된 data
   */
  async deleteMeeting(id: number) {
    console.log('id', id);
    const { data } = await this.supabase.from('meeting').delete().eq('id', id).select();
    console.log('data', data);
    return data;
  }

  /**
   *
   * @param id  {number} 미팅 게시물 아이디
   * @param updateData {string[]}
   * @returns
   */
  async updateMeeting(id: number, updateData: MeetingType) {
    const { date, password, title } = updateData;
    console.log('id, updateData', id, updateData);
    const { data, error } = await this.supabase
      .from('meeting')
      .update({ date: updateData.date, password: updateData.password, title: updateData.title })
      .eq('id', id)
      .select('*');

    return data;
  }
}

export default MeetingAPI;
