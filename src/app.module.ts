/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilModule } from './perfil/perfil.module';
import { getProperty } from './perfil/config/config';



@Module({
  imports: [TypeOrmModule.forRoot(
    {  
    type: getProperty("TYPE") ,
    host: getProperty("HOST"),
    port: getProperty("PORT"),
    username: getProperty("USERNAME"),
    password: getProperty("PASSWORD"),
    database: getProperty("DATABASE"),
    synchronize: getProperty("SYNCHRONIZE"),
    entities: ["dist/**/*.entity{.ts,.js}"]
  
  
  }
  ),PerfilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
