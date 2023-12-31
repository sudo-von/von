export type UserDetails = {
  quote: string;
  interest: string;
  position: string;
};

export type PartialUserDetails = Partial<UserDetails>;

export type ReplacePartialUserDetails = PartialUserDetails;
