import { BadRequestException } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';

export abstract class BaseService<Entity = any> {
  protected repository: Repository<Entity>;
  constructor() {}

  async findAll() {
    return await this.repository.find();
  }
  async findBy(options: FindOneOptions<Entity>['where']) {
    try {
      const category = await this.repository.findOneOrFail({
        where: {
          ...options,
        },
      });
      return category;
    } catch (err) {
      console.error(err);
      throw new BadRequestException('Entity not found');
    }
  }

  async store(data: any) {
    const details = this.repository.create(data);
    return await this.repository.save(details);
  }
  async update(id: number, data: any) {
    const details = await this.findBy({ id } as any);
    this.repository.merge(details, data);
    return await this.repository.save(details);
  }
  async destroy(id: number) {
    await this.findBy({ id } as any);
    await this.repository.delete({ id } as any);
  }
}
