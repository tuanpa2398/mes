export type User = {
  id: number; // NOT NULL, auto-increment identity
  first_name?: string | null;
  last_name?: string | null;
  gender?: string | null;
  email: string; // NOT NULL
  password: string; // NOT NULL
  role?: string | null;
  avatar?: string | null;
  plant?: string | null;
  sap_id?: string | null;
  integration_id?: string | null;
  other_info?: string | null;
  branch?: string | null;
  is_block: number; // NOT NULL, default 0
  email_verified_at?: string | null; // timestamp (ISO string)
  remember_token?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  imagesign?: string | null;
  username: string; // NOT NULL
}