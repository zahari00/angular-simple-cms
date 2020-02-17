import { Component, OnInit, OnDestroy } from "@angular/core";
import { BlockService } from "../block.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "admin-panel-block-form",
  templateUrl: "./block-form.component.html",
  styleUrls: ["./block-form.component.styl"]
})
export class BlockFormComponent implements OnInit, OnDestroy {
  errors: Errors = {
    title: false
  };

  blockId: number;

  routeChangeSubscription: Subscription
 
  get type(): string {
    return this.blockService.type;
  }

  get loading() {
    return this.blockService.loading;
  }

  get block() {
    return this.blockService.selectedBlock;
  }

  get notFound() {
    return this.blockService.blockNotFound;
  }

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.blockService.resetData();

    /**
     * Get block on route change
     */
    this.routeChangeSubscription = this.route.paramMap.subscribe(params => {
      const blockId: number = +params.get("blockId");
      if (!blockId) return;
      this.blockId = blockId;
      this.blockService.getBlock(blockId);
    });
  }

  ngOnDestroy() {
    // unsubscribe from route change event
    this.routeChangeSubscription.unsubscribe()
  }

  changeType(type: string) {
    this.blockService.changeBlockType(type);
  }

  submitHandler(title: string, data: any) {
    if (!data) return;

    if (!title) {
      this.errors.title = "Title is required";
      return;
    }

    this.blockService.saveBlock(this.blockId, this.type, title, data);
  }
}

interface Errors {
  title: boolean | string;
}
