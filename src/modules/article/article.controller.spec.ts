import { Test, TestingModule } from '@nestjs/testing'
import { Repository } from 'typeorm'

import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { Article } from './article.entity'
import { CategoryModule } from '~/modules/category/category.module'

describe('Article Controller', () => {
  let controller: ArticleController
  let service: ArticleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CategoryModule],
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: Article,
          useClass: Repository,
        },
      ],
    }).compile()

    controller = module.get<ArticleController>(ArticleController)
    service = module.get<ArticleService>(ArticleService)
  })

  it('findAll', async () => {
    const results = {
      page: 1,
      page_size: 15,
      count: 0,
      results: [],
    }

    jest.spyOn(service, 'findAll').mockImplementation(async () => results)

    expect(await controller.findAll('', 1, 16)).toBe(results)
  })
})
