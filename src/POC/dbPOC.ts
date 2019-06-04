interface userModel {
  usernmae: string;
  displayName: string;
  email: string;
  signinMethod: string; // ENUM sigin in method {'normal', 'gmail','facebook'}
  pictureUrl: string;
  role: string; // ENUM roles {'admin', 'user','super-user'}
  loginStatus: string; //// ENUM {'online','offline'}
  createdAt: Date;
  updatedAt: Date;
}
