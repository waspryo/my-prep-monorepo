interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface UserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface UserDob {
  date: string;
  age: number;
}

interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserId {
  name: string;
  value: string | null;
}

export interface User {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDob;
  registered: UserDob;
  phone: string;
  cell: string;
  id: UserId;
  picture: UserPicture;
  nat: string;
}

export interface UserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
