import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoriteComponent } from "./components/addToFavorites/addToFavorites.component";
import { AddToFavoriteService } from "./services/addToFavorites.service";
import { AddToFavoritesEffect } from "./store/effects/addToFavorite.effect";

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoriteService]
})

export class AddToFavoriteModule {}
