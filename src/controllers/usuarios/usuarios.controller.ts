/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUnidadeDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUnidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.delete(+id);
  }
}
