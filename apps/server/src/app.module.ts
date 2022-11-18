import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'

import { RoleModule } from './modules/role/role.module'
import { RolesGuard } from './modules/role/roles.guard'
import { AuthModule } from './modules/auth/auth.module'
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard'
import { UserModule } from './modules/user/user.module'
import { CategoryModule } from './modules/category/category.module'
import { ArticleModule } from './modules/article/article.module'
import { CommentModule } from './modules/comment/comment.module'
import { TagModule } from './modules/tag/tag.module'

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 120,
    }),
    RoleModule,
    AuthModule,
    UserModule,
    CategoryModule,
    ArticleModule,
    CommentModule,
    TagModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
