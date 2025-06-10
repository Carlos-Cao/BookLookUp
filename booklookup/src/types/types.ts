export interface Book {
    id: string;
    searchInfo?: {
      textSnippet?: string;
    };
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
      description?: string;
      publisher?: string;
      infoLink: string;
      imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  }