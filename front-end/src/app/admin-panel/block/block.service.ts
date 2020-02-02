import { Injectable } from "@angular/core";
import { Block } from "../../interfaces";
import { RequestService } from 'src/app/http/request.service';

const RESOURCE_PATH: string = "http://localhost:8000/api/blocks/";

@Injectable({
  providedIn: "root"
})
export class BlockService {
  errors: string[] = [];
  selectedPage: Block|undefined = undefined;
  blocks: Block[]|undefined = undefined;

  constructor(private http: RequestService) {}

  getBlocks(page: number, per_page: number) {
    return this.http
      .get(RESOURCE_PATH, { per_page, page })
      .subscribe(res => {        
        if(res.success) {                    
          this.blocks =  res.data.results;
        }
      });
  }
}
