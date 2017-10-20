import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ApodService } from "../../services/apod.service";
import { ApodComponent } from "./apod.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

export const routerConfig = [
    {
        path: "",
        component: ApodComponent
    }
]

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ApodComponent, ToolbarComponent],
    providers: [ApodService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ApodModule { }