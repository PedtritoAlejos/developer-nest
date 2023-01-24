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
    type: getProperty("TYPE_DB") ,
    host: getProperty("HOST_DB"),
    port: getProperty("PORT_DB"),
    username: getProperty("USERNAME_DB"),
    password: getProperty("PASSWORD_DB"),
    database: getProperty("DATABASE"),
    synchronize: getProperty("SYNCHRONIZE"),
    entities: ["dist/**/*.entity{.ts,.js}"]
  
  
  }
  ),PerfilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
