import { Component, OnInit } from '@angular/core';

// Module imported
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { ListboxModule } from 'primeng/listbox';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-default-layout',
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    PopoverModule,
    ListboxModule,
    DividerModule,
    DialogModule,
    RouterOutlet
],
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  visible: boolean = false;
  asideVisible: boolean = true;
  modalFactoryVisible: boolean = false;

  menuManagement = [
    { label: 'Quản lý sấy gỗ', icon: 'fa-solid fa-industry' },
    { label: 'Quản lý sản xuất', icon: 'fa-solid fa-industry' },
    { label: 'Quản lý hàng hóa', icon: 'fa-solid fa-industry' },
    { label: 'Quản lý người dùng', icon: 'fa-solid fa-user' },
    { label: 'Báo cáo', icon: 'fa-solid fa-file' },
  ];

  constructor() { }

  ngOnInit(): void { }

  setVisibleAside() {
    this.asideVisible = !this.asideVisible;
  }

  logout() {
    console.log("logout");
  }

  changeFactory() {
    this.modalFactoryVisible = true;
  }
}
