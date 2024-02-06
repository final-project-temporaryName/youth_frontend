import { request } from '@/api/fetchRequestHandler';

interface Links {
  title: string;
  address: string;
  linkId: number;
}

interface UserData {
  nickname: string;
  activityArea: string;
  activityField: string;
  userId: number;
  description: string;
  totalLikeCount: number;
  followerCount: number;
  profileImageUrl?: string;
  links: Links[];
}

export default async function getUser(id: number): Promise<UserData> {
  const url = `users/${id}`;
  const response = await request({ url });

  return response as UserData;
}
