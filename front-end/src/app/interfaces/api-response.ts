import { Page } from "./page";
import { Block } from "./block";

export interface ApiResponse {
  success: boolean;
  data: any;
  errors: string[];
  code: number;
}

export interface PageListResponse {
  success: boolean;
  data: {
    pages_count: number;
    results: Page[];
  };
  errors: string[];
}
