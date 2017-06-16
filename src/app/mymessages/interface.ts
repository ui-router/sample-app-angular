export interface Folder {
  _id: string;
  columns: string[];
  actions: string[];
}

export interface Message {
  read: boolean;
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: {
    last: string;
    first: string
  };
  corpus: string;
  _id: string;
}

