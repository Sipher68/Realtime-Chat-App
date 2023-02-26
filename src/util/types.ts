export interface CreateUsernameData {
  createUsername: {
    success: boolean;
    error: string;
  };
}

export interface CreateUsernameVariable {
  username: string;
}

export interface SearchUsersInput {
  username: string;
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUser>;
}

export interface SearchedUser {
  id: string;
  username: string;
}
