import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AsteroidsComponent } from "./asteroids.component";
import { AsteroidsService } from "../../services/asteroids.service";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

export const routerConfig = [
    {
        path: "",
        component: AsteroidsComponent
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [AsteroidsComponent],
    providers: [AsteroidsService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AsteroidsModule {}
