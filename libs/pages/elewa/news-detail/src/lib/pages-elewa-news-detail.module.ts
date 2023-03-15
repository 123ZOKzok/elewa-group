import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { NewsRelatedArticlesComponent } from './components/news-related-articles/news-related-articles.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    NewsDetailPageComponent,
    NewsRelatedArticlesComponent,
    NewsArticleComponent,
  ],
})
export class ElewaNewsDetailModule {}
