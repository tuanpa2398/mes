import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { DrawerModule } from "primeng/drawer";
import { ButtonModule } from "primeng/button";
import { PopoverModule } from "primeng/popover";
import { ListboxModule } from "primeng/listbox";
import { DividerModule } from "primeng/divider";
import { DialogModule } from "primeng/dialog";
import { TabsModule } from "primeng/tabs";
import { SelectModule } from "primeng/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import { DatePickerModule } from "primeng/datepicker";
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';


export const SHARED_IMPORT_MODULE = [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    // PrimeNg Module
    ToastModule,
    CardModule,
    DrawerModule,
    ButtonModule,
    PopoverModule,
    ListboxModule,
    DividerModule,
    DialogModule,
    TabsModule,
    SelectModule,
    FieldsetModule,
    PanelModule,
    DatePickerModule,
    PanelMenuModule,
    MenuModule,
    AvatarModule
]