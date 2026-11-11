import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Greygang123',
      database: 'nest-example',
      entities: [User],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  constructor(private dataSource:DataSource){}
}
