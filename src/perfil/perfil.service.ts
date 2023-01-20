/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {

  constructor(
    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
     ){}


  create(createPerfilDto: CreatePerfilDto)  {
    return this.perfilRepository.save(createPerfilDto);
  }

  findAll() {

    return this.perfilRepository.find({
      order: {
        value: "ASC",
    },
    });
  }

  findOne(id: number) {
    return this.perfilRepository.findOne({where:{id}})
  }

  async findOneByScore(score: number) : Promise<Perfil>{
    const perfiles : Perfil[] = await this.findAll();

    return perfiles.find( (p:Perfil)=> score <= p.value) ;
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {
    return this.perfilRepository.update(id,updatePerfilDto)
  }

  remove(id: number) {
    return this.perfilRepository.delete(id)
  }
}
