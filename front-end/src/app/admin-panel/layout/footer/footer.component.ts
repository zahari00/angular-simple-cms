import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'admin-panel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {

  get text() {
    return this.layoutService.footer.text;
  }

  constructor(private layoutService: LayoutService) { }
  
  ngOnInit() {
    this.layoutService.getFooter();
  }

  /**
   * Save footer changes
   * 
   * @param e 
   * @param text 
   */
  save(e: Event, text: string) {
    e.preventDefault();
    
    this.layoutService.saveFooter(text);
  }
}
