export interface UserInterface {
    id: string;
    name: string;
    telephone?: string;
    email: string;
    profileImage?: string;
    profilePicture?: string;
    notifications: boolean;
    roles: string[];
    createdAt: string;
  }