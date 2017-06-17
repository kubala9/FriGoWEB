import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { CreateComponent } from './create/create.component';
import { RecipeService } from './recipe.service';
import { NoteTileComponent } from './note-tile/note-tile.component';
import { NotesComponent } from './notes/notes.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentTileComponent } from './comment-tile/comment-tile.component';

@NgModule({
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [ SingleRecipeComponent, CreateComponent, NoteTileComponent, NotesComponent, CommentsComponent, CommentTileComponent ],
  exports: [ CreateComponent ],
  providers: [ RecipeService ]
})
export class RecipeModule { }
