import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  controls = [
    {
      id: 1,
      name: 'Subflows',
      items: [
        {
          id: 1,
          name: 'Subflows 1'
        },
        {
          id: 2,
          name: 'Subflows 2'
        },
      ]
    },
    {
      id: 2,
      name: 'Storage',
      items: [
        {
          id: 3,
          name: 'Bigquery Query'
        },
        {
          id: 4,
          name: 'Bigquery Insert'
        }
      ]
    },
    {
      id: 3,
      name: 'Output',
      items: [
        {
          id: 5,
          name: 'Output 1'
        },
        {
          id: 6,
          name: 'Output 2'
        }
      ]
    }
  ];

  panelOpenState = false;
  fields: string[] = [];
  key = 'fields';
  showFiller = false;
  value = 'Clear me';
  index: number;
  ngOnInit() {
    this.getStorageData();
  }

  itemDropped(event: CdkDragDrop<string[]>) {
    this.addField(event.item.data, event.currentIndex);
  }

  addField(fieldType: any, index: number) {
    this.fields.splice(index, 0, fieldType.name);
    localStorage.setItem(this.key, JSON.stringify(this.fields));
  }

  mouseEnterHandler(event: MouseEvent, chapterExpansionPanel: MatExpansionPanel) {
    if (event.buttons && !chapterExpansionPanel.expanded) {
      chapterExpansionPanel.open();
    }
  }

  getUpdateValue(value): void {
    this.index = this.fields.indexOf(value);
    this.value = value;
  }

  updateValue(): void {
    this.fields[this.index] = this.value;
  }

  getStorageData(): void {
    this.fields = JSON.parse(localStorage.getItem(this.key));
  }

}
