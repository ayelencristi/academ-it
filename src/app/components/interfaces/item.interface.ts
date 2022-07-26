export interface Item {
  poster_path?: string | undefined
  adult?: boolean
  overview?: string
  release_date?: string | undefined
  genre_ids?: number[];
  id: number;
  idFB?: string | undefined;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average: number;
  media_type?: string;
  watched?: string[]
  name?: string
}

export interface Filter {
  page: number
  search: string | undefined
}

export class Result {
  page: number;
  results: Item[];
  total_pages: number;
  total_results: number;
}

export class Trailer {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

